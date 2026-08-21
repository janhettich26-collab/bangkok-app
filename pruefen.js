// Selbsttest: haelt Plan, Termine und Checkliste zusammen.
// Aufruf:  node pruefen.js      (meldet jede Abweichung, Rueckgabecode 1 bei Fehlern)
const fs = require("fs");
global.gm = q => q;
const quellen = ["data-spots", "data-plan", "data-buchungen", "data-info", "data-pack", "data-phrases"];
eval(quellen.map(f => fs.readFileSync(__dirname + "/js/" + f + ".js", "utf8")).join("\n;\n").replace(/^const /gm, "var "));

const fehler = [], hinweise = [];
const WD = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
const REISE = { von: "2026-08-27", bis: "2026-09-07" };

// 1) Plan: lueckenlos, richtige Wochentage
PLAN.forEach(d => {
  if (WD[new Date(d.date + "T12:00:00Z").getUTCDay()] !== d.wd) fehler.push(`Wochentag falsch: ${d.date} ist ${WD[new Date(d.date+"T12:00:00Z").getUTCDay()]}, im Plan steht ${d.wd}`);
  if (!d.blocks.length) fehler.push(`Plan-Tag ohne Inhalt: ${d.date}`);
});
for (let i = 1; i < PLAN.length; i++)
  if ((new Date(PLAN[i].date) - new Date(PLAN[i-1].date)) / 86400000 !== 1)
    fehler.push(`Luecke im Plan zwischen ${PLAN[i-1].date} und ${PLAN[i].date}`);
if (PLAN[0].date !== REISE.von || PLAN[PLAN.length-1].date !== REISE.bis)
  fehler.push(`Plan deckt nicht die Reise ${REISE.von}–${REISE.bis} ab`);

// 2) Termine: Pflichtfelder, Zeitraum, eindeutige Kennung
const ids = new Set();
BOOKINGS.forEach(b => {
  ["id","status","date","time","title","where","price","info"].forEach(k => { if (b[k] === undefined) fehler.push(`Termin ${b.id||"?"}: Feld ${k} fehlt`); });
  if (ids.has(b.id)) fehler.push(`Termin-Kennung doppelt: ${b.id}`); ids.add(b.id);
  if (!["fix","offen","vorort"].includes(b.status)) fehler.push(`Termin ${b.id}: unbekannter Status ${b.status}`);
  if (b.date < "2026-08-25" || b.date > REISE.bis) fehler.push(`Termin ${b.id} liegt ausserhalb der Reise: ${b.date}`);
  (b.links||[]).forEach(l => { if (!/^https?:\/\//.test(l.u)) fehler.push(`Termin ${b.id}: Link ohne http(s): ${l.u}`); });
});

// 3) Jeder Termin muss am passenden Plan-Tag auftauchen
BOOKINGS.filter(b => b.grp !== "Reise").forEach(b => {
  const tag = PLAN.find(d => d.date === b.date);
  if (!tag) { fehler.push(`Termin ${b.id} (${b.date}) hat keinen Plan-Tag`); return; }
  const stich = b.title.replace(/[—–-].*$/, "").trim().split(/\s+/).filter(w => w.length > 4)[0];
  if (stich && !JSON.stringify(tag).toLowerCase().includes(stich.toLowerCase()))
    fehler.push(`Termin "${b.title}" (${b.date}) kommt im Plan-Tag "${tag.title}" nicht vor`);
});

// 4) Checkliste darf keine Buchungen mehr von Hand fuehren (die kommen aus BOOKINGS)
INFO.checks.forEach(c => {
  if (/buchen|anrufen|Slot/i.test(c.txt))
    fehler.push(`Checkliste fuehrt eine Buchung von Hand: "${c.txt.replace(/<[^>]+>/g,"").slice(0,60)}" — gehoert nach data-buchungen.js`);
  (c.txt.match(/\d{2}\.\d{2}\./g)||[]).forEach(dat => {
    const iso = "2026-" + dat.split(".")[1] + "-" + dat.split(".")[0];
    if (iso < "2026-08-13" || iso > REISE.bis) hinweise.push(`Checkliste nennt ${dat} — ausserhalb der Reise, bitte pruefen`);
  });
});

// 5) Spots: Kategorien, Koordinaten, Links
SPOTS.forEach(s => {
  if (!CATS[s.cat]) fehler.push(`Spot "${s.name}": unbekannte Kategorie ${s.cat}`);
  if (!(s.lat > 5 && s.lat < 21 && s.lng > 96 && s.lng < 106)) fehler.push(`Spot "${s.name}": Koordinaten ausserhalb Thailands`);
  if (!s.gmaps) fehler.push(`Spot "${s.name}": kein Kartenlink`);
});
const namen = SPOTS.map(s => s.name.toLowerCase().replace(/[^a-zäöüß]/g, ""));
namen.forEach((n, i) => { if (namen.indexOf(n) !== i) fehler.push(`Spot doppelt: ${SPOTS[i].name}`); });

// 6) Gestrichenes darf nirgends wieder auftauchen
const alles = JSON.stringify({ SPOTS, PLAN, BOOKINGS, INFO, PACK, PHRASES });
[["Muay Thai", /muay|rajadamnern|jitmuangnon/i], ["Tattoo", /tattoo/i], ["Koh Larn", /koh larn/i],
 ["alter Zug 9003", /9003/], ["Jodd Fairs Rama 9 als Ziel", /gm\("Jodd Fairs Rama 9/i]]
  .forEach(([was, re]) => { if (re.test(alles)) fehler.push(`Gestrichenes wieder da: ${was}`); });

// 7) Radar-Ebene muss maxNativeZoom haben — sonst liefert RainViewer ab Zoom 8
//    fuer jede Kachel dasselbe Bild "Zoom Level Not Supported"
const appjs = fs.readFileSync(__dirname + "/js/app.js", "utf8");
if (/rainviewer/i.test(appjs) || /rvHost/.test(appjs)) {
  const stelle = appjs.slice(appjs.indexOf("rvHost + f.path"), appjs.indexOf("rvHost + f.path") + 400);
  if (!/maxNativeZoom:\s*7\b/.test(stelle))
    fehler.push("Radar-Ebene ohne maxNativeZoom: 7 — ab Zoom 8 kommen graue Kacheln 'Zoom Level Not Supported'");
}

// 7b) Repo ist oeffentlich: keine Buchungsnummern, Referenzen oder Policen im Klartext
const OEFFENTLICH = ["js/data-spots.js","js/data-plan.js","js/data-buchungen.js","js/data-info.js","js/data-pack.js","js/data-phrases.js","index.html"];
const GEHEIM = [[/LOV\d{6,}/,"Reise-Buchungsnummer"],[/ZPTAZX/,"Flug-PNR"],[/LVH\d{6,}/,"Versicherungspolice"],
  [/\b8767GB\b/,"Parkos-Reservierung"],[/321-\d{8}/,"Transfer-Referenz"],[/\b2248772\d\b/,"Hotel-Bestaetigung"],
  [/\bR3374\d\d\b/,"Spa-Bestaetigung"],[/DE\d{9}\b/,"USt-ID"]];
OEFFENTLICH.forEach(f => {
  const txt = fs.readFileSync(__dirname + "/" + f, "utf8");
  GEHEIM.forEach(([re, was]) => { if (re.test(txt)) fehler.push(`${was} steht im Klartext in ${f} — das Repo ist oeffentlich!`); });
});

// 8) Version in sw.js und app.js muss uebereinstimmen, sonst meldet die App faelschlich ein Update
const swv = (fs.readFileSync(__dirname + "/sw.js", "utf8").match(/bkk-(v\d+)/) || [])[1];
const apv = (fs.readFileSync(__dirname + "/js/app.js", "utf8").match(/APP_VERSION = "(v\d+)"/) || [])[1];
if (!swv || !apv) fehler.push("Version nicht gefunden (sw.js oder app.js)");
else if (swv !== apv) fehler.push(`Versionen weichen ab: sw.js hat ${swv}, app.js hat ${apv}`);

console.log(`Plan ${PLAN.length} Tage · ${PLAN.reduce((n,d)=>n+d.blocks.length,0)} Punkte | Termine ${BOOKINGS.length} (${BOOKINGS.filter(b=>b.status==="offen").length} offen) | Spots ${SPOTS.length} | Checkliste ${INFO.checks.length} fest + ${BOOKINGS.filter(b=>b.status==="offen").length} aus Terminen`);
hinweise.forEach(h => console.log("  Hinweis: " + h));
if (fehler.length) { console.log("\n❌ " + fehler.length + " Abweichung(en):"); fehler.forEach(f => console.log("   - " + f)); process.exit(1); }
console.log("✅ Plan, Termine, Checkliste und Spots passen zusammen.");
