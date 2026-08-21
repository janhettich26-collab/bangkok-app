// Packliste Bangkok 2026 — 9 Hotelnaechte (28.08.–06.09.), Regenzeit, Waschmaschine in der Suite
const PACK = [
  {
    id: "hand", icon: "🎒", title: "Handgepäck",
    note: "Kommt NIE in den Koffer. GOT BAG, 8 kg, 55×40×23.",
    items: [
      { id:"pass",     t:"Reisepass", w:"gültig über 6 Monate" },
      { id:"tdacqr",   t:"TDAC-QR", w:"ausgedruckt UND auf dem Handy" },
      { id:"ausdruck", t:"Ausdrucke: Flug, Hotel, Transfer, Parkplatz", w:"Nummern stehen im Info-Tab unter „Meine Reisedaten“" },
      { id:"bargeld",  t:"Bargeld gewechselt/eingesteckt", w:"auf drei Orte aufteilen: Portemonnaie, Handgepäck, GOT-BAG-Rückenfach" },
      { id:"karten",   t:"Kreditkarte + EC-Karte", w:"getrennt tragen, eine in den Koffer" },
      { id:"handy",    t:"Handy + Ladekabel + Netzteil" },
      { id:"power",    t:"Powerbank", w:"MUSS ins Handgepäck — im Koffer verboten" },
      { id:"kopf",     t:"Kopfhörer" },
      { id:"ersatz",   t:"1× Shirt, Unterwäsche, Socken", w:"falls der Koffer nicht mitkommt" },
      { id:"pulli",    t:"Dünner Pulli/Hoodie", w:"Flieger + Malls sind eiskalt" },
      { id:"zahnb",    t:"Zahnbürste + Zahnpasta unter 100 ml" },
      { id:"schlaf",   t:"Schlafmaske, Ohrstöpsel, Kaugummi", w:"Nachtflug 22:20" },
      { id:"zip100",   t:"Flüssigkeiten im 1-l-Zip-Beutel", w:"je max. 100 ml" }
    ]
  },
  {
    id: "kleid", icon: "👕", title: "Kleidung",
    note: "Waschmaschine ist in der Suite → halbe Menge reicht. Funktionsstoff/Leinen statt Baumwolle.",
    items: [
      { id:"shirts",  t:"6× T-Shirt / Poloshirt" },
      { id:"spafit",  t:"1× Polohemd + 1× lange Stoffhose", w:"PFLICHT Spa So 30.08. — Dresscode Mandarin Oriental" },
      { id:"slipons", t:"Slip-ons / Schuhe ohne Schnürsenkel", w:"Spa + Tempel: schnell aus und an" },
      { id:"lang",    t:"2× lange leichte Hose", w:"Tempel Wat Arun + Ayutthaya: Knie bedeckt = Pflicht" },
      { id:"kurz",    t:"3× kurze Hose" },
      { id:"unter",   t:"8× Unterwäsche, 6× Socken" },
      { id:"bade",    t:"Badehose + kleines Handtuch", w:"Hotelpool, Sauna" },
      { id:"sneaker", t:"Sneaker (viel Laufen) + Flip-Flops" },
      { id:"regen",   t:"Dünne Regenjacke oder Poncho", w:"Regenzeit — fast täglich ein Schauer" },
      { id:"cap",     t:"Cap/Hut + Sonnenbrille" },
      { id:"nacht",   t:"Schlafsachen" },
      { id:"foto",    t:"1× ordentliches Hemd + lange Hose", w:"für Grand Palace, Oriental Spa, Schießstand und Sky Bar" }
    ]
  },
  {
    id: "tech", icon: "🔌", title: "Elektronik",
    note: "Thailand: 220 V, Typ A/B/C — der deutsche Eurostecker passt meist direkt.",
    items: [
      { id:"powerbank2", t:"Powerbank 10.000–20.000 mAh", w:"ins Handgepäck!" },
      { id:"mehrfach",   t:"Mehrfachsteckdose", w:"1 Steckdose → 3 Geräte, spart Adapter" },
      { id:"adapter",    t:"Universaladapter", w:"zur Sicherheit" },
      { id:"esim",       t:"eSIM dtac installiert", w:"daheim im WLAN, Aktivierung erst in Bangkok" },
      { id:"huelle",     t:"Wasserdichte Handyhülle / Zip-Beutel", w:"Regen + Hotelboot + Dinner-Cruise" },
      { id:"kamera",     t:"Kamera + Ersatzakku", w:"optional" }
    ]
  },
  {
    id: "bad", icon: "🧴", title: "Bad & Körper",
    items: [
      { id:"sonne",   t:"Sonnencreme LSF 50", w:"vor Ort teuer" },
      { id:"muecke",  t:"Mückenspray mit DEET oder Icaridin", w:"Regenzeit = Dengue-Zeit" },
      { id:"aftersun",t:"After-Sun / Aloe Vera" },
      { id:"dusch",   t:"Deo, Duschgel, Shampoo", w:"Reisegrößen" },
      { id:"zahn",    t:"Zahnbürste, Zahnpasta, Zahnseide" },
      { id:"rasier",  t:"Rasierer + Klingen" },
      { id:"nagel",   t:"Nagelknipser" },
      { id:"tuecher", t:"Feuchttücher + Taschentücher", w:"auf vielen Toiletten gibt es kein Papier — und es kommt in den Eimer" },
      { id:"desi",    t:"Handdesinfektion" },
      { id:"lippen",  t:"Lippenpflege" }
    ]
  },
  {
    id: "apo", icon: "💊", title: "Reiseapotheke",
    items: [
      { id:"durchfall", t:"Durchfallmittel + Elektrolytpulver", w:"das Wichtigste bei Streetfood" },
      { id:"schmerz",   t:"Ibuprofen / Paracetamol" },
      { id:"magen",     t:"Magentabletten gegen Sodbrennen" },
      { id:"pflaster",  t:"Pflaster, Blasenpflaster, Wunddesinfektion" },
      { id:"reise",     t:"Reisetabletten", w:"Boot + Zug nach Ayutthaya" },
      { id:"dauer",     t:"Dauermedikamente in Originalverpackung", w:"mit Beipackzettel" },
      { id:"stich",     t:"Gel gegen Insektenstiche" },
      { id:"nase",      t:"Nasenspray", w:"Klimaanlage trocknet aus" }
    ]
  },
  {
    id: "prakt", icon: "🧳", title: "Praktisches",
    items: [
      { id:"tagesruck", t:"Kleiner Tagesrucksack", w:"der GOT BAG geht auch tagsüber" },
      { id:"flasche",   t:"Faltbare Trinkflasche" },
      { id:"packw",     t:"Zip-Beutel / Packwürfel" },
      { id:"waesche",   t:"Wäschebeutel für Schmutzwäsche" },
      { id:"schloss",   t:"Kleines Vorhängeschloss" },
      { id:"kopien",    t:"Pass- und Versicherungskopie", w:"digital in der Cloud + einmal auf Papier" },
      { id:"hotelkarte",t:"Hotel-Adresse auf Thai", w:"für Fahrer Gold wert — steht auch im Info-Tab" },
      { id:"kuli",      t:"Kugelschreiber" },
      { id:"halbleer",  t:"Koffer HALB LEER lassen", w:"Mitbringsel — 23 kg ist die Grenze" }
    ]
  },
  {
    id: "nein", icon: "🚫", title: "Auf keinen Fall mitnehmen",
    note: "Abhaken heißt hier: kontrolliert, ist NICHT dabei.",
    danger: true,
    items: [
      { id:"vape",   t:"E-Zigarette / Vape", w:"in Thailand illegal — Beschlagnahme und hohe Strafe, auch für Touristen" },
      { id:"canna",  t:"Cannabis, CBD-Öl", w:"Rechtslage 2026 verschärft" },
      { id:"pseudo", t:"Erkältungsmittel mit Pseudoephedrin" },
      { id:"drohne", t:"Drohne", w:"Registrierungspflicht, Ärger am Zoll" },
      { id:"schmuck",t:"Teurer Schmuck / teure Uhr" }
    ]
  },
  {
    id: "abflug", icon: "✈️", title: "Am Reisetag Do 27.08.",
    note: "Flug LH772 ab München 22:20 · Parkhaus Erding gegen 19:00.",
    items: [
      { id:"laden",   t:"Handy + Powerbank voll geladen" },
      { id:"kuehl",   t:"Kühlschrank leeren, Müll raus" },
      { id:"fenster", t:"Fenster zu, Heizung runter" },
      { id:"parkos",  t:"Parkhaus-Bedingungen gelesen", w:"bleibt der Autoschlüssel dort? Beleg im Info-Tab" },
      { id:"losfahrt",t:"Losfahren — am Parkhaus gegen 19:00", w:"Shuttle ~10 Min zu T2" }
    ]
  }
];
