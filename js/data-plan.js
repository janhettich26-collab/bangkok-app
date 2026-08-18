// Bangkok 2026 — 10-Tage-Plan (27.08.–07.09.2026), Version 2
// Jans Vorgaben: kein Alkohol (Bars nur angucken — Mocktails gibt es überall),
// kein Tattoo, kein Insel-Abstecher. Zeiten passend zu Öffnungstagen & Regenzeit
// (draußen = vormittags, Schauer meist nachmittags).
const PLAN = [
  { date:"2026-08-27", wd:"Do", title:"Abflug München", icon:"🛫",
    blocks:[
      { t:"tagsüber", txt:"eSIM checken (installiert, deaktiviert lassen) · TDAC-QR als Screenshot sichern · Powerbank ins HANDGEPÄCK (im Koffer verboten)." },
      { t:"~19:00", txt:"Parkos-Parkplatz MUC anfahren (gebucht), Shuttle zum Terminal." },
      { t:"22:20", txt:"LH772 nach Bangkok — Nachtflug 10,5 Std. Viel Wasser trinken, im Flieger schlafen." }
    ],
    note:"Handgepäck: Pass, TDAC, Powerbank, Ladegerät, Wechseloutfit, Medikamente." },

  { date:"2026-08-28", wd:"Fr", title:"Ankommen & runterkommen", icon:"🛬",
    blocks:[
      { t:"13:45", txt:"Landung Suvarnabhumi. TDAC-QR + Pass bereit, Immigration 20–40 Min, Koffer." },
      { t:"~15:15", txt:"Transfer zum Hotel (in deiner Buchung inklusive — Abholzeit hast du 24 h vorher gecheckt). Fahrt ~1 Std." },
      { t:"16:30", txt:"Check-in Oakwood. eSIM an, Bolt-App: Hotel als Heimatadresse. Big C nebenan: Wasser, Sonnencreme, Snacks." },
      { t:"18:30", txt:"Hähnchen-Reis-Stand gegenüber (das Gäste-Highlight) — erstes Thai-Essen ohne Aufwand." },
      { t:"19:30", txt:"Kleine Runde Owl Market (10 Min Bolt): Nachtmarkt-Feeling zum Warmwerden. Spätestens 22 Uhr zurück — Jetlag." }
    ],
    note:"Heute nichts Großes planen. Wenn du um 20 Uhr tot bist: Pool/Rooftop im Hotel und schlafen — morgen zählt." },

  { date:"2026-08-29", wd:"Sa", title:"Chatuchak & Nachbarschaft", icon:"🧺",
    blocks:[
      { t:"8:45", txt:"MRT ab Yaek Tiwanon → Tao Poon → Chatuchak (~35 Min, ~40 ฿)." },
      { t:"9:30–13:00", txt:"Chatuchak Weekend Market (läuft nur Sa+So!): 15.000 Stände. Feilschen: Startpreis −30–40 %. Rucksack nach vorn." },
      { t:"nachm.", txt:"Zurück ins Hotel: Pool & Sauna, während draußen der Nachmittagsschauer durchzieht." },
      { t:"19:00", txt:"CampYard (5 Min): Retro-Bar mit Thai-Livemusik — auch ohne Alk stark, Thai-Eistee/Cola und Musik." },
      { t:"21:00", txt:"Optional weiter zur Highyena Home Bar (15 Min): der Laden der Einheimischen. Nur Bargeld/QR!" }
    ],
    note:"Erster „Bars angucken“-Abend, aber vor der Haustür — kurze Wege, solange der Jetlag noch zieht." },

  { date:"2026-08-30", wd:"So", title:"Spa-Sonntag & Altstadt-Abend", icon:"🧖",
    blocks:[
      { t:"8:30", txt:"Bolt zum Mandarin Oriental Hotel (Stadtseite, ~40–45 Min, 250–330 ฿) — Sonntagvormittag ist wenig Verkehr. Dem Fahrer: „Mandarin Oriental Hotel, Oriental Avenue“." },
      { t:"9:15", txt:"Am Hotel-Pier: das KOSTENLOSE Hotelboot bringt dich über den Chao Phraya direkt zum Spa — einfach „Oriental Spa, appointment 10:30“ sagen. Die schönste Anfahrt, die es gibt." },
      { t:"9:25", txt:"Im Spa: Du darfst bis 60 Min vor dem Termin rein — Sauna, Dampfbad & Jacuzzi im Wellness Centre sind inklusive. Ausnutzen!" },
      { t:"10:30", txt:"Deine Moringa Massage, 2 Std. (gebucht — Details in Meine Reisedaten). Danach nicht hetzen." },
      { t:"13:00", txt:"Mittag: ICONSIAM ist nur 750 m zu Fuß — Sook-Siam-Foodcourt im EG." },
      { t:"15:00", txt:"Kurz zurück ins Hotel ODER direkt gemütlich rüber zur Altstadt (15:45 Bolt)." },
      { t:"16:30", txt:"Golden Mount: 340 Stufen, Abendlicht über der Altstadt, Eintritt ~100 ฿." },
      { t:"18:00", txt:"Rajadamnern Muay Thai — sonntags beginnen die Kämpfe früher (ab 17/18 Uhr). Ticket vorab auf rajadamnern.com (ab ~700 ฿)." },
      { t:"21:00", txt:"Bolt 10 Min nach Chinatown: Neon-Schlucht + Garküchen, mit 400 ฿ quer durchgegessen. Sonntags ist alles offen." }
    ],
    note:"Eine Anfahrt, drei Highlights — die beste Route der ganzen Reise. Rückweg Bolt ~250 ฿." },

  { date:"2026-08-31", wd:"Mo", title:"Paläste per Expressboot", icon:"👑",
    blocks:[
      { t:"8:15", txt:"Bolt zum Nonthaburi Pier (10 Min) → Chao-Phraya-Expressboot flussabwärts (~20 ฿, ~1 Std.) — die schönste Anreise der Stadt." },
      { t:"10:00", txt:"Grand Palace (500 ฿, Schultern + Knie bedeckt!). Montags perfekt — Chinatown-Garküchen & Chatuchak haben eh zu." },
      { t:"12:30", txt:"Wat Pho nebenan: liegender Buddha (300 ฿) + Thai-Massage in der Tempel-Massageschule — die Original-Adresse." },
      { t:"15:00", txt:"Fähre rüber zum Wat Arun (5 ฿) — Foto-Klassiker am Fluss. Danach Boot oder Bolt zurück." },
      { t:"abends", txt:"Ruhig: Rooftop im eigenen Hotel, früh ins Bett — morgen Training." }
    ],
    note:"„Der Palast ist heute zu“-Sprüche vor dem Tor sind IMMER die Tuk-Tuk-Masche. Er ist offen, einfach durchgehen." },

  { date:"2026-09-01", wd:"Di", title:"Muay Thai & Sukhumvit bei Nacht", icon:"🥊",
    blocks:[
      { t:"vorm.", txt:"Ausschlafen, Pool, Wäsche in die Maschine." },
      { t:"14:30", txt:"Jitmuangnon Gym (1 km): die Nachmittagseinheit ist die beste — Einzeltraining mit Trainer 500–800 ฿/Std., echtes Profi-Camp." },
      { t:"17:00", txt:"Duschen, Pause." },
      { t:"19:30", txt:"Terminal 21 (35 Min): Pier-21-Foodcourt im 5. Stock — Gerichte ab 50 ฿, der Preis-Leistungs-König." },
      { t:"21:00", txt:"Soi 11 angucken: die kompakteste Barstraße. Havana Social — Speakeasy mit Telefonzellen-Eingang, Mocktails stehen auf der Karte. Reinschauen, staunen, ohne Alk kein Problem." }
    ],
    note:"Bars-Abend Nr. 2. Regel für die Ecke: Nie mitgehen, wenn dich jemand „mitnimmt“ — kleiner Soi = mehr Verkäufer." },

  { date:"2026-09-02", wd:"Mi", title:"Kanäle & grüne Lunge", icon:"🛶",
    blocks:[
      { t:"7:00", txt:"Klong-Tour im Longtail durch Thonburi (Start Wat Arun/Sathorn Pier, 1–1,5 Std., solo 1.000–1.500 ฿ — Preis + Dauer VOR dem Einsteigen fix). Um diese Zeit gehört dir die Stadt allein." },
      { t:"9:30", txt:"Weiter nach Bang Krachao: Fähre 10 ฿ rüber, Fahrrad ~100 ฿ — Dschungel-Holzstege mitten in der Stadt, 2–3 Std. Runde. Vor der Mittagshitze fertig." },
      { t:"13:00", txt:"Zurück im Hotel: Pool, Sauna, Nachmittagsschauer aussitzen." },
      { t:"20:30", txt:"Saxophone Pub am Victory Monument (28 Min): Livejazz & Blues seit den Achtzigern — Tresenplatz, Thai-Eistee, Musik. Kein Alk nötig, keiner will dir was verkaufen." }
    ],
    note:"Kompletter Tag ohne lange Anfahrten — alles unter 45 Min. Bars-Abend Nr. 2,5: Musik statt Promille." },

  { date:"2026-09-03", wd:"Do", title:"Elefanten & Sunset-Cruise", icon:"🐘",
    blocks:[
      { t:"6:45", txt:"Bolt Richtung Bangkok Elephant Park, Chachoengsao (~1,5–2 Std., 900–1.300 ฿). Fahrer fragen, ob er wartet (Festpreis) — Rückweg ist dort dünn." },
      { t:"9:00–12:00", txt:"Halbtagsprogramm OHNE Transfer (vorab gebucht): füttern, Schlamm-Spa, baden — kein Reiten. Thai-Buffet inklusive. Wechselklamotten + Handtuch!" },
      { t:"14:30", txt:"Zurück am Hotel, Pool & Pause." },
      { t:"17:15", txt:"Bolt nach Asiatique The Riverfront (40 Min)." },
      { t:"18:00–20:00", txt:"5-Sterne-Cruise, 18-Uhr-Slot = Sonnenuntergang UND Nachtlichter: Wat Arun, Grand Palace, ICONSIAM vom Wasser. Ohne Alk easy — Dinner-Buffet & Saft." },
      { t:"20:15", txt:"Noch eine Runde Asiatique-Nachtmarkt, dann Bolt heim." }
    ],
    note:"Beides vorab mit Datum buchen (App → Spots → Ausflüge): Elefanten-Park „ohne Transfer 9 Uhr“, Cruise 18-Uhr-Slot." },

  { date:"2026-09-04", wd:"Fr", title:"Ayutthaya auf eigene Faust", icon:"🏛️",
    blocks:[
      { t:"8:00", txt:"MRT bis Krung Thep Aphiwat (Bang Sue). Ticket am Schalter: Ayutthaya, ~50 ฿ (neuer Direktzug, Promo)." },
      { t:"9:05", txt:"Zug 9003 → 10:20 Ankunft Ayutthaya." },
      { t:"10:45", txt:"Roller (~250 ฿) oder Tuk-Tuk-Pauschale (4 Std. ~800–1.000 ฿, VORHER festmachen). Ruinen-Runde: Wat Mahathat (Buddha-Kopf im Baum), Wat Phra Si Sanphet, Wat Chaiwatthanaram. Sammelticket 220 ฿." },
      { t:"~16:30", txt:"Nachmittagszug zurück (Zeit morgens am Schalter checken) → ~18:00 Bang Sue." },
      { t:"19:30", txt:"Jodd Fairs Ratchada: bester Nachtmarkt der Stadt — Abendessen zwischen 700 Ständen, bis 1 Uhr offen." }
    ],
    note:"Komplett ~600 ฿ statt 30+ € Tour — und du bist an keine Gruppe gekettet." },

  { date:"2026-09-05", wd:"Sa", title:"Foto-Shooting & Rooftop-Finale", icon:"📸",
    blocks:[
      { t:"vorm.", txt:"Locker: Pool, Massage oder Chatuchak (läuft samstags) für Mitbringsel." },
      { t:"15:00", txt:"MRT nach Chinatown (Station „Wat Mangkon“, Ausgang 3): Wat Mangkon Kamalawat — der Laternen-Tempel aus dem Video. Eintritt frei, bis 18 Uhr offen, 1 Std. reicht. Lange Hose an, Schuhe aus vor den Hallen." },
      { t:"16:45", txt:"Von dort 15 Min rüber zum Wat Arun (Bolt ~120 ฿ oder MRT + Fähre) — Treffpunkt fürs Shooting." },
      { t:"17:30", txt:"Golden-Hour-Foto-Shooting (2 Std., ~150 €, 30 Bilder, vorab über TripAdvisor/Localgrapher gebucht): Wat Arun zum Sonnenuntergang → Chinatown-Neon." },
      { t:"19:45", txt:"Direkt in Chinatown bleiben: Abschieds-Essen in der Neon-Schlucht." },
      { t:"21:30", txt:"Sky Bar im Lebua (10 Min Bolt): einmal den Hangover-2-Rooftop sehen — alkoholfreie Cocktails gibt's, lange Hose + geschlossene Schuhe Pflicht. Ein Drink, das Foto, fertig." }
    ],
    note:"Chinatown an einem Stück: Laternen-Tempel bei Tag, Neon-Schlucht bei Nacht. Bars-Abend Nr. 3 — der mit der besten Aussicht. Wer noch kann: Octave in Thonglor ist das entspanntere Rooftop." },

  { date:"2026-09-06", wd:"So", title:"Check-out & Rückflug", icon:"🛫",
    blocks:[
      { t:"vorm.", txt:"Packen — Waschmaschine nutzen, alles sauber heim. Check-out, Gepäck an der Rezeption." },
      { t:"nachm.", txt:"Letzte Runde: Health Land Massage (2 Std. ~650 ฿), Hähnchen-Reis, Big C für Reste-Mitbringsel." },
      { t:"~19:00", txt:"Transfer zum Flughafen (inklusive — Abholzeit 24 h vorher in „Meine Buchung verwalten“ checken!). 3 Std. Puffer." },
      { t:"22:55", txt:"LH773 nach München." }
    ],
    note:"Kein Fast-Track nötig — abends ist der LH-Check-in flott. Restliche Baht am Flughafen ausgeben, Rücktausch lohnt kaum." },

  { date:"2026-09-07", wd:"Mo", title:"Landung München", icon:"🏠",
    blocks:[
      { t:"05:15", txt:"Landung MUC. Parkos-Shuttle zum Auto, heimfahren." },
      { t:"", txt:"⚠️ HEUTE KEINE EINSÄTZE — steht so im Plan. Schlafen." }
    ],
    note:"Willkommen zurück. Fotos vom Shooting kommen binnen 14 Tagen per Online-Galerie." }
];
