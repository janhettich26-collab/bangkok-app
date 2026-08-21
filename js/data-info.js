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
    { icon:"🚇", title:"MRT ab Hotel", txt:"Station Yaek Tiwanon direkt gegenüber (Purple Line). In die Stadt: Umstieg Tao Poon → Blue Line. Eine Fahrt kostet 17–45 ฿, mit Umstieg auf die Blue Line zusammen 50–71 ฿. Läuft bis Mitternacht — danach nur noch Bolt." },
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
    "Tempel: Schultern und Knie bedeckt, Schuhe aus vor den Hallen. Eine leichte lange Hose löst 90 % aller Probleme.",
    "Der Grand Palace ist am strengsten und weist am Tor wirklich ab — die genauen Regeln stehen beim Termin am Mo 31.08.",
    "Oriental Spa und Sky Bar haben eigene Kleiderordnungen — beide stehen bei den jeweiligen Terminen.",
    "Für die ganze Reise reicht: eine lange Hose, ein Hemd oder Polo mit Ärmeln, ein Paar geschlossene Schuhe."
  ]
};
