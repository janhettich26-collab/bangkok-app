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
      { t:"17:15", txt:"Bolt zum Golden Mount (~25 Min): 340 Stufen hoch, Eintritt ~100 ฿. Um 17:45 oben stehen — Abendlicht über der Altstadt, die Sonne geht um 18:31 unter." },
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

  { date:"2026-09-02", wd:"Mi", title:"Kanäle, grüne Lunge & Glasboden", icon:"🛶",
    blocks:[
      { t:"7:00", txt:"Klong-Tour im Longtail durch Thonburi (Start Wat Arun oder Sathorn Pier, 1–1,5 Std., solo 1.000–1.500 ฿ — Preis UND Dauer VOR dem Einsteigen fix vereinbaren). Um diese Zeit gehört dir die Stadt allein." },
      { t:"9:30", txt:"Weiter nach Bang Krachao: Fähre 10 ฿ rüber, Fahrrad ~100 ฿ — Dschungel-Holzstege mitten in der Stadt, 2–3 Std. Runde. Vor der Mittagshitze fertig." },
      { t:"13:00", txt:"Zurück ins Hotel: duschen, Pool, kurz hinlegen. Der Nachmittagsschauer zieht meist jetzt durch." },
      { t:"16:30", txt:"BTS bis Chong Nonsi, Ausgang 3 — der Mahanakhon-Turm steht direkt über der Station. Mit Sonnenuntergangs-Ticket (1.080–1.200 ฿, vorab online buchen, die Slots sind schnell weg)." },
      { t:"17:15–19:00", txt:"Mahanakhon SkyWalk: Innendeck im 74. Stock, offenes Dach im 78. und der Glasboden auf 310 m. Sonnenuntergang um 18:29 — du siehst die Stadt bei Tag, im Sonnenuntergang und im Lichtermeer, alles in einem Besuch. Der höchste Punkt der Stadt und der beste Blick, den du hier bekommst." },
      { t:"20:30", txt:"Saxophone Pub am Victory Monument (25 Min): Livejazz und Blues seit den Achtzigern — Tresenplatz, Thai-Eistee, Musik. Kein Alk nötig, keiner will dir was verkaufen." }
    ],
    note:"Der Glasboden ist der Grund, warum du dir die Sky Bar am Samstag sparen kannst: dort zahlst du 700–950 ฿ für EIN Getränk, hier bekommst du für wenig mehr das ganze Erlebnis — ohne Dresscode und mit Rucksack. ACHTUNG Regenzeit: Bei Sturm sperren sie das Außendeck, Geld gibt es nicht zurück (nur Umbuchung). Also erst abends den Himmel anschauen, dann kaufen." },

  { date:"2026-09-03", wd:"Do", title:"Mit Haien tauchen & Sunset-Cruise", icon:"🦈",
    blocks:[
      { t:"vorm.", txt:"Ausschlafen, aber nicht zu spät — heute wird es besonders. Frühstück im Hotel, leicht essen." },
      { t:"9:45", txt:"Los nach Siam: MRT Purple bis Tao Poon → Blue bis Si Lom → BTS Sala Daeng → Siam (~60 Min). Oder Bolt in 45–60 Min für 250–330 ฿." },
      { t:"10:45", txt:"SEA LIFE im Untergeschoss vom Siam Paragon. 15 Minuten vor der Zeit einchecken — wer später kommt, verliert den Platz ohne Erstattung." },
      { t:"11:00–13:00", txt:"SHARK DIVE: mit Riffhaien und Rochen im großen Becken, ein Profi die ganze Zeit an deiner Seite. Kein Tauchschein nötig, 6.900 ฿. Vorher über LINE @sharkdive oder WhatsApp +66 81 274 4637 buchen — und dabei sagen, dass dein Englisch nicht gut ist, dann organisieren sie eine Übersetzung für die Einweisung." },
      { t:"13:15", txt:"Mittagessen im selben Haus: Food Court im Untergeschoss vom Paragon. Nach dem Tauchen ordentlich trinken." },
      { t:"14:15–16:30", txt:"Shopping-Meile direkt vor der Tür: Siam Paragon, Siam Center, Siam Discovery und CentralWorld hängen per Skywalk zusammen. Pass mitnehmen — ab 2.000 ฿ pro Laden gibt es 7 % Steuer zurück." },
      { t:"16:45", txt:"Zur Cruise: BTS ab Siam bis Saphan Taksin, dann Shuttle-Boot ab Sathorn Pier zum Asiatique (~40 Min)." },
      { t:"18:00–20:00", txt:"5-Sterne-Cruise, 18-Uhr-Slot = Sonnenuntergang UND Nachtlichter: Wat Arun, Grand Palace, ICONSIAM vom Wasser. Dinner-Buffet dabei." },
      { t:"20:15", txt:"Noch eine Runde Asiatique-Nachtmarkt, dann Bolt heim." }
    ],
    note:"WICHTIG: Nach dem Tauchen 12 Stunden nicht fliegen — deshalb liegt der Tauchgang heute und nicht am Wochenende, dein Rückflug ist erst Sonntagnacht. Du musst einigermaßen schwimmen können und unterschreibst vorher einen Gesundheitsfragebogen. Eigene Kamera darf nicht mit ins Wasser, die Bilder macht das Personal." },

  { date:"2026-09-04", wd:"Fr", title:"Ayutthaya auf eigene Faust", icon:"🏛️",
    blocks:[
      { t:"7:15", txt:"MRT bis Krung Thep Aphiwat (Bang Sue) — die Blue Line hält direkt darunter. Ticket am Schalter kaufen, es gibt keinen Online-Verkauf für die günstigen Klassen." },
      { t:"7:50 oder 8:45", txt:"Zug nach Ayutthaya (71 km, rund 1 Std.): Rapid 111 um 7:50 oder Express 75 um 8:45 sind die bewährten Verbindungen, 3. Klasse rund 70 ฿, klimatisierte 2. Klasse 65–345 ฿. Fahrplan am Schalter bestätigen lassen — Zeiten verschieben sich in Thailand gern." },
      { t:"9:30", txt:"Roller (~250 ฿) oder Tuk-Tuk-Pauschale (4 Std. 800–1.000 ฿, VORHER festmachen). Ruinen-Runde: Wat Mahathat (Buddha-Kopf im Baum), Wat Phra Si Sanphet, Wat Chaiwatthanaram. Sammelticket 220 ฿ für sechs Tempel — lohnt ab drei." },
      { t:"16:04 oder 16:41", txt:"Rückzug: Rapid 112 um 16:04 oder Rapid 136 um 16:41 → rund 1 Std. bis Bang Sue. Rückfahrkarte gleich morgens mitkaufen." },
      { t:"19:30", txt:"GO-KART bei EasyKart im RCA Plaza (MRT Phra Ram 9, ~20 Min ab Bang Sue): Asiens größte Indoor-Kartbahn. Fast Kart mit 200 cm³ und 55 km/h, 1.499 ฿ für zwei Rennen à 8 Minuten. Kein Führerschein nötig, freitags bis 23 Uhr offen. Vorher kurz anrufen (+66 2 641 4252), die Bahn wird manchmal für Gruppen reserviert." },
      { t:"21:00", txt:"5 Minuten weiter der Train Night Market Ratchada: der Regenbogen-Zeltmarkt, seit März 2026 wieder offen — Vintage, Container-Bars, Livebands, bis 1 Uhr. Abendessen zwischen den Zelten." }
    ],
    note:"Komplett ~600 ฿ statt 30+ € Tour — und du bist an keine Gruppe gekettet. Abends dann Vollgas: Kartbahn und Nachtmarkt liegen an derselben MRT-Station, du kommst aus Ayutthaya direkt dort an." },

  { date:"2026-09-05", wd:"Sa", title:"Ancient City & Abschiedsabend", icon:"🛕",
    blocks:[
      { t:"8:00", txt:"Bolt nach Samut Prakan zum Ancient City (45–60 Min, 400–500 ฿). Morgens ist die Strecke frei, und im Park ist es vor Mittag deutlich angenehmer." },
      { t:"9:30–14:00", txt:"Ancient City, das größte Freilichtmuseum der Welt: über 100 nachgebaute Tempel, Paläste und Holzhäuser aus ganz Thailand auf 80 Hektar — und fast menschenleer. Fahrrad für ~100 ฿ nehmen und einfach losfahren. Eintritt 700 ฿ am Tor, online über Klook oft die Hälfte. Die kostenlose Tram fährt 10, 13, 15 und 17 Uhr, das musst du beim Ticketkauf sagen." },
      { t:"14:15", txt:"Optional 5 Min weiter: Erawan-Museum — ein 43 Meter hoher dreiköpfiger Elefant aus Kupfer, in den man hineinsteigen kann. Innen Glasfenster und Treppen wie in einer anderen Welt." },
      { t:"16:00", txt:"Zurück: BTS ab Kheha (samstags fährt ein kostenloser Shuttle vom Park zur Station) oder Bolt. Im Hotel duschen und Beine hochlegen." },
      { t:"19:00", txt:"Letzter Abend, ganz nach Laune: Terminal 21 zum Essen, der Owl Market vor der Haustür, oder einfach Rooftop und Pool im Hotel. Morgen früh geht es nochmal raus nach Ko Kret." },
      { t:"21:30 (optional)", txt:"Sky Bar im Lebua (10 Min Bolt), 64. Stock: der Hangover-Rooftop. Kein Eintritt, aber ein Getränk ist Pflicht — Mocktails 600–800 ฿ plus 17 %. Dresscode: Kragenhemd, lange Hose, geschlossene Schuhe, KEIN Rucksack." }
    ],
    note:"Das Ancient City ist der fotogenste Ort im Großraum Bangkok und kaum ein Tourist kennt ihn — du brauchst dort kein Wort Englisch, du radelst einfach durch einen Park voller Tempel. Weit draußen zwar, aber morgens hin ist es entspannt. Bei Dauerregen tauschbar gegen Jim Thompson House (Seidenhaus, zentral, eine Stunde) plus Siam-Malls." },

  { date:"2026-09-06", wd:"So", title:"Ko Kret & Rückflug", icon:"🚲",
    blocks:[
      { t:"8:00", txt:"Packen und auschecken — Waschmaschine hast du ja, alles sauber heim. Gepäck an der Rezeption lassen." },
      { t:"9:30", txt:"Bolt nach Wat Sanam Nuea (20–25 Min, 120–150 ฿) — dem Fahrer einfach „Ko Kret“ sagen, das kennt jeder. Am Tempel durchlaufen bis zum Pier, Fähre 3 ฿, eine Minute über den Fluss." },
      { t:"10:00–14:00", txt:"Ko Kret: autofreie Flussinsel der Mon-Minderheit, 2 km lang. SONNTAG ist der richtige Tag — dann zieht sich der Markt über einen Kilometer die Ostseite entlang. Töpferdörfer mit offenen Brennöfen, Mon-Streetfood, Tempel. Zu Fuß in zwei Stunden einmal herum oder Fahrrad für ~40 ฿." },
      { t:"14:30", txt:"Zurück ins Hotel, duschen (Tageszimmer oder das Bad an der Rezeption erfragen)." },
      { t:"15:30", txt:"Letzte Runde vor der Tür: Health Land Chaeng Wattana für eine Abschiedsmassage (2 Std. Thai 700 ฿) oder Hähnchen-Reis gegenüber, Big C für Mitbringsel." },
      { t:"~19:00", txt:"Transfer zum Flughafen (inklusive — Abholzeit hast du 24 h vorher in „Meine Buchung verwalten“ nachgesehen). 3 Std. Puffer." },
      { t:"22:55", txt:"LH773 nach München." }
    ],
    note:"Ein letzter Vormittag, der sich wie Urlaub anfühlt statt wie Warten auf den Flug — und das Beste: Ko Kret liegt 20 Minuten vom Hotel, du riskierst nichts. Kein Fast-Track nötig, abends ist der LH-Check-in flott. Restliche Baht am Flughafen ausgeben, Rücktausch lohnt kaum." },

  { date:"2026-09-07", wd:"Mo", title:"Landung München", icon:"🏠",
    blocks:[
      { t:"05:15", txt:"Landung MUC. Parkos-Shuttle zum Auto, heimfahren." },
      { t:"", txt:"⚠️ HEUTE KEINE EINSÄTZE — steht so im Plan. Schlafen." }
    ],
    note:"Willkommen zurück. Heute keine Einsätze — schlafen." }
];
