// Bangkok 2026 — Termine & Buchungen (Reiter „Termine")
// Alles, was du planst: was steht, was du noch buchen musst, was du vor Ort zahlst.
// WICHTIG: Repo ist oeffentlich — NIE Buchungsnummern/Referenzen hier hineinschreiben.
// Die stehen verschluesselt unter Info → Meine Reisedaten.
//
// status: "fix"    = gebucht und bestaetigt, nichts mehr zu tun
//         "offen"  = du musst noch buchen/anrufen  → zaehlt in den Fortschritt
//         "vorort" = kein Vorab-Ticket noetig, vor Ort zahlen
const BOOKINGS = [

  // ————— Das Grundgeruest —————
  { id:"flug", grp:"Reise", status:"fix", emoji:"✈️", date:"2026-08-27", time:"22:20",
    title:"Lufthansa LH772 → Bangkok", where:"München T2 · Direktflug 10,5 Std.",
    price:"in der Pauschalreise enthalten",
    info:["Landung Fr 28.08. um 13:45 Uhr Ortszeit in Suvarnabhumi (BKK)","Gepäck: 1×23 kg aufgeben + 1×8 kg Handgepäck (55×40×23) + persönlicher Gegenstand","Rückflug LH773: So 06.09. 22:55 ab BKK → Mo 07.09. 05:15 München","Online-Check-in öffnet 26.08. abends"],
    warn:"Powerbank MUSS ins Handgepäck — im Koffer ist sie verboten.",
    links:[{t:"✈️ LH Check-in",u:"https://www.lufthansa.com/de/de/online-check-in"}],
    ref:"Buchungsnummer & PNR: Info → Meine Reisedaten" },

  { id:"hotel", grp:"Reise", status:"fix", emoji:"🏨", date:"2026-08-28", time:"Check-in",
    title:"Oakwood Suites Tiwanon", where:"229 Krungthep-Nonthaburi Rd, Nonthaburi 11000",
    price:"in der Pauschalreise enthalten · Frühstück inklusive",
    info:["One Bedroom Deluxe King, 31 m², Balkon, Waschmaschine in der Suite","Check-in Fr 28.08. · Check-out So 06.09. (9 Nächte)","Pool, Sauna, Rooftop · MRT Yaek Tiwanon (Purple Line) direkt gegenüber","Kein Aufpreis beim Check-in — das Zimmer-Upgrade wurde zurückgezogen, Hotel hat schriftlich bestätigt","Tel. +66 2 149 9450"],
    links:[{t:"📍 In Google Maps",u:"https://www.google.com/maps/search/?api=1&query=Oakwood%20Suites%20Tiwanon%20Nonthaburi"}],
    ref:"Bestätigungs-Nr.: Info → Meine Reisedaten" },

  { id:"transfer", grp:"Reise", status:"fix", emoji:"🚐", date:"2026-08-28", time:"~15:15",
    title:"Privater Flughafen-Transfer", where:"BKK → Hotel · und am 06.09. zurück",
    price:"in der Pauschalreise enthalten (69 €)",
    info:["Fahrt Flughafen → Hotel dauert rund 1 Std.","Rückfahrt am 06.09. ca. 19:00 ab Hotel — 3 Std. Puffer vor dem 22:55-Flug"],
    warn:"Abholzeit musst du 24 Std. vor Abflug selbst in „Meine Buchung verwalten\" nachsehen — sie wird nicht automatisch geschickt.",
    links:[{t:"🧳 Meine Buchung",u:"https://www.loveholidays.de/"}],
    ref:"Transfer-Referenz: Info → Meine Reisedaten" },

  { id:"parkplatz", grp:"Reise", status:"fix", emoji:"🅿️", date:"2026-08-27", time:"~19:00",
    title:"Parkplatz München (Parkos)", where:"Parkprofi Parkhaus, Josef-Beil-Ring 2, 85435 Erding",
    price:"128 € für 12 Tage (bezahlt) — spart ~230 € gegenüber Terminal",
    info:["Überdacht · Shuttle ~10 Min zum Terminal 2","Gebucht 27.08. ~19:00 bis 07.09. ~07:00"],
    ref:"Reservierungs-Nr.: Info → Meine Reisedaten" },

  { id:"tdac", grp:"Reise", status:"offen", emoji:"🛂", date:"2026-08-25", time:"ab diesem Tag",
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

  { id:"elefanten", grp:"Termine", status:"offen", emoji:"🐘", date:"2026-09-01", time:"9:00–12:00",
    title:"Bangkok Elephant Park — Halbtag Vormittag", where:"47 Suwinthawong Rd, Krathum Rai, Nong Chok, Bangkok 10530",
    price:"direkt beim Park 2.200 ฿ (~58 €) · GetYourGuide 43–55 €",
    info:["<b>ZUM ENGLISCH — das ist kein Problem hier:</b> Buch über <b>GetYourGuide auf Deutsch</b> (Button unten), nicht direkt beim Park. Dann ist die ganze Buchung, die Bestätigung und der Kundendienst auf Deutsch, und du kannst bis 24 Std. vorher kostenlos stornieren. Beim Park selbst läuft alles auf Englisch.","<b>Vor Ort brauchst du fast keine Sprache:</b> Das Programm ist zum Mitmachen, nicht zum Zuhören — füttern, laufen, Schlamm, baden. Der Guide macht alles vor, du machst nach, wie alle anderen auch. Für den Rest liegen im Reiter <b>Sprache → 🐘 Elefanten-Park</b> elf Sätze mit Aussprache bereit, einer davon: „My English is not good. Can you show me, please?“ — das sagst du einmal und der Guide zeigt dir alles.","Ethisch: kein Reiten, keine Shows. 4,8 ★ bei über 1.000 Bewertungen","Park täglich 9–17 Uhr offen · Option OHNE Transfer buchen, du fährst selbst mit Bolt","Ablauf: 9:00 Welcome Drink · 9:15 Elefantenkunde · 9:30 Kräuterinhalator basteln · 9:45 füttern · 10:05 Waldspaziergang, Schlamm-Spa, baden · 11:15 duschen & umziehen · 11:30 Thai-Lunchbox","Outfit, Hut und Handtuch stellt der Park — du brauchst nur Badehose und trockene Wechselsachen für die Heimfahrt","Anfahrt: ~50 km vom Hotel, 1–1,5 Std. mit Bolt (600–900 ฿). Dienstag ist Berufsverkehr → 7:00 losfahren","Preis: direkt beim Park 2.200 ฿ (~58 €), über GetYourGuide 43–55 € — die deutsche Buchung ist also nicht mal teurer","Google Übersetzer vorher aufs Handy: Thai und Englisch als Offline-Paket laden. Die Kamera-Funktion übersetzt Schilder und Speisekarten live","Park-Telefon: +66 90 920 5885"],
    warn:"Nong Chok ist abgelegen — für den Rückweg den Bolt-Fahrer warten lassen (Festpreis vorher vereinbaren) oder die Rezeption ein Taxi rufen lassen.",
    phone:"+66909205885",
    links:[{t:"🇩🇪 GetYourGuide (deutsch) — so buchen",u:"https://www.getyourguide.de/bangkok-l169/bangkok-halbtag-elefantenpark-ohne-transfer-t741040/"},{t:"🐘 Park-Seite (englisch)",u:"https://www.bangkokelephant.com/programs/half-day-morning-program-no-transfer/"},{t:"📍 In Google Maps",u:"https://www.google.com/maps/search/?api=1&query=Bangkok%20Elephant%20Park%2C%2047%20Suwinthawong%20Rd%2C%20Krathum%20Rai%2C%20Nong%20Chok%2C%20Bangkok%2010530"}] },

  { id:"healthland", grp:"Termine", status:"offen", emoji:"💆", date:"2026-09-01", time:"13:30",
    title:"Health Land Asoke — Massage nach den Elefanten", where:"Sukhumvit Soi 21 (Asoke), neben Terminal 21",
    price:"Thai 2 Std. 700 ฿ · Aroma-Öl 1.200–1.850 ฿ · Ayurveda Abhyanga 1.700 ฿",
    info:["Anrufen statt online buchen — die Online-Buchung will Konto und Kartenzahlung vorab. Tel. +66 2 261 1110, täglich 9–23 Uhr","Asoke liegt auf dem Rückweg vom Elefanten-Park — nicht erst zum Hotel fahren, das spart dir 1,5 Std. Fahrt","Nach Sonne, Schlamm und Elefantenlaufen ist die Öl-Massage angenehmer als die harte Thai-Massage. Bei Öl duschst du vorher dort","Danach: Terminal 21 ist direkt nebenan (Pier-21-Foodcourt, 5. Stock, Gerichte ab 50 ฿), Soi 11 ein paar Schritte weiter","Heimweg: MRT Sukhumvit → Tao Poon → Yaek Tiwanon, rund 42 ฿"],
    phone:"+6622611110",
    links:[{t:"📍 In Google Maps",u:"https://www.google.com/maps/search/?api=1&query=Health%20Land%20Spa%20Asoke%20Bangkok"}] },

  { id:"cruise", grp:"Termine", status:"offen", emoji:"🛳️", date:"2026-09-03", time:"18:00–20:00",
    title:"Chao-Phraya Dinner-Cruise (5 Sterne)", where:"Ablegen an Asiatique The Riverfront",
    price:"ab ~26 € · mit Dinner-Buffet 34–52 €",
    info:["Den 18-Uhr-Slot nehmen: Sonnenuntergang UND Nachtlichter in einer Fahrt","Vorbei an Wat Arun, Grand Palace und ICONSIAM vom Wasser aus","17:15 Bolt ab Hotel (40 Min, 260–340 ฿), Check-in am Asiatique Pier","Ohne Alkohol völlig unproblematisch — Dinner-Buffet und Säfte sind dabei","Danach noch eine Runde Asiatique-Nachtmarkt"],
    warn:"Nur online mit festem Datum und Slot buchen. Die Ticketverkäufer am Pier-Vorplatz sind teurer oder verkaufen Falsches.",
    links:[{t:"🎟️ GetYourGuide",u:"https://www.getyourguide.com/de-de/bangkok-l169/bangkok-die-neueste-luxuriose-5-sterne-kreuzfahrt-auf-dem-chao-phraya-in-bangkok-t960991/"},{t:"📍 Asiatique",u:"https://www.google.com/maps/search/?api=1&query=Asiatique%20The%20Riverfront%20Bangkok"}] },

  { id:"shooting", grp:"Termine", status:"offen", emoji:"📸", date:"2026-09-05", time:"17:30–19:30",
    title:"Golden-Hour Foto-Shooting", where:"Treffpunkt Wat Arun, danach Chinatown",
    price:"rund 150 € für 2 Std., ca. 30 bearbeitete Bilder",
    info:["Route: Wat Arun zum Sonnenuntergang → Chinatown mit Neonlicht","Vorab über TripAdvisor oder Localgrapher buchen — Datum und Treffpunkt schriftlich festhalten","Bilder kommen binnen 14 Tagen per Online-Galerie","Davor passt: 15:00 Wat Mangkon Kamalawat (Laternen-Tempel, Eintritt frei, bis 18 Uhr)","Outfit mitdenken — das sind die Bilder, die du behältst"],
    links:[{t:"📍 Wat Arun",u:"https://www.google.com/maps/search/?api=1&query=Wat%20Arun%20Bangkok"}] },

  // ————— Ohne Vorab-Buchung —————
  { id:"nachtmarkt", grp:"Vor Ort", status:"vorort", emoji:"🌃", date:"2026-08-28", time:"19:30",
    title:"Jodd Fairs Ratchada — Ankunftsabend", where:"129 Ratchadaphisek Rd, Din Daeng · MRT Thailand Cultural Centre, Ausgang 4",
    price:"Eintritt frei · Abendessen 200–400 ฿",
    info:["Täglich 17–1 Uhr offen, rund 800 Stände, Schwerpunkt Essen — läuft also auch am Ankunftstag","Anfahrt: MRT ab Yaek Tiwanon → Tao Poon → Thailand Cultural Centre, ~45 Min, 50–71 ฿ (Purple + Blue). Mit Bolt 30 Min, 200–260 ฿","Vor 19 Uhr da sein: freie Tische, kurze Schlange am Leng Saap (Schweine-Rückgrat-Turm, ab 180 ฿)","Gleich nebenan der Train Night Market Ratchada (Vintage, Container-Bars, seit März 2026 wieder auf) — 5 Min zu Fuß","Bargeld oder QR mitnehmen, Kartenzahlung ist die Ausnahme"],
    warn:"Der große Markt mit 15.000 Ständen ist Chatuchak — der läuft NUR Sa + So (9–18 Uhr). Freitagabends ist dort nur Großhandel mit wenigen Ständen. Chatuchak steht deshalb am Sa 29.08. · Und: „Jodd Fairs Rama 9\" gibt es seit Januar 2025 nicht mehr, im Navi immer „Jodd Fairs Ratchada\" eingeben.",
    links:[{t:"📍 In Google Maps",u:"https://www.google.com/maps/search/?api=1&query=Jodd%20Fairs%20Ratchada%2C%20129%20Ratchadaphisek%20Rd%2C%20Din%20Daeng%2C%20Bangkok"}] },

  { id:"mahanakhon", grp:"Termine", status:"offen", emoji:"🏙️", date:"2026-09-02", time:"17:15–19:00",
    title:"Mahanakhon SkyWalk — Glasboden zum Sonnenuntergang", where:"114 Naradhiwas Rajanagarindra Rd, Silom · BTS Chong Nonsi, Ausgang 3",
    price:"Sonnenuntergangs-Slot 1.080–1.200 ฿ · tagsüber 880–1.000 ฿",
    info:["Der höchste Aussichtspunkt der Stadt: Innendeck 74. Stock, offenes Dach 78. Stock, Glasboden auf 310 m","Sonnenuntergangs-Slot buchen und 45–60 Min vorher da sein — dann siehst du die Stadt bei Tag, den Sonnenuntergang (um 18:29) und das Lichtermeer in einem Besuch","Online vorab buchen: günstiger als an der Kasse, und die Sonnenuntergangs-Slots sind schnell weg","Kein Dresscode, Rucksack erlaubt — anders als in der Sky Bar","Der Turm steht direkt über der BTS-Station, überdachter Zugang","SkyWalk 10–19 Uhr, letzter Einlass 18:30"],
    warn:"Regenzeit: Bei Sturm sperren sie Außendeck und Glasboden. Es gibt kein Geld zurück, nur eine Umbuchung — also erst am Tag selbst den Himmel anschauen, dann kaufen.",
    links:[{t:"🎟️ Offizielle Seite",u:"https://kingpowermahanakhon.co.th/experience/mahanakhon-skywalk"},{t:"📍 In Google Maps",u:"https://www.google.com/maps/search/?api=1&query=King%20Power%20Mahanakhon%20SkyWalk%20Bangkok"}] },

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
