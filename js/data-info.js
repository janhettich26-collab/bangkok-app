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
    "Edelstein-, Anzug- und „Government Shop“-Einladungen: weitergehen. Immer.",
    "Tattoo: Nadel muss vor deinen Augen aus versiegelter Packung kommen — sonst gehen."
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
    { icon:"💵", title:"Einreise-Nachweis", txt:"20.000 ฿ (~550 €) Bargeld pro Person können bei der Einreise verlangt werden — selten geprüft, aber dabei haben." },
    { icon:"🙏", title:"Trinkgeld", txt:"Kein Muss. Restaurant: aufrunden/~10 %. Massage: 50–100 ฿. Bolt: nichts nötig. Tattoo: ~10 % bei guter Arbeit." }
  ],

  checks: [
    // — Buchen & Organisieren —
    { id:"tdac", txt:"TDAC ausfüllen — <a href='https://tdac.immigration.go.th' target='_blank' rel='noopener'>tdac.immigration.go.th</a> (NUR diese Seite!), QR als Screenshot sichern", due:"24.–26.08." },
    { id:"transfer", txt:"Transfer-Abholzeit checken: <a href='https://www.loveholidays.de/' target='_blank' rel='noopener'>loveholidays → Meine Buchung</a>", due:"26.08." },
    { id:"checkin", txt:"Lufthansa <a href='https://www.lufthansa.com/de/de/online-check-in' target='_blank' rel='noopener'>Online-Check-in</a> (öffnet 23 h vorher)", due:"26.08. abends" },
    { id:"elefant", txt:"Elefanten-Park buchen: Halbtag OHNE Transfer, Do 03.09. 9 Uhr (Spots → Ausflüge)", due:"jetzt" },
    { id:"cruise", txt:"Dinner-Cruise buchen: 18-Uhr-Slot, Do 03.09. (Spots → Ausflüge)", due:"jetzt" },
    { id:"rajadamnern", txt:"Muay-Thai-Ticket für So 30.08. auf rajadamnern.com buchen", due:"vor Abflug" },
    { id:"shooting", txt:"Foto-Shooting Sa 05.09. Golden Hour anfragen (TripAdvisor: The Photo Experience)", due:"diese Woche" },
    { id:"esim", txt:"eSIM (dtac Happy Tourist via Airalo) daheim im WLAN installieren, deaktiviert lassen", due:"vor Abflug" },
    { id:"bank", txt:"Bank-Apps: Karten für Thailand freigeschaltet, Limits hoch genug", due:"vor Abflug" },
    { id:"pass", txt:"Pass + TDAC + Versicherungspolice als Fotos aufs Handy, Kopien in den Koffer", due:"vor Abflug" },
    { id:"docs", txt:"OneDrive-Ordner „Bangkok 2026“ am Handy öffnen → „Offline verfügbar“ antippen (Buchung + Parkplatz)", due:"vor Abflug" },
    // — Packen —
    { id:"powerbank", txt:"Powerbank ins HANDGEPÄCK (im Koffer verboten!)", due:"packen" },
    { id:"lader", txt:"Ladegeräte + Kabel (Adapter unnötig — deutsche Stecker passen in Thailand)", due:"packen" },
    { id:"regen", txt:"Poncho/Regenhülle + Zip-Beutel fürs Handy — Monsun lacht über „wasserabweisend“", due:"packen" },
    { id:"tempel", txt:"Leichte lange Hose + Shirt mit Ärmeln (Tempel: Schultern + Knie bedeckt)", due:"packen" },
    { id:"schuhe", txt:"Geschlossene Schuhe (Rooftops/Clubs verlangen sie) + Sandalen", due:"packen" },
    { id:"sonne", txt:"Sonnencreme 50+ und Mückenspray mit DEET (vor Ort teurer)", due:"packen" },
    { id:"apotheke", txt:"Reiseapotheke: Elektrolyte, Durchfall-Mittel, Schmerztabletten, Pflaster", due:"packen" },
    { id:"rucksack", txt:"GOT BAG eingerollt als Handgepäck (8 kg, 55×40×23) + persönlicher Gegenstand (40×30×15) extra erlaubt · Koffer 23 kg — HALB LEER packen (Mitbringsel!)", due:"packen" },
    { id:"bargeld", txt:"100–200 € Bargeld als Notreserve — vor Ort erst am Automaten abheben (in THB, ohne Umrechnung)", due:"packen" }
  ],

  thai: [
    { de:"Hallo / Auf Wiedersehen", th:"สวัสดีครับ", lautschrift:"ßa-wat-dii khrap" },
    { de:"Danke", th:"ขอบคุณครับ", lautschrift:"khop-khun khrap" },
    { de:"Wie viel kostet das?", th:"เท่าไหร่ครับ", lautschrift:"tao-rai khrap" },
    { de:"Zu teuer!", th:"แพงไป", lautschrift:"phääng bpai" },
    { de:"Nicht scharf, bitte", th:"ไม่เผ็ดครับ", lautschrift:"mai phet khrap" },
    { de:"Sehr lecker!", th:"อร่อยมาก", lautschrift:"a-roi maak" },
    { de:"Wo ist die Toilette?", th:"ห้องน้ำอยู่ที่ไหนครับ", lautschrift:"hong-naam juu thii-nai khrap" },
    { de:"Kein Problem / macht nichts", th:"ไม่เป็นไร", lautschrift:"mai bpen rai" },
    { de:"Die Rechnung, bitte", th:"เช็คบิลครับ", lautschrift:"tschek-bin khrap" },
    { de:"Hilfe!", th:"ช่วยด้วย", lautschrift:"tschuai duai" }
  ],

  dresscode: [
    "Tempel: Schultern + Knie bedeckt (leichte lange Hose einpacken), Schuhe aus vor Gebäuden.",
    "Clubs (Thonglor & Co.): geschlossene Schuhe, Hemd mit Kragen = sichere Wahl. Keine Flip-Flops/Tanktops.",
    "Clubs verlangen bei Ausländern oft den Reisepass im ORIGINAL — vordere Hosentasche.",
    "Königsfamilie: niemals abfällig — auch nicht im Scherz. Majestätsbeleidigung ist Straftatbestand.",
    "Cannabis-Produkte & Erkältungsmittel mit Pseudoephedrin: nicht einführen."
  ]
};
