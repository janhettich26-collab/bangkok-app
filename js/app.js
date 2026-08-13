// Bangkok 2026 — App-Logik
(function () {
  "use strict";

  // ————— Tabs —————
  const tabs = document.querySelectorAll(".tabbar button");
  const panels = document.querySelectorAll(".panel");
  let mapInited = false;

  function showTab(id) {
    panels.forEach(p => p.classList.toggle("active", p.id === "panel-" + id));
    tabs.forEach(b => b.classList.toggle("active", b.dataset.tab === id));
    if (id === "karte" && !mapInited) { mapInited = true; initMap(); }
    window.scrollTo(0, 0);
  }
  tabs.forEach(b => b.addEventListener("click", () => showTab(b.dataset.tab)));

  // ————— Kurs —————
  const RATE_KEY = "bkk_rate";
  let rate = null; // THB pro 1 EUR

  function fmtDE(n, dec) {
    return n.toLocaleString("de-DE", { minimumFractionDigits: dec, maximumFractionDigits: dec });
  }

  function renderRate(info) {
    const el = document.getElementById("rate-big");
    const sub = document.getElementById("rate-sub");
    if (!info) { el.textContent = "—"; sub.textContent = "Kein Kurs verfügbar — einmal online gehen."; return; }
    rate = info.rate;
    el.innerHTML = fmtDE(rate, 2) + ' <span class="unit">฿</span>';
    const d = new Date(info.ts);
    const age = Date.now() - info.ts;
    const when = d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" }) + ", " +
                 d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
    sub.textContent = "1 € · Stand " + when + (age > 36e5 * 26 ? " · ⚠️ älterer Kurs (offline?)" : "");
    renderCheat();
    convert("eur");
  }

  async function fetchRate() {
    const urls = [
      { u: "https://open.er-api.com/v6/latest/EUR", pick: j => j && j.rates && j.rates.THB },
      { u: "https://api.frankfurter.app/latest?from=EUR&to=THB", pick: j => j && j.rates && j.rates.THB }
    ];
    for (const { u, pick } of urls) {
      try {
        const r = await fetch(u, { cache: "no-store" });
        const v = pick(await r.json());
        if (v) {
          const info = { rate: v, ts: Date.now() };
          localStorage.setItem(RATE_KEY, JSON.stringify(info));
          renderRate(info);
          return;
        }
      } catch (e) { /* nächste Quelle */ }
    }
    const cached = localStorage.getItem(RATE_KEY);
    renderRate(cached ? JSON.parse(cached) : null);
  }

  function convert(src) {
    if (!rate) return;
    const eur = document.getElementById("in-eur");
    const thb = document.getElementById("in-thb");
    if (src === "eur") {
      const v = parseFloat(eur.value.replace(",", "."));
      thb.value = isNaN(v) ? "" : fmtDE(v * rate, 0);
    } else {
      const v = parseFloat(thb.value.replace(/\./g, "").replace(",", "."));
      eur.value = isNaN(v) ? "" : fmtDE(v / rate, 2);
    }
  }
  document.getElementById("in-eur").addEventListener("input", () => convert("eur"));
  document.getElementById("in-thb").addEventListener("input", () => convert("thb"));

  function renderCheat() {
    const rows = [20, 50, 100, 200, 500, 1000, 2000, 5000]
      .map(b => '<div class="cheat-row"><span>' + fmtDE(b, 0) + " ฿</span><b>" + fmtDE(b / rate, 2) + " €</b></div>").join("");
    document.getElementById("cheat-thb").innerHTML = rows;
  }

  const PRICE_FEEL = [
    ["🍜 Streetfood-Gericht", "50–80 ฿"], ["🍺 Bier 7-Eleven / Bar", "50 ฿ / 100–250 ฿"],
    ["🚇 MRT-Fahrt", "20–45 ฿"], ["🚗 Bolt in die Stadt", "230–350 ฿"],
    ["🚗 Bolt nachts zurück", "400–600 ฿"], ["💆 2 Std. Thai-Massage", "~650 ฿"],
    ["🏟️ Muay-Thai-Ticket", "ab 1.000 ฿"], ["✈️ Taxi Flughafen", "~600 ฿"],
    ["🥤 Wasser 7-Eleven", "10–15 ฿"], ["🍢 Chinatown satt essen", "~400 ฿"]
  ];
  document.getElementById("price-feel").innerHTML = PRICE_FEEL
    .map(p => '<div class="cheat-row"><span>' + p[0] + "</span><b>" + p[1] + "</b></div>").join("");

  // ————— Spots —————
  const spotsWrap = document.getElementById("spots-list");
  const chipsWrap = document.getElementById("spot-chips");
  let activeCat = "alle";

  function chipHTML(key, label, color) {
    return '<button class="chip" data-cat="' + key + '" style="--c:' + (color || "#E8B04B") + '">' + label + "</button>";
  }
  chipsWrap.innerHTML = chipHTML("alle", "Alle") +
    Object.entries(CATS).map(([k, c]) => chipHTML(k, c.label, c.color)).join("");
  chipsWrap.querySelectorAll(".chip").forEach(ch => ch.addEventListener("click", () => {
    activeCat = ch.dataset.cat;
    chipsWrap.querySelectorAll(".chip").forEach(x => x.classList.toggle("active", x === ch));
    renderSpots();
  }));
  chipsWrap.querySelector(".chip").classList.add("active");

  function spotCard(s) {
    const c = CATS[s.cat];
    const meta = [];
    if (s.bolt) meta.push("🚗 " + s.bolt + (s.rush ? " <i>(Rush " + s.rush + ")</i>" : "") + (s.fare && s.fare !== "—" ? " · " + s.fare : ""));
    if (s.mrt) meta.push("🚇 " + s.mrt);
    if (s.hours) meta.push("🕐 " + s.hours);
    if (s.price) meta.push("💰 " + s.price);
    return '<details class="card spot" style="--c:' + c.color + '">' +
      '<summary><span class="s-emoji">' + s.emoji + '</span><span class="s-name">' + s.name +
      '</span><span class="s-cat">' + c.label + "</span></summary>" +
      '<div class="s-body"><p>' + s.desc + "</p>" +
      '<div class="s-meta">' + meta.map(m => "<div>" + m + "</div>").join("") + "</div>" +
      (s.tips && s.tips.length ? '<ul class="s-tips">' + s.tips.map(t => "<li>" + t + "</li>").join("") + "</ul>" : "") +
      (s.book && s.book.length ? '<div class="s-book"><b>So buchst du:</b><ol>' + s.book.map(b => "<li>" + b + "</li>").join("") + "</ol></div>" : "") +
      (s.warn ? '<div class="s-warn">⚠️ ' + s.warn + "</div>" : "") +
      '<div class="s-actions"><a class="btn" href="' + s.gmaps + '" target="_blank" rel="noopener">📍 Fotos & Karte</a>' +
      (s.site ? '<a class="btn ghost" href="' + s.site + '" target="_blank" rel="noopener">Offizielle Seite</a>' : "") +
      "</div></div></details>";
  }

  function renderSpots() {
    const list = SPOTS.filter(s => activeCat === "alle" || s.cat === activeCat);
    spotsWrap.innerHTML = list.map(spotCard).join("");
  }
  renderSpots();

  // ————— Plan —————
  function todayISO() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function renderPlan() {
    const today = todayISO();
    document.getElementById("plan-list").innerHTML = PLAN.map(d => {
      const dt = d.date.split("-");
      const isToday = d.date === today;
      return '<details class="card day' + (isToday ? " today" : "") + '"' + (isToday ? " open" : "") + ">" +
        '<summary><span class="d-date"><b>' + d.wd + "</b> " + dt[2] + "." + dt[1] + ".</span>" +
        '<span class="d-title">' + d.icon + " " + d.title + "</span>" +
        (isToday ? '<span class="d-badge">Heute</span>' : "") + "</summary>" +
        '<div class="d-body">' +
        d.blocks.map(b => '<div class="d-block">' + (b.t ? '<span class="d-time">' + b.t + "</span>" : "") + "<p>" + b.txt + "</p></div>").join("") +
        (d.note ? '<div class="d-note">' + d.note + "</div>" : "") +
        "</div></details>";
    }).join("");
    const t = document.querySelector(".day.today");
    if (t) t.scrollIntoView({ block: "start" });
  }
  renderPlan();

  // ————— Karte —————
  function initMap() {
    const map = L.map("map", { zoomControl: false }).setView([HOTEL.lat, HOTEL.lng], 11);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19, attribution: "© OpenStreetMap"
    }).addTo(map);
    L.control.zoom({ position: "bottomright" }).addTo(map);

    const hotelIcon = L.divIcon({ className: "", html: '<div class="pin hotel">★</div>', iconSize: [30, 30], iconAnchor: [15, 15] });
    L.marker([HOTEL.lat, HOTEL.lng], { icon: hotelIcon }).addTo(map)
      .bindPopup("<b>★ " + HOTEL.name + "</b><br>Dein Hotel · MRT Yaek Tiwanon gegenüber<br><a href='" + HOTEL.gmaps + "' target='_blank' rel='noopener'>In Google Maps öffnen</a>");

    SPOTS.forEach(s => {
      const c = CATS[s.cat].color;
      const icon = L.divIcon({ className: "", html: '<div class="pin" style="--c:' + c + '">' + s.emoji + "</div>", iconSize: [26, 26], iconAnchor: [13, 13] });
      L.marker([s.lat, s.lng], { icon }).addTo(map)
        .bindPopup("<b>" + s.emoji + " " + s.name + "</b><br>" + (s.bolt ? "🚗 " + s.bolt + (s.fare && s.fare !== "—" ? " · " + s.fare : "") + "<br>" : "") +
          "<a href='" + s.gmaps + "' target='_blank' rel='noopener'>Fotos & Navigation</a>");
    });
  }

  // ————— Info —————
  document.getElementById("notfall-list").innerHTML = INFO.notfall.map(n =>
    '<div class="cheat-row"><span>' + n.label + "</span>" +
    (n.tel ? '<a class="tel" href="tel:' + n.tel + '">' + n.value + "</a>" : "<b>" + n.value + "</b>") + "</div>").join("") +
    '<div class="d-note">🏥 <b>' + INFO.krankenhaus.name + "</b> — " + INFO.krankenhaus.note +
    ' <a href="' + INFO.krankenhaus.gmaps + '" target="_blank" rel="noopener">Karte</a></div>';

  document.getElementById("abzocke-list").innerHTML = INFO.abzocke.map((r, i) =>
    '<div class="rule"><span class="rule-n">' + (i + 1) + "</span><p>" + r + "</p></div>").join("");

  document.getElementById("unterwegs-list").innerHTML = INFO.unterwegs.map(u =>
    '<div class="d-block"><span class="d-time">' + u.icon + " " + u.title + "</span><p>" + u.txt + "</p></div>").join("");

  document.getElementById("geld-list").innerHTML = INFO.geld.map(u =>
    '<div class="d-block"><span class="d-time">' + u.icon + " " + u.title + "</span><p>" + u.txt + "</p></div>").join("");

  const CHECK_KEY = "bkk_checks";
  function renderChecks() {
    const done = JSON.parse(localStorage.getItem(CHECK_KEY) || "{}");
    document.getElementById("check-list").innerHTML = INFO.checks.map(c =>
      '<label class="check' + (done[c.id] ? " done" : "") + '"><input type="checkbox" data-id="' + c.id + '"' + (done[c.id] ? " checked" : "") + ">" +
      "<span>" + c.txt + ' <i class="due">bis ' + c.due + "</i></span></label>").join("");
    document.querySelectorAll("#check-list input").forEach(i => i.addEventListener("change", () => {
      const d = JSON.parse(localStorage.getItem(CHECK_KEY) || "{}");
      d[i.dataset.id] = i.checked;
      localStorage.setItem(CHECK_KEY, JSON.stringify(d));
      renderChecks();
    }));
  }
  renderChecks();

  document.getElementById("thai-list").innerHTML = INFO.thai.map(p =>
    '<div class="thai-row"><div class="thai-de">' + p.de + '</div><div class="thai-th">' + p.th +
    '</div><div class="thai-ls">' + p.lautschrift + "</div></div>").join("");
  document.getElementById("hotel-thai").textContent = HOTEL.thai;
  document.getElementById("hotel-gmaps").href = HOTEL.gmaps;

  document.getElementById("dress-list").innerHTML = INFO.dresscode.map(d => "<li>" + d + "</li>").join("");

  // ————— Start —————
  fetchRate();
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js");
  }
})();
