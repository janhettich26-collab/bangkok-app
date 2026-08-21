// Bangkok 2026 — Fahrziele: Koordinaten + thailändische Adresse zum Vorzeigen
// Der thailändische Name ist das Wichtigste: den versteht JEDER Fahrer, auch ohne Englisch.
// Wird im Plan über das Feld z:"schluessel" verknüpft.
const ZIELE = {
  hotel:        { n:"Hotel Oakwood Suites Tiwanon", lat:13.8621, lng:100.5144, th:"โอ๊ควู้ด สวีท ทิวานนท์ ถนนกรุงเทพ-นนทบุรี นนทบุรี" },
  bkk:          { n:"Flughafen Suvarnabhumi", lat:13.6900, lng:100.7501, th:"สนามบินสุวรรณภูมิ" },

  joddfairs:    { n:"Jodd Fairs Ratchada (Nachtmarkt)", lat:13.7648, lng:100.5688, th:"จ๊อดแฟร์ส รัชดา ถนนรัชดาภิเษก ดินแดง" },
  trainmarket:  { n:"Train Night Market Ratchada", lat:13.7660, lng:100.5710, th:"ตลาดนัดรถไฟ รัชดา หลังเอสพลานาด" },
  chatuchak:    { n:"Chatuchak Weekend Market", lat:13.7999, lng:100.5502, th:"ตลาดนัดจตุจักร" },
  chinatown:    { n:"Chinatown / Yaowarat", lat:13.7398, lng:100.5096, th:"เยาวราช ไชน่าทาวน์" },
  blumenmarkt:  { n:"Pak Khlong Talat (Blumenmarkt)", lat:13.7407, lng:100.4972, th:"ปากคลองตลาด ถนนจักรเพชร" },

  oriental:     { n:"Mandarin Oriental Hotel", lat:13.7235, lng:100.5140, th:"โรงแรมแมนดาริน โอเรียนเต็ล ซอยโอเรียนเต็ล บางรัก" },
  iconsiam:     { n:"ICONSIAM", lat:13.7264, lng:100.5100, th:"ไอคอนสยาม ถนนเจริญนคร" },
  goldenmount:  { n:"Golden Mount (Wat Saket)", lat:13.7539, lng:100.5065, th:"ภูเขาทอง วัดสระเกศ" },
  thipsamai:    { n:"Thipsamai Pad Thai", lat:13.7524, lng:100.5030, th:"ผัดไทยทิพย์สมัย ถนนมหาไชย" },

  schiessstand: { n:"Bangkok Shooting Range (Ari)", lat:13.7830, lng:100.5410, th:"สนามยิงปืน ถนนพหลโยธิน สามเสนใน พญาไท" },
  grandpalace:  { n:"Grand Palace", lat:13.7500, lng:100.4913, th:"พระบรมมหาราชวัง" },
  nonthaburipier:{ n:"Nonthaburi Pier", lat:13.8420, lng:100.4930, th:"ท่าน้ำนนทบุรี" },

  elefanten:    { n:"Bangkok Elephant Park", lat:13.8300, lng:100.8800, th:"ฮาราจูกุ ไทยแลนด์ ถ.สุวินทวงศ์ แขวงกระทุ่มราย เขตหนองจอก กรุงเทพมหานคร 10530" },
  healthasoke:  { n:"Health Land Asoke", lat:13.7380, lng:100.5610, th:"เฮลท์แลนด์ สุขุมวิท 21 อโศก" },
  terminal21:   { n:"Terminal 21 Asoke", lat:13.7376, lng:100.5601, th:"เทอร์มินอล 21 อโศก" },

  watpaknam:    { n:"Wat Paknam Phasi Charoen", lat:13.7185, lng:100.4666, th:"วัดปากน้ำ ภาษีเจริญ" },
  mahanakhon:   { n:"King Power Mahanakhon", lat:13.7233, lng:100.5285, th:"คิง เพาเวอร์ มหานคร ถนนนราธิวาสราชนครินทร์ สีลม" },
  saxophone:    { n:"Saxophone Pub (Victory Monument)", lat:13.7648, lng:100.5378, th:"แซกโซโฟน ผับ อนุสาวรีย์ชัยสมรภูมิ" },

  siam:         { n:"Siam Paragon / Shopping-Meile", lat:13.7463, lng:100.5348, th:"สยามพารากอน ถนนพระราม 1" },
  asiatique:    { n:"Asiatique The Riverfront", lat:13.7045, lng:100.5028, th:"เอเชียทีค เดอะ ริเวอร์ฟร้อนท์ ถนนเจริญกรุง" },

  bangsue:      { n:"Bahnhof Krung Thep Aphiwat", lat:13.8025, lng:100.5390, th:"สถานีกลางกรุงเทพอภิวัฒน์ บางซื่อ" },
  easykart:     { n:"EasyKart RCA", lat:13.7519, lng:100.5700, th:"อีซี่คาร์ท อาร์ซีเอ ถนนพระราม 9" },

  ancientcity:  { n:"Ancient City (Muang Boran)", lat:13.5394, lng:100.6231, th:"เมืองโบราณ 296/1 ถนนสุขุมวิท บางปูใหม่ สมุทรปราการ" },
  erawan:       { n:"Erawan Museum", lat:13.6262, lng:100.5940, th:"พิพิธภัณฑ์ช้างเอราวัณ สมุทรปราการ" },

  kokret:       { n:"Ko Kret — Fähranleger Wat Sanam Nuea", lat:13.9126, lng:100.4900, th:"วัดสนามเหนือ ท่าเรือไปเกาะเกร็ด ปากเกร็ด" },
  healthchaeng: { n:"Health Land Chaeng Wattana", lat:13.9050, lng:100.5250, th:"เฮลท์แลนด์ แจ้งวัฒนะ ปากเกร็ด" }
};
