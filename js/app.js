// Bangkok 2026 — App-Logik
(function () {
  "use strict";

  const APP_VERSION = "v63";   // muss zur Version in sw.js passen

  let WX = null;   // Live-Wetter: { now:{...}, hours:[...], days:{ "2026-08-30": {...} } } — oben, weil renderPlan es liest

  // ————— Tabs —————
  const tabs = document.querySelectorAll(".tabbar button");
  const panels = document.querySelectorAll(".panel");
  let mapInited = false;

  let mapObj = null;
  const scrollMerker = {};
  let aktiverTab = "heute";

  function showTab(id, ausHistory) {
    // Wo war er auf dem alten Reiter? Damit die Rueckkehr nicht oben landet.
    scrollMerker[aktiverTab] = window.scrollY;
    aktiverTab = id;
    panels.forEach(p => p.classList.toggle("active", p.id === "panel-" + id));
    const hervor = ["spots", "termine", "packen", "kurs", "info"].includes(id) ? "mehr" : id;
    tabs.forEach(b => b.classList.toggle("active", b.dataset.tab === hervor));
    if (id === "karte") {
      // Leaflet misst die Groesse falsch, solange das Panel noch display:none war.
      // Deshalb erst nach dem Layout initialisieren und danach jedes Mal neu vermessen.
      if (!mapInited) { mapInited = true; requestAnimationFrame(() => requestAnimationFrame(initMap)); }
      else if (mapObj) { requestAnimationFrame(() => mapObj.invalidateSize()); }
    }
    // Startseite und frisch geoeffnete Reiter oben beginnen, sonst zurueck an die alte Stelle
    window.scrollTo(0, scrollMerker[id] || 0);
    if (!ausHistory) {
      try { history.pushState({ tab: id }, "", "#" + id); } catch (e) { /* egal */ }
    }
  }

  // Wischen nach rechts / Zurueck-Taste soll den vorigen Reiter zeigen, nicht die App verlassen
  window.addEventListener("popstate", e => showTab((e.state && e.state.tab) || "heute", true));
  try { history.replaceState({ tab: "heute" }, "", "#heute"); } catch (e) { /* egal */ }
  tabs.forEach(b => b.addEventListener("click", () => showTab(b.dataset.tab)));

  // Panels, die ueber "Mehr" erreicht werden — dort bleibt der Mehr-Knopf aktiv
  const UNTER = ["spots", "termine", "packen", "kurs", "info"];
  document.querySelectorAll("[data-goto]").forEach(k =>
    k.addEventListener("click", () => showTab(k.dataset.goto)));
  document.querySelectorAll("[data-back]").forEach(k =>
    k.addEventListener("click", () => showTab("mehr")));

  // ————— Kurs —————
  const RATE_KEY = "bkk_rate";
  let rate = null; // THB pro 1 EUR

  function fmtDE(n, dec) {
    return n.toLocaleString("de-DE", { minimumFractionDigits: dec, maximumFractionDigits: dec });
  }

  function renderRate(info) {
    const mini = document.getElementById("rate-mini");
    if (mini) mini.textContent = info && info.rate ? "1 € = " + fmtDE(info.rate, 1) + " ฿" : "Kurs wird geladen …";
    const el = document.getElementById("rate-big");
    const sub = document.getElementById("rate-sub");
    if (!info) { el.textContent = "—"; sub.textContent = "Kein Kurs verfügbar — einmal online gehen."; return; }
    rate = info.rate;
    el.innerHTML = fmtDE(rate, 2) + ' <span class="unit">฿</span>';
    const d = new Date(info.ts);
    const age = Date.now() - info.ts;
    const when = d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" }) + ", " +
                 d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
    sub.textContent = "1 € · Stand " + when + (age > 36e5 * 26 ? " · ⚠️ älterer Kurs (offline?)" : "");
    renderCheat();
    convert("eur");
  }

  async function fetchRate() {
    const urls = [
      { u: "https://open.er-api.com/v6/latest/EUR", pick: j => j && j.rates && j.rates.THB },
      { u: "https://api.frankfurter.app/latest?from=EUR&to=THB", pick: j => j && j.rates && j.rates.THB }
    ];
    for (const { u, pick } of urls) {
      try {
        const r = await fetch(u, { cache: "no-store" });
        const v = pick(await r.json());
        if (v) {
          const info = { rate: v, ts: Date.now() };
          localStorage.setItem(RATE_KEY, JSON.stringify(info));
          renderRate(info);
          return;
        }
      } catch (e) { /* nächste Quelle */ }
    }
    const cached = localStorage.getItem(RATE_KEY);
    renderRate(cached ? JSON.parse(cached) : null);
  }

  function convert(src) {
    if (!rate) return;
    const eur = document.getElementById("in-eur");
    const thb = document.getElementById("in-thb");
    if (src === "eur") {
      const v = parseFloat(eur.value.replace(",", "."));
      thb.value = isNaN(v) ? "" : fmtDE(v * rate, 0);
    } else {
      const v = parseFloat(thb.value.replace(/\./g, "").replace(",", "."));
      eur.value = isNaN(v) ? "" : fmtDE(v / rate, 2);
    }
  }
  document.getElementById("in-eur").addEventListener("input", () => convert("eur"));
  document.getElementById("in-thb").addEventListener("input", () => convert("thb"));

  function renderCheat() {
    const rows = [20, 50, 100, 200, 500, 1000, 2000, 5000]
      .map(b => '<div class="cheat-row"><span>' + fmtDE(b, 0) + " ฿</span><b>" + fmtDE(b / rate, 2) + " €</b></div>").join("");
    document.getElementById("cheat-thb").innerHTML = rows;
  }

  const PRICE_FEEL = [
    ["🍜 Streetfood-Gericht", "45–70 ฿ (touristisch 80–150)"], ["🍺 Bier 7-Eleven / Bar", "45–70 ฿ / 100–250 ฿"],
    ["🚇 MRT-Fahrt", "17–45 ฿ · mit Umstieg bis 71 ฿"], ["🚗 Bolt in die Stadt (~12 km)", "180–320 ฿"],
    ["🚗 Bolt nachts zurück", "300–500 ฿"], ["💆 2 Std. Thai-Massage", "650–1.000 ฿"],
    ["💆 Thai-Massage 2 Std.", "600–800 ฿"], ["✈️ Taxi Flughafen", "350–600 ฿ inkl. Maut"],
    ["🥤 Wasser 7-Eleven", "10–15 ฿"], ["🍢 Chinatown satt essen", "250–500 ฿"]
  ];
  document.getElementById("price-feel").innerHTML = PRICE_FEEL
    .map(p => '<div class="cheat-row"><span>' + p[0] + "</span><b>" + p[1] + "</b></div>").join("");

  // ————— Spots —————
  const spotsWrap = document.getElementById("spots-list");
  const chipsWrap = document.getElementById("spot-chips");
  let activeCat = "alle";

  function chipHTML(key, label, color) {
    return '<button class="chip" data-cat="' + key + '" style="--c:' + (color || "#E8B04B") + '">' + label + "</button>";
  }
  chipsWrap.innerHTML = chipHTML("alle", "Alle") +
    Object.entries(CATS).map(([k, c]) => chipHTML(k, c.label, c.color)).join("");
  chipsWrap.querySelectorAll(".chip").forEach(ch => ch.addEventListener("click", () => {
    activeCat = ch.dataset.cat;
    chipsWrap.querySelectorAll(".chip").forEach(x => x.classList.toggle("active", x === ch));
    renderSpots();
  }));
  chipsWrap.querySelector(".chip").classList.add("active");

  function spotCard(s) {
    const c = CATS[s.cat];
    const meta = [];
    if (s.bolt) meta.push("🚗 " + s.bolt + (s.rush ? " <i>(Rush " + s.rush + ")</i>" : "") + (s.fare && s.fare !== "—" ? " · " + s.fare : ""));
    if (s.mrt) meta.push("🚇 " + s.mrt);
    if (s.hours) meta.push("🕐 " + s.hours);
    if (s.price) meta.push("💰 " + s.price);
    const sub = [s.bolt, (s.fare && s.fare !== "—") ? s.fare : null].filter(Boolean).join(" · ");
    return '<details class="card spot" style="--c:' + c.color + '">' +
      '<summary><span class="s-emoji">' + s.emoji + '</span><div class="s-mid"><span class="s-name">' + s.name +
      '</span><span class="s-sub">' + sub + '</span></div><span class="chev">›</span></summary>' +
      '<div class="s-body"><p>' + s.desc + "</p>" +
      '<div class="s-meta">' + meta.map(m => "<div>" + m + "</div>").join("") + "</div>" +
      (s.tips && s.tips.length ? '<ul class="s-tips">' + s.tips.map(t => "<li>" + t + "</li>").join("") + "</ul>" : "") +
      (s.book && s.book.length ? '<div class="s-book"><b>So buchst du:</b><ol>' + s.book.map(b => "<li>" + b + "</li>").join("") + "</ol></div>" : "") +
      (s.warn ? '<div class="s-warn">⚠️ ' + s.warn + "</div>" : "") +
      '<div class="s-actions"><a class="btn" href="' + s.gmaps + '" target="_blank" rel="noopener">📍 Fotos & Karte</a>' +
      (s.site ? '<a class="btn ghost" href="' + s.site + '" target="_blank" rel="noopener">Offizielle Seite</a>' : "") +
      "</div></div></details>";
  }

  const searchEl = document.getElementById("spot-search");
  const clearEl = document.getElementById("spot-search-clear");
  const hintEl = document.getElementById("spot-hint");
  let query = "";

  function matches(s, q) {
    if (!q) return true;
    const hay = [s.name, s.desc, s.mrt, s.hours, s.price, CATS[s.cat].label]
      .concat(s.tips || []).filter(Boolean).join(" ").toLowerCase();
    return q.split(/\s+/).filter(Boolean).every(w => hay.includes(w));
  }

  function renderSpots() {
    const q = query.trim().toLowerCase();
    const cats = activeCat === "alle" ? Object.keys(CATS) : [activeCat];
    let hits = 0;
    const html = cats.map(k => {
      const list = SPOTS.filter(s => s.cat === k && matches(s, q));
      if (!list.length) return "";
      hits += list.length;
      // Offen, sobald gesucht oder eine einzelne Kategorie gewaehlt wurde — sonst zugeklappt.
      const open = q || activeCat !== "alle" ? " open" : "";
      return '<details class="catgrp"' + open + ' style="--c:' + CATS[k].color + '">' +
        '<summary><span class="cg-dot"></span><span class="cg-label">' + CATS[k].label +
        '</span><span class="cg-count">' + list.length + '</span><span class="chev">›</span></summary>' +
        '<div class="cg-body">' + list.map(spotCard).join("") + "</div></details>";
    }).join("");
    spotsWrap.innerHTML = html || '<p class="hint empty">Nichts gefunden. Anderes Stichwort probieren oder Suche leeren.</p>';
    hintEl.textContent = q
      ? hits + (hits === 1 ? " Treffer" : " Treffer") + " für „" + query.trim() + "“"
      : "Kategorie antippen zum Aufklappen — oder oben suchen.";
    clearEl.hidden = !query;
  }

  searchEl.addEventListener("input", () => { query = searchEl.value; renderSpots(); });
  clearEl.addEventListener("click", () => { searchEl.value = ""; query = ""; renderSpots(); searchEl.focus(); });
  renderSpots();

  // ————— Plan —————
  function todayISO() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  // Erledigte Programmpunkte: antippen streicht sie durch, gemerkt in localStorage
  const PLAN_KEY = "bkk_plan";
  const planState = () => JSON.parse(localStorage.getItem(PLAN_KEY) || "{}");

  // Fahrziel: Karte öffnen, Bolt öffnen, thailändische Adresse zum Vorzeigen und Kopieren.
  // Der Klick darf den Punkt NICHT abhaken — deshalb stoppen die Knöpfe das Weiterreichen.
  function zielLeiste(k, route, ohneBahn) {
    const z = ZIELE[k];
    const maps = "https://www.google.com/maps/dir/?api=1&destination=" + z.lat + "," + z.lng;
    // Bolt hat kein offiziell dokumentiertes Link-Format; dieses greift in der Praxis.
    const bolt = "https://m.bolt.eu/mobile/3/?dropoff[latitude]=" + z.lat +
                 "&dropoff[longitude]=" + z.lng + "&dropoff[address]=" + encodeURIComponent(z.th);
    // <details> statt eigener Klick-Logik: klappt nativ auf, kollidiert nicht mit dem Abhaken,
    // und die Beschreibung darüber bleibt immer stehen.
    return '<details class="fahrt" data-f="' + k + '">' +
      '<summary class="f-auf"><span class="f-chev">›</span> Anfahrt &amp; Adresse</summary>' +
      '<div class="f-body">' +
        (route ? '<div class="f-route">' + route + "</div>" : "") +
        (z.bahn && !ohneBahn ? '<div class="f-bahn"><div class="fb-kopf">Mit der Bahn ab Hotel</div>' +
            '<div class="fb-schritt"><span class="fb-nr">1</span><div><b>Einsteigen</b>' + z.bahn.ein + "</div></div>" +
            '<div class="fb-schritt"><span class="fb-nr">2</span><div><b>Umsteigen</b>' + z.bahn.um + "</div></div>" +
            '<div class="fb-schritt"><span class="fb-nr">3</span><div><b>Aussteigen</b>' + z.bahn.aus + "</div></div>" +
            '<div class="fb-schritt"><span class="fb-nr">→</span><div><b>Dann</b>' + z.bahn.rest + "</div></div>" +
          "</div>" : "") +
        '<div class="f-ziel"><span class="f-pin">📍</span><span class="f-name">' + z.n + "</span></div>" +
        '<div class="f-th">' + z.th + "</div>" +
        '<div class="f-btns">' +
          '<a class="fb" href="' + maps + '" target="_blank" rel="noopener">Karte</a>' +
          '<a class="fb" href="' + bolt + '" target="_blank" rel="noopener">Bolt</a>' +
          '<button class="fb" type="button" data-zk="' + k + '">Adresse kopieren</button>' +
        "</div>" +
      "</div></details>";
  }

  function renderPlan() {
    const today = todayISO();
    const st = planState();
    document.getElementById("plan-list").innerHTML = PLAN.map(d => {
      const dt = d.date.split("-");
      const isToday = d.date === today;
      const done = d.blocks.filter((b, i) => st[d.date + "#" + i]).length;
      const wx = WX && WX.days ? WX.days[d.date] : null;
      return '<details class="card day' + (isToday ? " today" : "") + (done === d.blocks.length ? " all-done" : "") + '"' + (isToday ? " open" : "") + ">" +
        '<summary><span class="d-date"><b>' + d.wd + "</b> " + dt[2] + "." + dt[1] + ".</span>" +
        '<span class="d-title">' + d.icon + " " + d.title + "</span>" +
        (wx ? '<span class="d-wx ' + wx.st.k + '">' + wxIcon(wx.code, 1) + " " + wx.max + "° " + tropfen(wx.st.n) + "</span>" : "") +
        (done ? '<span class="d-prog">' + done + "/" + d.blocks.length + "</span>" : "") +
        (isToday ? '<span class="d-badge">Heute</span>' : "") + "</summary>" +
        '<div class="d-body">' +
        (wx ? '<div class="d-wxbar ' + wx.st.k + '">' + wxIcon(wx.code, 1) + " <b>" + tropfen(wx.st.n) + " " + wx.st.kurz + "</b> · " +
              fensterText(wx.fenster) + " · " + wx.min + "–" + wx.max + " °C · UV " + wx.uv + " · Sonnenuntergang " + wx.unter +
              "<br><i>" + wx.st.lang + "</i></div>"
            : '<div class="d-wxbar"><i>Für diesen Tag reicht die Vorhersage noch nicht — sie geht 16 Tage voraus und wächst jeden Tag mit.</i></div>') +
        d.blocks.map((b, i) => {
          const key = d.date + "#" + i;
          return '<div class="d-block' + (st[key] ? " done" : "") + '" data-pb="' + key + '">' +
            (b.t ? '<span class="d-time">' + b.t + "</span>" : "") + "<p>" + b.txt + "</p>" +
            (b.z && ZIELE[b.z] ? zielLeiste(b.z, b.r, b.nb) : "") +
            '<button class="d-tick" type="button" data-tick="' + key + '" aria-label="erledigt">✓</button></div>';
        }).join("") +
        (d.note ? '<div class="d-note">' + d.note + "</div>" : "") +
        (done ? '<button class="btn ghost small d-reset" type="button" data-preset="' + d.date + '">Tag zurücksetzen</button>' : "") +
        "</div></details>";
    }).join("");
    const t = document.querySelector("#plan-list > .day.today");
    if (t) t.scrollIntoView({ block: "start" });
  }

  function togglePlanBlock(key) {
    const st = planState();
    if (st[key]) delete st[key]; else st[key] = 1;
    localStorage.setItem(PLAN_KEY, JSON.stringify(st));
    merkeUndZeichne();
  }

  // Aufgeklappte Tage UND aufgeklappte Anfahrten überleben das Neuzeichnen
  function merkeUndZeichne() {
    const tage = [...document.querySelectorAll("#plan-list > details[open]")].map(x => x.querySelector(".d-date").textContent);
    const fahrten = [...document.querySelectorAll("#plan-list .fahrt[open]")].map(x => x.dataset.f);
    renderPlan();
    renderToday();
    document.querySelectorAll("#plan-list > details").forEach(x => {
      if (tage.includes(x.querySelector(".d-date").textContent)) x.open = true;
    });
    document.querySelectorAll("#plan-list .fahrt").forEach(x => {
      if (fahrten.includes(x.dataset.f)) x.open = true;
    });
  }

  const panelHeute = document.getElementById("panel-heute");
  if (panelHeute) panelHeute.addEventListener("click", e => {
    const tick = e.target.closest(".j-tick");
    if (tick) { e.preventDefault(); e.stopPropagation(); togglePlanBlock(tick.dataset.tick); renderToday(); return; }
    const kopie = e.target.closest(".fb[data-zk]");
    if (kopie) {
      e.preventDefault(); e.stopPropagation();
      const z = ZIELE[kopie.dataset.zk];
      navigator.clipboard.writeText(z.th).then(() => { kopie.textContent = "kopiert ✓"; setTimeout(() => kopie.textContent = "Adresse kopieren", 1500); });
    }
  });

  document.getElementById("plan-list").addEventListener("click", e => {
    // 1) Der Haken rechts — und NUR der — hakt den Punkt ab
    const tick = e.target.closest(".d-tick");
    if (tick) { e.preventDefault(); e.stopPropagation(); togglePlanBlock(tick.dataset.tick); return; }

    // 2) Tag zurücksetzen
    const reset = e.target.closest(".d-reset");
    if (reset) {
      const st = planState();
      Object.keys(st).filter(k => k.startsWith(reset.dataset.preset + "#")).forEach(k => delete st[k]);
      localStorage.setItem(PLAN_KEY, JSON.stringify(st));
      merkeUndZeichne();
      return;
    }

    // 3) Adresse kopieren
    const kopie = e.target.closest(".fb[data-zk]");
    if (kopie) {
      e.preventDefault(); e.stopPropagation();
      const z = ZIELE[kopie.dataset.zk];
      navigator.clipboard.writeText(z.th).then(
        () => { kopie.textContent = "✅ kopiert"; },
        () => {
          const el = kopie.closest(".fahrt").querySelector(".f-th");
          const r = document.createRange(); r.selectNodeContents(el);
          const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
          kopie.textContent = "markiert";
        }
      );
      setTimeout(() => kopie.textContent = "Adresse kopieren", 2500);
      return;
    }

    // 4) Karte oder Bolt: einfach öffnen lassen, nichts weiter tun
    if (e.target.closest(".fahrt")) { e.stopPropagation(); return; }

    // Sonst nichts — abgehakt wird nur über den Haken rechts.
  });

  renderPlan();

  // ————— Termine & Buchungen —————
  const BK_KEY = "bkk_bookings";
  const bkState = () => JSON.parse(localStorage.getItem(BK_KEY) || "{}");
  let bkFilter = "todo";

  const BK_STATUS = {
    fix:    { label: "gebucht",      cls: "ok"   },
    offen:  { label: "noch buchen",  cls: "todo" },
    vorort: { label: "vor Ort",      cls: "neutral" }
  };

  function bkDone(b, st) {
    return b.status === "fix" ? true : !!st[b.id];
  }

  function renderBookings() {
    const st = bkState();
    const openItems = BOOKINGS.filter(b => b.status === "offen");
    const done = openItems.filter(b => st[b.id]).length;
    document.getElementById("bk-done").textContent = done;
    document.getElementById("bk-total").textContent = "/" + openItems.length;
    document.getElementById("bk-bar").style.width =
      (openItems.length ? Math.round(done / openItems.length * 100) : 100) + "%";

    const counts = {
      todo:   openItems.filter(b => !st[b.id]).length,
      alle:   BOOKINGS.length,
      fix:    BOOKINGS.filter(b => b.status === "fix").length,
      vorort: BOOKINGS.filter(b => b.status === "vorort").length
    };
    const FILTERS = [
      { k: "todo",   t: "Noch zu tun" },
      { k: "alle",   t: "Alles" },
      { k: "fix",    t: "Steht fix" },
      { k: "vorort", t: "Vor Ort" }
    ];
    document.getElementById("bk-chips").innerHTML = FILTERS.map(f =>
      '<button class="chip' + (bkFilter === f.k ? " active" : "") + '" data-bkf="' + f.k + '">' +
      f.t + ' <i>' + counts[f.k] + '</i></button>').join("");

    // Sortierschluessel: Datum + Uhrzeit numerisch (sonst stuende "13:30" vor "9:00")
    const bkKey = b => {
      const m = b.time.match(/(\d{1,2}):(\d{2})/);
      return b.date + (m ? String(m[1]).padStart(2, "0") + m[2] : "9999");
    };
    let list = BOOKINGS.slice().sort((a, b) => bkKey(a).localeCompare(bkKey(b)));
    if (bkFilter === "todo")   list = list.filter(b => b.status === "offen" && !st[b.id]);
    if (bkFilter === "fix")    list = list.filter(b => b.status === "fix");
    if (bkFilter === "vorort") list = list.filter(b => b.status === "vorort");

    const wrap = document.getElementById("bk-list");
    if (!list.length) {
      wrap.innerHTML = '<div class="card bk-empty">✅ Nichts offen — alles gebucht.</div>';
    } else {
      wrap.innerHTML = list.map(b => {
        const d = b.date.split("-");
        const stt = BK_STATUS[b.status];
        const checked = bkDone(b, st);
        return '<details class="card bk' + (checked ? " is-done" : "") + '">' +
          '<summary>' +
            '<span class="bk-ico">' + b.emoji + '</span>' +
            '<div class="bk-head">' +
              '<span class="bk-when">' + d[2] + "." + d[1] + ". · " + b.time + '</span>' +
              '<b class="bk-title">' + b.title + '</b>' +
              '<span class="bk-where">' + b.where + '</span>' +
            '</div>' +
            '<span class="pill ' + stt.cls + '">' + stt.label + '</span>' +
          '</summary>' +
          '<div class="bk-body">' +
            '<div class="bk-price">💶 ' + b.price + '</div>' +
            '<ul class="bk-info">' + b.info.map(x => "<li>" + x + "</li>").join("") + '</ul>' +
            (b.warn ? '<div class="bk-warn">⚠️ ' + b.warn + '</div>' : "") +
            (b.ref ? '<div class="bk-ref">🔒 ' + b.ref + '</div>' : "") +
            (b.nachricht ? '<div class="msg-box">' +
              '<div class="msg-kopf">Fertige Nachricht — antippen, prüfen, absenden</div>' +
              '<div class="msg-en" id="msg-' + b.id + '">' + b.nachricht.en.replace(/\n/g, "<br>") + "</div>" +
              '<details class="msg-de"><summary>Was da auf Deutsch steht</summary><p>' + b.nachricht.de.replace(/\n/g, "<br>") + "</p></details>" +
              '<div class="msg-btns">' +
                (b.nachricht.wa ? '<a class="btn wa" href="https://wa.me/' + b.nachricht.wa + "?text=" + encodeURIComponent(b.nachricht.en) + '" target="_blank" rel="noopener">💬 In WhatsApp öffnen</a>' : "") +
                '<button class="btn ghost small msg-copy" type="button" data-copy="' + b.id + '">📋 Text kopieren</button>' +
              "</div></div>" : "") +
            (b.klook ? '<a class="btn klook" href="' + b.klook + '" target="_blank" rel="noopener">🎟️ Auf Klook buchen — deutsche Seite</a>' : "") +
            '<div class="docs-grid bk-actions">' +
              (b.phone ? '<a class="btn" href="tel:' + b.phone + '">📞 Anrufen</a>' : "") +
              (b.links || []).map(l => '<a class="btn ghost" href="' + l.u + '" target="_blank" rel="noopener">' + l.t + '</a>').join("") +
            '</div>' +
            (b.status === "offen"
              ? '<label class="bk-check"><input type="checkbox" data-bk="' + b.id + '"' + (checked ? " checked" : "") + '> Erledigt — ist gebucht</label>'
              : "") +
          '</div></details>';
      }).join("");
    }

    wrap.querySelectorAll(".msg-copy").forEach(btn => btn.addEventListener("click", async e => {
      e.preventDefault();
      const b = BOOKINGS.find(x => x.id === btn.dataset.copy);
      try {
        await navigator.clipboard.writeText(b.nachricht.en);
        btn.textContent = "✅ kopiert";
      } catch (err) {
        // Ältere iOS-Safari-Fassungen können das nicht — dann Text markieren lassen
        const el = document.getElementById("msg-" + b.id);
        const r = document.createRange(); r.selectNodeContents(el);
        const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
        btn.textContent = "markiert — jetzt kopieren";
      }
      setTimeout(() => btn.textContent = "📋 Text kopieren", 2500);
    }));

    wrap.querySelectorAll("input[data-bk]").forEach(cb => {
      cb.addEventListener("change", () => {
        const d = bkState();
        if (cb.checked) d[cb.dataset.bk] = 1; else delete d[cb.dataset.bk];
        localStorage.setItem(BK_KEY, JSON.stringify(d));
        renderBookings();
      });
    });
    document.querySelectorAll("[data-bkf]").forEach(btn => {
      btn.addEventListener("click", () => { bkFilter = btn.dataset.bkf; renderBookings(); });
    });
  }
  document.getElementById("bk-reset").addEventListener("click", () => {
    if (confirm("Alle Haken bei den Buchungen entfernen?")) { localStorage.removeItem(BK_KEY); renderBookings(); }
  });
  renderBookings();

  // ————— Karte —————
  let markerLayers = {};      // Kategorie -> LayerGroup
  let mapFilter = null;       // null = alle
  let meMarker = null;

  function popupHtml(s) {
    const zeile = [];
    if (s.bolt) zeile.push("🚗 " + s.bolt + (s.fare && s.fare !== "—" ? " · " + s.fare : ""));
    if (s.mrt) zeile.push("🚇 " + s.mrt);
    if (s.hours) zeile.push("🕒 " + s.hours);
    if (s.price) zeile.push("💶 " + s.price);
    return "<b>" + s.emoji + " " + s.name + "</b>" +
      (zeile.length ? "<br>" + zeile.join("<br>") : "") +
      "<br><a href='" + s.gmaps + "' target='_blank' rel='noopener'>Fotos & Navigation</a>";
  }

  function initMap() {
    const map = L.map("map", {
      zoomControl: false,
      preferCanvas: true,
      tap: false,              // verhindert den Doppel-Tap-Bug in iOS-Safari
      zoomSnap: 0.5
    }).setView([HOTEL.lat, HOTEL.lng], 11);
    mapObj = map;

    // CARTO Voyager statt OSM-Standard: liefert 512-px-Kacheln fuer scharfe Darstellung
    // auf dem iPhone ({r} wird zu "@2x") und zeigt deutlich weniger Kleinkram.
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      subdomains: "abcd",
      maxZoom: 20,
      updateWhenIdle: true,    // waehrend des Wischens keine neuen Kacheln anfordern
      updateWhenZooming: false,
      keepBuffer: 1,
      crossOrigin: true,
      attribution: "© OpenStreetMap, © CARTO"
    }).addTo(map);
    L.control.zoom({ position: "bottomright" }).addTo(map);

    const hotelIcon = L.divIcon({ className: "", html: '<div class="pin hotel">★</div>', iconSize: [30, 30], iconAnchor: [15, 15] });
    L.marker([HOTEL.lat, HOTEL.lng], { icon: hotelIcon, zIndexOffset: 1000 }).addTo(map)
      .bindPopup("<b>★ " + HOTEL.name + "</b><br>Dein Hotel · MRT Yaek Tiwanon gegenüber<br><a href='" + HOTEL.gmaps + "' target='_blank' rel='noopener'>In Google Maps öffnen</a>");

    Object.keys(CATS).forEach(k => { markerLayers[k] = L.layerGroup().addTo(map); });
    SPOTS.forEach(s => {
      const c = CATS[s.cat].color;
      const icon = L.divIcon({ className: "", html: '<div class="pin" style="--c:' + c + '">' + s.emoji + "</div>", iconSize: [30, 30], iconAnchor: [15, 15] });
      L.marker([s.lat, s.lng], { icon }).bindPopup(popupHtml(s)).addTo(markerLayers[s.cat]);
    });

    buildMapChips();

    // Regenradar gleich mit anschalten: Es liegt UNTER den Spot-Nadeln, also siehst du
    // in einem Bild, wo du hin willst und ob es dort gerade runterkommt.
    rvToggle();

    // Groesse nach dem Einblenden nachmessen — sonst bleibt die Karte grau
    const fix = () => map.invalidateSize({ animate: false });
    setTimeout(fix, 60); setTimeout(fix, 400);
    window.addEventListener("resize", fix);
    window.addEventListener("orientationchange", () => setTimeout(fix, 250));
  }

  function buildMapChips() {
    const wrap = document.getElementById("map-chips");
    if (!wrap) return;
    const counts = {};
    SPOTS.forEach(s => { counts[s.cat] = (counts[s.cat] || 0) + 1; });
    wrap.innerHTML = '<button class="chip' + (mapFilter === null ? " active" : "") + '" data-mcat="" style="--c:var(--gold)">Alle <i>' + SPOTS.length + "</i></button>" +
      Object.keys(CATS).map(k => '<button class="chip' + (mapFilter === k ? " active" : "") + '" data-mcat="' + k + '" style="--c:' + CATS[k].color + '">' +
        CATS[k].label + " <i>" + (counts[k] || 0) + "</i></button>").join("");
    wrap.querySelectorAll("[data-mcat]").forEach(b => b.addEventListener("click", () => {
      mapFilter = b.dataset.mcat || null;
      Object.keys(markerLayers).forEach(k => {
        const on = mapFilter === null || mapFilter === k;
        if (on) mapObj.addLayer(markerLayers[k]); else mapObj.removeLayer(markerLayers[k]);
      });
      buildMapChips();
      if (mapFilter) {
        const pts = SPOTS.filter(s => s.cat === mapFilter).map(s => [s.lat, s.lng]).concat([[HOTEL.lat, HOTEL.lng]]);
        mapObj.fitBounds(L.latLngBounds(pts).pad(0.15), { animate: false });
      } else {
        mapObj.setView([HOTEL.lat, HOTEL.lng], 11, { animate: false });
      }
    }));
  }

  // ————— Regenradar auf der Karte (RainViewer, kostenlos, ohne Schlüssel) —————
  // Zeigt, WO es gerade wirklich regnet — von leichtem Tröpfeln bis Wolkenbruch,
  // dazu die letzten zwei Stunden als Animation, damit man sieht, wohin die Zelle zieht.
  let rvFrames = [], rvIdx = 0, rvLayer = null, rvTimer = null, rvOn = false, rvHost = "", rvFade = null;

  async function rvLoad() {
    const j = await (await fetch("https://api.rainviewer.com/public/weather-maps.json")).json();
    rvHost = j.host;
    rvFrames = (j.radar.past || []).concat(j.radar.nowcast || []);
    rvIdx = (j.radar.past || []).length - 1;   // Start beim aktuellsten Ist-Bild
    return rvFrames.length > 0;
  }

  function rvShow(i) {
    if (!mapObj || !rvFrames[i]) return;
    const f = rvFrames[i];
    // RainViewer liefert echte Radarbilder NUR bis Zoom 7 — darüber kommt für jede Kachel
    // dasselbe Bild "Zoom Level Not Supported". Mit maxNativeZoom holt Leaflet die Zoom-7-Kachel
    // und rechnet sie hoch: gröber, aber echte Daten statt grauer Fehlerflächen.
    const neu = L.tileLayer(rvHost + f.path + "/256/{z}/{x}/{y}/4/1_1.png", {
      opacity: 0, zIndex: 250, tileSize: 256, updateWhenIdle: false,
      maxNativeZoom: 7, maxZoom: 19
    }).addTo(mapObj);
    // Läuft noch eine Überblendung? Dann sofort abbrechen und die alte Ebene wegräumen,
    // sonst stapeln sich beim schnellen Ziehen am Zeitschieber die Kachelebenen.
    if (rvFade) { clearInterval(rvFade.timer); mapObj.removeLayer(rvFade.alt); rvFade = null; }
    const alt = rvLayer;
    rvLayer = neu;
    let o = 0;
    const timer = setInterval(() => {
      o += 0.25;
      neu.setOpacity(Math.min(o, 0.75));
      if (o >= 0.75) {
        clearInterval(timer);
        if (alt) mapObj.removeLayer(alt);
        rvFade = null;
      }
    }, 40);
    if (alt) rvFade = { timer, alt };
    const jetzt = Date.now() / 1000;
    const el = document.getElementById("rv-time");
    if (el) {
      const d = new Date(f.time * 1000);
      const hh = d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Bangkok" });
      const min = Math.round((f.time - jetzt) / 60);
      el.textContent = hh + " Uhr Bangkok · " + (min > 1 ? "in " + min + " Min (Vorhersage)" : min > -3 ? "jetzt" : "vor " + Math.abs(min) + " Min");
      el.className = f.time > jetzt ? "rv-time future" : "rv-time";
    }
    const sl = document.getElementById("rv-slider");
    if (sl) sl.value = i;
  }

  function rvStop() {
    if (rvTimer) { clearInterval(rvTimer); rvTimer = null; }
    const b = document.getElementById("rv-play"); if (b) b.textContent = "▶︎ Ablauf";
  }

  function rvPlay() {
    if (rvTimer) { rvStop(); return; }
    document.getElementById("rv-play").textContent = "⏸ Stopp";
    rvTimer = setInterval(() => {
      rvIdx = (rvIdx + 1) % rvFrames.length;
      rvShow(rvIdx);
    }, 500);
  }

  async function rvToggle() {
    const btn = document.getElementById("map-rain");
    const box = document.getElementById("rv-box");
    if (rvOn) {
      rvOn = false; rvStop();
      if (rvFade) { clearInterval(rvFade.timer); mapObj.removeLayer(rvFade.alt); rvFade = null; }
      if (rvLayer) { mapObj.removeLayer(rvLayer); rvLayer = null; }
      box.hidden = true; btn.classList.remove("on"); btn.textContent = "🌧️ Regenradar";
      return;
    }
    btn.textContent = "🌧️ lädt …";
    try {
      if (!rvFrames.length && !(await rvLoad())) throw new Error("keine Bilder");
    } catch (e) {
      btn.textContent = "🌧️ kein Netz";
      setTimeout(() => btn.textContent = "🌧️ Regenradar", 2500);
      return;
    }
    rvOn = true; btn.classList.add("on"); btn.textContent = "🌧️ Radar aus";
    box.hidden = false;
    const sl = document.getElementById("rv-slider");
    sl.max = rvFrames.length - 1; sl.value = rvIdx;
    rvShow(rvIdx);
  }

  const btnRain = document.getElementById("map-rain");
  if (btnRain) btnRain.addEventListener("click", rvToggle);
  const rvSl = document.getElementById("rv-slider");
  if (rvSl) rvSl.addEventListener("input", () => { rvStop(); rvIdx = +rvSl.value; rvShow(rvIdx); });
  const rvPl = document.getElementById("rv-play");
  if (rvPl) rvPl.addEventListener("click", rvPlay);

  // ————— "Wo bin ich" —————
  // Vorher brach das an vier Stellen: stummer Abbruch ohne Karte, alle Fehler sahen gleich aus,
  // 8 s Zeitlimit war für den ersten GPS-Fix zu kurz, und die Karte sprang bedingungslos zur
  // echten Position — solange Jan in Deutschland ist, also 8.700 km weg von allen Spots.
  let meKreis = null;
  const BKK = { lat: 13.8621, lng: 100.5144 };

  function meldung(txt, art) {
    const el = document.getElementById("me-msg");
    if (!el) return;
    el.hidden = false;
    el.className = "me-msg " + (art || "");
    el.innerHTML = txt;
  }
  function kmVon(a, b) {
    const R = 6371, r = Math.PI / 180;
    const dLat = (b.lat - a.lat) * r, dLng = (b.lng - a.lng) * r;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  const genauText = m => m > 999 ? (m / 1000).toFixed(1) + " km" : m + " m";

  function zeigeMich(pos) {
    const lat = pos.coords.latitude, lng = pos.coords.longitude;
    const genau = Math.round(pos.coords.accuracy);
    if (meMarker) mapObj.removeLayer(meMarker);
    if (meKreis) mapObj.removeLayer(meKreis);

    meMarker = L.marker([lat, lng], {
      icon: L.divIcon({ className: "", html: '<div class="pin me">🧍</div>', iconSize: [28, 28], iconAnchor: [14, 14] }),
      zIndexOffset: 1200
    }).addTo(mapObj);
    // Der Kreis zeigt ehrlich, wie genau die Ortung ist — bei WLAN-Ortung sind das schnell 2 km
    meKreis = L.circle([lat, lng], { radius: genau, color: "#57A8FF", weight: 1, fillOpacity: .10 }).addTo(mapObj);

    const km = kmVon({ lat, lng }, BKK);
    document.getElementById("map-me").textContent = "📍 Wo bin ich";

    if (km > 300) {
      // Nicht in Thailand: NICHT hinspringen, sonst ist die ganze Bangkok-Karte weg
      meldung("Du bist gerade <b>" + Math.round(km).toLocaleString("de-DE") + " km</b> von Bangkok entfernt — " +
        "die Ortung stimmt also, du bist ja noch daheim. Die Karte bleibt deshalb auf Bangkok stehen. " +
        "<button class='me-jump' type='button'>Trotzdem zu mir springen</button>", "fern");
      const jump = document.querySelector(".me-jump");
      if (jump) jump.addEventListener("click", () => mapObj.setView([lat, lng], 13));
    } else {
      mapObj.setView([lat, lng], genau > 2000 ? 12 : 15);
      meMarker.bindPopup("Hier bist du<br>Genauigkeit ±" + genauText(genau)).openPopup();
      meldung("Gefunden — Genauigkeit ±" + genauText(genau) +
        (genau > 500 ? ". Das ist WLAN-Ortung. Für Meter-Genauigkeit muss GPS greifen — draußen nochmal antippen." : "."), "ok");
    }
  }

  function meFehler(err) {
    document.getElementById("map-me").textContent = "📍 Wo bin ich";
    if (err && err.code === 1) {
      meldung("<b>Die Ortung ist für diese App gesperrt.</b><br>" +
        "Am iPhone: Einstellungen → Datenschutz &amp; Sicherheit → Ortungsdienste → Safari-Websites → " +
        "„Beim Verwenden der App“. Wenn du die App vom Home-Bildschirm gestartet hast, musst du dort extra erlauben — " +
        "die Freigabe aus Safari gilt dafür nicht.", "fehler");
    } else if (err && err.code === 3) {
      meldung("<b>Zeitüberschreitung.</b> Der erste GPS-Fix dauert drinnen manchmal eine halbe Minute. " +
        "Geh ans Fenster oder vor die Tür und tipp nochmal.", "warn");
    } else {
      meldung("<b>Kein Standortsignal.</b> Drinnen und zwischen Hochhäusern passiert das. Draußen nochmal versuchen.", "warn");
    }
  }

  const btnMe = document.getElementById("map-me");
  if (btnMe) btnMe.addEventListener("click", () => {
    if (!navigator.geolocation) {
      meldung("Dieser Browser kann keine Ortung. Öffne die App in Safari oder Chrome.", "fehler");
      return;
    }
    if (!mapObj) {   // hier brach die Funktion vorher stumm ab
      meldung("Die Karte lädt noch — gleich nochmal antippen.", "warn");
      return;
    }
    btnMe.textContent = "📍 suche …";
    meldung("Suche deinen Standort … beim ersten Mal kann das bis zu 30 Sekunden dauern.", "");
    // Zweistufig: erst schnell und grob (ein gecachter Wert reicht), dann präzise nachlegen.
    navigator.geolocation.getCurrentPosition(
      pos => {
        zeigeMich(pos);
        if (pos.coords.accuracy > 200) {
          navigator.geolocation.getCurrentPosition(zeigeMich, () => {},
            { enableHighAccuracy: true, timeout: 25000, maximumAge: 0 });
        }
      },
      () => {   // grober Versuch fehlgeschlagen → einmal richtig probieren
        navigator.geolocation.getCurrentPosition(zeigeMich, meFehler,
          { enableHighAccuracy: true, timeout: 25000, maximumAge: 0 });
      },
      { enableHighAccuracy: false, timeout: 6000, maximumAge: 120000 }
    );
  });

  const btnAll = document.getElementById("map-all");
  if (btnAll) btnAll.addEventListener("click", () => {
    if (!mapObj) return;
    mapFilter = null;
    Object.keys(markerLayers).forEach(k => mapObj.addLayer(markerLayers[k]));
    buildMapChips();
    mapObj.setView([HOTEL.lat, HOTEL.lng], 11, { animate: false });
  });

  // ————— Info —————
  document.getElementById("notfall-list").innerHTML = INFO.notfall.map(n =>
    '<div class="cheat-row"><span>' + n.label + "</span>" +
    (n.tel ? '<a class="tel" href="tel:' + n.tel + '">' + n.value + "</a>" : "<b>" + n.value + "</b>") + "</div>").join("") +
    '<div class="d-note">🏥 <b>' + INFO.krankenhaus.name + "</b> — " + INFO.krankenhaus.note +
    ' <a href="' + INFO.krankenhaus.gmaps + '" target="_blank" rel="noopener">Karte</a></div>';

  document.getElementById("abzocke-list").innerHTML = INFO.abzocke.map((r, i) =>
    '<div class="rule"><span class="rule-n">' + (i + 1) + "</span><p>" + r + "</p></div>").join("");

  document.getElementById("unterwegs-list").innerHTML = INFO.unterwegs.map(u =>
    '<div class="d-block"><span class="d-time">' + u.icon + " " + u.title + "</span><p>" + u.txt + "</p></div>").join("");

  document.getElementById("geld-list").innerHTML = INFO.geld.map(u =>
    '<div class="d-block"><span class="d-time">' + u.icon + " " + u.title + "</span><p>" + u.txt + "</p></div>").join("");

  const CHECK_KEY = "bkk_checks";
  // Hier stehen NUR die Sachen, die man daheim vorbereitet — Check-in, eSIM, Karten, Papiere.
  // Was gebucht werden muss, steht ausschliesslich im Reiter Termine, damit es nicht doppelt ist.
  function checkPunkte() {
    return INFO.checks.map(c => ({ id: c.id, quelle: "fest", txt: c.txt, due: c.due }));
  }

  function renderChecks() {
    const done = JSON.parse(localStorage.getItem(CHECK_KEY) || "{}");
    const punkte = checkPunkte();
    const offen = punkte.filter(p => !done[p.id]).length;
    const zuBuchen = BOOKINGS.filter(b => b.status === "offen").length;

    const kopf = '<div class="ck-kopf">' + (offen ? "<b>" + offen + "</b> von " + punkte.length + " noch offen" : "✅ alles erledigt") + "</div>";
    const fuss = zuBuchen
      ? '<div class="ck-fuss">Was noch gebucht werden muss (' + zuBuchen + "), steht im Reiter <b>Termine</b> — hier stehen nur die Sachen, die du daheim erledigst.</div>"
      : "";
    document.getElementById("check-list").innerHTML = kopf + punkte.map(p =>
      '<label class="check' + (done[p.id] ? " done" : "") + '">' +
      '<input type="checkbox" data-id="' + p.id + '"' + (done[p.id] ? " checked" : "") + ">" +
      "<span>" + p.txt + ' <i class="due">' + p.due + "</i></span></label>").join("") + fuss;

    document.querySelectorAll("#check-list input").forEach(i => i.addEventListener("change", () => {
      const d = JSON.parse(localStorage.getItem(CHECK_KEY) || "{}");
      if (i.checked) d[i.dataset.id] = 1; else delete d[i.dataset.id];
      localStorage.setItem(CHECK_KEY, JSON.stringify(d));
      renderChecks();
    }));
  }
  renderChecks();


  /* ————— Packliste: antippen = abhaken, wird im Handy gespeichert ————— */
  const PACK_KEY = "bkk_pack";
  const packState = () => JSON.parse(localStorage.getItem(PACK_KEY) || "{}");
  const PACK_TOTAL = PACK.reduce((n, g) => n + g.items.length, 0);

  function renderPack() {
    const done = packState();
    const list = document.getElementById("pack-list");
    if (!list) return;
    let allDone = 0;

    list.innerHTML = PACK.map(g => {
      const n = g.items.filter(i => done[g.id + "." + i.id]).length;
      allDone += n;
      const full = n === g.items.length;
      const pct = Math.round(n / g.items.length * 100);
      return '<details class="card sec pack-g' + (g.danger ? " danger" : "") + (full ? " full" : "") + '"' +
        (full ? "" : " open") + '>' +
        '<summary><span class="sec-ico">' + g.icon + '</span>' +
        '<div class="sec-t"><b>' + g.title + '</b><i>' + n + " von " + g.items.length + (full ? " — fertig ✓" : "") + '</i>' +
        '<div class="bar"><i style="width:' + pct + '%"></i></div></div>' +
        '<span class="chev">›</span></summary>' +
        '<div class="sec-body">' +
        (g.note ? '<p class="pack-note">' + g.note + '</p>' : "") +
        g.items.map(i => {
          const key = g.id + "." + i.id;
          return '<label class="check' + (done[key] ? " done" : "") + '">' +
            '<input type="checkbox" data-key="' + key + '"' + (done[key] ? " checked" : "") + '>' +
            '<span>' + i.t + (i.w ? ' <i class="due">' + i.w + '</i>' : "") + '</span></label>';
        }).join("") +
        '</div></details>';
    }).join("");

    document.getElementById("pack-done").textContent = allDone;
    document.getElementById("pack-total").textContent = "/" + PACK_TOTAL;
    document.getElementById("pack-bar").style.width = Math.round(allDone / PACK_TOTAL * 100) + "%";

    list.querySelectorAll("input[data-key]").forEach(inp => inp.addEventListener("change", () => {
      const d = packState();
      d[inp.dataset.key] = inp.checked;
      localStorage.setItem(PACK_KEY, JSON.stringify(d));
      const open = [...list.querySelectorAll("details")].map(x => x.open);
      renderPack();
      [...list.querySelectorAll("details")].forEach((x, i) => { if (open[i] !== undefined) x.open = open[i]; });
    }));
  }
  const packReset = document.getElementById("pack-reset");
  if (packReset) packReset.addEventListener("click", () => {
    if (confirm("Alle Haken entfernen?")) { localStorage.removeItem(PACK_KEY); renderPack(); }
  });
  renderPack();

  document.getElementById("hotel-thai").textContent = HOTEL.thai;
  document.getElementById("hotel-gmaps").href = HOTEL.gmaps;

  document.getElementById("dress-list").innerHTML = INFO.dresscode.map(d => "<li>" + d + "</li>").join("");

  // ————— Heute-Karte: Countdown, Reisetag, Flugtag mit Abfahrtszeiten —————
  const DIR_MUC = "https://www.google.com/maps/dir/?api=1&destination=Parkprofi%20Parkhaus%2C%20Josef-Beil-Ring%202%2C%2085435%20Erding&travelmode=driving";
  const DIR_BKK = "https://www.google.com/maps/dir/?api=1&destination=Suvarnabhumi%20Airport&travelmode=driving";
  const FS = f => "https://www.google.com/search?q=" + f + "+Flugstatus";

  // ————— Startseite „Heute" —————
  // Beantwortet die einzige Frage, die vor Ort zaehlt: Was mache ich jetzt, und wie komme ich hin?
  // Die Uhrzeit wird IMMER in Bangkok-Zeit gerechnet — damit die Seite auch von daheim aus stimmt.
  function bkkJetzt() {
    const d = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" }));
    return { min: d.getHours() * 60 + d.getMinutes(),
             datum: d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"),
             uhr: String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0") };
  }

  // "8:45" · "9:30–13:00" · "~15:15" · "7:50 oder 8:45" · "vorm." · "abends" → Startminute
  function startMin(t) {
    if (!t) return null;
    const s = String(t).toLowerCase();
    const m = s.match(/(\d{1,2})[:.](\d{2})/);
    if (m) return (+m[1]) * 60 + (+m[2]);
    if (s.indexOf("vorm") >= 0) return 9 * 60;
    if (s.indexOf("tagsüber") >= 0) return 10 * 60;
    if (s.indexOf("abend") >= 0) return 19 * 60;
    if (s.indexOf("heim") >= 0) return 21 * 60;
    return null;
  }

  function kurz(txt, n) {
    const roh = String(txt).replace(/<[^>]+>/g, "");
    return roh.length > n ? roh.slice(0, n - 1).replace(/[\s,;.]+$/, "") + "…" : roh;
  }

  function timeline(rows) {
    return '<div class="t-rows">' + rows.map(r =>
      '<div class="t-row"><span class="t-time">' + r[0] + "</span><p>" + r[1] + "</p></div>").join("") + "</div>";
  }

  function heuteLeeren() {
    ["heute-jetzt", "heute-rest"].forEach(id => { const e = document.getElementById(id); if (e) e.innerHTML = ""; });
  }

  function renderToday() {
    const el = document.getElementById("today-card");
    const jetzt = bkkJetzt();
    const t = todayISO();
    heuteLeeren();

    if (t === "2026-08-27") {
      el.innerHTML = '<div class="card today"><div class="today-title">🛫 Heute geht\'s los — LH772 um 22:20</div>' +
        timeline([
          ["16:30", "Daheim losfahren — Donnerstag-Feierabendverkehr um München einplanen (~2–2,5 Std.)."],
          ["~18:45", "Auto abgeben: Parkprofi Parkhaus, Josef-Beil-Ring 2, 85435 Erding (überdacht, schon bezahlt — Beleg in OneDrive)."],
          ["~19:15", "Shuttle zum Terminal 2, fährt ~10 Min."],
          ["20:00", "Bag-Drop Lufthansa, Terminal 2. Koffer bis 23 kg, GOT BAG + kleine Tasche mit."],
          ["~21:40", "Boarding. Powerbank & Pass im Handgepäck? TDAC-Screenshot bereit?"],
          ["22:20", "Abflug — 13:45 Ortszeit landest du in Bangkok."]
        ]) +
        '<div class="s-actions"><a class="btn" href="' + DIR_MUC + '" target="_blank" rel="noopener">🚗 Live-Route zum Parkhaus</a>' +
        '<a class="btn ghost" href="' + FS("LH772") + '" target="_blank" rel="noopener">✈️ Flugstatus</a></div></div>';
      return;
    }
    if (t < "2026-08-27") {
      const days = Math.round((new Date("2026-08-27T12:00:00") - new Date(t + "T12:00:00")) / 864e5);
      el.innerHTML = '<div class="card today"><div class="today-title">🛫 Noch ' + days + " Tag" + (days === 1 ? "" : "e") + " bis Bangkok</div>" +
        '<p class="today-sub">Do 27.08., 22:20 ab München · in Bangkok ist es gerade ' + jetzt.uhr + " Uhr</p>" +
        '<div class="s-actions"><button class="btn" id="open-checks">✅ Zur Checkliste</button>' +
        '<button class="btn ghost" id="open-plan">📅 Ganzen Plan ansehen</button></div></div>';
      const b1 = document.getElementById("open-checks");
      if (b1) b1.addEventListener("click", () => { showTab("info"); const sec = document.querySelector("#panel-info details"); if (sec) sec.open = true; });
      const b2 = document.getElementById("open-plan");
      if (b2) b2.addEventListener("click", () => showTab("plan"));
      return;
    }

    const day = PLAN.find(d => d.date === t);
    if (!day) { el.innerHTML = '<div class="card today"><div class="today-title">🏠 Wieder daheim</div>' +
        '<p class="today-sub">Die Reise ist vorbei — der Plan bleibt zum Nachlesen im Reiter Plan.</p></div>'; return; }

    // Kopf: welcher Tag, welches Wetter
    const n = PLAN.indexOf(day);
    el.innerHTML = '<div class="card today"><div class="today-title">' + day.icon + " " + day.title + "</div>" +
      '<p class="today-sub">Tag ' + n + " von 10 · " + day.wd + " " + t.slice(8, 10) + "." + t.slice(5, 7) + ". · in Bangkok ist es " + jetzt.uhr + " Uhr</p>" +
      "</div>";

    // Bloecke mit Startzeit → was laeuft gerade, was kommt als Naechstes
    const mit = day.blocks.map((b, i) => ({ b: b, i: i, m: startMin(b.t) })).filter(x => x.m !== null);
    const st = planState();
    let aktIdx = -1;
    mit.forEach((x, k) => { if (x.m <= jetzt.min) aktIdx = k; });
    const naechste = aktIdx + 1 < mit.length ? mit[aktIdx + 1] : null;
    const zeigen = aktIdx >= 0 ? mit[aktIdx] : (mit.length ? mit[0] : null);
    const label = aktIdx < 0 ? "Gleich geht es los" : (naechste && naechste.m - jetzt.min <= 45 ? "Jetzt — gleich weiter" : "Jetzt dran");

    const jetztEl = document.getElementById("heute-jetzt");
    if (zeigen) {
      const key = day.date + "#" + zeigen.i;
      jetztEl.innerHTML = '<div class="card jetzt' + (st[key] ? " done" : "") + '">' +
        '<div class="j-kopf"><span class="j-label">' + label + "</span><span class=\"j-zeit\">" + (zeigen.b.t || "") + "</span></div>" +
        "<p class=\"j-txt\">" + zeigen.b.txt + "</p>" +
        (zeigen.b.z && ZIELE[zeigen.b.z] ? zielLeiste(zeigen.b.z, zeigen.b.r, zeigen.b.nb) : "") +
        '<button class="btn ghost small j-tick" type="button" data-tick="' + key + '">' + (st[key] ? "✓ erledigt" : "abhaken") + "</button>" +
        "</div>";
    }

    // Der Rest des Tages, kompakt
    const rest = mit.filter((x, k) => k > aktIdx);
    const restEl = document.getElementById("heute-rest");
    if (rest.length) {
      restEl.innerHTML = '<div class="card rest"><div class="rest-kopf">Danach heute</div>' +
        rest.map(x => '<div class="rest-row' + (st[day.date + "#" + x.i] ? " done" : "") + '"><span class="rest-zeit">' + (x.b.t || "") + "</span>" +
          "<span class=\"rest-txt\">" + kurz(x.b.txt, 90) + "</span></div>").join("") +
        '<button class="btn ghost small" id="open-plan-full">📅 Ganzen Tag im Plan öffnen</button></div>';
    } else {
      restEl.innerHTML = '<div class="card rest"><div class="rest-kopf">Das war der Plan für heute</div>' +
        '<p class="rest-frei">Der Rest des Abends gehört dir. <b>Denk an die Bahn:</b> der letzte lila Zug ab Tao Poon nach Hause fährt 23:35 — ab 22:50 in der Stadt lieber ein Bolt nehmen.</p>' +
        '<button class="btn ghost small" id="open-plan-full">📅 Morgen ansehen</button></div>';
    }
    const bp = document.getElementById("open-plan-full");
    if (bp) bp.addEventListener("click", () => showTab("plan"));

    if (day.note) restEl.insertAdjacentHTML("beforeend", '<div class="card hinweis"><b>Hinweis für heute</b><p>' + day.note + "</p></div>");
  }
  renderToday();

  // ————— Live-Wetter Bangkok (open-meteo, ohne Schlüssel) —————
  // Millimeter sagen niemandem etwas. Deshalb rechnen wir daraus um:
  // WANN regnet es (Zeitfenster aus den Stundenwerten) und WIE STARK fühlt es sich an.
  const WX_KEY = "bkk_wx2";

  const WX_TEXT = {
    0:"klar", 1:"überwiegend klar", 2:"teils bewölkt", 3:"bedeckt",
    45:"Nebel", 48:"Reifnebel", 51:"Nieselregen", 53:"Nieselregen", 55:"starker Niesel",
    61:"leichter Regen", 63:"Regen", 65:"starker Regen", 80:"Schauer", 81:"kräftige Schauer",
    82:"heftige Schauer", 95:"Gewitter", 96:"Gewitter mit Hagel", 99:"schweres Gewitter"
  };
  function wxIcon(c, day) {
    if (c <= 1) return day === 0 ? "🌙" : "☀️";
    if (c <= 3) return "⛅"; if (c <= 48) return "🌫️";
    if (c <= 67) return "🌦️"; if (c <= 82) return "🌧️"; return "⛈️";
  }
  const wxText = c => WX_TEXT[c] || "wechselhaft";

  // Die Stufe richtet sich nach der stärksten Stunde (mm/h) — das ist das, was man spürt.
  const STUFEN = [
    { ab: 0,   n: 0, k: "trocken", kurz: "trocken",        lang: "Trocken — höchstens mal ein paar Tropfen, nichts zu befürchten" },
    { ab: 0.2, n: 1, k: "feucht",  kurz: "nur feucht",     lang: "Nieseln — die Haare werden feucht, mehr nicht. Kein Schirm nötig" },
    { ab: 0.5, n: 2, k: "leicht",  kurz: "leichter Regen", lang: "Leichter Regen — Poncho drüber und weiterlaufen, die Straße wird nass" },
    { ab: 2,   n: 3, k: "mittel",  kurz: "richtiger Regen",lang: "Richtiger Regen — nach 10 Minuten bist du durch. Unterstellen lohnt sich" },
    { ab: 6,   n: 4, k: "stark",   kurz: "Platzregen",     lang: "Platzregen — in zwei Minuten klatschnass, Straßen laufen voll. Reingehen" },
    { ab: 15,  n: 5, k: "extrem",  kurz: "Wolkenbruch",    lang: "Wolkenbruch — Bolt statt laufen, das hört meist nach 20–40 Min auf" }
  ];
  function stufeVon(mmh) {
    let st = STUFEN[0];
    STUFEN.forEach(x => { if (mmh >= x.ab) st = x; });
    return st;
  }
  const tropfen = n => n === 0 ? "—" : "💧".repeat(n);

  // Zusammenhängende Regenstunden zu Zeitfenstern bündeln ("14–20 Uhr")
  function fensterText(f) {
    if (!f.length) return "kein Regen erwartet";
    return f.map(x => x.von + "–" + (x.bis + 1) + " Uhr").join(" und ");
  }

  function renderWeather() {
    const el = document.getElementById("weather");
    if (!WX) { el.innerHTML = '<div class="wx-load">Wetter wird geladen …</div>'; return; }
    const n = WX.now, heute = WX.days[todayISO()];
    el.innerHTML =
      '<div class="wx-now">' +
        '<div class="wx-ico">' + wxIcon(n.code, n.day) + "</div>" +
        '<div class="wx-main">' +
          '<div class="wx-temp">' + n.t + "<span>°C</span></div>" +
          '<div class="wx-desc">' + wxText(n.code) + " · gefühlt " + n.gefuehlt + " °C</div>" +
        "</div>" +
        '<div class="wx-side"><span>💧 ' + n.feuchte + " %</span><span>💨 " + n.wind + " km/h</span>" +
          (heute ? "<span>🌅 " + heute.unter + "</span>" : "") + "</div>" +
      "</div>";
    renderWxDays();
  }

  // Alle Reisetage — antippen klappt den Stundenverlauf des Tages auf
  function renderWxDays() {
    const box = document.getElementById("wx-days");
    if (!box || !WX) return;
    const heute = todayISO();
    const offen = [...box.querySelectorAll("details[open]")].map(x => x.dataset.d);

    box.innerHTML = PLAN.map(d => {
      const w = WX.days[d.date];
      const dt = d.date.split("-");
      const kopf = '<span class="wxd-d">' + d.wd + " " + dt[2] + "." + dt[1] + ".</span>";
      if (!w) return '<div class="wxd leer">' + kopf + '<span class="wxd-x">Vorhersage reicht noch nicht so weit</span></div>';

      // Stundenverlauf dieses Tages, 6 bis 23 Uhr — nachts braucht das keiner
      const std = WX.hours.filter(h => h.tag === d.date && h.stunde >= 6 && h.stunde <= 23);
      const balken = std.map(h => {
        const st = stufeVon(h.mm);
        const hoch = Math.min(100, Math.round(Math.sqrt(h.mm / 6) * 100));
        return '<div class="wxs ' + st.k + '" title="' + h.stunde + ' Uhr">' +
          '<i style="height:' + (h.mm > 0 ? Math.max(6, hoch) : 2) + '%"></i>' +
          '<span>' + (h.stunde % 3 === 0 ? h.stunde : "") + "</span></div>";
      }).join("");

      return '<details class="wxd-w" data-d="' + d.date + '"' + (offen.includes(d.date) ? " open" : "") + ">" +
        '<summary class="wxd ' + w.st.k + (d.date === heute ? " ist-heute" : "") + '">' + kopf +
          '<span class="wxd-i">' + wxIcon(w.code, 1) + "</span>" +
          '<span class="wxd-t">' + w.min + "–" + w.max + "°</span>" +
          '<span class="wxd-r"><b>' + tropfen(w.st.n) + " " + w.st.kurz + "</b><i>" + fensterText(w.fenster) + "</i></span>" +
          '<span class="wxd-chev">›</span>' +
        "</summary>" +
        '<div class="wxd-body">' +
          "<p>" + w.st.lang + "</p>" +
          '<div class="wxs-wrap">' + balken + "</div>" +
          '<div class="wxs-legende">Stunde für Stunde von 6 bis 23 Uhr — je höher der Balken, desto stärker</div>' +
          '<div class="wxd-fakten"><span>🌡️ ' + w.min + "–" + w.max + " °C</span><span>☀️ UV " + w.uv +
            "</span><span>🌅 " + w.unter + "</span><span>🕒 " + w.std + " Std. mit Regen</span></div>" +
          '<div class="wxd-plan">' + d.icon + " " + d.title + "</div>" +
        "</div></details>";
    }).join("");
  }

  async function fetchWeather(force) {
    const cache = localStorage.getItem(WX_KEY);
    if (cache && !force) {
      try {
        const c = JSON.parse(cache);
        WX = c; renderWeather(); renderPlan(); renderToday();
        if (Date.now() - c.ts < 10 * 60 * 1000) return;
      } catch (e) { /* kaputter Cache */ }
    }
    try {
      const url = "https://api.open-meteo.com/v1/forecast?latitude=13.8621&longitude=100.5144" +
        "&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day" +
        "&hourly=temperature_2m,precipitation,precipitation_probability,weather_code,is_day" +
        "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_hours,sunset,uv_index_max" +
        "&forecast_days=16&timezone=Asia%2FBangkok";
      const j = await (await fetch(url)).json();
      const c = j.current;

      // Stundenwerte nach Tag sortieren, daraus Regenfenster und Spitzenintensität
      const proTag = {};
      j.hourly.time.forEach((t, i) => {
        const tag = t.slice(0, 10);
        (proTag[tag] = proTag[tag] || []).push({ h: +t.slice(11, 13), mm: j.hourly.precipitation[i] || 0 });
      });
      const days = {};
      j.daily.time.forEach((d, i) => {
        const std = proTag[d] || [];
        const nass = std.filter(x => x.mm >= 0.2);
        const fenster = [];
        nass.forEach(x => {
          const l = fenster[fenster.length - 1];
          if (l && x.h === l.bis + 1) l.bis = x.h; else fenster.push({ von: x.h, bis: x.h });
        });
        const spitze = std.reduce((m, x) => Math.max(m, x.mm), 0);
        days[d] = {
          code: j.daily.weather_code[i],
          max: Math.round(j.daily.temperature_2m_max[i]),
          min: Math.round(j.daily.temperature_2m_min[i]),
          mm: j.daily.precipitation_sum[i],
          std: j.daily.precipitation_hours[i],
          spitze, st: stufeVon(spitze), fenster,
          uv: Math.round(j.daily.uv_index_max[i]),
          unter: (j.daily.sunset[i] || "").slice(11, 16)
        };
      });
      const hours = j.hourly.time.map((t, i) => ({
        ts: new Date(t + ":00+07:00").getTime(),
        tag: t.slice(0, 10), stunde: +t.slice(11, 13),
        hh: t.slice(11, 13) + " Uhr",
        t: Math.round(j.hourly.temperature_2m[i]),
        mm: j.hourly.precipitation[i] || 0,
        code: j.hourly.weather_code[i],
        day: j.hourly.is_day[i]
      }));
      WX = {
        now: { t: Math.round(c.temperature_2m), gefuehlt: Math.round(c.apparent_temperature),
               feuchte: c.relative_humidity_2m, wind: Math.round(c.wind_speed_10m),
               code: c.weather_code, day: c.is_day },
        hours, days, ts: Date.now()
      };
      localStorage.setItem(WX_KEY, JSON.stringify(WX));
      renderWeather(); renderPlan(); renderToday();
    } catch (e) {
      if (!WX) document.getElementById("weather").innerHTML =
        '<div class="wx-load">Kein Netz — Wetter kann gerade nicht geladen werden.</div>';
    }
  }
  document.getElementById("weather").addEventListener("click", () => fetchWeather(true));
  fetchWeather();
  // Alle 10 Minuten nachladen, und immer wenn die App wieder in den Vordergrund kommt
  setInterval(() => fetchWeather(true), 10 * 60 * 1000);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) fetchWeather(true); });

  // ————— Version anzeigen und Updates erkennen —————
  // Ohne das merkt man nicht, dass das Handy auf einer alten Fassung festhängt.
  const vEl = document.getElementById("app-version");
  if (vEl) vEl.textContent = APP_VERSION;

  async function pruefeUpdate() {
    try {
      const r = await fetch("sw.js?_=" + Date.now(), { cache: "no-store" });
      const txt = await r.text();
      const m = txt.match(/bkk-(v\d+)/);
      if (m && m[1] !== APP_VERSION) {
        const b = document.getElementById("update-bar");
        b.hidden = false;
        b.innerHTML = "Neue Version <b>" + m[1] + "</b> verfügbar — du hast " + APP_VERSION +
          '. <button type="button" id="update-go">Jetzt laden</button>';
        document.getElementById("update-go").addEventListener("click", neuLaden);
      }
    } catch (e) { /* offline: dann eben nicht */ }
  }

  async function neuLaden() {
    try {
      if ("caches" in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map(k => caches.delete(k)));
      }
      if (navigator.serviceWorker) {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.map(r => r.unregister()));
      }
    } catch (e) { /* egal, Hauptsache neu laden */ }
    location.reload(true);
  }
  const btnReload = document.getElementById("app-reload");
  if (btnReload) btnReload.addEventListener("click", neuLaden);
  pruefeUpdate();

  // ————— Bahn fahren: Anleitung + alle Strecken —————
  (function () {
    const el = document.getElementById("bahn-hilfe");
    if (!el || !INFO.bahn) return;
    const B = INFO.bahn;
    el.innerHTML =
      '<div class="bahn-kern">' + B.kern + "</div>" +
      '<h3 class="bahn-h">Bezahlen</h3>' +
      B.zahlen.map(x => '<div class="bahn-p"><span class="bahn-i">' + x.icon + '</span><div><b>' + x.title + "</b><p>" + x.txt + "</p></div></div>").join("") +
      '<h3 class="bahn-h">So läuft eine Fahrt ab</h3>' +
      '<ol class="bahn-ol">' + B.ablauf.map(x => "<li>" + x + "</li>").join("") + "</ol>" +
      '<h3 class="bahn-h">Worauf du achten musst</h3>' +
      B.falle.map(x => '<div class="bahn-p"><span class="bahn-i">' + x.icon + '</span><div><b>' + x.title + "</b><p>" + x.txt + "</p></div></div>").join("") +
      '<h3 class="bahn-h">Deine Strecken</h3>' +
      '<div class="bahn-tab">' + B.strecken.map(x =>
        '<div class="bahn-z"><div class="bz-ziel">' + x.ziel + "</div>" +
        '<div class="bz-weg">' + x.weg + "</div>" +
        '<div class="bz-fakt">' + x.zeit + " · " + x.preis + "</div></div>").join("") + "</div>";
  })();

  // ————— Sprache (Deutsch → Englisch, antippen = groß anzeigen) —————
  document.getElementById("phrase-list").innerHTML = PHRASES.map((g, gi) =>
    '<details class="card pgroup"><summary><span class="s-emoji">' + g.icon + '</span><span class="s-name">' + g.cat +
    '</span><span class="p-count">' + g.items.length + "</span></summary>" +
    '<div class="p-items">' + g.items.map((p, pi) =>
      '<button class="phrase" data-g="' + gi + '" data-p="' + pi + '">' +
      '<span class="p-de">' + p.de + '</span><span class="p-en">' + p.en + "</span>" +
      (p.sprich ? '<span class="p-sprich">sprich: ' + p.sprich + "</span>" : "") + "</button>").join("") +
    "</div></details>").join("");
  document.querySelectorAll(".phrase").forEach(b => b.addEventListener("click", () => {
    const p = PHRASES[+b.dataset.g].items[+b.dataset.p];
    const old = document.getElementById("flashcard"); if (old) old.remove();
    const div = document.createElement("div");
    div.id = "flashcard";
    div.innerHTML = '<div class="fc-inner"><div class="fc-de">' + p.de + '</div><div class="fc-en">' + p.en + '</div>' +
      (p.sprich ? '<div class="fc-sprich">sprich: ' + p.sprich + "</div>" : "") +
      '<div class="fc-hint">Zum Zeigen hochhalten · zum Schließen tippen</div></div>';
    div.addEventListener("click", () => div.remove());
    document.body.appendChild(div);
  }));

  // ————— Meine Reisedaten (nur auf DIESEM Gerät gespeichert, nie im App-Code) —————
  const MD_KEY = "bkk_mydata";
  if (location.hash.startsWith("#setup=")) {
    try {
      let b64 = location.hash.slice(7).replace(/-/g, "+").replace(/_/g, "/");
      b64 += "=".repeat((4 - b64.length % 4) % 4);
      const data = JSON.parse(decodeURIComponent(escape(atob(b64))));
      localStorage.setItem(MD_KEY, JSON.stringify(data));
      history.replaceState(null, "", location.pathname);
    } catch (e) { /* ungültiger Link */ }
  }
  const b64bytes = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
  async function decryptMyData(pw) {
    const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pw), "PBKDF2", false, ["deriveKey"]);
    const key = await crypto.subtle.deriveKey(
      { name: "PBKDF2", salt: b64bytes(MYDATA_ENC.salt), iterations: 300000, hash: "SHA-256" },
      base, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
    const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: b64bytes(MYDATA_ENC.iv) }, key, b64bytes(MYDATA_ENC.ct));
    return JSON.parse(new TextDecoder().decode(pt));
  }
  function renderMyData() {
    const el = document.getElementById("mydata-list");
    const raw = localStorage.getItem(MD_KEY);
    if (raw) {
      const rows = JSON.parse(raw);
      el.innerHTML = rows.map(r => '<div class="cheat-row"><span>' + r[0] + "</span><b>" + r[1] + "</b></div>").join("");
      return;
    }
    el.innerHTML = '<div class="unlock"><p class="hint" style="padding:8px 0 4px">Verschlüsselt (AES-256). Einmal Passwort eingeben — danach bleiben die Daten auf diesem Handy entsperrt.</p>' +
      '<div class="unlock-row"><input type="password" id="md-pw" placeholder="Passwort" autocomplete="off">' +
      '<button class="btn" id="md-go">Entsperren</button></div><p class="hint" id="md-err"></p></div>';
    document.getElementById("md-go").addEventListener("click", async () => {
      try {
        const rows = await decryptMyData(document.getElementById("md-pw").value.trim());
        localStorage.setItem(MD_KEY, JSON.stringify(rows));
        renderMyData();
      } catch (e) {
        document.getElementById("md-err").textContent = "Falsches Passwort — nochmal versuchen.";
      }
    });
  }
  renderMyData();

  // ————— Start —————
  fetchRate();
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js");
  }
})();
