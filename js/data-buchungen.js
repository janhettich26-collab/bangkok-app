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

  { id:"rajadamnern", grp:"Termine", status:"offen", emoji:"🥊", date:"2026-08-30", time:"18:00",
    title:"Rajadamnern Stadion — Muay-Thai-Kämpfe", where:"Ratchadamnoen Nok Rd, Altstadt · 10 Min Bolt vom Golden Mount",
    price:"Ticket ab ~700 ฿",
    info:["Nur zuschauen, kein Training — das ist das älteste und traditionsreichste Stadion des Landes","Sonntags beginnen die Kämpfe früher als sonst (ab 17/18 Uhr)","Ticket vorab auf rajadamnern.com kaufen","Passt in den Altstadt-Abend: 16:30 Golden Mount → 18:00 Kämpfe → 21:00 Chinatown"],
    warn:"Wenn du Muay Thai komplett streichen willst, sag Bescheid — dann fliegt dieser Punkt raus und der Sonntagabend geht direkt vom Golden Mount nach Chinatown.",
    links:[{t:"🎟️ rajadamnern.com",u:"https://rajadamnern.com"},{t:"📍 In Google Maps",u:"https://www.google.com/maps/search/?api=1&query=Rajadamnern%20Stadium%20Bangkok"}] },

  { id:"elefanten", grp:"Termine", status:"offen", emoji:"🐘", date:"2026-09-01", time:"9:00–12:00",
    title:"Bangkok Elephant Park — Halbtag Vormittag", where:"47 Suwinthawong Rd, Krathum Rai, Nong Chok, Bangkok 10530",
    price:"direkt beim Park 2.200 ฿ (~58 €) · GetYourGuide 43–55 €",
    info:["Ethisch: kein Reiten, keine Shows. 4,8 ★ bei über 1.000 Bewertungen","Park täglich 9–17 Uhr offen · Option OHNE Transfer buchen, du fährst selbst mit Bolt","Ablauf: 9:00 Welcome Drink · 9:15 Elefantenkunde · 9:30 Kräuterinhalator basteln · 9:45 füttern · 10:05 Waldspaziergang, Schlamm-Spa, baden · 11:15 duschen & umziehen · 11:30 Thai-Lunchbox","Outfit, Hut und Handtuch stellt der Park — du brauchst nur Badehose und trockene Wechselsachen für die Heimfahrt","Anfahrt: ~50 km vom Hotel, 1–1,5 Std. mit Bolt (600–900 ฿). Dienstag ist Berufsverkehr → 7:00 losfahren","Preise vor dem Buchen vergleichen: GetYourGuide ist oft günstiger und bis 24 Std. vorher kostenlos stornierbar","Park-Telefon: +66 90 920 5885"],
    warn:"Nong Chok ist abgelegen — für den Rückweg den Bolt-Fahrer warten lassen (Festpreis vorher vereinbaren) oder die Rezeption ein Taxi rufen lassen.",
    phone:"+66909205885",
    links:[{t:"🐘 Direkt beim Park",u:"https://www.bangkokelephant.com/programs/half-day-morning-program-no-transfer/"},{t:"🎟️ GetYourGuide",u:"https://www.getyourguide.de/bangkok-l169/bangkok-halbtag-elefantenpark-ohne-transfer-t741040/"},{t:"📍 In Google Maps",u:"https://www.google.com/maps/search/?api=1&query=Bangkok%20Elephant%20Park%2C%2047%20Suwinthawong%20Rd%2C%20Krathum%20Rai%2C%20Nong%20Chok%2C%20Bangkok%2010530"}] },

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
  { id:"chatuchak", grp:"Vor Ort", status:"vorort", emoji:"🧺", date:"2026-08-29", time:"9:30–13:00",
    title:"Chatuchak Weekend Market", where:"MRT Chatuchak Park · ab Yaek Tiwanon ~35 Min, ~40 ฿",
    price:"Eintritt frei",
    info:["Läuft nur Samstag und Sonntag — 15.000 Stände","Feilschen: Startpreis minus 30–40 %","Rucksack nach vorne tragen"] },

  { id:"palast", grp:"Vor Ort", status:"vorort", emoji:"👑", date:"2026-08-31", time:"10:00",
    title:"Grand Palace + Wat Pho + Wat Arun", where:"Altstadt · Anreise per Expressboot ab Nonthaburi Pier",
    price:"Grand Palace 500 ฿ · Wat Pho 300 ฿ · Fähre Wat Arun 5 ฿",
    info:["8:15 Bolt zum Nonthaburi Pier (10 Min), dann Expressboot flussabwärts (~20 ฿, ~1 Std.) — die schönste Anreise der Stadt","Dresscode: Schultern und Knie bedeckt, sonst kommst du nicht rein","Wat Pho: liegender Buddha + Thai-Massage in der Original-Tempelmassageschule"],
    warn:"„Der Palast ist heute geschlossen\" vor dem Tor ist IMMER die Tuk-Tuk-Masche. Er ist offen — einfach durchgehen." },

  { id:"klong", grp:"Vor Ort", status:"vorort", emoji:"🛶", date:"2026-09-02", time:"7:00",
    title:"Klong-Tour im Longtail + Bang Krachao", where:"Start Wat Arun oder Sathorn Pier",
    price:"Boot solo 1.000–1.500 ฿ · Fähre 10 ฿ · Fahrrad ~100 ฿",
    info:["Um 7 Uhr gehört dir die Stadt allein","Danach Bang Krachao: Dschungel-Holzstege mitten in der Stadt, 2–3 Std. Runde, vor der Mittagshitze fertig"],
    warn:"Preis UND Dauer vor dem Einsteigen fix vereinbaren — sonst wird aus 1 Std. plötzlich eine teure Zusatzrunde." },

  { id:"ayutthaya", grp:"Vor Ort", status:"vorort", emoji:"🏛️", date:"2026-09-04", time:"9:05",
    title:"Ayutthaya per Zug", where:"ab Krung Thep Aphiwat (Bang Sue), MRT-Anschluss",
    price:"Zug ~50 ฿ je Strecke · Sammelticket Ruinen 220 ฿ · Roller ~250 ฿",
    info:["Zug 9003 um 9:05 → 10:20 Ankunft Ayutthaya. Ticket NUR am Schalter, kein Online-Verkauf","Vor Ort Roller (~250 ฿) oder Tuk-Tuk-Pauschale (4 Std. 800–1.000 ฿ — VORHER festmachen)","Runde: Wat Mahathat (Buddha-Kopf im Baum), Wat Phra Si Sanphet, Wat Chaiwatthanaram","Rückzug am Nachmittag — Zeit morgens am Schalter erfragen","Komplett rund 600 ฿ statt 30+ € für eine Tour — und du hängst an keiner Gruppe"] }
];
