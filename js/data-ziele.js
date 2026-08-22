// Bangkok 2026 — Fahrziele: Koordinaten + thailändische Adresse zum Vorzeigen
// Der thailändische Name ist das Wichtigste: den versteht JEDER Fahrer, auch ohne Englisch.
// Wird im Plan über das Feld z:"schluessel" verknüpft.
const ZIELE = {
  hotel:        { n:"Hotel Oakwood Suites Tiwanon", lat:13.8621, lng:100.5144, th:"โอ๊ควู้ด สวีท ทิวานนท์ ถนนกรุงเทพ-นนทบุรี นนทบุรี" },
  bkk:          { n:"Flughafen Suvarnabhumi", lat:13.6900, lng:100.7501, th:"สนามบินสุวรรณภูมิ" },

  joddfairs:    { n:"Jodd Fairs Ratchada (Nachtmarkt)", lat:13.7648, lng:100.5688, th:"จ๊อดแฟร์ส รัชดา ถนนรัชดาภิเษก ดินแดง" , bahn:{ ein:"Yaek Tiwanon · Richtung <b>Tao Poon</b>", um:"Tao Poon: Blue Line · Richtung <b>Lak Song</b>", aus:"<b>Thailand Cultural Centre</b>", rest:"Ausgang 4 — der Markt liegt direkt daneben" } },
  trainmarket:  { n:"Train Night Market Ratchada", lat:13.7660, lng:100.5710, th:"ตลาดนัดรถไฟ รัชดา หลังเอสพลานาด" , bahn:{ ein:"Yaek Tiwanon · Richtung <b>Tao Poon</b>", um:"Tao Poon: Blue Line · Richtung <b>Lak Song</b>", aus:"<b>Thailand Cultural Centre</b>", rest:"hinter dem Esplanade-Einkaufszentrum" } },
  chatuchak:    { n:"Chatuchak Weekend Market", lat:13.7999, lng:100.5502, th:"ตลาดนัดจตุจักร" , bahn:{ ein:"Yaek Tiwanon · Richtung <b>Tao Poon</b>", um:"Tao Poon: runter zur Blue Line · Richtung <b>Lak Song</b>", aus:"<b>Chatuchak Park</b> — 3. Station ab Tao Poon", rest:"Ausgang 1, dann direkt in den Markt" } },
  chinatown:    { n:"Chinatown / Yaowarat", lat:13.7398, lng:100.5096, th:"เยาวราช ไชน่าทาวน์" , bahn:{ ein:"Yaek Tiwanon · Richtung <b>Tao Poon</b>", um:"Tao Poon: Blue Line · Richtung <b>Lak Song</b>", aus:"<b>Wat Mangkon</b>", rest:"Ausgang 1 — du stehst einen Block von der Yaowarat Road" } },
  blumenmarkt:  { n:"Pak Khlong Talat (Blumenmarkt)", lat:13.7407, lng:100.4972, th:"ปากคลองตลาด ถนนจักรเพชร" , bahn:{ ein:"Yaek Tiwanon · Richtung <b>Tao Poon</b>", um:"Tao Poon: Blue Line · Richtung <b>Lak Song</b>", aus:"<b>Sanam Chai</b> — eine Station nach Sam Yot", rest:"Ausgang 1, dann 400 m zur Chak Phet Road" } },

  oriental:     { n:"Mandarin Oriental Hotel", lat:13.7235, lng:100.5140, th:"โรงแรมแมนดาริน โอเรียนเต็ล ซอยโอเรียนเต็ล บางรัก" },
  iconsiam:     { n:"ICONSIAM", lat:13.7264, lng:100.5100, th:"ไอคอนสยาม ถนนเจริญนคร" },
  goldenmount:  { n:"Golden Mount (Wat Saket)", lat:13.7539, lng:100.5065, th:"ภูเขาทอง วัดสระเกศ" },
  thipsamai:    { n:"Thipsamai Pad Thai", lat:13.7524, lng:100.5030, th:"ผัดไทยทิพย์สมัย ถนนมหาไชย" },

  schiessstand: { n:"Bangkok Shooting Range (Ari)", lat:13.7830, lng:100.5410, th:"สนามยิงปืน ถนนพหลโยธิน สามเสนใน พญาไท" , bahn:{ ein:"Yaek Tiwanon · Richtung <b>Tao Poon</b>", um:"Tao Poon: Blue Line · Richtung <b>Lak Song</b>", aus:"<b>Chatuchak Park</b> — dort RAUS", rest:"Daneben BTS <b>Mo Chit</b>: Sukhumvit Line Richtung <b>Kheha</b>, 2 Stationen bis <b>Ari</b>, dann 5 Min zu Fuß" } },
  grandpalace:  { n:"Grand Palace", lat:13.7500, lng:100.4913, th:"พระบรมมหาราชวัง" },
  nonthaburipier:{ n:"Nonthaburi Pier", lat:13.8420, lng:100.4930, th:"ท่าน้ำนนทบุรี" },

  elefanten:    { n:"Bangkok Elephant Park", lat:13.8300, lng:100.8800, th:"ฮาราจูกุ ไทยแลนด์ ถ.สุวินทวงศ์ แขวงกระทุ่มราย เขตหนองจอก กรุงเทพมหานคร 10530" },
  healthasoke:  { n:"Health Land Asoke", lat:13.7380, lng:100.5610, th:"เฮลท์แลนด์ สุขุมวิท 21 อโศก" , bahn:{ ein:"Yaek Tiwanon · Richtung <b>Tao Poon</b>", um:"Tao Poon: Blue Line · Richtung <b>Lak Song</b>", aus:"<b>Sukhumvit</b>", rest:"Health Land liegt in der Sukhumvit Soi 21, wenige Minuten zu Fuß" } },
  terminal21:   { n:"Terminal 21 Asoke", lat:13.7376, lng:100.5601, th:"เทอร์มินอล 21 อโศก" , bahn:{ ein:"Yaek Tiwanon · Richtung <b>Tao Poon</b>", um:"Tao Poon: Blue Line · Richtung <b>Lak Song</b>", aus:"<b>Sukhumvit</b>", rest:"Terminal 21 liegt direkt über der Station" } },

  watpaknam:    { n:"Wat Paknam Phasi Charoen", lat:13.7185, lng:100.4666, th:"วัดปากน้ำ ภาษีเจริญ" , bahn:{ ein:"Yaek Tiwanon · Richtung <b>Tao Poon</b>", um:"Tao Poon: Blue Line · Richtung <b>THA PHRA</b> — NICHT Lak Song! Der Zug nach Tha Phra fährt den kurzen Weg über Bang Pho und Bang Phlat (10 Stationen, 25–30 Min). Der Zug nach Lak Song fährt genau andersherum um den Ring und braucht 50 Min", aus:"<b>Bang Phai</b> — die erste Station nach Tha Phra", rest:"Ausgang 1, dann 10–15 Min zu Fuß oder 10 ฿ Motorradtaxi" } },
  mahanakhon:   { n:"King Power Mahanakhon", lat:13.7233, lng:100.5285, th:"คิง เพาเวอร์ มหานคร ถนนนราธิวาสราชนครินทร์ สีลม" , bahn:{ ein:"Yaek Tiwanon · Richtung <b>Tao Poon</b>", um:"Tao Poon: Blue Line · Richtung <b>Lak Song</b>", aus:"<b>Si Lom</b> — hier RAUS aus der MRT", rest:"Daneben BTS <b>Sala Daeng</b>: neues Ticket, Silom Line Richtung <b>Bang Wa</b>, EINE Station bis <b>Chong Nonsi</b>. Der Turm steht über dem Ausgang" } },
  saxophone:    { n:"Saxophone Pub (Victory Monument)", lat:13.7648, lng:100.5378, th:"แซกโซโฟน ผับ อนุสาวรีย์ชัยสมรภูมิ" },

  siam:         { n:"Siam Paragon / Shopping-Meile", lat:13.7463, lng:100.5348, th:"สยามพารากอน ถนนพระราม 1" , bahn:{ ein:"Yaek Tiwanon · Richtung <b>Tao Poon</b>", um:"Tao Poon: Blue Line · Richtung <b>Lak Song</b>", aus:"<b>Si Lom</b> — hier RAUS aus der MRT", rest:"Daneben BTS <b>Sala Daeng</b>: neues Ticket kaufen, Silom Line Richtung <b>National Stadium</b>, 2 Stationen bis <b>Siam</b>" } },
  asiatique:    { n:"Asiatique The Riverfront", lat:13.7045, lng:100.5028, th:"เอเชียทีค เดอะ ริเวอร์ฟร้อนท์ ถนนเจริญกรุง" },

  bangsue:      { n:"Bahnhof Krung Thep Aphiwat", lat:13.8025, lng:100.5390, th:"สถานีกลางกรุงเทพอภิวัฒน์ บางซื่อ" , bahn:{ ein:"Yaek Tiwanon · Richtung <b>Tao Poon</b>", um:"Tao Poon: Blue Line · Richtung <b>Lak Song</b>", aus:"<b>Bang Sue</b> — die erste Station nach Tao Poon", rest:"Der Fernbahnhof Krung Thep Aphiwat liegt direkt darüber" } },
  easykart:     { n:"EasyKart RCA", lat:13.7519, lng:100.5700, th:"อีซี่คาร์ท อาร์ซีเอ ถนนพระราม 9" , bahn:{ ein:"Yaek Tiwanon · Richtung <b>Tao Poon</b>", um:"Tao Poon: Blue Line · Richtung <b>Lak Song</b>", aus:"<b>Phra Ram 9</b> — eine Station nach Thailand Cultural Centre", rest:"Ab Ausgang 3 rund 850 m — 11 Min zu Fuß die Rama 9 Road entlang, oder 10 ฿ Motorradtaxi. EasyKart liegt im RCA Plaza, 2. Stock über dem Tops-Markt" } },

  ancientcity:  { n:"Ancient City (Muang Boran)", lat:13.5394, lng:100.6231, th:"เมืองโบราณ 296/1 ถนนสุขุมวิท บางปูใหม่ สมุทรปราการ" },
  erawan:       { n:"Erawan Museum", lat:13.6262, lng:100.5940, th:"พิพิธภัณฑ์ช้างเอราวัณ สมุทรปราการ" },

  kokret:       { n:"Ko Kret — Fähranleger Wat Sanam Nuea", lat:13.9126, lng:100.4900, th:"วัดสนามเหนือ ท่าเรือไปเกาะเกร็ด ปากเกร็ด" },
  healthchaeng: { n:"Health Land Chaeng Wattana", lat:13.9050, lng:100.5250, th:"เฮลท์แลนด์ แจ้งวัฒนะ ปากเกร็ด" }
};
