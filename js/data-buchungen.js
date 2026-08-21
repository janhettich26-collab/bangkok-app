// Bangkok 2026 — Termine & Buchungen (Reiter „Termine")
// Alles, was du planst: was steht, was du noch buchen musst, was du vor Ort zahlst.
// WICHTIG: Repo ist oeffentlich — NIE Buchungsnummern/Referenzen hier hineinschreiben.
// Die stehen verschluesselt unter Info → Meine Reisedaten.
//
// status: "fix"    = gebucht und bestaetigt, nichts mehr zu tun
//         "offen"  = du musst noch buchen/anrufen  → zaehlt in den Fortschritt
//         "vorort" = kein Vorab-Ticket noetig, vor Ort zahlen
const BOOKINGS = [

  { id:"tdac", tun:"ausfüllen", kurz:"TDAC-Einreisekarte", grp:"Reise", status:"offen", emoji:"🛂", date:"2026-08-25", time:"ab diesem Tag",
    title:"TDAC — Einreisekarte ausfüllen", where:"online, dauert 10 Minuten",
    price:"kostenlos",
    info:["Erst ab Di 25.08. möglich (72-Std.-Fenster vor Ankunft Fr 28.08. 13:45 Ortszeit) — der 24.08. ist zu früh, das System nimmt es nicht an","QR-Code danach als Screenshot sichern, du brauchst ihn bei der Immigration"],
    warn:"NUR über tdac.immigration.go.th. Alles andere sind Abzock-Seiten, die Geld für ein kostenloses Formular verlangen.",
    links:[{t:"🛂 TDAC ausfüllen",u:"https://tdac.immigration.go.th"}] },

  // ————— Die Termine vor Ort —————
  { id:"oriental", grp:"Termine", status:"fix", emoji:"🧖", date:"2026-08-30", time:"10:30",
    title:"Oriental Spa — Moringa Massage, 2 Std.", where:"Mandarin Oriental, Oriental Avenue (Flussseite)",
    price:"6.900 ฿ + 17 % = rund 8.073 ฿ (~215 €)",
    info:["8:30 Bolt zum Mandarin Oriental Hotel (~40–45 Min, 250–330 ฿), dem Fahrer sagen: „Mandarin Oriental Hotel, Oriental Avenue\"","9:15 am Hotel-Pier: das KOSTENLOSE Hotelboot bringt dich über den Fluss zum Spa — einfach „Oriental Spa, appointment 10:30\" sagen","Du darfst 60 Min vor dem Termin rein: Sauna, Dampfbad und Jacuzzi sind inklusive — nutz das aus, sei um 9:25 da","Dresscode gilt auch für Spa-Gäste: lange Hose, Polo, geschlossene Schuhe","Trinkgeld üblich: 700–800 ฿"],
    warn:"Der Payment-Link kommt am 28.08. per Mail — den musst du bezahlen, sonst verfällt der Termin. Das Intake-Formular ist noch offen.",
    links:[{t:"📍 Mandarin Oriental",u:"https://www.google.com/maps/search/?api=1&query=Mandarin%20Oriental%20Bangkok"}],
    ref:"Bestätigungs-Nr.: Info → Meine Reisedaten" },

  { id:"elefanten", kurz:"Elefanten-Park", grp:"Termine", status:"offen", emoji:"🐘", date:"2026-09-01", time:"9:00–12:00",
    title:"Bangkok Elephant Park — Halbtag Vormittag", where:"47 Suwinthawong Rd, Krathum Rai, Nong Chok, Bangkok 10530",
    price:"direkt beim Park 2.200 ฿ (~58 €) · GetYourGuide 43–55 €",
    info:["<b>ZUM ENGLISCH — das ist kein Problem hier:</b> Buch über <b>GetYourGuide auf Deutsch</b> (Button unten), nicht direkt beim Park. Dann ist die ganze Buchung, die Bestätigung und der Kundendienst auf Deutsch, und du kannst bis 24 Std. vorher kostenlos stornieren. Beim Park selbst läuft alles auf Englisch.","<b>Vor Ort brauchst du fast keine Sprache:</b> Das Programm ist zum Mitmachen, nicht zum Zuhören — füttern, laufen, Schlamm, baden. Der Guide macht alles vor, du machst nach, wie alle anderen auch. Für den Rest liegen im Reiter <b>Sprache → 🐘 Elefanten-Park</b> elf Sätze mit Aussprache bereit, einer davon: „My English is not good. Can you show me, please?“ — das sagst du einmal und der Guide zeigt dir alles.","Ethisch: kein Reiten, keine Shows. 4,8 ★ bei über 1.000 Bewertungen","Park täglich 9–17 Uhr offen · Option OHNE Transfer buchen, du fährst selbst mit Bolt","Ablauf: 9:00 Welcome Drink · 9:15 Elefantenkunde · 9:30 Kräuterinhalator basteln · 9:45 füttern · 10:05 Waldspaziergang, Schlamm-Spa, baden · 11:15 duschen & umziehen · 11:30 Thai-Lunchbox","Outfit, Hut und Handtuch stellt der Park — du brauchst nur Badehose und trockene Wechselsachen für die Heimfahrt","Anfahrt: ~50 km vom Hotel, 1–1,5 Std. mit Bolt (600–900 ฿). Dienstag ist Berufsverkehr → 7:00 losfahren","Preis: direkt beim Park 2.200 ฿ (~58 €), über GetYourGuide 43–55 € — die deutsche Buchung ist also nicht mal teurer","Google Übersetzer vorher aufs Handy: Thai und Englisch als Offline-Paket laden. Die Kamera-Funktion übersetzt Schilder und Speisekarten live","Park-Telefon: +66 90 920 5885"],
    warn:"Nong Chok ist abgelegen — für den Rückweg den Bolt-Fahrer warten lassen (Festpreis vorher vereinbaren) oder die Rezeption ein Taxi rufen lassen.",
    phone:"+66909205885",
    links:[{t:"🇩🇪 GetYourGuide (deutsch) — so buchen",u:"https://www.getyourguide.de/bangkok-l169/bangkok-halbtag-elefantenpark-ohne-transfer-t741040/"},{t:"🐘 Park-Seite (englisch)",u:"https://www.bangkokelephant.com/programs/half-day-morning-program-no-transfer/"},{t:"📍 In Google Maps",u:"https://www.google.com/maps/search/?api=1&query=Bangkok%20Elephant%20Park%2C%2047%20Suwinthawong%20Rd%2C%20Krathum%20Rai%2C%20Nong%20Chok%2C%20Bangkok%2010530"}] },

  { id:"healthland", tun:"anrufen", kurz:"Health Land Asoke", grp:"Termine", status:"offen", emoji:"💆", date:"2026-09-01", time:"13:30",
    title:"Health Land Asoke — Massage nach den Elefanten", where:"Sukhumvit Soi 21 (Asoke), neben Terminal 21",
    price:"Thai 2 Std. 700 ฿ · Aroma-Öl 1.200–1.850 ฿ · Ayurveda Abhyanga 1.700 ฿",
    info:["Anrufen statt online buchen — die Online-Buchung will Konto und Kartenzahlung vorab. Tel. +66 2 261 1110, täglich 9–23 Uhr","Asoke liegt auf dem Rückweg vom Elefanten-Park — nicht erst zum Hotel fahren, das spart dir 1,5 Std. Fahrt","Nach Sonne, Schlamm und Elefantenlaufen ist die Öl-Massage angenehmer als die harte Thai-Massage. Bei Öl duschst du vorher dort","Danach: Terminal 21 ist direkt nebenan (Pier-21-Foodcourt, 5. Stock, Gerichte ab 50 ฿), Soi 11 ein paar Schritte weiter","Heimweg: MRT Sukhumvit → Tao Poon → Yaek Tiwanon, rund 42 ฿"],
    phone:"+6622611110",
    links:[{t:"📍 In Google Maps",u:"https://www.google.com/maps/search/?api=1&query=Health%20Land%20Spa%20Asoke%20Bangkok"}] },

  { id:"cruise", kurz:"Dinner-Cruise", grp:"Termine", status:"offen", emoji:"🛳️", date:"2026-09-03", time:"18:00–20:00",
    title:"Chao-Phraya Dinner-Cruise (5 Sterne)", where:"Ablegen an Asiatique The Riverfront",
    price:"ab ~26 € · mit Dinner-Buffet 34–52 €",
    info:["Den 18-Uhr-Slot nehmen: Sonnenuntergang UND Nachtlichter in einer Fahrt","Vorbei an Wat Arun, Grand Palace und ICONSIAM vom Wasser aus","17:15 Bolt ab Hotel (40 Min, 260–340 ฿), Check-in am Asiatique Pier","Ohne Alkohol völlig unproblematisch — Dinner-Buffet und Säfte sind dabei","Danach noch eine Runde Asiatique-Nachtmarkt"],
    warn:"Nur online mit festem Datum und Slot buchen. Die Ticketverkäufer am Pier-Vorplatz sind teurer oder verkaufen Falsches.",
    links:[{t:"🎟️ GetYourGuide",u:"https://www.getyourguide.com/de-de/bangkok-l169/bangkok-die-neueste-luxuriose-5-sterne-kreuzfahrt-auf-dem-chao-phraya-in-bangkok-t960991/"},{t:"📍 Asiatique",u:"https://www.google.com/maps/search/?api=1&query=Asiatique%20The%20Riverfront%20Bangkok"}] },

  // ————— Ohne Vorab-Buchung —————
  { id:"nachtmarkt", grp:"Vor Ort", status:"vorort", emoji:"🌃", date:"2026-08-28", time:"19:30",
    title:"Jodd Fairs Ratchada — Ankunftsabend", where:"129 Ratchadaphisek Rd, Din Daeng · MRT Thailand Cultural Centre, Ausgang 4",
    price:"Eintritt frei · Abendessen 200–400 ฿",
    info:["Täglich 17–1 Uhr offen, rund 800 Stände, Schwerpunkt Essen — läuft also auch am Ankunftstag","Anfahrt: MRT ab Yaek Tiwanon → Tao Poon → Thailand Cultural Centre, ~45 Min, 50–71 ฿ (Purple + Blue). Mit Bolt 30 Min, 200–260 ฿","Vor 19 Uhr da sein: freie Tische, kurze Schlange am Leng Saap (Schweine-Rückgrat-Turm, ab 180 ฿)","Gleich nebenan der Train Night Market Ratchada (Vintage, Container-Bars, seit März 2026 wieder auf) — 5 Min zu Fuß","Bargeld oder QR mitnehmen, Kartenzahlung ist die Ausnahme"],
    warn:"Der große Markt mit 15.000 Ständen ist Chatuchak — der läuft NUR Sa + So (9–18 Uhr). Freitagabends ist dort nur Großhandel mit wenigen Ständen. Chatuchak steht deshalb am Sa 29.08. · Und: „Jodd Fairs Rama 9\" gibt es seit Januar 2025 nicht mehr, im Navi immer „Jodd Fairs Ratchada\" eingeben.",
    links:[{t:"📍 In Google Maps",u:"https://www.google.com/maps/search/?api=1&query=Jodd%20Fairs%20Ratchada%2C%20129%20Ratchadaphisek%20Rd%2C%20Din%20Daeng%2C%20Bangkok"}] },

  { id:"mahanakhon", kurz:"Mahanakhon SkyWalk", grp:"Termine", status:"offen", emoji:"🏙️", date:"2026-09-02", time:"17:15–19:00",
    title:"Mahanakhon SkyWalk — Glasboden zum Sonnenuntergang", where:"114 Naradhiwas Rajanagarindra Rd, Silom · BTS Chong Nonsi, Ausgang 3",
    price:"Sonnenuntergangs-Slot 1.080–1.200 ฿ · tagsüber 880–1.000 ฿",
    info:["Der höchste Aussichtspunkt der Stadt: Innendeck 74. Stock, offenes Dach 78. Stock, Glasboden auf 310 m","Sonnenuntergangs-Slot buchen und 45–60 Min vorher da sein — dann siehst du die Stadt bei Tag, den Sonnenuntergang (um 18:29) und das Lichtermeer in einem Besuch","Online vorab buchen: günstiger als an der Kasse, und die Sonnenuntergangs-Slots sind schnell weg","Kein Dresscode, Rucksack erlaubt — anders als in der Sky Bar","Der Turm steht direkt über der BTS-Station, überdachter Zugang","SkyWalk 10–19 Uhr, letzter Einlass 18:30"],
    warn:"Regenzeit: Bei Sturm sperren sie Außendeck und Glasboden. Es gibt kein Geld zurück, nur eine Umbuchung — also erst am Tag selbst den Himmel anschauen, dann kaufen.",
    links:[{t:"🎟️ Offizielle Seite",u:"https://kingpowermahanakhon.co.th/experience/mahanakhon-skywalk"},{t:"📍 In Google Maps",u:"https://www.google.com/maps/search/?api=1&query=King%20Power%20Mahanakhon%20SkyWalk%20Bangkok"}] },

  { id:"sharkdive", kurz:"Shark Dive", tun:"buchen (LINE/WhatsApp)", grp:"Termine", status:"offen", emoji:"🦈", date:"2026-09-03", time:"11:00",
    title:"Shark Dive — mit Haien tauchen", where:"SEA LIFE, Untergeschoss Siam Paragon, 991 Rama I Rd · BTS Siam",
    price:"6.900 ฿ (~180 €) — gleicher Preis mit und ohne Tauchschein",
    info:["Mit Riffhaien und Rochen im großen Becken, ein Profi ist die ganze Zeit an deiner Seite. Kein Tauchschein nötig, 13 bis 55 Jahre","<b>VORHER buchen</b> über LINE <b>@sharkdive</b> oder WhatsApp <b>+66 81 274 4637</b> — spontan hingehen klappt meist nicht","<b>Beim Buchen sagen, dass dein Englisch nicht gut ist.</b> Steht so in ihren Bedingungen: dann organisiert das Team eine Übersetzung für die Einweisung","Du musst einigermaßen schwimmen können und vorab einen Gesundheitsfragebogen unterschreiben","15 Minuten vor der Zeit da sein — wer später kommt, verliert den Platz ohne Erstattung","Eigene Kamera darf nicht mit ins Wasser, die Bilder macht das Personal","Danach bist du direkt im Siam Paragon — Mittagessen und Shopping liegen im selben Haus"],
    warn:"NACH DEM TAUCHEN 12 STUNDEN NICHT FLIEGEN. Dein Rückflug ist Sonntag 22:55, deshalb liegt der Tauchgang auf Donnerstag — mit über drei Tagen Abstand. Am Abend davor keinen Alkohol.",
    phone:"+66812744637",
    links:[{t:"🦈 Offizielle Seite",u:"https://www.visitsealife.com/bangkok/en/explore/experiences/shark-dive/"},{t:"📍 In Google Maps",u:"https://www.google.com/maps/search/?api=1&query=SEA%20LIFE%20Bangkok%20Ocean%20World%20Siam%20Paragon"}] },

  { id:"gokart", kurz:"Go-Kart EasyKart", grp:"Vor Ort", status:"vorort", emoji:"🏎️", date:"2026-09-04", time:"19:30",
    title:"EasyKart — Asiens größte Indoor-Kartbahn", where:"RCA Plaza, 2. Stock, Rama 9 Rd · MRT Phra Ram 9",
    price:"Fast Kart 1.499 ฿ für 2 Rennen · Regular 699 ฿ · 3 Rennen + T-Shirt 1.999 ฿",
    info:["Der Fast Kart hat 200 cm³ und läuft 55 km/h. Ein Rennen dauert 8 Minuten, das sind 10 bis 15 Runden","Kein Führerschein nötig, es gibt vorher eine Einweisung. Ab 15 Jahren und 150 cm","Freitags bis 23 Uhr offen, Rennen starten alle 10 Minuten — einfach hingehen und zahlen","Drinnen und klimatisiert, also regensicher","Liegt 5 Minuten vom Train Night Market Ratchada — passt an denselben Abend"],
    warn:"Der Betreiber empfiehlt, für Bangkok vorher kurz anzurufen (+66 2 641 4252): die Bahn ist manchmal für Gruppen reserviert.",
    phone:"+6626414252",
    links:[{t:"🏎️ easykart.net",u:"https://easykart.net/bangkok/"},{t:"📍 In Google Maps",u:"https://www.google.com/maps/search/?api=1&query=EasyKart%20Bangkok%20RCA%20Plaza%20Rama%209"}] },

  { id:"ancientcity", kurz:"Ancient City", grp:"Vor Ort", status:"vorort", emoji:"🛕", date:"2026-09-05", time:"9:30–14:00",
    title:"Ancient City — Freilichtmuseum mit dem Fahrrad", where:"296/1 Moo 7 Sukhumvit Rd, Bang Pu Mai, Samut Prakan",
    price:"700 ฿ am Tor · online über Klook oft ~350 ฿ · Fahrrad ~100 ฿",
    info:["Über 100 nachgebaute Tempel, Paläste und Holzhäuser aus ganz Thailand auf 80 Hektar — und fast menschenleer","Täglich 9–19 Uhr, Kasse schließt 18 Uhr. Rechne mit 3–4 Std., mit dem Erawan-Museum nebenan 5–6","Hinfahrt morgens per Bolt (45–60 Min, 400–500 ฿), zurück entspannt per BTS ab Kheha","Fahrrad ~100 ฿ für den ganzen Tag. Die kostenlose Tram fährt 10, 13, 15 und 17 Uhr — beim Ticketkauf ausdrücklich sagen, dass du sie willst","Samstags fährt ab BTS Kheha ein kostenloser Shuttle zum Park","Kein Englisch nötig: du läufst und radelst durch einen Park, niemand redet auf dich ein","Erawan-Museum nebenan: ein 43 m hoher dreiköpfiger Elefant aus Kupfer, in den man hineinsteigen kann"],
    warn:"Online kaufen lohnt sich wirklich — am Tor 700 ฿, über Klook oft die Hälfte.",
    links:[{t:"🎟️ Offizielle Seite",u:"https://www.muangboranmuseum.com/en/"},{t:"📍 In Google Maps",u:"https://www.google.com/maps/search/?api=1&query=Ancient%20City%20Muang%20Boran%20Samut%20Prakan"}] },

  { id:"kokret", grp:"Vor Ort", status:"vorort", emoji:"🚲", date:"2026-09-06", time:"10:00–14:00",
    title:"Ko Kret — Flussinsel am Abreisetag", where:"Fähre ab Wat Sanam Nuea, Pak Kret · 20–25 Min Bolt vom Hotel",
    price:"Bolt 120–150 ฿ · Fähre 3 ฿ je Richtung · Fahrrad ~40 ฿",
    info:["Autofreie Insel der Mon-Minderheit, 2 km lang — zu Fuß in zwei Stunden einmal herum","SONNTAG ist genau der richtige Tag: dann zieht sich der Markt über einen Kilometer die Ostseite entlang. Werktags wäre fast alles zu","Töpferdörfer mit offenen Brennöfen, Mon-Streetfood, Tempel, kein einziges Auto","Dem Bolt-Fahrer einfach „Ko Kret“ oder „Wat Sanam Nuea“ sagen — das kennt jeder. Am Tempel durchlaufen bis zum Pier, Fähre 3 ฿, eine Minute über den Fluss","Fähre fährt 5–21 Uhr im Minutentakt","Vormittags hin, bevor die Sonne knallt — und du bist lange vor dem Transfer zurück"],
    links:[{t:"📍 Fähranleger in Google Maps",u:"https://www.google.com/maps/search/?api=1&query=Wat%20Sanam%20Nuea%20Ko%20Kret%20Ferry%20Pier"}] },

  { id:"chatuchak", grp:"Vor Ort", status:"vorort", emoji:"🧺", date:"2026-08-29", time:"9:30–13:00",
    title:"Chatuchak Weekend Market", where:"MRT Chatuchak Park · ab Yaek Tiwanon ~35 Min, 40–60 ฿",
    price:"Eintritt frei",
    info:["Der volle Markt läuft NUR Sa + So von 9 bis 18 Uhr — alle 27 Sektionen, 15.000 Stände","Freitagabend ist dort nur Großhandel (18–24 Uhr, wenige Stände) und Mi/Do nur die Pflanzen-Sektion","Feilschen: Startpreis minus 30–40 %","Rucksack nach vorne tragen"] },

  { id:"palast", grp:"Vor Ort", status:"vorort", emoji:"👑", date:"2026-08-31", time:"10:00",
    title:"Grand Palace + Wat Pho + Wat Arun", where:"Altstadt · Anreise per Expressboot ab Nonthaburi Pier",
    price:"Grand Palace 500 ฿ · Wat Pho 300 ฿ · Wat Arun 200 ฿ + 5 ฿ Fähre = 1.005 ฿",
    info:["8:15 Bolt zum Nonthaburi Pier (10 Min), dann Expressboot flussabwärts (~1 Std.): orange 18 ฿, gelb 23 ฿, rot 32 ฿ — an Bord zahlen. Die schönste Anreise der Stadt. Nach 19 Uhr fahren die Expressboote nicht mehr","Dresscode am Palast ist der strengste des Landes: lange Hose, Oberteil MIT Ärmeln, geschlossene Schuhe oder Sandalen mit Fersenriemen. Shorts, ärmellos, zerrissene Jeans, Flip-Flops = abgewiesen. Sarong-Verleih am Eingang gegen ~200 ฿ Pfand","Kassenschluss Palast 15:30, Gelände bis 16:30 — vormittags hin. Das 500-฿-Ticket gilt 7 Tage und deckt Wat Phra Kaew und das Queen-Sirikit-Textilmuseum mit ab","Wat Pho (8–18:30): liegender Buddha, Wasserflasche im Ticket, dazu Thai-Massage in der Original-Tempelmassageschule — 30 Min ab 340 ฿, 1 Std. ~520 ฿"],
    warn:"„Der Palast ist heute geschlossen\" vor dem Tor ist IMMER die Tuk-Tuk-Masche. Er ist offen — einfach durchgehen." },

  { id:"klong", grp:"Vor Ort", status:"vorort", emoji:"🛶", date:"2026-09-02", time:"7:00",
    title:"Klong-Tour im Longtail + Bang Krachao", where:"Start Wat Arun oder Sathorn Pier",
    price:"Boot solo 1.000–1.500 ฿ · Fähre 10 ฿ · Fahrrad ~100 ฿",
    info:["Um 7 Uhr gehört dir die Stadt allein","Danach Bang Krachao: Dschungel-Holzstege mitten in der Stadt, 2–3 Std. Runde, vor der Mittagshitze fertig"],
    warn:"Preis UND Dauer vor dem Einsteigen fix vereinbaren — sonst wird aus 1 Std. plötzlich eine teure Zusatzrunde." },

  { id:"ayutthaya", grp:"Vor Ort", status:"vorort", emoji:"🏛️", date:"2026-09-04", time:"9:05",
    title:"Ayutthaya per Zug", where:"ab Krung Thep Aphiwat (Bang Sue), MRT-Anschluss",
    price:"Zug 3. Klasse ~70 ฿ je Strecke · Sammelticket Ruinen 220 ฿ · Roller ~250 ฿",
    info:["Hin: Rapid 111 um 7:50 oder Express 75 um 8:45, rund 1 Std. Zurück: Rapid 112 um 16:04 oder Rapid 136 um 16:41. Ticket am Schalter, Rückfahrt gleich mitkaufen — und die Zeiten dort bestätigen lassen","Vor Ort Roller (~250 ฿) oder Tuk-Tuk-Pauschale (4 Std. 800–1.000 ฿ — VORHER festmachen)","Runde: Wat Mahathat (Buddha-Kopf im Baum), Wat Phra Si Sanphet, Wat Chaiwatthanaram","Rückzug am Nachmittag — Zeit morgens am Schalter erfragen","Komplett rund 600 ฿ statt 30+ € für eine Tour — und du hängst an keiner Gruppe"] }
];
