/* ==========================================================
   ★  CONFIGURATION — EDIT THESE VALUES
   ========================================================== */

const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQnru6es-Yq8TW3GjiHFfsxUkEoKTxGXQ9ZvglDMXYsJITqub5Cnpa_qQ6LjECy_NG4prCIvO7ama_e/pub?gid=2124604569&single=true&output=csv";

// Supabase — for book cover images uploaded via admin panel
const SUPABASE_URL  = "https://umjsamfyisrdvyyvcooo.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtanNhbWZ5aXNyZHZ5eXZjb29vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3OTMzMTYsImV4cCI6MjA5NTM2OTMxNn0.xGCj7Bx3VoU5HsRUz-_Sbsb7chlP7bQsk60t23nset8";

const STORE = {
    name: "ნოვალისი წიგნები",
    phone: "+995 555 000 000",
    email: "gmail@gmail.com",
    address: { ka: "აღმაშენებლის ქუჩა, ზესტაფონი", en: "Aghmashenebeli street, Zestafoni" },
    hours: { ka: "ორშ–შაბ, 10:00–19:00", en: "Mon–Sat, 10:00–19:00" },
    year: "2026",
    city: { ka: "ზესტაფონი", en: "Zestafoni" },
};

const FORM_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbx_3BmIykV8EQsyBo9IxvTVQd4FYEcmx22vE2sauyhPDOEI0RmmkGzm_r1hbLFl1xLd-A/exec";

/* ==========================================================
   BOOK COVER COLOR PALETTES
   ========================================================== */
const PALETTES = [
    { bg: "#1a2744", tx: "#e8dfc8" }, { bg: "#2d4a3e", tx: "#f0ead6" },
    { bg: "#4a2428", tx: "#f5e0d8" }, { bg: "#2d2d4a", tx: "#dde8f5" },
    { bg: "#3d3218", tx: "#f5ead0" }, { bg: "#1f3040", tx: "#d8eaf5" },
    { bg: "#402020", tx: "#f5dcd8" }, { bg: "#254030", tx: "#d8f0e4" },
    { bg: "#3a1f3a", tx: "#f0ddf5" }, { bg: "#203040", tx: "#d8eaf0" },
    { bg: "#1a3028", tx: "#e0f2ea" }, { bg: "#3b2a10", tx: "#f5e6c8" },
    { bg: "#0f2535", tx: "#c8e8f5" }, { bg: "#2a1a40", tx: "#e8d8f5" },
    { bg: "#1e3520", tx: "#d5f0d8" },
];

/* ==========================================================
   BILINGUAL TEXT
   ========================================================== */
const TX = {
    ka: {
        heroEye: "ზესტაფონი, საქართველო",
        heroH: "ყველა წიგნი<br><em>მოგვითხრობს<br>ისტორიას</em>",
        heroD: "აღმოაჩინეთ ჩვენი სრული კოლექცია — მხატვრული, ისტორია, ფილოსოფია, მეცნიერება და სხვა.",
        browse: "კატალოგის ნახვა", contactBtn: "კონტაქტი", scrollHint: "↓ გადახვიეთ",
        slTitles: "წიგნი მარაგში", slGenres: "ჟანრი", slRating: "შეფასება", slOrder: "შეკვეთის პასუხი",
        eyeR: "ახალი", titleR: "ახლახან დამატებული", btnFull: "სრული კატალოგი →",
        eyeG: "კოლექცია", titleG: "ჟანრის მიხედვით", btnAll: "ყველა ნახვა →",
        mixed: "ყველა",
        eyeC: "კონტაქტი", titleC: "დაგვიკავშირდით",
        subC: "გსურთ წიგნის შეკვეთა ან ხელმისაწვდომობის გაგება? შეავსეთ ფორმა — 24 საათში დაგიკავშირდებით.",
        lPhone: "ტელეფონი", lEmail: "ელ-ფოსტა", lAddr: "მისამართი", lHours: "სამუშაო საათები",
        lName: "სახელი", phName: "სრული სახელი",
        lReach: "ელ-ფოსტა / ტელეფონი", phReach: "დაკავშირებისთვის",
        lMsg: "შეტყობინება", phMsg: "წიგნის სახელი, კითხვა, შეკვეთა…",
        send: "გაგზავნა", formOk: "გმადლობთ! მალე დაგიკავშირდებით.",
        alertFill: "გთხოვთ შეავსოთ სახელი და საკონტაქტო ინფო.",
        catTitle: "ჩვენი კატალოგი", searchPh: "სათაური, ავტორი ან ISBN…",
        loading: "იტვირთება…", noResults: "წიგნი ვერ მოიძებნა.",
        navHome: "მთავარი", navCat: "კატალოგი", navContact: "კონტაქტი",
        close: "დახურვა", order: "დაკავშირება",
        viewBook: "ნახვა",
        pPrice: "ფასი", pAvail: "ხელმისაწვდომობა", pGenre: "ჟანრი",
        pYear: "წელი", pUnits: "მარაგი",
        inStock: "მარაგშია", lowStock: "მცირეა", outOfStock: "ამოიწურა",
        books: (n) => `${n} წიგნი`,
        orderMsg: (title, author) => `გთხოვთ შემინახოთ: "${title}" — ${author}`,
        footer: (yr, city) => `© ${yr} ნოვალისი წიგნები · ${city}`,
        sortDefault: "დალაგება",
        sortPriceAsc: "ფასი: ↑ დაბლიდან",
        sortPriceDesc: "ფასი: ↓ მაღლიდან",
        sortTitleAsc: "სათაური A–Z",
        sortDiscount: "🏷 ფასდაკლება პირველი",
        discountBadge: "ფასდაკლება",
    },
    en: {
        heroEye: "Zestafoni, Georgia",
        heroH: "Every book<br><em>tells a story</em>",
        heroD: "Discover our full collection — fiction, history, philosophy, science and much more.",
        browse: "Browse Catalog", contactBtn: "Contact", scrollHint: "↓ Scroll down",
        slTitles: "Titles in stock", slGenres: "Genres", slRating: "Customer rating", slOrder: "Order response",
        eyeR: "New", titleR: "Recently Added", btnFull: "Full Catalog →",
        eyeG: "Collection", titleG: "Browse by Genre", btnAll: "View All →",
        mixed: "All",
        eyeC: "Contact", titleC: "Get in touch",
        subC: "Want to order a book or check availability? Fill out the form and we'll get back to you within 24 hours.",
        lPhone: "Phone", lEmail: "Email", lAddr: "Address", lHours: "Working hours",
        lName: "Your name", phName: "Full name",
        lReach: "Email or phone", phReach: "So we can reach you",
        lMsg: "Message", phMsg: "Book title, question, order…",
        send: "Send", formOk: "Thank you! We'll be in touch soon.",
        alertFill: "Please fill in your name and contact info.",
        catTitle: "Our Catalog", searchPh: "Title, author or ISBN…",
        loading: "Loading…", noResults: "No books found.",
        navHome: "Home", navCat: "Catalog", navContact: "Contact",
        close: "Close", order: "Contact us",
        viewBook: "View",
        pPrice: "Price", pAvail: "Availability", pGenre: "Genre",
        pYear: "Year", pUnits: "Units in stock",
        inStock: "In stock", lowStock: "Low stock", outOfStock: "Out of stock",
        books: (n) => `${n} book${n !== 1 ? "s" : ""}`,
        orderMsg: (title, author) => `გთხოვთ შემინახოთ: "${title}" — ${author}`,
        footer: (yr, city) => `© ${yr} Novalisi books · ${city}`,
        sortDefault: "Sort by",
        sortPriceAsc: "Price: Low to High",
        sortPriceDesc: "Price: High to Low",
        sortTitleAsc: "Title A–Z",
        sortDiscount: "🏷 Discounted first",
        discountBadge: "Sale",
    },
};

/* ==========================================================
   STATE
   ========================================================== */
let allBooks    = [];
let imageMap    = {};  // bookKey → Supabase public image URL
let currentLang = "ka";
let gridGenre   = "";
let catGenre    = "";
let catSort     = "";
let currentBook = null;
let currentPage = "landing";

function $(id) { return document.getElementById(id); }
function t(key, ...args) {
    const v = TX[currentLang][key];
    return typeof v === "function" ? v(...args) : (v ?? TX.ka[key] ?? key);
}

/* ==========================================================
   NAVIGATION
   ========================================================== */
function showPage(name) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    $("page-" + name).classList.add("active");
    document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));
    currentPage = name;

    const nav = $("main-nav");
    if (nav) { nav.classList.add("scrolled"); nav.classList.remove("nav-hidden"); }

    if (name === "landing") {
        $("nav-home").classList.add("active");
        window.scrollTo(0, 0);
    } else if (name === "catalog") {
        $("nav-catalog").classList.add("active");
        window.scrollTo(0, 0);
        buildCatalogChips();
        renderCatalog();
    }
}

function goHome() { showPage("landing"); }

function goContact() {
    if (currentPage !== "landing") {
        showPage("landing");
        setTimeout(() => scrollToSection("section-contact"), 100);
    } else {
        scrollToSection("section-contact");
    }
}

function scrollToSection(id) {
    const el = $(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}

/* ==========================================================
   LANGUAGE
   ========================================================== */
function setLang(lang, btn) {
    currentLang = lang;
    document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    applyLang();
    if (allBooks.length) {
        renderHeroBooks();
        renderRecent();
        buildLandingChips();
        renderGenreGrid();
        buildCatalogChips();
        renderCatalog();
    }
}

function applyLang() {
    const ids = {
        "nav-home": t("navHome"), "nav-catalog": t("navCat"), "nav-contact": t("navContact"),
        "f-home": t("navHome"), "f-catalog": t("navCat"), "f-contact": t("navContact"),
        "hero-eyebrow": t("heroEye"),
        "btn-browse": t("browse"), "btn-contact-hero": t("contactBtn"),
        "scroll-hint": t("scrollHint"),
        "sl-titles": t("slTitles"), "sl-genres": t("slGenres"),
        "sl-rating": t("slRating"), "sl-order": t("slOrder"),
        "eyebrow-recent": t("eyeR"), "title-recent": t("titleR"), "btn-full-catalog": t("btnFull"),
        "eyebrow-genre": t("eyeG"), "title-genre": t("titleG"), "btn-view-all": t("btnAll"),
        "eyebrow-contact": t("eyeC"), "title-contact": t("titleC"), "contact-sub": t("subC"),
        "label-phone": t("lPhone"), "label-email": t("lEmail"),
        "label-addr": t("lAddr"), "label-hours": t("lHours"),
        "c-hours": STORE.hours[currentLang],
        "c-address": STORE.address[currentLang],
        "lbl-name": t("lName"), "lbl-reach": t("lReach"), "lbl-msg": t("lMsg"),
        "btn-send": t("send"),
        "catalog-heading": t("catTitle"),
        "catalog-loading-txt": t("loading"),
        "no-results-txt": t("noResults"),
        "btn-modal-close": t("close"), "btn-modal-order": t("order"),
        "footer-copy": t("footer", STORE.year, STORE.city[currentLang]),
    };
    for (const [id, val] of Object.entries(ids)) {
        const el = $(id); if (el) el.textContent = val;
    }
    const ht = $("hero-title"); if (ht) ht.innerHTML = t("heroH");
    const hd = $("hero-desc"); if (hd) hd.textContent = t("heroD");
    const si = $("search-input"); if (si) si.placeholder = t("searchPh");
    const fn = $("f-name"); if (fn) fn.placeholder = t("phName");
    const fc = $("f-contact"); if (fc) fc.placeholder = t("phReach");
    const fm = $("f-msg"); if (fm) fm.placeholder = t("phMsg");
}

/* ==========================================================
   FETCH WITH MULTI-PROXY FALLBACK
   ========================================================== */
async function fetchCSV(url) {
    const proxies = [
        url,
        "https://corsproxy.io/?" + encodeURIComponent(url),
        "https://api.allorigins.win/raw?url=" + encodeURIComponent(url),
    ];
    for (const src of proxies) {
        try {
            const r = await fetch(src, { signal: AbortSignal.timeout(7000) });
            if (r.ok) { const txt = await r.text(); if (txt.trim().length > 10) return txt; }
        } catch (_) { /* try next */ }
    }
    return null;
}

/* ==========================================================
   LOAD BOOKS
   ========================================================== */
async function loadBooks() {
    const csv = await fetchCSV(SHEET_CSV_URL);
    if (csv) {
        const parsed = parseCSV(csv);
        if (parsed.length > 0) {
            allBooks = parsed;
            await loadImageMap();
            onLoaded();
            return;
        }
    }
    showEmptyState();
}

function showEmptyState() {
    const msg = currentLang === "ka"
        ? "წიგნები ვერ ჩაიტვირთა. სცადეთ გვერდის განახლება."
        : "Could not load books. Please refresh the page.";
    ["recent-loading", "grid-loading", "catalog-loading"].forEach(id => {
        const el = $(id);
        if (el) {
            el.innerHTML = `<p style="color:var(--ink3);text-align:center;padding:2rem">${msg}</p>`;
            el.style.display = "block";
        }
    });
}

/* ==========================================================
   LOAD IMAGE MAP FROM SUPABASE
   ========================================================== */
async function loadImageMap() {
    try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/book_images?select=book_key,image_url`, {
            headers: {
                "apikey": SUPABASE_ANON,
                "Authorization": "Bearer " + SUPABASE_ANON,
            }
        });
        if (!res.ok) return;
        const rows = await res.json();
        imageMap = {};
        rows.forEach(r => { imageMap[r.book_key] = r.image_url; });
    } catch(e) {
        console.warn("Image map load failed:", e);
    }
}

/* ==========================================================
   CSV PARSER
   ========================================================== */
function parseCSV(text) {
    const lines = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n")
        .split("\n").map(l => l.trim()).filter(Boolean);
    if (lines.length < 2) return [];
    const headers = splitLine(lines[0]).map(h => h.toLowerCase().trim());
    const books = [];
    for (let i = 1; i < lines.length; i++) {
        const vals = splitLine(lines[i]);
        const b = {};
        headers.forEach((h, idx) => { b[h] = (vals[idx] || "").trim(); });
        if (!b.title) continue;
        b.quantity       = parseInt(b.quantity) || 0;
        b.price          = parseFloat(b.price) || 0;
        b.year           = parseInt(b.year) || null;
        b.original_price = parseFloat(b.original_price) || 0;
        b._palette       = PALETTES[books.length % PALETTES.length];
        b._id            = books.length;
        b._key           = (b.isbn || b.title).toLowerCase()
                            .replace(/\s+/g, "_")
                            .replace(/[^a-z0-9_\u10D0-\u10FF]/g, "");
        books.push(b);
    }
    return books;
}

function splitLine(line) {
    const res = []; let cur = ""; let q = false;
    for (let i = 0; i < line.length; i++) {
        const c = line[i];
        if (c === '"') { if (q && line[i + 1] === '"') { cur += '"'; i++; } else q = !q; }
        else if (c === ',' && !q) { res.push(cur); cur = ""; }
        else cur += c;
    }
    res.push(cur); return res;
}

/* ==========================================================
   AFTER BOOKS LOADED
   ========================================================== */
function onLoaded() {
    const inStock = allBooks.filter(b => b.quantity > 0).length;
    const genres  = new Set(allBooks.map(b => b.genre).filter(Boolean)).size;
    $("stat-titles").textContent = inStock;
    $("stat-genres").textContent = genres;

    renderHeroBooks();
    renderRecent();
    buildLandingChips();
    renderGenreGrid();
    buildCatalogChips();
}

/* ==========================================================
   HERO BOOK COVERS  (first 4)
   ========================================================== */
function renderHeroBooks() {
    const el = $("hero-books"); if (!el) return;
    el.innerHTML = allBooks.slice(0, 4).map(b => {
        const p = b._palette;
        const imgUrl = imageMap[b._key];
        const inner = imgUrl
            ? `<img src="${imgUrl}" alt="${esc(b.title)}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit">`
            : `<div class="hero-book-inner">
                 <div class="hb-title" style="color:${p.tx}">${esc(b.title)}</div>
                 <div class="hb-author" style="color:${p.tx}">${esc(b.author)}</div>
               </div>`;
        return `<div class="hero-book" onclick="openBook(${b._id})" style="background:${p.bg}">${inner}</div>`;
    }).join("");
}

/* ==========================================================
   RECENTLY ADDED
   ========================================================== */
function renderRecent() {
    const loading = $("recent-loading");
    const scroll  = $("recent-scroll");
    const track   = $("recent-track");
    if (!track) return;
    const recent = [...allBooks].slice(-10).reverse();
    loading.style.display = "none";
    scroll.style.display  = "block";
    track.innerHTML = recent.map(b => bookCard(b, true)).join("");
}

/* ==========================================================
   GENRE GRID  (3 × 3)
   ========================================================== */
function getGridBooks() {
    if (!gridGenre) {
        const byGenre = {};
        allBooks.forEach(b => {
            if (b.genre) { (byGenre[b.genre] = byGenre[b.genre] || []).push(b); }
        });
        const keys = Object.keys(byGenre);
        if (!keys.length) return allBooks.slice(0, 9);
        const result = [];
        for (let round = 0; result.length < 9; round++) {
            let added = false;
            for (const k of keys) {
                if (result.length >= 9) break;
                if (byGenre[k][round]) { result.push(byGenre[k][round]); added = true; }
            }
            if (!added) break;
        }
        return result;
    }
    return allBooks.filter(b => b.genre === gridGenre).slice(0, 9);
}

function buildLandingChips() {
    const el = $("landing-chips"); if (!el) return;
    const genres = [...new Set(allBooks.map(b => b.genre).filter(Boolean))].sort();
    el.innerHTML =
        `<button class="chip ${!gridGenre ? "active" : ""}" onclick="setGridGenre('',this)">${t("mixed")}</button>` +
        genres.map(g =>
            `<button class="chip ${gridGenre === g ? "active" : ""}" onclick="setGridGenre('${esc(g)}',this)">${esc(g)}</button>`
        ).join("");
}

function setGridGenre(genre, btn) {
    gridGenre = genre;
    document.querySelectorAll("#landing-chips .chip").forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    renderGenreGrid();
}

function renderGenreGrid() {
    const loading = $("grid-loading");
    const grid    = $("genre-grid");
    if (!grid) return;
    const books = getGridBooks();
    loading.style.display = "none";
    grid.style.display    = "grid";
    grid.innerHTML = books.map(b => bookCard(b, false)).join("");
}

/* ==========================================================
   CATALOG PAGE
   ========================================================== */
function buildCatalogChips() {
    const el = $("catalog-chips"); if (!el) return;
    const genres = [...new Set(allBooks.map(b => b.genre).filter(Boolean))].sort();
    el.innerHTML =
        `<button class="chip ${!catGenre ? "active" : ""}" onclick="setCatGenre('',this)">${t("mixed")}</button>` +
        genres.map(g =>
            `<button class="chip ${catGenre === g ? "active" : ""}" onclick="setCatGenre('${esc(g)}',this)">${esc(g)}</button>`
        ).join("");
}

function setCatGenre(genre, btn) {
    catGenre = genre;
    document.querySelectorAll("#catalog-chips .chip").forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    renderCatalog();
}

function setCatSort(val) {
    catSort = val;
    const sel = $("sort-select");
    if (sel) sel.value = val;
    renderCatalog();
}

function filterBooks() { renderCatalog(); }

function renderCatalog() {
    const loading = $("catalog-loading");
    const grid    = $("catalog-grid");
    const noRes   = $("no-results");
    const countEl = $("result-count");
    if (!grid || !allBooks.length) return;

    loading.style.display = "none";
    grid.style.display    = "grid";

    const sel = $("sort-select");
    if (sel) {
        sel.options[0].text = t("sortDefault");
        sel.options[1].text = t("sortPriceAsc");
        sel.options[2].text = t("sortPriceDesc");
        sel.options[3].text = t("sortTitleAsc");
        sel.options[4].text = t("sortDiscount");
    }

    const q = ($("search-input")?.value || "").toLowerCase();
    let filtered = allBooks.filter(b => {
        const ms = !q
            || b.title.toLowerCase().includes(q)
            || b.author.toLowerCase().includes(q)
            || (b.isbn || "").toLowerCase().includes(q);
        const mg = !catGenre || b.genre === catGenre;
        return ms && mg;
    });

    if (catSort === "price-asc")  filtered = [...filtered].sort((a, b) => a.price - b.price);
    if (catSort === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
    if (catSort === "title-asc")  filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    if (catSort === "discount")   filtered = [...filtered].sort((a, b) => (b.original_price > 0 ? 1 : 0) - (a.original_price > 0 ? 1 : 0));

    countEl.textContent = t("books", filtered.length);

    if (!filtered.length) {
        grid.innerHTML = "";
        noRes.style.display = "block";
    } else {
        noRes.style.display = "none";
        grid.innerHTML = filtered.map(b => bookCard(b, false)).join("");
    }
}

/* ==========================================================
   BOOK CARD HTML
   ========================================================== */
function bookCard(b, small) {
    const p = b._palette;
    const st = stockBadge(b.quantity);
    const isDiscount  = b.original_price > 0 && b.original_price > b.price;
    const discountPct = isDiscount ? Math.round((1 - b.price / b.original_price) * 100) : 0;
    const priceHTML = b.price
        ? (isDiscount
            ? `<span class="book-price book-price--sale">₾${b.price.toFixed(2)}</span><span class="book-price-original">₾${b.original_price.toFixed(2)}</span>`
            : `<span class="book-price">₾${b.price.toFixed(2)}</span>`)
        : `<span class="book-price">—</span>`;
    const cls    = small ? "book-card book-card--small" : "book-card";
    const imgUrl = imageMap[b._key];
    const coverInner = imgUrl
        ? `<img src="${imgUrl}" alt="${esc(b.title)}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit">`
        : `<div class="book-spine" style="background:${p.tx};opacity:0.4"></div>
           <div class="book-cover-text" style="color:${p.tx}">
             <div class="bc-title">${esc(b.title)}</div>
             <div class="bc-author">${esc(b.author)}</div>
           </div>`;
    return `
  <div class="${cls}" onclick="openBook(${b._id})">
    <div class="book-cover" style="background:${p.bg}">
      ${coverInner}
      ${isDiscount ? `<div class="discount-ribbon">−${discountPct}%</div>` : ""}
      <div class="book-cover-overlay">
        <span>${t("viewBook")}</span>
      </div>
    </div>
    <div class="book-meta">
      <div class="book-name">${esc(b.title)}</div>
      <div class="book-author-name">${esc(b.author)}</div>
      <div class="book-footer-row">
        <div class="book-price-wrap">${priceHTML}</div>
        <span class="badge ${st.cls}">${st.label[currentLang]}</span>
      </div>
    </div>
  </div>`;
}

function stockBadge(qty) {
    if (qty === 0) return { label: { ka: "ამოიწურა", en: "Out of stock" }, cls: "badge-out" };
    if (qty <= 3)  return { label: { ka: "მცირეა",   en: "Low stock"    }, cls: "badge-low" };
    return               { label: { ka: "მარაგშია", en: "In stock"     }, cls: "badge-in"  };
}

/* ==========================================================
   MODAL
   ========================================================== */
function openBook(id) {
    currentBook = allBooks.find(b => b._id === id);
    if (!currentBook) return;
    const b  = currentBook;
    const p  = b._palette;
    const st = stockBadge(b.quantity);
    const imgUrl = imageMap[b._key];
    const modalCover = imgUrl
        ? `<div class="modal-cover" style="background:${p.bg};padding:0;overflow:hidden">
             <img src="${imgUrl}" alt="${esc(b.title)}" style="width:100%;height:100%;object-fit:cover;display:block">
           </div>`
        : `<div class="modal-cover" style="background:${p.bg};color:${p.tx}">${esc(b.title)}</div>`;

    $("modal-content").innerHTML = `
  <div class="modal-top">
    ${modalCover}
    <div class="modal-info">
      <div class="modal-title" style="color:var(--ink)">${esc(b.title)}</div>
      <div class="modal-author-line">${esc(b.author)}</div>
      ${b.description ? `<p class="modal-desc">${esc(b.description)}</p>` : ""}
    </div>
  </div>
  <div class="modal-fields">
    <div class="m-field">
      <div class="m-label">${t("pPrice")}</div>
      <div class="m-val">
        ${b.original_price > 0 && b.original_price > b.price
            ? `<span style="color:var(--green);font-weight:600">₾${b.price.toFixed(2)}</span>
               <span style="text-decoration:line-through;color:var(--ink3);font-size:12px;margin-left:6px">₾${b.original_price.toFixed(2)}</span>
               <span class="badge badge-sale" style="margin-left:6px">−${Math.round((1 - b.price / b.original_price) * 100)}%</span>`
            : `<span style="color:var(--ink)">${b.price ? "₾" + b.price.toFixed(2) : "—"}</span>`
        }
      </div>
    </div>
    <div class="m-field">
      <div class="m-label">${t("pAvail")}</div>
      <div class="m-val"><span class="badge ${st.cls}">${st.label[currentLang]}</span></div>
    </div>
    <div class="m-field">
      <div class="m-label">${t("pGenre")}</div>
      <div class="m-val" style="color:var(--ink)">${esc(b.genre) || "—"}</div>
    </div>
    <div class="m-field">
      <div class="m-label">${t("pYear")}</div>
      <div class="m-val" style="color:var(--ink)">${b.year || "—"}</div>
    </div>
    ${b.isbn ? `<div class="m-field"><div class="m-label">ISBN</div><div class="m-val" style="font-size:12px;color:var(--ink2)">${esc(b.isbn)}</div></div>` : ""}
    <div class="m-field">
      <div class="m-label">${t("pUnits")}</div>
      <div class="m-val" style="color:var(--ink)">${b.quantity}</div>
    </div>
  </div>`;

    $("modal").classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    $("modal").classList.remove("open");
    document.body.style.overflow = "";
}

function orderCurrentBook() {
    if (!currentBook) return;
    closeModal();
    goContact();
    setTimeout(() => { $("f-msg").value = t("orderMsg", currentBook.title, currentBook.author); }, 350);
}

/* ==========================================================
   CONTACT FORM — VALIDATION HELPERS
   ========================================================== */
function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}
function isValidPhone(val) {
    return /^[\+]?[\d\s\-\(\)]{7,20}$/.test(val);
}
function isValidContact(val) {
    return isValidEmail(val) || isValidPhone(val);
}

function setFieldError(inputId, errorId, msg) {
    const input = $(inputId);
    const err   = $(errorId);
    if (!input || !err) return;
    input.classList.add("input-error");
    err.textContent  = msg;
    err.style.display = "block";
}

function clearFieldError(inputId, errorId) {
    const input = $(inputId);
    const err   = $(errorId);
    if (input) input.classList.remove("input-error");
    if (err) { err.textContent = ""; err.style.display = "none"; }
}

function attachLiveValidation() {
    const nameInput = $("f-name");
    const contInput = $("f-contact");
    if (nameInput) {
        nameInput.addEventListener("input", () => {
            if (nameInput.value.trim().length >= 2)
                clearFieldError("f-name", "f-name-err");
        });
    }
    if (contInput) {
        contInput.addEventListener("input", () => {
            if (isValidContact(contInput.value.trim()))
                clearFieldError("f-contact", "f-contact-err");
        });
    }
}

/* ==========================================================
   CONTACT FORM
   ========================================================== */
async function submitForm() {
    const name = $("f-name").value.trim();
    const cont = $("f-contact").value.trim();
    const msg  = $("f-msg").value.trim();

    let hasError = false;

    if (name.length < 2) {
        setFieldError("f-name", "f-name-err", currentLang === "ka" ? "გთხოვთ შეიყვანოთ სახელი" : "Please enter your name");
        hasError = true;
    } else {
        clearFieldError("f-name", "f-name-err");
    }

    if (!cont) {
        setFieldError("f-contact", "f-contact-err", currentLang === "ka" ? "გთხოვთ შეიყვანოთ ელ-ფოსტა ან ტელეფონი" : "Please enter your email or phone");
        hasError = true;
    } else if (!isValidContact(cont)) {
        setFieldError("f-contact", "f-contact-err", currentLang === "ka" ? "შეიყვანეთ სწორი ელ-ფოსტა ან ტელეფონი" : "Enter a valid email or phone");
        hasError = true;
    } else {
        clearFieldError("f-contact", "f-contact-err");
    }

    if (hasError) {
        const firstErr = document.querySelector(".input-error");
        if (firstErr) firstErr.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
    }

    const btn          = $("btn-send");
    const originalText = btn.textContent;
    btn.disabled       = true;
    btn.textContent    = currentLang === "ka" ? "იგზავნება…" : "Sending…";

    const formSuccess = $("form-success");

    if (FORM_WEBHOOK_URL) {
        try {
            await fetch(FORM_WEBHOOK_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify({
                    timestamp: new Date().toISOString(),
                    name,
                    contact: cont,
                    message: msg,
                }),
            });
            formSuccess.className   = "form-success form-success--ok";
            formSuccess.textContent = t("formOk");
            formSuccess.style.display = "block";
        } catch (e) {
            formSuccess.className   = "form-success form-success--err";
            formSuccess.textContent = currentLang === "ka"
                ? "⚠️ შეცდომა — სცადეთ თავიდან ან დაგვიკავშირდეთ ტელეფონით"
                : "⚠️ Error — please try again or contact us by phone";
            formSuccess.style.display = "block";
        }
    }

    ["f-name", "f-contact", "f-msg"].forEach(id => { $(id).value = ""; });
    clearFieldError("f-name", "f-name-err");
    clearFieldError("f-contact", "f-contact-err");

    btn.disabled    = false;
    btn.textContent = originalText;

    setTimeout(() => { formSuccess.style.display = "none"; }, 7000);
}

/* ==========================================================
   UTILITY
   ========================================================== */
function esc(s) {
    if (!s) return "";
    return String(s)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;")
        .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* ==========================================================
   APPLY STORE CONFIG
   ========================================================== */
function applyStore() {
    $("c-phone").textContent   = STORE.phone;
    $("c-email").textContent   = STORE.email;
    $("c-address").textContent = STORE.address[currentLang];
    $("c-hours").textContent   = STORE.hours[currentLang];
}

/* ==========================================================
   NAV SCROLL EFFECT
   ========================================================== */
(function () {
    let lastY  = 0;
    let hidden = false;
    const HIDE_THRESHOLD = 80;
    const SHOW_DELTA     = 8;

    window.addEventListener("scroll", () => {
        const nav = $("main-nav");
        if (!nav) return;
        const y = window.scrollY;

        nav.classList.add("scrolled");

        if (y < HIDE_THRESHOLD) {
            if (hidden) { nav.classList.remove("nav-hidden"); hidden = false; }
        } else if (y > lastY + 4) {
            if (!hidden) { nav.classList.add("nav-hidden"); hidden = true; }
        } else if (lastY - y > SHOW_DELTA) {
            if (hidden) { nav.classList.remove("nav-hidden"); hidden = false; }
        }

        lastY = y;
    }, { passive: true });
})();

/* ==========================================================
   KEYBOARD
   ========================================================== */
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ==========================================================
   INIT
   ========================================================== */
applyStore();
applyLang();
loadBooks();
attachLiveValidation();