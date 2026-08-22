// Bangkok 2026 — Praktisches, Notfall, Thai-Sprachhilfe
const INFO = {
  notfall: [
    { label:"Touristenpolizei (Englisch)", value:"1155", tel:"1155" },
    { label:"Ambulanz / Rettung", value:"1669", tel:"1669" },
    { label:"Polizei", value:"191", tel:"191" },
    { label:"Hotel Oakwood Suites Tiwanon", value:"+66 2 149 9450", tel:"+6621499450" },
    { label:"Deutsche Botschaft Bangkok", value:"+66 2 287 9000", tel:"+6622879000" },
    { label:"Reiseversicherung Zurich", value:"Policennummer + Notruf: Info → Meine Reisedaten", tel:null },
    { label:"Sperr-Notruf deutsche Karten", value:"+49 116 116", tel:"+49116116" }
  ],
  krankenhaus: { name:"Bumrungrad International Hospital", note:"Privatklinik mit Weltruf, Englisch, ~40 Min mit Bolt. Bei allem Ernsten direkt hierhin — Versicherungsbeleg aufheben.", gmaps:"https://www.google.com/maps/search/?api=1&query=Bumrungrad%20International%20Hospital%20Bangkok" },

  abzocke: [
    "Am Karten-Terminal IMMER in Baht zahlen, nie in Euro — die „freundliche Frage“ kostet 3–8 % Aufschlag.",
    "Reisepass NIE als Pfand — nicht für Roller, Jetski oder Zimmer. Wer darauf besteht, hat ein Geschäftsmodell daraus gemacht.",
    "Nie mitgehen, wenn dich jemand irgendwohin „mitnimmt“ (Bar, Schneider, Juwelier) — es ist immer Provision, oft mit Rechnung über hunderte Euro.",
    "Flughafen: Anquatscher in der Halle verlangen das Vierfache. Offizielle Taxis stehen UNTEN (Automat + Taxameter).",
    "Edelstein-, Anzug- und „Government Shop“-Einladungen: weitergehen. Immer.",
    "Preis IMMER vor dem Einsteigen oder Bestellen festmachen — bei Tuk-Tuk, Longtailboot und Ständen ohne Schild."
  ],


  unterwegs: [
    { icon:"🚇", title:"MRT ab Hotel", txt:"Station Yaek Tiwanon direkt gegenüber (Purple Line). In die Stadt: Umstieg Tao Poon → Blue Line. Eine Fahrt kostet 17–45 ฿, mit Umstieg auf die Blue Line zusammen 50–71 ฿. WICHTIG: der <b>letzte Zug der lila Linie ab Tao Poon nach Hause fährt um 23:35</b> — nicht bis Mitternacht. Rechne von deinem Startbahnhof 25–35 Min bis Tao Poon zurück; ab 22:50 in der Stadt lieber Bolt nehmen." },
    { icon:"🚗", title:"Bolt & Grab", txt:"Stadtfahrten 200–350 ฿, nachts 400–600 ฿. Grab als zweite App installieren: teurer, aber mehr Autos — bei Regen und Rushhour storniert Bolt gern. Rushhour 16–19 Uhr macht jede Fahrt fast doppelt so lang." },
    { icon:"⛴️", title:"Expressboot", txt:"Ab Nonthaburi Pier den Fluss runter in die Altstadt: orange Flagge 18 ฿, gelb 23 ฿, rot 32 ฿. Kein Stau, schönste Strecke der Stadt — fährt aber nur bis 19 Uhr." },
    { icon:"🌧️", title:"Regenzeit", txt:"Schauer kommen meist nachmittags und sind nach ein bis zwei Stunden durch. Poncho in den Rucksack, Handy in den Zip-Beutel. Wann es an deinem Tag regnet, steht im Reiter Kurs bei den Reisetagen." }
  ],


  geld: [
    { icon:"🏧", title:"Abheben", txt:"Jeder Automat nimmt 220 ฿ Gebühr — also wenige GROSSE Abhebungen (Maximum meist 20.000–30.000 ฿). Immer „ohne Umrechnung“ bzw. „in THB“ wählen." },
    { icon:"💳", title:"Wo Karte, wo bar", txt:"Malls, Hotels und Restaurants nehmen Karte. Streetfood, Märkte und Garküchen sind BARGELD — Chinatown und die Nachtmärkte fast ausnahmslos." },
    { icon:"💵", title:"Einreise & Zoll", txt:"Bei der Einreise können 20.000 ฿ (~550 €) Mittel verlangt werden, wird selten geprüft — deine ~1.000 € decken das doppelt. Anmeldepflicht beim Zoll erst ab 10.000 €, du musst also nichts anmelden." },
    { icon:"🙏", title:"Trinkgeld", txt:"Kein Muss. Restaurant aufrunden oder ~10 %. Massage 50–100 ฿, im Oriental Spa 700–800 ฿. Bolt und Garküche: gar nichts." }
  ],


  bahn: {
    kern: "Deine Station heißt <b>Yaek Tiwanon</b> und liegt direkt gegenüber vom Hotel. Sie gehört zur <b>Purple Line</b>. Fast alles in der Stadt erreichst du mit <b>einem einzigen Umstieg in Tao Poon</b> auf die Blue Line.",
    zahlen: [
      { icon:"📱", title:"Am einfachsten: Apple Pay", txt:"Seit 2026 nehmen die MRT-Schranken kontaktlose Karten UND Apple Pay direkt an. Kein Automat, kein Ticket: iPhone beim Reingehen an den <b>oberen</b> Leser halten, beim Rausgehen nochmal. Der Preis wird automatisch berechnet. <b>Vorher zu Hause eine Karte in Apple Pay hinterlegen und die Karte für Thailand freischalten.</b>" },
      { icon:"🎫", title:"Falls das nicht klappt: Token kaufen", txt:"Am Automat vor den Schranken: Bildschirm antippen → oben rechts <b>English</b> → auf der Karte dein Ziel <b>lange drücken</b>, bis der Kreis grün wird → Preis erscheint → Geld einwerfen → unten fällt eine schwarze Plastikmünze heraus. Die hältst du beim Reingehen an den <b>unteren</b> Leser und wirfst sie beim Rausgehen in den Schlitz." },
      { icon:"💵", title:"Der Automat ist wählerisch", txt:"Er nimmt nur Münzen zu 1, 5 und 10 ฿ und Scheine zu 20, 50 und 100 ฿ — und die müssen glatt sein. Größere Scheine gehen nicht. Wechselgeld kommt immer in Münzen. Wenn es hakt: am Schalter daneben kaufst du den Token beim Personal." }
    ],
    ablauf: [
      "Am Eingang durch die <b>Sicherheitskontrolle</b> — Tasche auf den Scanner, das ist an jeder Station Pflicht und dauert eine halbe Minute.",
      "Bezahlen: iPhone an den oberen Leser, oder Token am Automat kaufen.",
      "Durch die Schranke — sie schließt schnell, also zügig durchgehen.",
      "Auf dem Bahnsteig steht als Richtung immer die <b>Endstation</b>, nicht dein Ziel. Von Yaek Tiwanon Richtung Stadt heißt das: Zug nach <b>Tao Poon</b>.",
      "In der Bahn zeigen Bildschirme die nächste Station, Ansagen kommen auf Thai und Englisch.",
      "Beim Aussteigen nochmal iPhone dranhalten bzw. den Token in den Schlitz werfen. Erst dort wird abgerechnet."
    ],
    falle: [
      { icon:"⚠️", title:"MRT und BTS sind zwei Firmen", txt:"Die MRT (Purple, Blue) und der BTS-Skytrain (Sukhumvit, Silom) haben <b>getrennte Tickets</b>. Wo du umsteigst — Si Lom↔Sala Daeng oder Sukhumvit↔Asok — musst du <b>rausgehen, neu bezahlen und wieder rein</b>. Du zahlst also zweimal. Für den BTS brauchst du ein eigenes Ticket am Automat, Apple Pay klappt dort nicht überall." },
      { icon:"🔄", title:"Tao Poon ist die Ausnahme", txt:"Der Umstieg von der Purple auf die Blue Line in Tao Poon läuft <b>innerhalb der Schranken</b> — du gehst einfach zum anderen Bahnsteig, ohne neu zu zahlen. Eine Fahrt mit Umstieg kostet 50–71 ฿ statt 17–45 ฿ auf einer Linie." },
      { icon:"🕕", title:"Betriebszeiten", txt:"MRT etwa 6:00–23:45, BTS ab 5:15 Uhr. <b>Dein Nachhauseweg endet früher:</b> letzter lila Zug ab Tao Poon 23:35, letzte blaue Züge dorthin ab Wat Mangkon 23:27 und ab Phra Ram 9 23:43 — die reichen für den Umstieg NICHT mehr. Faustregel: ab 22:50 in der Stadt ist Bolt die sichere Wahl. Rushhour 7–9 und 16:30–19:30 Uhr, da ist es voll." },
      { icon:"🚫", title:"In der Bahn", txt:"Essen und Trinken sind verboten, auch Wasser. Die ersten Sitze an den Türen sind für Mönche und ältere Menschen. Es ist eiskalt klimatisiert." }
    ],
    strecken: [
      { ziel:"Chatuchak (Markt)",        weg:"Yaek Tiwanon → <b>Tao Poon</b> → Chatuchak Park",              zeit:"35 Min", preis:"40–60 ฿" },
      { ziel:"Chinatown / Yaowarat",     weg:"Yaek Tiwanon → <b>Tao Poon</b> → Wat Mangkon, Ausg. 1",        zeit:"50 Min", preis:"50–71 ฿" },
      { ziel:"Wat Paknam (Riesenbuddha)",weg:"Yaek Tiwanon → <b>Tao Poon</b> → Bang Phai, Ausg. 1",          zeit:"45 Min", preis:"50–71 ฿" },
      { ziel:"Jodd Fairs / Train Market",weg:"Yaek Tiwanon → <b>Tao Poon</b> → Thailand Cultural Centre, Ausg. 4", zeit:"45 Min", preis:"50–71 ฿" },
      { ziel:"Go-Kart RCA",              weg:"Yaek Tiwanon → <b>Tao Poon</b> → Phra Ram 9",                  zeit:"45 Min", preis:"50–71 ฿" },
      { ziel:"Ayutthaya-Zug (Bang Sue)", weg:"Yaek Tiwanon → <b>Tao Poon</b> → Bang Sue, Bahnhof liegt darüber", zeit:"25 Min", preis:"30–50 ฿" },
      { ziel:"Siam / Shopping-Meile",    weg:"… → Si Lom, <b>rausgehen</b>, BTS Sala Daeng → Siam",           zeit:"60 Min", preis:"MRT + BTS getrennt" },
      { ziel:"Terminal 21 / Asoke",      weg:"… → Sukhumvit (MRT) — Terminal 21 liegt direkt darüber",        zeit:"45 Min", preis:"50–71 ฿" },
      { ziel:"Mahanakhon (Aussicht)",    weg:"… → Si Lom, <b>rausgehen</b>, BTS Sala Daeng → Chong Nonsi",    zeit:"55 Min", preis:"MRT + BTS getrennt" },
      { ziel:"Central WestGate (Mall)",  weg:"Yaek Tiwanon → Talad Bang Yai, <b>ohne Umstieg</b>",            zeit:"25 Min", preis:"~40 ฿" }
    ]
  },

  checks: [
    // — Buchen & Organisieren —
    { id:"transfer", txt:"Transfer steht: Rückfahrt <b>So 06.09. 18:30</b> ab Rezeption. Am Sa 05.09. auf <a href='https://www.checkpickup.com' target='_blank' rel='noopener'>checkpickup.com</a> noch einmal bestätigen lassen", due:"05.09." },
    { id:"checkin", txt:"Lufthansa <a href='https://www.lufthansa.com/de/de/online-check-in' target='_blank' rel='noopener'>Online-Check-in</a> (öffnet 23 h vorher)", due:"26.08. abends" },
    { id:"spaform", txt:"Oriental Spa: Wellness-Intake-Form online ausfüllen (Link in der Bestätigungs-Mail vom 14.08.)", due:"vor Abflug" },
    { id:"spapay", txt:"Oriental Spa: Payment-Link bezahlen — kommt am 28.08. per Mail (sichert den Termin!)", due:"28.08." },
    { id:"esim", txt:"eSIM (dtac Happy Tourist via Airalo) daheim im WLAN installieren, deaktiviert lassen", due:"vor Abflug" },
    { id:"translate", txt:"Google Übersetzer aufs Handy: <b>Thai und Englisch als Offline-Paket laden</b> — dann übersetzt auch die Kamera Schilder und Speisekarten ohne Internet", due:"vor Abflug" },
    { id:"bank", txt:"Bank-Apps: Karten für Thailand freigeschaltet, Limits hoch genug", due:"vor Abflug" },
    { id:"applepay", txt:"<b>Apple Pay einrichten</b> — damit kommst du in Bangkok ohne Ticketkauf durch die MRT-Schranken. Karte hinterlegen und für Thailand freischalten (Info → Bahn fahren)", due:"vor Abflug" },
    { id:"pass", txt:"Pass + TDAC + Versicherungspolice als Fotos aufs Handy, Kopien in den Koffer", due:"vor Abflug" },
    { id:"docs", txt:"OneDrive-Ordner „Bangkok 2026“ am Handy öffnen → „Offline verfügbar“ antippen (Buchung + Parkplatz)", due:"vor Abflug" }
  ],


  dresscode: [
    "Tempel: Schultern und Knie bedeckt, Schuhe aus vor den Hallen. Eine leichte lange Hose löst 90 % aller Probleme.",
    "Der Grand Palace ist am strengsten und weist am Tor wirklich ab — die genauen Regeln stehen beim Termin am Mo 31.08.",
    "Oriental Spa und Sky Bar haben eigene Kleiderordnungen — beide stehen bei den jeweiligen Terminen.",
    "Für die ganze Reise reicht: eine lange Hose, ein Hemd oder Polo mit Ärmeln, ein Paar geschlossene Schuhe."
  ]
};
