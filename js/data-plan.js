// Bangkok 2026 — 10-Tage-Plan (27.08.–07.09.2026). Flexibel: Tage tauschbar, nur die ⚠️-Regeln beachten.
const PLAN = [
  { date:"2026-08-27", wd:"Do", title:"Abflug München", icon:"🛫",
    blocks:[
      { t:"tagsüber", txt:"eSIM checken (installiert, deaktiviert lassen) · TDAC-QR als Screenshot sichern · Powerbank ins HANDGEPÄCK (im Koffer verboten)" },
      { t:"~19:00", txt:"Parkos-Parkplatz MUC anfahren (gebucht), Shuttle zum Terminal" },
      { t:"22:20", txt:"LH772 nach Bangkok — Nachtflug 10,5 Std. Viel Wasser, wenig Bier, im Flieger schlafen." }
    ],
    note:"Handgepäck: Pass, TDAC, Powerbank, Ladegerät, Wechseloutfit, Medikamente." },

  { date:"2026-08-28", wd:"Fr", title:"Ankunft & Ankommen", icon:"🛬",
    blocks:[
      { t:"13:45", txt:"Landung Suvarnabhumi. TDAC-QR + Pass raus, Immigration 20–40 Min, Gepäck." },
      { t:"~15:00", txt:"Transfer zum Hotel — ist in deiner Buchung INKLUSIVE (Abholzeit vorher gecheckt?). Sonst: offizielle Taxis im Untergeschoss, ~600 ฿." },
      { t:"16:00", txt:"Check-in Oakwood. eSIM an, Bolt-App: Hotel als Heimatadresse speichern. Big C nebenan: Wasser, Sonnencreme." },
      { t:"abends", txt:"Locker bleiben (Jetlag!): Hähnchen-Reis-Stand gegenüber, Runde Owl Market ODER Pool + Rooftop. Früh schlafen." }
    ],
    note:"🌕 Heute wäre Full Moon Party auf Koh Phangan — nur wenn du das vorab komplett durchgebucht hast. Nach dem Nachtflug: eher nicht." },

  { date:"2026-08-29", wd:"Sa", title:"Chatuchak-Samstag", icon:"🧺",
    blocks:[
      { t:"9:30", txt:"MRT ab Yaek Tiwanon → Tao Poon → Chatuchak (~35 Min, 40 ฿). Vor 11 da sein — mittags wird's brutal." },
      { t:"9:45–13:00", txt:"Chatuchak Weekend Market: 15.000 Stände. Feilschen: Startpreis −30–40 %. Rucksack nach VORN." },
      { t:"nachm.", txt:"Zurück, Pool & Sauna. Regenschauer-Zeit eh — perfekt fürs Hotel." },
      { t:"abends", txt:"Nonthaburi-Abend: CampYard (Livemusik) oder Highyena (Craft-Bier, nur Bargeld/QR)." }
    ],
    note:"Alternativ heute schon der Insel-Start (Samui/Phangan bis 1.9.) — dann Chatuchak am 5.9. (Sa) nachholen." },

  { date:"2026-08-30", wd:"So", title:"Der Altstadt-Abend", icon:"🌅",
    blocks:[
      { t:"vorm.", txt:"Ausschlafen, Pool. Optional: Ko Kret (Sonntag = Markt-Tag, Fahrrad 40 ฿)." },
      { t:"16:30", txt:"Golden Mount: 340 Stufen, Abendlicht über der Altstadt (Bolt 32 Min, ~230 ฿)." },
      { t:"18:00", txt:"Rajadamnern Muay Thai — sonntags starten die Kämpfe früh (ab 17/18 Uhr). Ticket vorab: rajadamnern.com, Oberrang ab 1.000 ฿." },
      { t:"ab 21:00", txt:"Bolt 10 Min nach Chinatown: Neon + Garküchen, 400 ฿ = quer durchgegessen. Sonntag ist alles offen." }
    ],
    note:"Eine Anfahrt, dreimal Bangkok von seiner besten Seite. Rückweg: Bolt ~250 ฿." },

  { date:"2026-08-31", wd:"Mo", title:"Paläste per Expressboot", icon:"👑",
    blocks:[
      { t:"8:30", txt:"Bolt zum Nonthaburi Pier (10 Min) → Chao-Phraya-Expressboot flussabwärts (~20 ฿) — die schönste Anreise der Stadt." },
      { t:"10:00", txt:"Grand Palace (500 ฿, bis 15:30, Schultern+Knie bedeckt!) → Wat Pho: liegender Buddha + Massage in der Tempel-Massageschule." },
      { t:"nachm.", txt:"Wat Arun gegenüber (Fähre 5 ฿) — Foto-Klassiker. Zurück per Boot oder Bolt." },
      { t:"abends", txt:"Ruhig: Health Land Massage (2 Std. ~650 ฿) oder Rooftop im Hotel." }
    ],
    note:"⚠️ Montags sind Chinatown-Garküchen & Chatuchak ZU — deshalb heute Tempel-Tag. „Heute geschlossen“-Sprüche vor dem Palast: Masche, weitergehen." },

  { date:"2026-09-01", wd:"Di", title:"Muay Thai selbst + Sukhumvit", icon:"🥊",
    blocks:[
      { t:"vorm.", txt:"Jitmuangnon Gym (1 km!): Einzeltraining mit eigenem Trainer, 500–800 ฿/Std. Echtes Profi-Camp." },
      { t:"mittags", txt:"Pool, Sauna, Wäsche in die Maschine." },
      { t:"19:00", txt:"Terminal 21: Pier-21-Foodcourt im 5. Stock — Gerichte ab 50 ฿." },
      { t:"21:00", txt:"Sukhumvit Soi 11: Bars + Havana Social (Eingang durch die Telefonzelle). Optional ab 23:30 weiter nach Thonglor." }
    ],
    note:"Schneider-Option: Wenn du einen Maßanzug willst, HEUTE in Silom bestellen — dann sind 2 Anproben bis 5.9. drin." },

  { date:"2026-09-02", wd:"Mi", title:"Koh Larn Strandtag", icon:"🏝️",
    blocks:[
      { t:"7:00", txt:"Privater Ganztagsfahrer (über Klook/Hotel, 2.500–3.500 ฿, Ziele + Endpreis schriftlich) → Bali Hai Pier Pattaya." },
      { t:"~10:00", txt:"Fähre 30 ฿ (45 Min) oder Speedboot ab 150 ฿ → Koh Larn." },
      { t:"tags", txt:"Sammeltaxi (30–40 ฿) oder Roller (200–400 ฿, Fotos vom Zustand!) → Samae Beach. Liege 100 ฿." },
      { t:"15:30", txt:"Zurück zum Pier — letzte Fähre ~17 Uhr, und nachmittags kommen die Schauer. Fahrer wartet." }
    ],
    note:"⚠️ NIE den Pass als Roller-Pfand. Quallen-Warnschilder beachten (Regenzeit). Alternativ-Tag bei Sturm: Ayutthaya." },

  { date:"2026-09-03", wd:"Do", title:"Ausflugstag — deine Wahl", icon:"🏛️",
    blocks:[
      { t:"Option A", txt:"Ayutthaya selbst per Zug: 9:05 ab Krung Thep Aphiwat (nur ~50 ฿, seit 1.8. neu!), Roller vor Ort, Buddha-Kopf im Baum. Komplett ~600 ฿ statt 30+ € Tour." },
      { t:"Option B", txt:"Bangkok Elephant Park: Halbtag OHNE Transfer (9–12 Uhr) buchen, mit Bolt selbst hin (~1,5–2 Std.). Füttern, Schlammbad, baden — kein Reiten." },
      { t:"Option C", txt:"Früh raus: Damnoen Saduak schwimmender Markt + 11:10-Zugdurchfahrt Maeklong (Tagesfahrer 2.500–3.500 ฿)." },
      { t:"abends", txt:"Jodd Fairs Ratchada — bester Nachtmarkt der Stadt, bis 1 Uhr. Oder: 5-Sterne-Dinner-Cruise ab Asiatique (ab ~26 €, 20–22 Uhr)." }
    ],
    note:"Alle Details + Buchung: Tab Spots → Kategorie „Ausflüge“. Wenn Insel-Variante (Halfmoon 5.9.): heute oder morgen Flug nach Samui + Fähre." },

  { date:"2026-09-04", wd:"Fr", title:"Letzter Pool-Tag + Tattoo", icon:"🖋️",
    blocks:[
      { t:"vorm.", txt:"LETZTE Chance Pool/Sauna — nach dem Tattoo ist Schluss mit Wasser & Sonne." },
      { t:"nachm.", txt:"Tattoo-Termin (vorab gebucht!): ink.inc Soi 11, All Day oder PUREink. Festpreis vereinbart, Nadel versiegelt vor deinen Augen, bar zahlen (3 % Kartenaufschlag)." },
      { t:"abends", txt:"Frisch tätowiert gemütlich: Essen auf der Soi 11, dann heim. Kein Club-Schwitzen." }
    ],
    note:"Nachsorge: Second Skin drauf lassen wie vom Studio gesagt, 300–800 ฿ fürs Care-Kit einplanen. Kein Buddha-Motiv!" },

  { date:"2026-09-05", wd:"Sa", title:"Foto-Shooting & großer Abend", icon:"📸",
    blocks:[
      { t:"tags", txt:"Frei: Mitbringsel (Big C / Chatuchak läuft heute), Massage, oder was liegen geblieben ist." },
      { t:"17:30", txt:"Golden-Hour-Shooting (2 Std., ~150 €, 30 Bilder): Wat Arun → Chinatown-Neon. Tattoo ist frisch — zeig es." },
      { t:"21:30", txt:"Abschieds-Abend: Sky Bar (1 Drink + Foto) → Octave Rooftop oder Vesper-Tresen." }
    ],
    note:"🌗 Insel-Variante: Halfmoon Beach Party, Harmony Beach Club 14–24 Uhr — nur wenn du schon auf Phangan bist. Rückreise 6.9. mit min. 4 Std. Puffer!" },

  { date:"2026-09-06", wd:"So", title:"Check-out & Rückflug", icon:"🛫",
    blocks:[
      { t:"vorm.", txt:"Packen (Waschmaschine nutzen — alles sauber heim). Check-out, Gepäck an der Rezeption lagern." },
      { t:"nachm.", txt:"Letzter Streifzug: Massage, Hähnchen-Reis, Big C. Nichts Wildes mehr." },
      { t:"~19:00", txt:"Transfer zum Flughafen (inklusive — Abholzeit 24 h vorher checken!). 3 Std. Puffer." },
      { t:"22:55", txt:"LH773 nach München." }
    ],
    note:"Kein Fast-Track nötig — abends ist LH-Check-in flott. Restliche Baht: am Flughafen tanken/ausgeben, Wechsel zurück lohnt kaum." },

  { date:"2026-09-07", wd:"Mo", title:"Landung München", icon:"🏠",
    blocks:[
      { t:"05:15", txt:"Landung MUC. Parkos-Shuttle zum Auto, heimfahren." },
      { t:"", txt:"⚠️ HEUTE KEINE EINSÄTZE — steht so im Plan. Schlafen." }
    ],
    note:"Willkommen zurück. Tattoo-Nachsorge weiterführen, Fotos sichern." }
];
