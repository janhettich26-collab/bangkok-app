// Bangkok 2026 — Praktisches, Notfall, Thai-Sprachhilfe
const INFO = {
  notfall: [
    { label:"Touristenpolizei (Englisch)", value:"1155", tel:"1155" },
    { label:"Ambulanz / Rettung", value:"1669", tel:"1669" },
    { label:"Polizei", value:"191", tel:"191" },
    { label:"Hotel Oakwood Suites Tiwanon", value:"+66 2 149 9450", tel:"+6621499450" },
    { label:"Deutsche Botschaft Bangkok", value:"+66 2 287 9000", tel:"+6622879000" },
    { label:"Reiseversicherung Zurich (Police LVH612584639)", value:"Notrufnummer auf der Police", tel:null },
    { label:"Sperr-Notruf deutsche Karten", value:"+49 116 116", tel:"+49116116" }
  ],
  krankenhaus: { name:"Bumrungrad International Hospital", note:"Privatklinik mit Weltruf, Englisch, ~40 Min mit Bolt. Bei allem Ernsten direkt hierhin — Versicherungsbeleg aufheben.", gmaps:"https://www.google.com/maps/search/?api=1&query=Bumrungrad%20International%20Hospital%20Bangkok" },

  abzocke: [
    "Am Karten-Terminal IMMER in Baht zahlen, nie in Euro — die „freundliche Frage“ kostet 3–8 % Aufschlag.",
    "Reisepass NIE als Pfand — nicht für Roller, Jetski oder Zimmer. Wer darauf besteht, hat ein Geschäftsmodell daraus gemacht.",
    "„Der Tempel/Palast ist heute geschlossen“ (Tuk-Tuk-Fahrer davor): Lüge. Einfach durchgehen — dahinter steckt eine Provisionstour.",
    "Flughafen: Anquatscher in der Halle verlangen das Vierfache. Offizielle Taxis stehen UNTEN (Automat + Taxameter).",
    "Nie mitgehen, wenn dich jemand irgendwohin „mitnimmt“ (Bar, Schneider, Juwelier) — es ist immer Provision, oft mit Rechnung über hunderte Euro.",
    "Tickets & eSIM nur über offizielle Seiten — keine Telegram/eBay/Instagram-Codes.",
    "Roller mieten: VORHER Fotos von jedem Kratzer, sonst kommt die „Schadensforderung“.",
    "Taxi/Sammeltaxi ohne Taxameter: Preis VOR dem Einsteigen festmachen.",
    "Edelstein-, Anzug- und „Government Shop“-Einladungen: weitergehen. Immer."
  ],

  unterwegs: [
    { icon:"🚇", title:"MRT ab Hotel", txt:"Station Yaek Tiwanon direkt gegenüber (Purple Line). In die Stadt: Umstieg Tao Poon → Blue Line. Chatuchak ~35 Min, Altstadt ~50 Min, Sukhumvit 45–60 Min. Fahrten 17–44 ฿ (Preise 07/2026 gesenkt). Läuft bis ~24 Uhr — nachts NICHT." },
    { icon:"🚗", title:"Bolt (+ Grab als Backup)", txt:"Stadtfahrten 200–350 ฿, nachts 400–600 ฿ (Zuschlag). Grab installieren: teurer, aber mehr Autos — bei Regen & Rushhour storniert Bolt gern. Rushhour 16–19 Uhr = Fahrzeit fast doppelt." },
    { icon:"⛴️", title:"Expressboot", txt:"Ab Nonthaburi Pier für ~20 ฿ den Fluss runter in die Altstadt. Schönste Strecke der Stadt, kein Stau." },
    { icon:"🌧️", title:"Regenzeit", txt:"Schauer meist nachmittags, nach 1 Std. durch. Poncho/Regenhülle in den Rucksack, Handy in den Zip-Beutel. Draußen-Programm → vormittags." }
  ],

  geld: [
    { icon:"🏧", title:"Abheben", txt:"Jeder ATM nimmt 220 ฿ Gebühr — also wenige GROSSE Abhebungen (max. meist 20.000–30.000 ฿). Immer „ohne Umrechnung“ / „in THB“ wählen." },
    { icon:"💳", title:"Karte", txt:"In Malls & Hotels ok, Streetfood & Märkte = Bargeld. Am Terminal in BAHT zahlen (DCC ablehnen)." },
    { icon:"💵", title:"Einreise-Nachweis", txt:"20.000 ฿ (~550 €) Mittel pro Person können bei der Einreise verlangt werden (2026 wieder aktiver erinnert, selten geprüft). Deine ~1.000 € Bargeld decken das doppelt — einfach vorzeigbar dabei haben, kein Herkunftsnachweis nötig." },
    { icon:"🛂", title:"Bargeld-Grenzen", txt:"Anmeldepflicht beim Zoll erst ab 10.000 € (EU-Ausreise) bzw. ~20.000 $ (Thailand-Einreise) — mit ~1.000 € brauchst du also gar nichts anmelden." },
    { icon:"🙏", title:"Trinkgeld", txt:"Kein Muss. Restaurant: aufrunden/~10 %. Massage: 50–100 ฿ (im Oriental Spa 700–800 ฿). Bolt: nichts nötig. Garküche/Foodcourt: gar nichts." }
  ],

  checks: [
    // — Buchen & Organisieren —
    { id:"transfer", txt:"Transfer-Abholzeit checken: <a href='https://www.loveholidays.de/' target='_blank' rel='noopener'>loveholidays → Meine Buchung</a>", due:"26.08." },
    { id:"checkin", txt:"Lufthansa <a href='https://www.lufthansa.com/de/de/online-check-in' target='_blank' rel='noopener'>Online-Check-in</a> (öffnet 23 h vorher)", due:"26.08. abends" },
    { id:"spaform", txt:"Oriental Spa: Wellness-Intake-Form online ausfüllen (Link in der Bestätigungs-Mail vom 14.08.)", due:"vor Abflug" },
    { id:"spapay", txt:"Oriental Spa: Payment-Link bezahlen — kommt am 28.08. per Mail (sichert den Termin!)", due:"28.08." },
    { id:"esim", txt:"eSIM (dtac Happy Tourist via Airalo) daheim im WLAN installieren, deaktiviert lassen", due:"vor Abflug" },
    { id:"translate", txt:"Google Übersetzer aufs Handy: <b>Thai und Englisch als Offline-Paket laden</b> — dann übersetzt auch die Kamera Schilder und Speisekarten ohne Internet", due:"vor Abflug" },
    { id:"bank", txt:"Bank-Apps: Karten für Thailand freigeschaltet, Limits hoch genug", due:"vor Abflug" },
    { id:"pass", txt:"Pass + TDAC + Versicherungspolice als Fotos aufs Handy, Kopien in den Koffer", due:"vor Abflug" },
    { id:"docs", txt:"OneDrive-Ordner „Bangkok 2026“ am Handy öffnen → „Offline verfügbar“ antippen (Buchung + Parkplatz)", due:"vor Abflug" }
  ],


  dresscode: [
    "Tempel: Schultern + Knie bedeckt (leichte lange Hose einpacken), Schuhe aus vor Gebäuden.",
    "Clubs (Thonglor & Co.): geschlossene Schuhe, Hemd mit Kragen = sichere Wahl. Keine Flip-Flops/Tanktops.",
    "Clubs verlangen bei Ausländern oft den Reisepass im ORIGINAL — vordere Hosentasche.",
    "Königsfamilie: niemals abfällig — auch nicht im Scherz. Majestätsbeleidigung ist Straftatbestand.",
    "Cannabis-Produkte & Erkältungsmittel mit Pseudoephedrin: nicht einführen."
  ]
};
