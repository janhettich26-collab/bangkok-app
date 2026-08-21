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

  { date:"2026-08-28", wd:"Fr", title:"Ankommen & großer Nachtmarkt", icon:"🌃",
    blocks:[
      { t:"13:45", txt:"Landung Suvarnabhumi. TDAC-QR + Pass bereit, Immigration 20–40 Min, Koffer." },
      { t:"~15:15", txt:"Transfer zum Hotel (in deiner Buchung inklusive — Abholzeit hast du 24 h vorher gecheckt). Freitagnachmittag ist Rushhour, rechne mit 1–1,5 Std." },
      { t:"16:30", txt:"Check-in Oakwood. eSIM an, Bolt-App: Hotel als Heimatadresse. Duschen, umziehen, Koffer stehen lassen." },
      { t:"17:30", txt:"Kurz Big C nebenan: Wasser, Sonnencreme, Snacks fürs Zimmer. Bargeld prüfen — der Nachtmarkt ist Bargeld/QR." },
      { t:"18:30", txt:"Los: MRT ab Yaek Tiwanon → Tao Poon → Thailand Cultural Centre, Ausgang 4 (~45 Min). Purple und Blue zusammen kosten 50–71 ฿, am Automat wird der Preis für deine Strecke berechnet. Oder Bolt in 30 Min für 200–260 ฿, wenn du platt bist." },
      { t:"19:30", txt:"Jodd Fairs Ratchada — der beste Nachtmarkt der Stadt, rund 800 Stände, täglich offen. Abendessen quer durch die Stände für 200–400 ฿. Das Foto-Gericht: Leng Saap, der Schweine-Rückgrat-Turm ab 180 ฿." },
      { t:"21:00", txt:"Wenn du noch kannst: 5 Min zu Fuß rüber zum Train Night Market Ratchada — Vintage-Zelte und Container-Bars, seit März 2026 wieder auf. Sonst direkt heim." },
      { t:"~22:30", txt:"Zurück mit der MRT (fährt bis Mitternacht — danach nur noch Bolt)." }
    ],
    note:"Der ganz große Markt mit 15.000 Ständen ist Chatuchak — der läuft aber NUR Sa + So. Freitagabend ist dort bloß Großhandel mit einem Bruchteil der Stände. Chatuchak hast du deshalb morgen früh, heute den besten Nachtmarkt. Wenn dich der Flug umhaut: Owl Market vor der Tür (10 Min) tut es auch — oder Pool und schlafen." },

  { date:"2026-08-29", wd:"Sa", title:"Chatuchak & Chinatown", icon:"🧺",
    blocks:[
      { t:"8:45", txt:"MRT ab Yaek Tiwanon → Tao Poon → Chatuchak Park (~35 Min, 40–60 ฿ für Purple + Blue). Heute läuft der Markt komplett — alle 27 Sektionen, 15.000 Stände." },
      { t:"9:30–13:00", txt:"Chatuchak Weekend Market. Feilschen: Startpreis −30–40 %. Rucksack nach vorn. Vor 11 Uhr ist es erträglich, danach wird es brutal voll und heiß." },
      { t:"14:00", txt:"Zurück ins Hotel: Pool, Sauna, Beine hochlegen, während draußen der Nachmittagsschauer durchzieht. Einkäufe abladen." },
      { t:"17:00", txt:"Los nach Chinatown: MRT ab Yaek Tiwanon, in Tao Poon auf die Blue Line, bis Wat Mangkon, Ausgang 1 — ~50 Min, 50–71 ฿. Mit dem Auto wäre es zur Essenszeit deutlich langsamer." },
      { t:"17:45", txt:"Yaowarat Road: Um 17 Uhr sperrt die Straße für Autos, innerhalb einer Stunde bauen hunderte Garküchen auf. Jetzt bist du da, bevor es voll wird." },
      { t:"18:00–21:30", txt:"Durchessen: Guay Jub Ouan Pochana (Rollnudel-Suppe 50–70 ฿), Lim Lao Ngow (Fischbällchen, Michelin Bib), der berühmte Yaowarat-Toast (25–35 ฿), T&K Seafood für Riesengarnelen (200–400 ฿), Nachtisch bei Ba Hao Tian Mi in der Soi Nana. Rechne mit 300–600 ฿ für den ganzen Abend." },
      { t:"~22:00", txt:"MRT zurück ab Wat Mangkon (fährt bis Mitternacht)." }
    ],
    note:"Samstag ist der volle Chinatown-Abend — dafür auch der vollste: zwischen 19 und 21 Uhr stehst du an beliebten Ständen 30 Min an. Deshalb um 17:45 dort sein. NUR BARGELD, viele Stände nehmen keine Karte. Montag wäre der falsche Tag gewesen — da ruhen viele Garküchen." },

  { date:"2026-08-30", wd:"So", title:"Spa, Riesenmall & Golden Mount", icon:"🧖",
    blocks:[
      { t:"8:30", txt:"Bolt zum Mandarin Oriental Hotel (Stadtseite, ~40–45 Min, 250–330 ฿) — Sonntagvormittag ist wenig Verkehr. Dem Fahrer: „Mandarin Oriental Hotel, Oriental Avenue“." },
      { t:"9:15", txt:"Am Hotel-Pier: das KOSTENLOSE Hotelboot bringt dich über den Chao Phraya direkt zum Spa — einfach „Oriental Spa, appointment 10:30“ sagen. Die schönste Anfahrt, die es gibt." },
      { t:"9:25", txt:"Im Spa: Du darfst bis 60 Min vor dem Termin rein — Sauna, Dampfbad & Jacuzzi im Wellness Centre sind inklusive. Ausnutzen!" },
      { t:"10:30–12:30", txt:"Deine Moringa Massage, 2 Std. (gebucht — Details in Meine Reisedaten). Danach nicht hetzen." },
      { t:"13:00", txt:"ICONSIAM ist nur 750 m zu Fuß — die Riesenmall am Fluss, täglich 10–22 Uhr. Erst essen: Sook Siam im Erdgeschoss, ein nachgebauter schwimmender Markt mit Ständen aus allen 77 Provinzen." },
      { t:"14:00–16:30", txt:"Shoppen: 1. Stock ICONLUXE (die Luxusmeile am Fluss), 2. Stock der erste Apple Store Thailands, 4.–5. Stock Essen, Takashimaya für alles dazwischen. Kein Feilschen hier — das sind Festpreise, dafür Klimaanlage und Steuerrückerstattung für Touristen an der Kasse fragen." },
      { t:"16:30", txt:"Kaffee mit Aussicht: der größte Starbucks Reserve Thailands im 7. Stock, zweistöckig — oder die Tasana-Nakorn-Terrasse im 6. mit Blick den Fluss runter." },
      { t:"17:15", txt:"Bolt zum Golden Mount (~25 Min): 340 Stufen hoch, Eintritt ~100 ฿. Um 18:00 oben stehen — Abendlicht über der Altstadt, Sonnenuntergang gegen 18:40." },
      { t:"19:15", txt:"Abendessen in der Altstadt: Thipsamai Pad Thai in der Mahachai Road ist 10 Min entfernt, der berühmteste Pad Thai der Stadt (80–150 ฿, im Eierteig gewickelt). Öffnungszeit vorher kurz in Maps prüfen — und die Schlange ist nach 21 Uhr am kürzesten." },
      { t:"~21:00", txt:"Bolt zurück, ~250 ฿." }
    ],
    note:"Eine Anfahrt, vier Sachen: Spa, Mall, Tempel, Essen — alle am selben Flussufer entlang. Chinatown hast du schon gestern gehabt, deshalb heute die Altstadt." },

  { date:"2026-08-31", wd:"Mo", title:"Paläste per Expressboot", icon:"👑",
    blocks:[
      { t:"8:15", txt:"Bolt zum Nonthaburi Pier (10 Min) → Chao-Phraya-Expressboot flussabwärts (~1 Std.). Feste Preise je Linie: orange 18 ฿, gelb 23 ฿, rot 32 ฿ — einfach an Bord zahlen. Die schönste Anreise der Stadt." },
      { t:"10:00", txt:"Grand Palace, 500 ฿ — das Ticket gilt 7 Tage und deckt Wat Phra Kaew (Smaragd-Buddha) und das Queen-Sirikit-Textilmuseum mit ab. WICHTIG: Kassenschluss ist 15:30, das Gelände schließt 16:30 — also vormittags hin. Dresscode ist der strengste des Landes und wird am Tor durchgesetzt: lange Hose, Hemd oder T-Shirt MIT Ärmeln, geschlossene Schuhe oder Sandalen mit Fersenriemen. Shorts, ärmellos, zerrissene Jeans, Flip-Flops = abgewiesen. Notfalls Sarong am Eingang gegen ~200 ฿ Pfand." },
      { t:"12:30", txt:"Wat Pho, 3 Min zu Fuß: liegender Buddha, 300 ฿ (Wasserflasche ist im Ticket drin), täglich 8–18:30 Uhr — läuft also länger als der Palast. Dazu Thai-Massage in der Original-Tempelmassageschule: 30 Min ab ~340 ฿, 1 Std. ~520 ฿, extra zu zahlen." },
      { t:"15:00", txt:"Fähre rüber zum Wat Arun (5 ฿) — Achtung, der Eintritt kostet nochmal 200 ฿, geöffnet bis 18 Uhr. Foto-Klassiker am Fluss. Danach Boot oder Bolt zurück." },
      { t:"abends", txt:"Ruhig: Rooftop im eigenen Hotel, früh ins Bett — morgen Training." }
    ],
    note:"„Der Palast ist heute zu“-Sprüche vor dem Tor sind IMMER die Tuk-Tuk-Masche. Er ist offen, einfach durchgehen." },

  { date:"2026-09-01", wd:"Di", title:"Elefanten, Massage & Sukhumvit", icon:"🐘",
    blocks:[
      { t:"7:00", txt:"Bolt zum Bangkok Elephant Park, 47 Suwinthawong Rd, Nong Chok (Ostrand Bangkok, ~50 km, 600–900 ฿). Dienstag ist Berufsverkehr — 2 Std. Puffer für 9 Uhr Check-in." },
      { t:"9:00–12:00", txt:"Halbtag-Vormittag OHNE Transfer (vorab gebucht): Welcome Drink, Elefantenkunde, Kräuterinhalator basteln, füttern, Waldspaziergang, Schlamm-Spa, baden — kein Reiten. 11:15 Duschen & Umziehen, 11:30 Thai-Lunchbox. Outfit, Hut und Handtuch stellt der Park; du brauchst nur Badehose + trockene Wechselsachen." },
      { t:"12:15", txt:"Bolt NICHT heim, sondern direkt nach Sukhumvit (~40–50 Min, 400–600 ฿) — Asoke liegt auf dem Rückweg, das spart dir 1,5 Std. Doppelfahrt. Rückweg ist dort dünn: Fahrer warten lassen oder Park-Rezeption rufen lassen (+66 90 920 5885)." },
      { t:"13:30–15:30", txt:"Health Land Asoke (vorher anrufen: +66 2 261 1110, tägl. 9–23 Uhr): Thai 2 Std. 700 ฿ ODER — nach Sonne, Schlamm und Elefantenlaufen die bessere Wahl — Aroma-Öl 1.200–1.850 ฿ bzw. Ayurveda Abhyanga 1.700 ฿. Bei Öl-Massage duschst du dort vorab." },
      { t:"16:00", txt:"Terminal 21 ist direkt nebenan: Pier-21-Foodcourt im 5. Stock, Gerichte ab 50 ฿ — der Preis-Leistungs-König." },
      { t:"18:00", txt:"Soi 11 angucken: die kompakteste Barstraße. Havana Social — Speakeasy mit Telefonzellen-Eingang, Mocktails stehen auf der Karte. Reinschauen, staunen, ohne Alk kein Problem." },
      { t:"heim", txt:"MRT Sukhumvit → Tao Poon → Yaek Tiwanon (50–71 ฿) oder Bolt ~300 ฿." }
    ],
    note:"Ein Weg, drei Dinge — Elefanten, Massage und Sukhumvit-Abend ohne einen einzigen Doppelweg. Bars-Abend Nr. 2. Regel für die Ecke: Nie mitgehen, wenn dich jemand „mitnimmt“." },

  { date:"2026-09-02", wd:"Mi", title:"Kanäle & grüne Lunge", icon:"🛶",
    blocks:[
      { t:"7:00", txt:"Klong-Tour im Longtail durch Thonburi (Start Wat Arun/Sathorn Pier, 1–1,5 Std., solo 1.000–1.500 ฿ — Preis + Dauer VOR dem Einsteigen fix). Um diese Zeit gehört dir die Stadt allein." },
      { t:"9:30", txt:"Weiter nach Bang Krachao: Fähre 10 ฿ rüber, Fahrrad ~100 ฿ — Dschungel-Holzstege mitten in der Stadt, 2–3 Std. Runde. Vor der Mittagshitze fertig." },
      { t:"13:00", txt:"Zurück im Hotel: Pool, Sauna, Nachmittagsschauer aussitzen." },
      { t:"20:30", txt:"Saxophone Pub am Victory Monument (28 Min): Livejazz & Blues seit den Achtzigern — Tresenplatz, Thai-Eistee, Musik. Kein Alk nötig, keiner will dir was verkaufen." }
    ],
    note:"Kompletter Tag ohne lange Anfahrten — alles unter 45 Min. Bars-Abend Nr. 2,5: Musik statt Promille." },

  { date:"2026-09-03", wd:"Do", title:"Shoppen & Sunset-Cruise", icon:"🛒",
    blocks:[
      { t:"vorm.", txt:"Ausschlafen, Pool, Sauna, Wäsche in die Maschine. Nach drei vollen Tagen ist der halbe Leerlauf-Vormittag Absicht." },
      { t:"12:15", txt:"Los in die Shopping-Meile: MRT Purple bis Tao Poon → Blue bis Si Lom → BTS Sala Daeng → 2 Stationen bis Siam (~60 Min; MRT 50–71 ฿ plus BTS 17–65 ฿, die Systeme rechnen getrennt ab). Mit Bolt 45–60 Min für 250–330 ฿ — bei Regen die bequemere Wahl." },
      { t:"13:30–16:30", txt:"Siam Paragon, Siam Center, Siam Discovery und CentralWorld liegen alle nebeneinander und sind per Skywalk verbunden — du läufst trocken und klimatisiert durch. CentralWorld allein hat 600 Läden zu normalen Preisen (Zara, Uniqlo, Adidas, Muji), Siam Paragon ist die Luxusschiene. Wer feilschen will: MBK gegenüber, acht Etagen." },
      { t:"—", txt:"Steuer zurückholen: Ab 2.000 ฿ pro Laden und Tag bekommst du 7 % VAT-Refund. Pass mitnehmen, an der Kasse das Formular verlangen, am Flughafen abstempeln lassen. Bei größeren Einkäufen lohnt das echt." },
      { t:"16:45", txt:"Weiter zur Cruise: BTS ab Siam (Silom Line) bis Saphan Taksin, dann Shuttle-Boot ab Sathorn Pier zum Asiatique — zusammen ~40 Min und deutlich entspannter als durch den Feierabendverkehr zu fahren." },
      { t:"18:00–20:00", txt:"5-Sterne-Cruise, 18-Uhr-Slot = Sonnenuntergang UND Nachtlichter: Wat Arun, Grand Palace, ICONSIAM vom Wasser. Ohne Alk easy — Dinner-Buffet & Saft." },
      { t:"20:15", txt:"Noch eine Runde Asiatique-Nachtmarkt, dann Bolt heim." }
    ],
    note:"Einkäufe erst am Nachmittag, damit du sie nicht den ganzen Tag schleppst — und die Malls sind bis 22 Uhr offen, du bist also nie unter Zeitdruck. Cruise vorab mit Datum buchen (Reiter Termine, 18-Uhr-Slot). Wenn dir das zu viel ist: Central WestGate liegt elf Stationen ohne Umsteigen von deinem Hotel, das geht auch an einem Regenvormittag." },

  { date:"2026-09-04", wd:"Fr", title:"Ayutthaya auf eigene Faust", icon:"🏛️",
    blocks:[
      { t:"7:15", txt:"MRT bis Krung Thep Aphiwat (Bang Sue) — die Blue Line hält direkt darunter. Ticket am Schalter kaufen, es gibt keinen Online-Verkauf für die günstigen Klassen." },
      { t:"7:50 oder 8:45", txt:"Zug nach Ayutthaya (71 km, rund 1 Std.): Rapid 111 um 7:50 oder Express 75 um 8:45 sind die bewährten Verbindungen, 3. Klasse rund 70 ฿, klimatisierte 2. Klasse 65–345 ฿. Fahrplan am Schalter bestätigen lassen — Zeiten verschieben sich in Thailand gern." },
      { t:"9:30", txt:"Roller (~250 ฿) oder Tuk-Tuk-Pauschale (4 Std. 800–1.000 ฿, VORHER festmachen). Ruinen-Runde: Wat Mahathat (Buddha-Kopf im Baum), Wat Phra Si Sanphet, Wat Chaiwatthanaram. Sammelticket 220 ฿ für sechs Tempel — lohnt ab drei." },
      { t:"16:04 oder 16:41", txt:"Rückzug: Rapid 112 um 16:04 oder Rapid 136 um 16:41 → rund 1 Std. bis Bang Sue. Rückfahrkarte gleich morgens mitkaufen." },
      { t:"19:30", txt:"Train Night Market Ratchada (Blue Line ab Bang Sue, ~20 Min): der Regenbogen-Zeltmarkt, seit März 2026 wieder offen — Vintage, Container-Bars, Livebands. Anderes Erlebnis als der Ankunftsabend, gleiche Station. Bis 1 Uhr offen." }
    ],
    note:"Komplett ~600 ฿ statt 30+ € Tour — und du bist an keine Gruppe gekettet." },

  { date:"2026-09-05", wd:"Sa", title:"Foto-Shooting & Rooftop-Finale", icon:"📸",
    blocks:[
      { t:"vorm.", txt:"Locker: Pool, Massage oder Chatuchak (läuft samstags) für Mitbringsel." },
      { t:"15:00", txt:"MRT nach Chinatown (Station „Wat Mangkon“, Ausgang 3): Wat Mangkon Kamalawat — der Laternen-Tempel aus dem Video. Eintritt frei, bis 18 Uhr offen, 1 Std. reicht. Lange Hose an, Schuhe aus vor den Hallen." },
      { t:"16:45", txt:"Von dort 15 Min rüber zum Wat Arun (Bolt ~120 ฿ oder MRT + Fähre) — Treffpunkt fürs Shooting." },
      { t:"17:30", txt:"Golden-Hour-Foto-Shooting (2 Std., ~150 €, 30 Bilder, vorab über TripAdvisor/Localgrapher gebucht): Wat Arun zum Sonnenuntergang → Chinatown-Neon." },
      { t:"19:45", txt:"Direkt in Chinatown bleiben: Abschieds-Essen in der Neon-Schlucht." },
      { t:"21:30", txt:"Sky Bar im Lebua (10 Min Bolt), 64. Stock, 247 m: der Hangover-2-Rooftop. Kein Eintritt, aber ein Getränk pro Person ist Pflicht — Mocktails 600–800 ฿ plus 10 % Service und 7 % Steuer, macht rund 700–950 ฿ für ein alkoholfreies Glas. Offen 17:00–00:30, keine Reservierung, nur Stehplätze am runden Bartresen." }
    ],
    note:"Chinatown an einem Stück: Laternen-Tempel bei Tag, Neon-Schlucht bei Nacht. ZUR SKY BAR: Dresscode wird am Aufzug durchgesetzt — Kragenhemd oder Polo, lange Hose, geschlossene Schuhe. T-Shirt, Shorts, ärmellos, Sandalen und Sneaker = abgewiesen. RUCKSÄCKE UND EINKAUFSTÜTEN sind oben verboten und es gibt KEINE Aufbewahrung, also vorher ins Hotel damit. Bei Regen macht die Plattform sofort zu — dann ist Octave in Thonglor die überdachte Alternative." },

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
