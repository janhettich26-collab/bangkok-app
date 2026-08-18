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
    ["🍜 Streetfood-Gericht", "45–70 ฿ (touristisch 80–150)"], ["🍺 Bier 7-Eleven / Bar", "45–70 ฿ / 100–250 ฿"],
    ["🚇 MRT-Fahrt", "17–44 ฿"], ["🚗 Bolt in die Stadt (~12 km)", "180–320 ฿"],
    ["🚗 Bolt nachts zurück", "300–500 ฿"], ["💆 2 Std. Thai-Massage", "650–1.000 ฿"],
    ["🏟️ Muay-Thai-Ticket", "ab ~700–1.000 ฿"], ["✈️ Taxi Flughafen", "350–600 ฿ inkl. Maut"],
    ["🥤 Wasser 7-Eleven", "10–15 ฿"], ["🍢 Chinatown satt essen", "250–500 ฿"]
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
    const sub = [s.bolt, (s.fare && s.fare !== "—") ? s.fare : null].filter(Boolean).join(" · ");
    return '<details class="card spot" style="--c:' + c.color + '">' +
      '<summary><span class="s-emoji">' + s.emoji + '</span><div class="s-mid"><span class="s-name">' + s.name +
      '</span><span class="s-sub">' + sub + '</span></div><span class="chev">›</span></summary>' +
      '<div class="s-body"><p>' + s.desc + "</p>" +
      '<div class="s-meta">' + meta.map(m => "<div>" + m + "</div>").join("") + "</div>" +
      (s.tips && s.tips.length ? '<ul class="s-tips">' + s.tips.map(t => "<li>" + t + "</li>").join("") + "</ul>" : "") +
      (s.book && s.book.length ? '<div class="s-book"><b>So buchst du:</b><ol>' + s.book.map(b => "<li>" + b + "</li>").join("") + "</ol></div>" : "") +
      (s.warn ? '<div class="s-warn">⚠️ ' + s.warn + "</div>" : "") +
      '<div class="s-actions"><a class="btn" href="' + s.gmaps + '" target="_blank" rel="noopener">📍 Fotos & Karte</a>' +
      (s.site ? '<a class="btn ghost" href="' + s.site + '" target="_blank" rel="noopener">Offizielle Seite</a>' : "") +
      "</div></div></details>";
  }

  const searchEl = document.getElementById("spot-search");
  const clearEl = document.getElementById("spot-search-clear");
  const hintEl = document.getElementById("spot-hint");
  let query = "";

  function matches(s, q) {
    if (!q) return true;
    const hay = [s.name, s.desc, s.mrt, s.hours, s.price, CATS[s.cat].label]
      .concat(s.tips || []).filter(Boolean).join(" ").toLowerCase();
    return q.split(/\s+/).filter(Boolean).every(w => hay.includes(w));
  }

  function renderSpots() {
    const q = query.trim().toLowerCase();
    const cats = activeCat === "alle" ? Object.keys(CATS) : [activeCat];
    let hits = 0;
    const html = cats.map(k => {
      const list = SPOTS.filter(s => s.cat === k && matches(s, q));
      if (!list.length) return "";
      hits += list.length;
      // Offen, sobald gesucht oder eine einzelne Kategorie gewaehlt wurde — sonst zugeklappt.
      const open = q || activeCat !== "alle" ? " open" : "";
      return '<details class="catgrp"' + open + ' style="--c:' + CATS[k].color + '">' +
        '<summary><span class="cg-dot"></span><span class="cg-label">' + CATS[k].label +
        '</span><span class="cg-count">' + list.length + '</span><span class="chev">›</span></summary>' +
        '<div class="cg-body">' + list.map(spotCard).join("") + "</div></details>";
    }).join("");
    spotsWrap.innerHTML = html || '<p class="hint empty">Nichts gefunden. Anderes Stichwort probieren oder Suche leeren.</p>';
    hintEl.textContent = q
      ? hits + (hits === 1 ? " Treffer" : " Treffer") + " für „" + query.trim() + "“"
      : "Kategorie antippen zum Aufklappen — oder oben suchen.";
    clearEl.hidden = !query;
  }

  searchEl.addEventListener("input", () => { query = searchEl.value; renderSpots(); });
  clearEl.addEventListener("click", () => { searchEl.value = ""; query = ""; renderSpots(); searchEl.focus(); });
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

  // ————— Radar (Entfernungsübersicht wie die Original-Karte) —————
  const segBtns = document.querySelectorAll(".seg button");
  segBtns.forEach(b => b.addEventListener("click", () => {
    segBtns.forEach(x => x.classList.toggle("active", x === b));
    const radar = b.dataset.view === "radar";
    document.getElementById("map").style.display = radar ? "none" : "";
    document.getElementById("radar-wrap").hidden = !radar;
    if (radar && !radarInited) { radarInited = true; buildRadar(); }
  }));
  let radarInited = false;

  function distKm(a, b) { // Haversine
    const R = 6371, r = Math.PI / 180;
    const dLat = (b.lat - a.lat) * r, dLng = (b.lng - a.lng) * r;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  function bearing(a, b) {
    const r = Math.PI / 180;
    const y = Math.sin((b.lng - a.lng) * r) * Math.cos(b.lat * r);
    const x = Math.cos(a.lat * r) * Math.sin(b.lat * r) - Math.sin(a.lat * r) * Math.cos(b.lat * r) * Math.cos((b.lng - a.lng) * r);
    return Math.atan2(y, x);
  }
  function boltMins(s) {
    if (!s) return 999;
    const h = s.match(/(\d+(?:[,.]\d+)?)\s*Std/);
    if (h) return parseFloat(h[1].replace(",", ".")) * 60;
    const m = s.match(/(\d+)\s*Min/);
    if (m) return +m[1];
    const km = s.match(/(\d+)\s*km/); // grobe Näherung: 1 km ≈ 1 Min Überland
    return km ? +km[1] : 999;
  }

  function buildRadar() {
    const svg = document.getElementById("radar");
    const C = 350, maxR = 322, minD = 0.4, maxD = 750;
    const rOf = d => 26 + (maxR - 26) * Math.log(Math.max(d, minD) / minD) / Math.log(maxD / minD);
    const NS = "http://www.w3.org/2000/svg";
    const el = (tag, at) => { const e = document.createElementNS(NS, tag); for (const k in at) e.setAttribute(k, at[k]); return e; };

    // Ringe
    [1, 5, 25, 100, 500].forEach(km => {
      svg.appendChild(el("circle", { cx: C, cy: C, r: rOf(km), class: "ring" }));
      const t = el("text", { x: C + 4, y: C - rOf(km) - 5, class: "ring-label" });
      t.textContent = km + " km";
      svg.appendChild(t);
    });
    const n = el("text", { x: C, y: 16, class: "ring-label north" }); n.textContent = "N"; svg.appendChild(n);

    // Punkte: Position + Rang nach Fahrzeit
    const pts = SPOTS.map((s, i) => {
      const d = distKm(HOTEL, s), th = bearing(HOTEL, s), r = rOf(d);
      return { s, i, mins: boltMins(s.bolt), ax: C + r * Math.sin(th), ay: C - r * Math.cos(th) };
    }).sort((a, b) => a.mins - b.mins);
    pts.forEach((p, k) => { p.rank = k + 1; p.x = p.ax; p.y = p.ay; });

    // Überlappende auseinanderschieben
    for (let it = 0; it < 80; it++) {
      for (let a = 0; a < pts.length; a++) for (let b = a + 1; b < pts.length; b++) {
        const dx = pts[b].x - pts[a].x, dy = pts[b].y - pts[a].y;
        const d = Math.hypot(dx, dy) || 0.01, min = 30;
        if (d < min) {
          const push = (min - d) / 2, ux = dx / d, uy = dy / d;
          pts[a].x -= ux * push; pts[a].y -= uy * push;
          pts[b].x += ux * push; pts[b].y += uy * push;
        }
      }
    }

    pts.forEach(p => {
      const c = CATS[p.s.cat].color;
      if (Math.hypot(p.x - p.ax, p.y - p.ay) > 9) { // Linie zur echten Position
        svg.appendChild(el("line", { x1: p.ax, y1: p.ay, x2: p.x, y2: p.y, class: "anchor-line" }));
        svg.appendChild(el("circle", { cx: p.ax, cy: p.ay, r: 2.5, fill: "#4a5468" }));
      }
      const g = el("g", { class: "rpoint", "data-idx": p.i });
      g.appendChild(el("circle", { cx: p.x, cy: p.y, r: 22, fill: "transparent" })); // Tippfläche
      g.appendChild(el("circle", { cx: p.x, cy: p.y, r: 14, class: "dot", stroke: c }));
      const t = el("text", { x: p.x, y: p.y + 4.5, class: "dot-n", fill: c });
      t.textContent = p.rank;
      g.appendChild(t);
      g.addEventListener("click", () => showSheet(p.s, p.rank));
      svg.appendChild(g);
    });

    // Hotel-Stern
    const star = el("text", { x: C, y: C + 8, class: "hotel-star" });
    star.textContent = "★"; svg.appendChild(star);
  }

  // Detail-Sheet (Punkt angetippt)
  function showSheet(s, rank) {
    const old = document.getElementById("sheet"); if (old) old.remove();
    const div = document.createElement("div");
    div.id = "sheet";
    div.innerHTML = '<div class="sheet-inner">' +
      '<button class="sheet-close">✕</button>' +
      '<div class="sheet-head"><span class="s-emoji">' + s.emoji + '</span><b>' + rank + '. ' + s.name + '</b></div>' +
      spotCard(s).replace("<details", "<details open") + "</div>";
    div.addEventListener("click", e => { if (e.target === div || e.target.className === "sheet-close") div.remove(); });
    document.body.appendChild(div);
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

  // ————— Heute-Karte: Countdown, Reisetag, Flugtag mit Abfahrtszeiten —————
  const DIR_MUC = "https://www.google.com/maps/dir/?api=1&destination=Parkprofi%20Parkhaus%2C%20Josef-Beil-Ring%202%2C%2085435%20Erding&travelmode=driving";
  const DIR_BKK = "https://www.google.com/maps/dir/?api=1&destination=Suvarnabhumi%20Airport&travelmode=driving";
  const FS = f => "https://www.google.com/search?q=" + f + "+Flugstatus";

  function timeline(rows) {
    return '<div class="t-rows">' + rows.map(r =>
      '<div class="t-row"><span class="t-time">' + r[0] + "</span><p>" + r[1] + "</p></div>").join("") + "</div>";
  }

  function renderToday() {
    const el = document.getElementById("today-card");
    const t = todayISO();
    if (t === "2026-08-27") {
      el.innerHTML = '<div class="card today"><div class="today-title">🛫 Heute geht\'s los — LH772 um 22:20</div>' +
        timeline([
          ["16:30", "Daheim losfahren — Donnerstag-Feierabendverkehr um München einplanen (~2–2,5 Std.)."],
          ["~18:45", "Auto abgeben: Parkprofi Parkhaus, Josef-Beil-Ring 2, 85435 Erding (überdacht, schon bezahlt — Beleg in OneDrive)."],
          ["~19:15", "Shuttle zum Terminal 2, fährt ~10 Min."],
          ["20:00", "Bag-Drop Lufthansa, Terminal 2. Koffer bis 23 kg, GOT BAG + kleine Tasche mit."],
          ["~21:40", "Boarding. Powerbank & Pass im Handgepäck? TDAC-Screenshot bereit?"],
          ["22:20", "Abflug — 13:45 Ortszeit landest du in Bangkok."]
        ]) +
        '<div class="s-actions"><a class="btn" href="' + DIR_MUC + '" target="_blank" rel="noopener">🚗 Live-Route zum Parkhaus</a>' +
        '<a class="btn ghost" href="' + FS("LH772") + '" target="_blank" rel="noopener">✈️ Flugstatus</a></div></div>';
      return;
    }
    if (t === "2026-09-06") {
      el.innerHTML = '<div class="card today"><div class="today-title">🛫 Heute Rückflug — LH773 um 22:55</div>' +
        timeline([
          ["12:00", "Check-out, Gepäck an der Rezeption lagern. Tag locker gestalten."],
          ["18:45", "Abfahrt am Hotel — Transfer ist inklusive (Abholzeit gestern bestätigt?). Plan B: Bolt ~600 ฿, 45–60 Min."],
          ["19:55", "Am Suvarnabhumi (3 Std. vorher). Bag-Drop Lufthansa."],
          ["~22:15", "Boarding. Restliche Baht ausgegeben?"],
          ["22:55", "Abflug — 05:15 landest du in München. Montag keine Einsätze!"]
        ]) +
        '<div class="s-actions"><a class="btn" href="' + DIR_BKK + '" target="_blank" rel="noopener">🚗 Live-Route zum Flughafen</a>' +
        '<a class="btn ghost" href="' + FS("LH773") + '" target="_blank" rel="noopener">✈️ Flugstatus</a></div></div>';
      return;
    }
    if (t < "2026-08-27") {
      const days = Math.round((new Date("2026-08-27T12:00:00") - new Date(t + "T12:00:00")) / 864e5);
      el.innerHTML = '<div class="card today"><div class="today-title">🛫 Noch ' + days + " Tag" + (days === 1 ? "" : "e") + " bis Bangkok</div>" +
        '<p class="today-sub">Do 27.08., 22:20 ab München — Checkliste im Blick behalten.</p>' +
        '<div class="s-actions"><button class="btn" id="open-checks">✅ Zur Checkliste</button></div></div>';
      const btn = document.getElementById("open-checks");
      if (btn) btn.addEventListener("click", () => {
        showTab("info");
        const sec = document.querySelector("#panel-info details");
        if (sec) sec.open = true;
      });
      return;
    }
    const day = PLAN.find(d => d.date === t);
    if (day) {
      const n = PLAN.indexOf(day);
      el.innerHTML = '<div class="card today"><div class="today-title">' + day.icon + " Heute: " + day.title + "</div>" +
        '<p class="today-sub">Tag ' + n + " deiner Reise · " + day.wd + " " + t.slice(8, 10) + "." + t.slice(5, 7) + ".</p>" +
        '<div class="s-actions"><button class="btn" id="open-plan">📅 Tagesplan öffnen</button></div></div>';
      const btn = document.getElementById("open-plan");
      if (btn) btn.addEventListener("click", () => showTab("plan"));
      return;
    }
    el.innerHTML = "";
  }
  renderToday();

  // ————— Wetter Bangkok (open-meteo, ohne Key) —————
  const WX_KEY = "bkk_wx";
  function wxIcon(c) {
    if (c <= 1) return "☀️"; if (c <= 3) return "⛅"; if (c <= 48) return "🌫️";
    if (c <= 67) return "🌦️"; if (c <= 82) return "🌧️"; return "⛈️";
  }
  function renderWeather(w) {
    const el = document.getElementById("weather");
    if (!w) { el.style.display = "none"; return; }
    el.innerHTML = '<span class="wx-main">' + wxIcon(w.code) + " " + w.t + " °C in Bangkok</span>" +
      '<span class="wx-rain">Regen heute ' + w.p0 + " % · morgen " + w.p1 + " %</span>";
  }
  async function fetchWeather() {
    try {
      const r = await fetch("https://api.open-meteo.com/v1/forecast?latitude=13.84&longitude=100.52&current=temperature_2m,weather_code&daily=precipitation_probability_max&forecast_days=2&timezone=Asia%2FBangkok");
      const j = await r.json();
      const w = { t: Math.round(j.current.temperature_2m), code: j.current.weather_code,
        p0: j.daily.precipitation_probability_max[0], p1: j.daily.precipitation_probability_max[1], ts: Date.now() };
      localStorage.setItem(WX_KEY, JSON.stringify(w));
      renderWeather(w);
    } catch (e) {
      const c = localStorage.getItem(WX_KEY);
      renderWeather(c ? JSON.parse(c) : null);
    }
  }
  fetchWeather();

  // ————— Sprache (Deutsch → Englisch, antippen = groß anzeigen) —————
  document.getElementById("phrase-list").innerHTML = PHRASES.map((g, gi) =>
    '<details class="card pgroup"><summary><span class="s-emoji">' + g.icon + '</span><span class="s-name">' + g.cat +
    '</span><span class="p-count">' + g.items.length + "</span></summary>" +
    '<div class="p-items">' + g.items.map((p, pi) =>
      '<button class="phrase" data-g="' + gi + '" data-p="' + pi + '">' +
      '<span class="p-de">' + p.de + '</span><span class="p-en">' + p.en + "</span></button>").join("") +
    "</div></details>").join("");
  document.querySelectorAll(".phrase").forEach(b => b.addEventListener("click", () => {
    const p = PHRASES[+b.dataset.g].items[+b.dataset.p];
    const old = document.getElementById("flashcard"); if (old) old.remove();
    const div = document.createElement("div");
    div.id = "flashcard";
    div.innerHTML = '<div class="fc-inner"><div class="fc-de">' + p.de + '</div><div class="fc-en">' + p.en +
      '</div><div class="fc-hint">Zum Schließen tippen</div></div>';
    div.addEventListener("click", () => div.remove());
    document.body.appendChild(div);
  }));

  // ————— Meine Reisedaten (nur auf DIESEM Gerät gespeichert, nie im App-Code) —————
  const MD_KEY = "bkk_mydata";
  if (location.hash.startsWith("#setup=")) {
    try {
      let b64 = location.hash.slice(7).replace(/-/g, "+").replace(/_/g, "/");
      b64 += "=".repeat((4 - b64.length % 4) % 4);
      const data = JSON.parse(decodeURIComponent(escape(atob(b64))));
      localStorage.setItem(MD_KEY, JSON.stringify(data));
      history.replaceState(null, "", location.pathname);
    } catch (e) { /* ungültiger Link */ }
  }
  const b64bytes = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
  async function decryptMyData(pw) {
    const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pw), "PBKDF2", false, ["deriveKey"]);
    const key = await crypto.subtle.deriveKey(
      { name: "PBKDF2", salt: b64bytes(MYDATA_ENC.salt), iterations: 300000, hash: "SHA-256" },
      base, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
    const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: b64bytes(MYDATA_ENC.iv) }, key, b64bytes(MYDATA_ENC.ct));
    return JSON.parse(new TextDecoder().decode(pt));
  }
  function renderMyData() {
    const el = document.getElementById("mydata-list");
    const raw = localStorage.getItem(MD_KEY);
    if (raw) {
      const rows = JSON.parse(raw);
      el.innerHTML = rows.map(r => '<div class="cheat-row"><span>' + r[0] + "</span><b>" + r[1] + "</b></div>").join("");
      return;
    }
    el.innerHTML = '<div class="unlock"><p class="hint" style="padding:8px 0 4px">Verschlüsselt (AES-256). Einmal Passwort eingeben — danach bleiben die Daten auf diesem Handy entsperrt.</p>' +
      '<div class="unlock-row"><input type="password" id="md-pw" placeholder="Passwort" autocomplete="off">' +
      '<button class="btn" id="md-go">Entsperren</button></div><p class="hint" id="md-err"></p></div>';
    document.getElementById("md-go").addEventListener("click", async () => {
      try {
        const rows = await decryptMyData(document.getElementById("md-pw").value.trim());
        localStorage.setItem(MD_KEY, JSON.stringify(rows));
        renderMyData();
      } catch (e) {
        document.getElementById("md-err").textContent = "Falsches Passwort — nochmal versuchen.";
      }
    });
  }
  renderMyData();

  // ————— Start —————
  fetchRate();
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js");
  }
})();
