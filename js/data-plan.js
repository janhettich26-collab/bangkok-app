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
      { t:"~15:15", txt:"Transfer zum Hotel — die Abholzeit hast du 24 h vorher gecheckt. Freitagnachmittag ist Rushhour, rechne eher mit 1,5 Std.", z:"hotel", r:"🚐 Transfer inklusive · ~1 Std. ab Flughafen" },
      { t:"16:30", txt:"Check-in Oakwood. eSIM an, Bolt-App: Hotel als Heimatadresse. Duschen, umziehen, Koffer stehen lassen." },
      { t:"17:30", txt:"Kurz Big C nebenan: Wasser, Sonnencreme, Snacks fürs Zimmer. Bargeld prüfen — der Nachtmarkt ist Bargeld/QR." },
      { t:"18:30", txt:"Los zum Nachtmarkt. Wenn dich der Flug umhaut, nimm statt der Bahn ein Bolt — 30 Min für 200–260 ฿.", z:"joddfairs", r:"🚇 Yaek Tiwanon → Tao Poon → Thailand Cultural Centre, Ausg. 4 · 45 Min · 50–71 ฿" },
      { t:"19:30", txt:"Jodd Fairs Ratchada — der beste Nachtmarkt der Stadt, rund 800 Stände, täglich offen. Abendessen quer durch die Stände für 200–400 ฿. Das Foto-Gericht: Leng Saap, der Schweine-Rückgrat-Turm ab 180 ฿." },
      { t:"21:00", txt:"Wenn du noch kannst: 5 Min zu Fuß rüber zum Train Night Market Ratchada — Vintage-Zelte und Container-Bars, seit März 2026 wieder auf. Sonst direkt heim." },
      { t:"~22:30", txt:"Zurück mit der MRT (fährt bis Mitternacht — danach nur noch Bolt)." }
    ],
    note:"Der ganz große Markt mit 15.000 Ständen ist Chatuchak — der läuft aber NUR Sa + So. Freitagabend ist dort bloß Großhandel mit einem Bruchteil der Stände. Chatuchak hast du deshalb morgen früh, heute den besten Nachtmarkt. Wenn dich der Flug umhaut: Owl Market vor der Tür (10 Min) tut es auch — oder Pool und schlafen." },

  { date:"2026-08-29", wd:"Sa", title:"Chatuchak & Chinatown", icon:"🧺",
    blocks:[
      { t:"8:45", txt:"Los zum Chatuchak. Heute läuft der Markt komplett — alle 27 Sektionen, 15.000 Stände.", z:"chatuchak", r:"🚇 Yaek Tiwanon → Tao Poon → Chatuchak Park · 35 Min · 40–60 ฿" },
      { t:"9:30–13:00", txt:"Chatuchak Weekend Market. Feilschen: Startpreis −30–40 %. Rucksack nach vorn. Vor 11 Uhr ist es erträglich, danach wird es brutal voll und heiß." },
      { t:"14:00", txt:"Zurück ins Hotel: Pool, Sauna, Beine hochlegen, während draußen der Nachmittagsschauer durchzieht. Einkäufe abladen." },
      { t:"17:00", txt:"Los nach Chinatown. Nimm die Bahn — mit dem Auto wärst du zur Essenszeit deutlich langsamer.", z:"chinatown", r:"🚇 Yaek Tiwanon → Tao Poon → Wat Mangkon, Ausg. 1 · 50 Min · 50–71 ฿" },
      { t:"17:45", txt:"Yaowarat Road: Um 17 Uhr sperrt die Straße für Autos, innerhalb einer Stunde bauen hunderte Garküchen auf. Jetzt bist du da, bevor es voll wird." },
      { t:"18:00–21:30", txt:"Durchessen: Guay Jub Ouan Pochana (Rollnudel-Suppe 50–70 ฿), Lim Lao Ngow (Fischbällchen, Michelin Bib), der berühmte Yaowarat-Toast (25–35 ฿), T&K Seafood für Riesengarnelen (200–400 ฿), Nachtisch bei Ba Hao Tian Mi in der Soi Nana. Rechne mit 300–600 ฿ für den ganzen Abend." },
      { t:"~22:00", txt:"MRT zurück ab Wat Mangkon (fährt bis Mitternacht)." }
    ],
    note:"BEI REGEN VORMITTAGS: Chatuchak besteht aus überdachten Hallen — nur die Gassen dazwischen sind offen. Geht also, du wirst nur zwischendurch nass. Wenn es wirklich schüttet: MIXT Chatuchak und JJ Mall direkt nebenan sind klimatisiert. Samstag ist der volle Chinatown-Abend — dafür auch der vollste: zwischen 19 und 21 Uhr stehst du an beliebten Ständen 30 Min an. Deshalb um 17:45 dort sein. NUR BARGELD, viele Stände nehmen keine Karte. Montag wäre der falsche Tag gewesen — da ruhen viele Garküchen." },

  { date:"2026-08-30", wd:"So", title:"Spa, Riesenmall & Golden Mount", icon:"🧖",
    blocks:[
      { t:"8:30", txt:"Los zum Mandarin Oriental — Sonntagvormittag ist wenig Verkehr, das wird eine entspannte Fahrt.", z:"oriental", r:"🚗 Bolt zur Stadtseite · 40–45 Min · 250–330 ฿" },
      { t:"9:15", txt:"Am Hotel-Pier: das KOSTENLOSE Hotelboot bringt dich über den Chao Phraya direkt zum Spa — einfach „Oriental Spa, appointment 10:30“ sagen. Die schönste Anfahrt, die es gibt." },
      { t:"9:25", txt:"Im Spa: Du darfst bis 60 Min vor dem Termin rein — Sauna, Dampfbad & Jacuzzi im Wellness Centre sind inklusive. Ausnutzen!" },
      { t:"10:30–12:30", txt:"Deine Moringa Massage, 2 Std. (gebucht — Details in Meine Reisedaten). Danach nicht hetzen." },
      { t:"13:00", txt:"ICONSIAM ist nur 750 m zu Fuß — die Riesenmall am Fluss, täglich 10–22 Uhr. Erst essen: Sook Siam im Erdgeschoss, ein nachgebauter schwimmender Markt mit Ständen aus allen 77 Provinzen.", z:"iconsiam", r:"🚶 750 m zu Fuß vom Oriental Spa" },
      { t:"14:00–16:30", txt:"Shoppen: 1. Stock ICONLUXE (die Luxusmeile am Fluss), 2. Stock der erste Apple Store Thailands, 4.–5. Stock Essen, Takashimaya für alles dazwischen. Kein Feilschen hier — das sind Festpreise, dafür Klimaanlage und Steuerrückerstattung für Touristen an der Kasse fragen." },
      { t:"16:30", txt:"Kaffee mit Aussicht: der größte Starbucks Reserve Thailands im 7. Stock, zweistöckig — oder die Tasana-Nakorn-Terrasse im 6. mit Blick den Fluss runter." },
      { t:"17:15", txt:"Weiter zum Golden Mount: 340 Stufen hoch, Eintritt ~100 ฿. Um 17:45 oben stehen — Abendlicht über der Altstadt, die Sonne geht um 18:31 unter.", z:"goldenmount", r:"🚗 Bolt ab ICONSIAM · 25 Min · ~200 ฿" },
      { t:"19:15", txt:"Abendessen in der Altstadt: Thipsamai Pad Thai in der Mahachai Road ist 10 Min entfernt, der berühmteste Pad Thai der Stadt (80–150 ฿, im Eierteig gewickelt). Öffnungszeit vorher kurz in Maps prüfen — und die Schlange ist nach 21 Uhr am kürzesten.", z:"thipsamai", r:"🚶 10 Min zu Fuß vom Golden Mount" },
      { t:"20:45", txt:"Zehn Minuten weiter der Pak Khlong Talat, Thailands größter Blumenmarkt — rund um die Uhr offen, Eintritt frei. Berge von Orchideen, Jasmin und Ringelblumen, dazwischen Frauen, die in Sekunden Girlanden für die Tempel flechten. Eine halbe Stunde reicht, und es ist der schönste Abschluss, den der Abend haben kann.", z:"blumenmarkt", r:"🚶 10 Min zu Fuß · oder MRT Sanam Chai, Ausg. 1" },
      { t:"~21:45", txt:"Bolt zurück, ~250 ฿." }
    ],
    note:"BEI REGEN AB NACHMITTAG: Der Golden Mount sind 340 offene Stufen — bei Guss überspringen und stattdessen länger im ICONSIAM bleiben, dann direkt zum Abendessen in die Altstadt. Eine Anfahrt, vier Sachen: Spa, Mall, Tempel, Essen — alle am selben Flussufer entlang. Chinatown hast du schon gestern gehabt, deshalb heute die Altstadt." },

  { date:"2026-08-31", wd:"Mo", title:"Schießstand & Paläste", icon:"🎯",
    blocks:[
      { t:"8:30", txt:"Los zum Schießstand. Öffnet um 9 Uhr, Anmeldung braucht es nicht — Pass mitnehmen.", z:"schiessstand", r:"🚗 Bolt nach Ari · 20–25 Min · 150–200 ฿" },
      { t:"9:00–10:30", txt:"SCHIESSSTAND: In Thailand für Touristen völlig legal und ohne Lizenz. Waffe, Munition, Gehör- und Augenschutz und die Aufsicht stellt der Stand. Glock 9 mm mit 30 Schuss ~1.700 ฿, oder gleich die M16 mit Schalldämpfer, 20 Schuss für 2.500 ฿. Sprache ist kein Thema: Der Aufseher zeigt jeden Handgriff vor, du machst nach." },
      { t:"11:00", txt:"Weiter in die Altstadt — heute andersherum: hin mit dem Auto, zurück mit dem Boot.", z:"grandpalace", r:"🚗 Bolt in die Altstadt · 25 Min · 200–260 ฿" },
      { t:"11:30", txt:"Grand Palace, 500 ฿ — Ticket gilt 7 Tage und deckt Wat Phra Kaew und das Queen-Sirikit-Textilmuseum mit ab. Kassenschluss ist 15:30, du bist also früh genug dran. Dresscode ist der strengste des Landes: lange Hose, Oberteil MIT Ärmeln, geschlossene Schuhe. Shorts, ärmellos, zerrissene Jeans und Flip-Flops werden abgewiesen." },
      { t:"13:30", txt:"Wat Pho, 3 Min zu Fuß: liegender Buddha, 300 ฿, Wasserflasche im Ticket, offen bis 18:30. Dazu Thai-Massage in der Original-Tempelmassageschule — 30 Min ab 340 ฿, 1 Std. ~520 ฿." },
      { t:"15:30", txt:"Fähre rüber zum Wat Arun (5 ฿) — Achtung, Eintritt nochmal 200 ฿, offen bis 18 Uhr. Der Foto-Klassiker am Fluss." },
      { t:"17:00", txt:"Zurück per Expressboot — die schönste Heimfahrt der Stadt, mit der tiefstehenden Sonne über dem Wasser. Die Boote fahren nur bis 19 Uhr, also nicht trödeln.", z:"nonthaburipier", r:"⛴️ Expressboot flussaufwärts · ~1 Std. · 18 ฿ (orange)" },
      { t:"abends", txt:"Rooftop im eigenen Hotel, früh ins Bett — morgen früh geht es zu den Elefanten." }
    ],
    note:"Montags ist der richtige Tag dafür: Chinatowns Garküchen und Chatuchak haben ohnehin zu. Und die „Der Palast ist heute geschlossen“-Sprüche vor dem Tor sind IMMER die Tuk-Tuk-Masche — er ist offen, einfach durchgehen." },

  { date:"2026-09-01", wd:"Di", title:"Elefanten, Massage & Sukhumvit", icon:"🐘",
    blocks:[
      { t:"7:00", txt:"Los zum Elefanten-Park. Nimm zwei Stunden Puffer für den 9-Uhr-Check-in — Dienstag früh steht halb Bangkok auf der Straße.", z:"elefanten", r:"🚗 Bolt nach Nong Chok · 1–1,5 Std. · 600–900 ฿ · Dienstag Berufsverkehr" },
      { t:"9:00–12:00", txt:"Halbtag-Vormittag OHNE Transfer (vorab gebucht): Welcome Drink, Elefantenkunde, Kräuterinhalator basteln, füttern, Waldspaziergang, Schlamm-Spa, baden — kein Reiten. 11:15 Duschen & Umziehen, 11:30 Thai-Lunchbox. Outfit, Hut und Handtuch stellt der Park; du brauchst nur Badehose + trockene Wechselsachen." },
      { t:"12:15", txt:"NICHT heim, sondern direkt nach Sukhumvit — Asoke liegt auf dem Rückweg, das spart dir 1,5 Std. Doppelfahrt. Ab Nong Chok ist der Rückweg dünn: Fahrer warten lassen oder die Rezeption ein Taxi rufen lassen (+66 90 920 5885).", z:"healthasoke", nb:1, r:"🚗 Bolt vom Park nach Asoke · 40–50 Min · 400–600 ฿ · liegt auf dem Rückweg" },
      { t:"13:30–15:30", txt:"Health Land Asoke (vorher anrufen: +66 2 261 1110, tägl. 9–23 Uhr): Thai 2 Std. 700 ฿ ODER — nach Sonne, Schlamm und Elefantenlaufen die bessere Wahl — Aroma-Öl 1.200–1.850 ฿ bzw. Ayurveda Abhyanga 1.700 ฿. Bei Öl-Massage duschst du dort vorab." },
      { t:"16:00", txt:"Terminal 21 ist direkt nebenan: Pier-21-Foodcourt im 5. Stock, Gerichte ab 50 ฿ — der Preis-Leistungs-König.", z:"terminal21", nb:1, r:"🚶 direkt neben Health Land" },
      { t:"18:00", txt:"Soi 11 angucken: die kompakteste Barstraße. Havana Social — Speakeasy mit Telefonzellen-Eingang, Mocktails stehen auf der Karte. Reinschauen, staunen, ohne Alk kein Problem." },
      { t:"heim", txt:"MRT Sukhumvit → Tao Poon → Yaek Tiwanon (50–71 ฿) oder Bolt ~300 ฿." }
    ],
    note:"Ein Weg, drei Dinge — Elefanten, Massage und Sukhumvit-Abend ohne einen einzigen Doppelweg. Bars-Abend Nr. 2. Regel für die Ecke: Nie mitgehen, wenn dich jemand „mitnimmt“." },

  { date:"2026-09-02", wd:"Mi", title:"Ancient City & Glasboden", icon:"🛕",
    blocks:[
      { t:"8:00", txt:"Los zum Ancient City. Morgens ist die Strecke frei, und im Park ist es vor Mittag deutlich angenehmer.", r:"🚗 Bolt nach Samut Prakan · 45–60 Min · 400–500 ฿ · morgens frei", z:"ancientcity" },
      { t:"9:30–13:30", txt:"ANCIENT CITY, das größte Freilichtmuseum der Welt: über 100 nachgebaute Tempel, Paläste und Holzhäuser aus ganz Thailand auf 80 Hektar — und fast menschenleer. Fahrrad für ~100 ฿ nehmen und einfach losfahren. Eintritt 700 ฿ am Tor, online über Klook oft die Hälfte. Die kostenlose Tram fährt 10, 13, 15 und 17 Uhr, das musst du beim Ticketkauf sagen." },
      { t:"13:45", txt:"Optional 5 Min weiter: Erawan-Museum — ein 43 Meter hoher dreiköpfiger Elefant aus Kupfer, in den man hineinsteigen kann. Innen Glasfenster und Treppen wie in einer anderen Welt. Und ein Dach über dem Kopf, falls der Nachmittagsschauer kommt.", r:"🚗 5 Min vom Ancient City", z:"erawan" },
      { t:"15:30", txt:"Zurück ins Hotel: duschen, Beine hochlegen, Schauer aussitzen." },
      { t:"17:15", txt:"Weiter zum Mahanakhon — der Turm steht direkt über dem BTS-Ausgang.", r:"🚇 Blue bis Si Lom → BTS Sala Daeng → Chong Nonsi · 20 Min", z:"mahanakhon" },
      { t:"17:45–19:30", txt:"MAHANAKHON SKYWALK: Innendeck im 74. Stock, offenes Dach im 78. und der Glasboden auf 310 m. Sonnenuntergang um 18:29. Sonnenuntergangs-Ticket vorher online kaufen (Klook ab ~10 €) — aber erst, wenn du am Nachmittag den Himmel gesehen hast." },
      { t:"20:00", txt:"Abendessen in Silom, oder mit der BTS 20 Min zum Saxophone Pub am Victory Monument: Livejazz seit den Achtzigern, Tresenplatz, Thai-Eistee." }
    ],
    note:"Der Park liegt bewusst am Vormittag: Der Regen kommt hier meist erst nach 14 Uhr, und du bist um 13:30 durch. WENN ES DOCH SCHÜTTET: Ancient City auf Samstag schieben und stattdessen heute Wat Paknam machen — der Stupa ist innen, da ist Regen egal. Beim Mahanakhon sperren sie bei Sturm das Außendeck ohne Erstattung, also erst nachmittags den Himmel anschauen und dann erst kaufen." },

  { date:"2026-09-03", wd:"Do", title:"Shoppen & Sunset-Cruise", icon:"🛒",
    blocks:[
      { t:"vorm.", txt:"Ausschlafen, Pool, Sauna. Hier war der Hai-Tauchgang geplant — den gibt es nicht mehr (siehe Notiz unten). Der Vormittag ist also frei für einen Ersatz." },
      { t:"12:15", txt:"Los in die Shopping-Meile. MRT und BTS rechnen getrennt ab, du zahlst also zweimal — mit Bolt bist du ähnlich schnell.", z:"siam", r:"🚇 Purple → Tao Poon → Blue bis Si Lom → BTS bis Siam · 60 Min · oder Bolt 250–330 ฿" },
      { t:"13:30–16:30", txt:"Siam Paragon, Siam Center, Siam Discovery und CentralWorld liegen alle nebeneinander und sind per Skywalk verbunden — du läufst trocken und klimatisiert durch. CentralWorld allein hat 600 Läden zu normalen Preisen (Zara, Uniqlo, Adidas, Muji), Siam Paragon ist die Luxusschiene. Wer feilschen will: MBK gegenüber, acht Etagen." },
      { t:"—", txt:"Steuer zurückholen: Ab 2.000 ฿ pro Laden und Tag bekommst du 7 % VAT-Refund. Pass mitnehmen, an der Kasse das Formular verlangen, am Flughafen abstempeln lassen." },
      { t:"16:45", txt:"Weiter zur Cruise — mit Bahn und Boot deutlich entspannter als durch den Feierabendverkehr.", z:"asiatique", r:"🚇 BTS ab Siam bis Saphan Taksin, dann Gratis-Shuttleboot · 40 Min" },
      { t:"18:00–20:00", txt:"5-Sterne-Cruise, 18-Uhr-Slot = Sonnenuntergang UND Nachtlichter: Wat Arun, Grand Palace, ICONSIAM vom Wasser. Ohne Alk easy — Dinner-Buffet & Saft." },
      { t:"20:15", txt:"Noch eine Runde Asiatique-Nachtmarkt, dann Bolt heim." }
    ],
    note:"HAI-TAUCHGANG FÄLLT AUS: Der Tauchlehrer von Planet Scuba hat am 21.08.2026 per WhatsApp geschrieben, dass die neue SEA-LIFE-Leitung zum 30.12.2025 ALLE Tauchaktivitäten im großen Becken dauerhaft eingestellt hat — es gibt dort gar keine Wasseraktivitäten mehr. Die Webseite von SEA LIFE wirbt noch damit, das stimmt aber nicht mehr. Als Ersatz gäbe es das Haitauchen im Underwater World Pattaya (~3.000 ฿, halber Tag plus 1,5 Std. Anfahrt je Richtung)." },

  { date:"2026-09-04", wd:"Fr", title:"Ayutthaya auf eigene Faust", icon:"🏛️",
    blocks:[
      { t:"7:15", txt:"Zum Bahnhof. Ticket am Schalter kaufen — für die günstigen Klassen gibt es keinen Online-Verkauf.", z:"bangsue", r:"🚇 MRT bis Krung Thep Aphiwat · Blue Line hält darunter" },
      { t:"7:50 oder 8:45", txt:"Zug nach Ayutthaya (71 km, rund 1 Std.): Rapid 111 um 7:50 oder Express 75 um 8:45 sind die bewährten Verbindungen, 3. Klasse rund 70 ฿, klimatisierte 2. Klasse 65–345 ฿. Fahrplan am Schalter bestätigen lassen — Zeiten verschieben sich in Thailand gern." },
      { t:"9:30", txt:"Roller (~250 ฿) oder Tuk-Tuk-Pauschale (4 Std. 800–1.000 ฿, VORHER festmachen). Ruinen-Runde: Wat Mahathat (Buddha-Kopf im Baum), Wat Phra Si Sanphet, Wat Chaiwatthanaram. Sammelticket 220 ฿ für sechs Tempel — lohnt ab drei." },
      { t:"16:04 oder 16:41", txt:"Rückzug: Rapid 112 um 16:04 oder Rapid 136 um 16:41 → rund 1 Std. bis Bang Sue. Rückfahrkarte gleich morgens mitkaufen." },
      { t:"19:30", txt:"GO-KART bei EasyKart: Asiens größte Indoor-Kartbahn. Fast Kart mit 200 cm³ und 55 km/h, 1.499 ฿ für zwei Rennen à 8 Minuten. Kein Führerschein nötig, freitags bis 23 Uhr offen. Vorher kurz anrufen (+66 2 641 4252) — die Bahn wird manchmal für Gruppen reserviert.", z:"easykart", nb:1, r:"🚇 Blue Line ab Bang Sue bis Phra Ram 9 · 20 Min" },
      { t:"21:00", txt:"5 Minuten weiter der Train Night Market Ratchada: der Regenbogen-Zeltmarkt, seit März 2026 wieder offen — Vintage, Container-Bars, Livebands, bis 1 Uhr. Abendessen zwischen den Zelten.", z:"trainmarket", nb:1, r:"🚶 5 Min zu Fuß von der Kartbahn" }
    ],
    note:"BEI REGEN: Die Ruinen sind komplett im Freien und ohne Unterstand. Wenn morgens Dauerregen gemeldet ist, tausch den Tag mit dem Shopping am Donnerstag — Ayutthaya lohnt nur bei trockenem Wetter. Komplett ~600 ฿ statt 30+ € Tour — und du bist an keine Gruppe gekettet. Abends dann Vollgas: Kartbahn und Nachtmarkt liegen an derselben MRT-Station, du kommst aus Ayutthaya direkt dort an." },

  { date:"2026-09-05", wd:"Sa", title:"Riesenbuddha & Abschiedsabend", icon:"🛕",
    blocks:[
      { t:"vorm.", txt:"Ausschlafen, Pool. Heute ist der Tag mit der höchsten Regenwahrscheinlichkeit der ganzen Reise — deshalb steht ein Programm drin, dem das nichts ausmacht." },
      { t:"10:30", txt:"Los zum Wat Paknam — die einfachste Anfahrt der ganzen Reise, nur ein Umstieg.", r:"🚇 Yaek Tiwanon → Tao Poon → Bang Phai, Ausg. 1 · 45 Min · ein Umstieg", z:"watpaknam" },
      { t:"11:15–13:15", txt:"WAT PAKNAM: Der 69 Meter hohe goldene Buddha ist der höchste Bangkoks — 2021 fertig, komplett aus Bronze, du siehst ihn schon von weitem über die Dächer ragen. Im 80-Meter-Stupa daneben fährst du hoch bis zur smaragdgrünen Glas-Pagode im 5. Stock, darüber eine Decke, die wie eine Galaxie bemalt ist. Eintritt frei, auch der Stupa. Und das Beste heute: der halbe Besuch ist drinnen." },
      { t:"13:30", txt:"Mittagessen in der Gegend. Der Tempel liegt in Thonburi, einem Viertel ohne Touristen — die Garküchen dort sind ehrlich und billig." },
      { t:"15:00", txt:"Zurück ins Hotel: Pool, Sauna, packen. Morgen früh geht es nochmal raus nach Ko Kret, abends fliegst du." },
      { t:"19:00", txt:"Letzter Abend, ganz nach Laune: Terminal 21 zum Essen, der Owl Market vor der Haustür, oder einfach Rooftop und Pool im Hotel." },
      { t:"21:30 (optional)", txt:"Sky Bar im Lebua (10 Min Bolt), 64. Stock — nur noch, wenn du den Hangover-Rooftop unbedingt gesehen haben willst; den besseren Blick hattest du am Mittwoch: Kein Eintritt, aber ein Getränk pro Person ist Pflicht — Mocktails 600–800 ฿ plus 10 % Service und 7 % Steuer, macht rund 700–950 ฿ für ein alkoholfreies Glas. Offen 17:00–00:30, keine Reservierung, nur Stehplätze am runden Bartresen." }
    ],
    note:"Heute ist der nasseste Tag der Reise — deshalb steht Wat Paknam hier statt der Freilichtpark: Der Stupa ist innen, der Weg dorthin geht fast komplett mit der Bahn. ZUR SKY BAR: Dresscode wird am Aufzug durchgesetzt — Kragenhemd oder Polo, lange Hose, geschlossene Schuhe. RUCKSÄCKE sind oben verboten und es gibt KEINE Aufbewahrung. Bei Regen macht die Plattform sofort zu, dann ist Octave in Thonglor die überdachte Alternative." },

  { date:"2026-09-06", wd:"So", title:"Ko Kret & Rückflug", icon:"🚲",
    blocks:[
      { t:"8:00", txt:"Packen und auschecken — Waschmaschine hast du ja, alles sauber heim. Gepäck an der Rezeption lassen." },
      { t:"9:30", txt:"Los nach Ko Kret. Am Tempel durchlaufen bis zum Pier, dann eine Minute mit der Fähre über den Fluss.", z:"kokret", r:"🚗 Bolt nach Pak Kret · 20–25 Min · 120–150 ฿ · dann 3-฿-Fähre" },
      { t:"10:00–14:00", txt:"Ko Kret: autofreie Flussinsel der Mon-Minderheit, 2 km lang. SONNTAG ist der richtige Tag — dann zieht sich der Markt über einen Kilometer die Ostseite entlang. Töpferdörfer mit offenen Brennöfen, Mon-Streetfood, Tempel. Zu Fuß in zwei Stunden einmal herum oder Fahrrad für ~40 ฿." },
      { t:"14:30", txt:"Zurück ins Hotel, duschen (Tageszimmer oder das Bad an der Rezeption erfragen)." },
      { t:"15:00", txt:"Letzte Runde vor der Tür: Health Land Chaeng Wattana für eine Abschiedsmassage (2 Std. Thai 700 ฿) oder Hähnchen-Reis gegenüber, Big C für Mitbringsel. <b>Spätestens 17:45 zurück im Hotel</b> — die 2-Std.-Massage muss um 15:20 anfangen, sonst wird es knapp.", z:"healthchaeng", r:"🚗 Bolt · 20 Min · 7,4 km vom Hotel" },
      { t:"18:30", txt:"<b>Transfer holt dich ab — Zeit steht fest.</b> Um <b>18:15 an der Rezeption</b> mit Gepäck warten — der Fahrer kommt mit einem Schild mit deinem Namen, du zeigst ihm den Voucher. Die Fahrt Nonthaburi → Suvarnabhumi geht quer durch die Stadt: sonntagabends 75–105 Min, bei Regen mehr. Ankunft also ~20:00 — genau dann, wenn der Lufthansa-Schalter aufmacht. Nicht zu früh, sondern richtig gerechnet.", z:"bkk", r:"🚐 Transfer inklusive · 50–60 km · Ankunft ~20:00" },
      { t:"~20:00", txt:"Am Flughafen. Check-in LH773 öffnet 19:55 (3 Std. vor Abflug). Koffer weg, dann Passkontrolle — sonntagabends ist Stoßzeit, rechne 20–30 Min Schlange. Danach hast du in Ruhe Zeit für Essen und die letzten Baht." },
      { t:"22:55", txt:"LH773 nach München." }
    ],
    note:"BEI REGEN: Auf Ko Kret gibt es kaum Unterstände und die Wege werden matschig. Alternative vor der Haustür: Central WestGate, elf Stationen ohne Umstieg, komplett überdacht — und der letzte Vormittag ist trotzdem gerettet. Ein letzter Vormittag, der sich wie Urlaub anfühlt statt wie Warten auf den Flug — und das Beste: Ko Kret liegt 20 Minuten vom Hotel, du riskierst nichts. Transfer-Abholung 18:30 am Hotel (steht fest) — ab 17:45 zurück sein. Restliche Baht am Flughafen ausgeben, Rücktausch lohnt kaum." },

  { date:"2026-09-07", wd:"Mo", title:"Landung München", icon:"🏠",
    blocks:[
      { t:"05:15", txt:"Landung MUC. Parkos-Shuttle zum Auto, heimfahren." },
      { t:"", txt:"⚠️ HEUTE KEINE EINSÄTZE — steht so im Plan. Schlafen." }
    ],
    note:"Willkommen zurück. Heute keine Einsätze — schlafen." }
];
