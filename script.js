/* ==========================================================
   ★  CONFIGURATION — EDIT THESE VALUES
   ========================================================== */

const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQnru6es-Yq8TW3GjiHFfsxUkEoKTxGXQ9ZvglDMXYsJITqub5Cnpa_qQ6LjECy_NG4prCIvO7ama_e/pub?gid=2124604569&single=true&output=csv";

// ★ STATIONERY SHEET — replace STATIONERY_GID with your second sheet's gid
const STATIONERY_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQnru6es-Yq8TW3GjiHFfsxUkEoKTxGXQ9ZvglDMXYsJITqub5Cnpa_qQ6LjECy_NG4prCIvO7ama_e/pub?gid=1878651999&single=true&output=csv";

// Supabase — for book cover images uploaded via admin panel
const SUPABASE_URL = "https://umjsamfyisrdvyyvcooo.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtanNhbWZ5aXNyZHZ5eXZjb29vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3OTMzMTYsImV4cCI6MjA5NTM2OTMxNn0.xGCj7Bx3VoU5HsRUz-_Sbsb7chlP7bQsk60t23nset8";

const STORE = {
    name: "ნოვალისი",
    phone: "+995 511 45 41 74",
    email: "gmail@gmail.com",
    address: { ka: "აღმაშენებლის ქუჩა N33, ზესტაფონი", en: "Aghmashenebeli street N33, Zestafoni" },
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
        browse: "კატალოგის ნახვა", contactBtn: "კონტაქტი", scrollHint: "↓ ქვემოთ გადახვევა",
        slTitles: "წიგნი მარაგში", slGenres: "ჟანრი", slRating: "შეფასება", slOrder: "შეკვეთის პასუხი",
        eyeR: "ახალი", titleR: "ახლახან დამატებული", btnFull: "სრული კატალოგი →",
        eyeG: "კოლექცია", titleG: "ჟანრის მიხედვით", btnAll: "ყველა ნახვა →",
        mixed: "ყველა",
        eyeC: "კონტაქტი", titleC: "დაგვიკავშირდით",
        subC: "გსურთ ნივთის შენახვა? შეავსეთ ფორმა — მალევე დაგიკავშირდებით.",
        lPhone: "ტელეფონი", lEmail: "ელ-ფოსტა", lAddr: "მისამართი", lHours: "სამუშაო საათები",
        lName: "სახელი", phName: "სრული სახელი",
        lReach: "ელ-ფოსტა / ტელეფონი", phReach: "დაკავშირებისთვის",
        lMsg: "შეტყობინება", phMsg: "წიგნის სათაური, კითხვა...",
        send: "გაგზავნა", formOk: "გმადლობთ! მალე დაგიკავშირდებით.",
        alertFill: "გთხოვთ შეავსოთ სახელი და საკონტაქტო ველი.",
        catTitle: "ჩვენი კატალოგი", searchPh: "სათაური ან ავტორი...",
        loading: "იტვირთება…", noResults: "წიგნი ვერ მოიძებნა.",
        navHome: "მთავარი", navCat: "კატალოგი", navStat: "კანცელარია", navContact: "კონტაქტი",
        close: "დახურვა", order: "დაკავშირება",
        viewBook: "ნახვა",
        pPrice: "ფასი", pAvail: "ხელმისაწვდომობა", pGenre: "ჟანრი", pLang: "ენა",
        pYear: "წელი", pUnits: "მარაგი",
        inStock: "მარაგშია", lowStock: "მცირე რაოდენობით", outOfStock: "ამოიწურა",
        books: (n) => `${n} წიგნი`,
        orderMsg: (title, author) => `გთხოვთ შემინახოთ: "${title}" — ${author}`,
        footer: (yr, city) => `© ${yr} ნოვალისი წიგნები · ${city} · შექმნილია <span class="vakho-credit" title="+995 551 03 47 47">VakhoDev</span>-ის მიერ`,
        sortDefault: "დალაგება",
        sortPriceAsc: "ფასი: ↑ დაბლიდან",
        sortPriceDesc: "ფასი: ↓ მაღლიდან",
        sortTitleAsc: "სათაური A–Z",
        sortDiscount: "🏷 ფასდაკლება პირველი",
        discountBadge: "ფასდაკლება",
        allGenres: "ყველა",
        statNoResults: "პროდუქტი ვერ მოიძებნა.",
        statOrder: "დაკავშირება",
        statCount: (n) => `${n} პროდუქტი`,
        statPageTitle: "კანცელარია",
        statSearchPh: "პროდუქტი ან კატეგორია…",
        statOrderMsg: (name) => `გთხოვთ შემინახოთ: "${name}"`,
        viewItem: "ნახვა",
        pCat: "კატეგორია",
        // Genre translation map: Georgian genre names → English
        genreMap: {
            "მხატვრული": "Fiction",
            "ისტორია": "History",
            "ფილოსოფია": "Philosophy",
            "მეცნიერება": "Science",
            "ბიოგრაფია": "Biography",
            "პოეზია": "Poetry",
            "დრამა": "Drama",
            "ბავშვური": "Children",
            "საბავშვო": "Children",
            "ფანტასტიკა": "Fantasy",
            "დეტექტივი": "Detective",
            "სამეცნიერო ფანტასტიკა": "Sci-Fi",
            "ფსიქოლოგია": "Psychology",
            "ეკონომიკა": "Economics",
            "სამართალი": "Law",
            "ხელოვნება": "Art",
            "სპორტი": "Sports",
            "მოგზაურობა": "Travel",
            "კულინარია": "Cooking",
            "რელიგია": "Religion",
            "ენათმეცნიერება": "Linguistics",
            "პოლიტიკა": "Politics",
            "სოციოლოგია": "Sociology",
            "კლასიკური": "Classic",
            "კლასიკა": "Classic",
            "თვითგანვითარება": "Self-Help",
            "მართვა": "Management",
            "ბიზნესი": "Business",
            "ტექნოლოგია": "Technology",
            "მედიცინა": "Medicine",
            "ბუნება": "Nature",
            "პუბლიცისტიკა": "Non-Fiction",
            "მოთხრობა": "Short Stories",
            "რომანი": "Novel",
            "ესსე": "Essay",
            "მემუარები": "Memoirs",
            "ანთოლოგია": "Anthology",
            "კომიქსი": "Comics",
            "მანგა": "Manga",
            "ჰუმორი": "Humor",
            "საბავშვო": "Children",
            "თინეიჯერი": "Young Adult",
            "საბავშვო ლიტერატურა": "Children's Literature",
        },
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
        subC: "Want us to save certain item for you? Fill out the form and we'll get back to you as soon as possible.",
        lPhone: "Phone", lEmail: "Email", lAddr: "Address", lHours: "Working hours",
        lName: "Your name", phName: "Full name",
        lReach: "Email or phone", phReach: "So we can reach you",
        lMsg: "Message", phMsg: "Book title, question…",
        send: "Send", formOk: "Thank you! We'll be in touch soon.",
        alertFill: "Please fill in your name and contact info.",
        catTitle: "Our Catalog", searchPh: "Title or author…",
        loading: "Loading…", noResults: "No books found.",
        navHome: "Home", navCat: "Catalog", navStat: "Stationery", navContact: "Contact",
        close: "Close", order: "Contact us",
        viewBook: "View",
        pPrice: "Price", pAvail: "Availability", pGenre: "Genre", pLang: "Language",
        pYear: "Year", pUnits: "Units in stock",
        inStock: "In stock", lowStock: "Low stock", outOfStock: "Out of stock",
        books: (n) => `${n} book${n !== 1 ? "s" : ""}`,
        orderMsg: (title, author) => TX.ka.orderMsg(title, author),
        footer: (yr, city) => `© ${yr} Novalisi Books · ${city} · Made by <span class="vakho-credit" title="+995 551 03 47 47">VakhoDev</span>`,
        sortDefault: "Sort by",
        sortPriceAsc: "Price: Low to High",
        sortPriceDesc: "Price: High to Low",
        sortTitleAsc: "Title A–Z",
        sortDiscount: "🏷 Discounted first",
        discountBadge: "Sale",
        allGenres: "All",
        statNoResults: "No products found.",
        statOrder: "Contact us",
        statCount: (n) => `${n} product${n !== 1 ? "s" : ""}`,
        statPageTitle: "Stationery",
        statSearchPh: "Product or category…",
        statOrderMsg: (name) => TX.ka.statOrderMsg(name),
        viewItem: "View",
        pCat: "Category",
        genreMap: {}, // English genres come from sheet's genre_en column or the ka genreMap lookup
    },
};

/* ==========================================================
   STATE
   ========================================================== */
let allBooks = [];
let imageMap = {};  // bookKey → Supabase public image URL
let statImageMap = {}; // statKey → Supabase public image URL
let currentLang = "ka";
let gridGenre = "";
let catGenre = "";
let catSort = "";
let currentBook = null;
let currentPage = "landing";

// Stationery state
let allItems = [];
let statCat = "";
let statSort = "";
let currentItem = null;

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
    localStorage.setItem("novalisi_lang", lang);
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
    if (allItems.length) {
        buildStatCatChips();
        renderStat();
    }
}

function applyLang() {
    const ids = {
        "nav-home": t("navHome"), "nav-catalog": t("navCat"), "nav-stat": t("navStat"), "nav-contact": t("navContact"),
        "f-home": t("navHome"), "f-catalog": t("navCat"), "f-stat": t("navStat"), "footer-contact": t("navContact"), "hero-eyebrow": t("heroEye"),
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
        "stat-no-results-txt": t("statNoResults"),
        "btn-stat-modal-close": t("close"), "btn-stat-modal-order": t("statOrder"),
    };
    for (const [id, val] of Object.entries(ids)) {
        const el = $(id); if (el) el.textContent = val;
    }
    // footer-copy contains HTML (VakhoDev span), use innerHTML
    const fc2 = $("footer-copy");
    if (fc2) { fc2.innerHTML = t("footer", STORE.year, STORE.city[currentLang]); attachVakhoTooltip(); }
    const ht = $("hero-title"); if (ht) ht.innerHTML = t("heroH");
    const hd = $("hero-desc"); if (hd) hd.textContent = t("heroD");
    const si = $("search-input"); if (si) si.placeholder = t("searchPh");
    const fn = $("f-name"); if (fn) fn.placeholder = t("phName");
    const fc = $("f-contact"); if (fc) fc.placeholder = t("phReach");
    const fm = $("f-msg"); if (fm) fm.placeholder = t("phMsg");
}

/* ==========================================================
   GEORGIAN → LATIN TRANSLITERATION  (for safe storage keys)
   ========================================================== */
const GEO_MAP = {
    'ა': 'a', 'ბ': 'b', 'გ': 'g', 'დ': 'd', 'ე': 'e', 'ვ': 'v', 'ზ': 'z', 'თ': 't',
    'ი': 'i', 'კ': 'k', 'ლ': 'l', 'მ': 'm', 'ნ': 'n', 'ო': 'o', 'პ': 'p', 'ჟ': 'zh',
    'რ': 'r', 'ს': 's', 'ტ': 't', 'უ': 'u', 'ფ': 'f', 'ქ': 'q', 'ღ': 'gh', 'ყ': 'y',
    'შ': 'sh', 'ჩ': 'ch', 'ც': 'ts', 'ძ': 'dz', 'წ': 'ts', 'ჭ': 'ch', 'ხ': 'kh', 'ჯ': 'j', 'ჰ': 'h'
};
function translitGeo(s) { return s.split('').map(c => GEO_MAP[c] ?? c).join(''); }
function safeKey(s) {
    return translitGeo(s).toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
}

/* ==========================================================
   BOOK TITLE / AUTHOR HELPERS  (language-aware)
   ========================================================== */
function bTitle(b) { return b.title; }
function bAuthor(b) { return b.author; }
function bGenre(b) {
    if (!b.genre) return "";
    if (currentLang === "en") {
        if (b.genre_en) return b.genre_en;
        return TX.ka.genreMap[b.genre] || b.genre;
    }
    return b.genre;
}
function translateGenre(genre) {
    if (currentLang === "en") {
        const match = allBooks.find(b => b.genre === genre && b.genre_en);
        if (match) return match.genre_en;
        return TX.ka.genreMap[genre] || genre;
    }
    return genre;
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
    } catch (e) {
        console.warn("Image map load failed:", e);
    }
}

/* ==========================================================
   LOAD STATIONERY IMAGE MAP FROM SUPABASE
   ========================================================== */
async function loadStatImageMap() {
    try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/stationery_images?select=item_key,image_url`, {
            headers: {
                "apikey": SUPABASE_ANON,
                "Authorization": "Bearer " + SUPABASE_ANON,
            }
        });
        if (!res.ok) return;
        const rows = await res.json();
        statImageMap = {};
        rows.forEach(r => { statImageMap[r.item_key] = r.image_url; });
    } catch (e) {
        console.warn("Stationery image map load failed:", e);
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
        b.quantity = parseInt(b.quantity) || 0;
        b.price = parseFloat((b.price || "0").replace(",", ".")) || 0;
        b.original_price = parseFloat((b.original_price || "0").replace(",", ".")) || 0;
        b.genre = (b.genre || "").trim();
        b.genre_en = (b.genre_en || "").trim();
        b.language = (b.language || "").trim();
        b._palette = PALETTES[books.length % PALETTES.length];
        b._id = books.length;
        b._key = safeKey(b.isbn || b.title) || "book_" + books.length;
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
    const stTitles = $("stat-titles"); if (stTitles) stTitles.textContent = inStock;
    const uniqueGenres = new Set(allBooks.map(b => b.genre).filter(Boolean));
    const stGenres = $("stat-genres"); if (stGenres) stGenres.textContent = uniqueGenres.size || allBooks.length;

    renderHeroBooks();
    renderRecent();
    buildLandingChips();
    renderGenreGrid();
    buildCatalogChips();
    renderCatalog();
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
            ? `<img src="${imgUrl}" alt="${esc(bTitle(b))}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit">`
            : `<div class="hero-book-inner">
                 <div class="hb-title" style="color:${p.tx}">${esc(bTitle(b))}</div>
                 <div class="hb-author" style="color:${p.tx}">${esc(bAuthor(b))}</div>
               </div>`;
        return `<div class="hero-book" onclick="openBook(${b._id})" style="background:${p.bg}">${inner}</div>`;
    }).join("");
}

/* ==========================================================
   RECENTLY ADDED
   ========================================================== */
function renderRecent() {
    const loading = $("recent-loading");
    const scroll = $("recent-scroll");
    const track = $("recent-track");
    if (!track) return;
    const recent = [...allBooks].slice(-10).reverse();
    loading.style.display = "none";
    scroll.style.display = "block";
    track.innerHTML = recent.map(b => bookCard(b, true)).join("");
}

/* ==========================================================
   GENRE GRID  (3 × 3)
   ========================================================== */
function getGridBooks() {
    if (!gridGenre) return allBooks.slice(0, 9);
    return allBooks.filter(b => b.genre === gridGenre).slice(0, 9);
}

function buildLandingChips() {
    const el = $("landing-chips"); if (!el) return;
    const genres = [...new Set(allBooks.map(b => b.genre).filter(Boolean))];
    if (!genres.length) { el.innerHTML = ""; return; }
    const allChip = `<button class="chip${!gridGenre ? " active" : ""}" onclick="setGridGenre('',this)">${t("allGenres")}</button>`;
    const chips = genres.map(g => {
        const safeG = g.replace(/'/g, "\\'");
        return `<button class="chip${gridGenre === g ? " active" : ""}" onclick="setGridGenre('${safeG}',this)">${esc(translateGenre(g))}</button>`;
    }).join("");
    el.innerHTML = allChip + chips;
}

function setGridGenre(genre, btn) {
    gridGenre = genre;
    document.querySelectorAll("#landing-chips .chip").forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    renderGenreGrid();
}

function renderGenreGrid() {
    const loading = $("grid-loading");
    const grid = $("genre-grid");
    if (!grid) return;
    const books = getGridBooks();
    loading.style.display = "none";
    grid.style.display = "grid";
    grid.innerHTML = books.map(b => bookCard(b, false)).join("");
}

/* ==========================================================
   CATALOG PAGE
   ========================================================== */
function buildCatalogChips() {
    const el = $("catalog-chips"); if (!el) return;
    const genres = [...new Set(allBooks.map(b => b.genre).filter(Boolean))];
    if (!genres.length) { el.innerHTML = ""; return; }
    const allChip = `<button class="chip${!catGenre ? " active" : ""}" onclick="setCatGenre('',this)">${t("allGenres")}</button>`;
    const chips = genres.map(g => {
        const safeG = g.replace(/'/g, "\\'");
        return `<button class="chip${catGenre === g ? " active" : ""}" onclick="setCatGenre('${safeG}',this)">${esc(translateGenre(g))}</button>`;
    }).join("");
    el.innerHTML = allChip + chips;
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
    const grid = $("catalog-grid");
    const noRes = $("no-results");
    const countEl = $("result-count");
    if (!grid || !allBooks.length) return;

    loading.style.display = "none";
    grid.style.display = "grid";

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
            ;
        const gm = !catGenre || b.genre === catGenre;
        return ms && gm;
    });

    if (catSort === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
    if (catSort === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
    if (catSort === "title-asc") filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    if (catSort === "discount") filtered = [...filtered].sort((a, b) => (b.original_price > 0 ? 1 : 0) - (a.original_price > 0 ? 1 : 0));

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
    const isDiscount = b.original_price > 0 && b.original_price > b.price;
    const discountPct = isDiscount ? Math.round((1 - b.price / b.original_price) * 100) : 0;
    const priceHTML = b.price
        ? (isDiscount
            ? `<span class="book-price book-price--sale">₾${b.price.toFixed(2)}</span><span class="book-price-original">₾${b.original_price.toFixed(2)}</span>`
            : `<span class="book-price">₾${b.price.toFixed(2)}</span>`)
        : `<span class="book-price">—</span>`;
    const cls = small ? "book-card book-card--small" : "book-card";
    const imgUrl = imageMap[b._key];
    const coverInner = imgUrl
        ? `<img src="${imgUrl}" alt="${esc(bTitle(b))}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit">`
        : `<div class="book-spine" style="background:${p.tx};opacity:0.4"></div>
           <div class="book-cover-text" style="color:${p.tx}">
             <div class="bc-title">${esc(bTitle(b))}</div>
             <div class="bc-author">${esc(bAuthor(b))}</div>
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
      <div class="book-name">${esc(bTitle(b))}</div>
      <div class="book-author-name">${esc(bAuthor(b))}</div>
      <div class="book-footer-row">
        <div class="book-price-wrap">${priceHTML}</div>
        <span class="badge ${st.cls}">${st.label[currentLang]}</span>
      </div>
    </div>
  </div>`;
}

function stockBadge(qty) {
    if (qty === 0) return { label: { ka: "ამოიწურა", en: "Out of stock" }, cls: "badge-out" };
    if (qty <= 3) return { label: { ka: "მცირეა", en: "Low stock" }, cls: "badge-low" };
    return { label: { ka: "მარაგშია", en: "In stock" }, cls: "badge-in" };
}

/* ==========================================================
   MODAL
   ========================================================== */
function openBook(id) {
    currentBook = allBooks.find(b => b._id === id);
    if (!currentBook) return;
    const b = currentBook;
    const p = b._palette;
    const st = stockBadge(b.quantity);
    const imgUrl = imageMap[b._key];
    const modalCover = imgUrl
        ? `<div class="modal-cover has-image" style="background:${p.bg};padding:0;overflow:hidden" onclick="openLightbox('${imgUrl}','${esc(bTitle(b))}')" title="გადიდება">
             <img src="${imgUrl}" alt="${esc(bTitle(b))}" style="width:100%;height:100%;object-fit:cover;display:block;pointer-events:none">
           </div>`
        : `<div class="modal-cover" style="background:${p.bg};color:${p.tx}">${esc(bTitle(b))}</div>`;

    $("modal-content").innerHTML = `
  <div class="modal-top">
    ${modalCover}
    <div class="modal-info">
      <div class="modal-title" style="color:var(--ink)">${esc(bTitle(b))}</div>
      <div class="modal-author-line">${esc(bAuthor(b))}</div>
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
    ${b.genre ? `<div class="m-field">
      <div class="m-label">${t("pGenre")}</div>
      <div class="m-val" style="color:var(--ink)">${esc(bGenre(b))}</div>
    </div>` : ""}
    ${b.language ? `<div class="m-field">
      <div class="m-label">${t("pLang")}</div>
      <div class="m-val" style="color:var(--ink)">${esc(b.language)}</div>
    </div>` : ""}
    <div class="m-field">
      <div class="m-label">${t("pAvail")}</div>
      <div class="m-val"><span class="badge ${st.cls}">${st.label[currentLang]}</span></div>
    </div>
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

window.orderCurrentBook = window.orderCurrentBook || function () {
    if (!currentBook) return;
    closeModal();
    goContact();
    setTimeout(() => { $("f-msg").value = t("orderMsg", bTitle(currentBook), bAuthor(currentBook)); }, 350);
};

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
    const err = $(errorId);
    if (!input || !err) return;
    input.classList.add("input-error");
    err.textContent = msg;
    err.style.display = "block";
}

function clearFieldError(inputId, errorId) {
    const input = $(inputId);
    const err = $(errorId);
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
    const msg = $("f-msg").value.trim();

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

    const btn = $("btn-send");
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = currentLang === "ka" ? "იგზავნება…" : "Sending…";

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
            formSuccess.className = "form-success form-success--ok";
            formSuccess.textContent = t("formOk");
            formSuccess.style.display = "block";
        } catch (e) {
            formSuccess.className = "form-success form-success--err";
            formSuccess.textContent = currentLang === "ka"
                ? "⚠️ შეცდომა — სცადეთ თავიდან ან დაგვიკავშირდეთ ტელეფონით"
                : "⚠️ Error — please try again or contact us by phone";
            formSuccess.style.display = "block";
        }
    }

    ["f-name", "f-contact", "f-msg"].forEach(id => { $(id).value = ""; });
    clearFieldError("f-name", "f-name-err");
    clearFieldError("f-contact", "f-contact-err");

    btn.disabled = false;
    btn.textContent = originalText;

    setTimeout(() => { formSuccess.style.display = "none"; }, 7000);
}


/* ==========================================================
   STATIONERY — LOAD & PARSE
   ========================================================== */
async function loadStationery() {
    if (!STATIONERY_CSV_URL || STATIONERY_CSV_URL.includes("STATIONERY_GID")) {
        const el = document.getElementById("stat-loading");
        if (el) el.innerHTML = '<p style="color:var(--ink3);text-align:center;padding:2rem">კანცელარიის URL არ არის დაყენებული. შეცვალეთ STATIONERY_CSV_URL script.js-ში.</p>';
        return;
    }
    const csv = await fetchCSV(STATIONERY_CSV_URL);
    if (!csv) return;
    const parsed = parseStatCSV(csv);
    if (!parsed.length) return;
    allItems = parsed;
    await loadStatImageMap();
    const el = document.getElementById("stat-loading");
    if (el) el.style.display = "none";
    const grid = document.getElementById("stat-grid");
    if (grid) grid.style.display = "grid";
    buildStatCatChips();
    renderStat();
}

function parseStatCSV(text) {
    const lines = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n")
        .split("\n").map(l => l.trim()).filter(Boolean);
    if (lines.length < 2) return [];
    const headers = splitLine(lines[0]).map(h => h.toLowerCase().trim());
    const items = [];
    for (let i = 1; i < lines.length; i++) {
        const vals = splitLine(lines[i]);
        const it = {};
        headers.forEach((h, idx) => { it[h] = (vals[idx] || "").trim(); });
        if (!it.name) continue;
        it.quantity = parseInt(it.quantity) || 0;
        it.price = parseFloat((it.price || "0").replace(",", ".")) || 0;
        it.original_price = parseFloat((it.original_price || "0").replace(",", ".")) || 0;
        it.category = (it.category || "").trim();
        it.name_en = (it.name_en || "").trim();
        it.category_en = (it.category_en || "").trim();
        it._palette = PALETTES[items.length % PALETTES.length];
        it._id = items.length;
        it._key = "stat__" + (safeKey(it.name) || "item_" + items.length);
        items.push(it);
    }
    return items;
}

function sName(it) { return (currentLang === "en" && it.name_en) ? it.name_en : it.name; }
function sCat(it) { return (currentLang === "en" && it.category_en) ? it.category_en : it.category; }

/* ==========================================================
   STATIONERY — CATEGORY CHIPS
   ========================================================== */
function buildStatCatChips() {
    const el = document.getElementById("stat-cat-chips"); if (!el) return;
    const cats = [...new Set(allItems.map(it => it.category).filter(Boolean))];
    if (!cats.length) { el.innerHTML = ""; return; }
    const allChip = `<button class="chip${!statCat ? " active" : ""}" onclick="setStatCat('',this)">ყველა</button>`;
    const chips = cats.map(c => {
        const label = (currentLang === "en" && allItems.find(it => it.category === c)?.category_en) || c;
        const safeC = c.replace(/'/g, "\\'");
        return `<button class="chip${statCat === c ? " active" : ""}" onclick="setStatCat('${safeC}',this)">${esc(label)}</button>`;
    }).join("");
    el.innerHTML = allChip + chips;
}

function setStatCat(cat, btn) {
    statCat = cat;
    document.querySelectorAll("#stat-cat-chips .chip").forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    renderStat();
}

function setStatSort(val) {
    statSort = val;
    const sel = document.getElementById("stat-sort-select");
    if (sel) sel.value = val;
    renderStat();
}

function filterStat() { renderStat(); }

/* ==========================================================
   STATIONERY — RENDER GRID
   ========================================================== */
function renderStat() {
    const grid = document.getElementById("stat-grid");
    const noRes = document.getElementById("stat-no-results");
    const countEl = document.getElementById("stat-result-count");
    if (!grid) return;
    if (!allItems.length) return;

    const q = (document.getElementById("stat-search-input")?.value || "").toLowerCase();
    let filtered = allItems.filter(it => {
        const ms = !q
            || it.name.toLowerCase().includes(q)
            || (it.name_en || "").toLowerCase().includes(q)
            || (it.category || "").toLowerCase().includes(q)
            || (it.category_en || "").toLowerCase().includes(q);
        const cm = !statCat || it.category === statCat;
        return ms && cm;
    });

    if (statSort === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
    if (statSort === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
    if (statSort === "name-asc") filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    if (statSort === "discount") filtered = [...filtered].sort((a, b) => (b.original_price > 0 ? 1 : 0) - (a.original_price > 0 ? 1 : 0));

    if (countEl) countEl.textContent = t("statCount", filtered.length);

    if (!filtered.length) {
        grid.innerHTML = "";
        if (noRes) noRes.style.display = "flex";
    } else {
        if (noRes) noRes.style.display = "none";
        grid.innerHTML = filtered.map(it => statCard(it)).join("");
    }
}

/* ==========================================================
   STATIONERY — PRODUCT CARD
   ========================================================== */
function statCard(it) {
    const p = it._palette;
    const st = stockBadge(it.quantity);
    const isDiscount = it.original_price > 0 && it.original_price > it.price;
    const discountPct = isDiscount ? Math.round((1 - it.price / it.original_price) * 100) : 0;
    const priceHTML = it.price
        ? (isDiscount
            ? `<span class="book-price book-price--sale">₾${it.price.toFixed(2)}</span><span class="book-price-original">₾${it.original_price.toFixed(2)}</span>`
            : `<span class="book-price">₾${it.price.toFixed(2)}</span>`)
        : `<span class="book-price">—</span>`;
    const imgUrl = statImageMap[it._key];
    const coverStyle = imgUrl
        ? `background:${p.bg};padding:0;overflow:hidden`
        : `background:${p.bg}`;
    const coverInner = imgUrl
        ? `<img src="${imgUrl}" alt="${esc(sName(it))}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit">`
        : `<div class="stat-item-icon" style="color:${p.tx}">✏️</div>
           <div class="book-cover-text" style="color:${p.tx}">
             <div class="bc-title">${esc(sName(it))}</div>
             ${it.category ? `<div class="bc-author" style="opacity:0.7">${esc(sCat(it))}</div>` : ""}
           </div>`;
    return `
  <div class="book-card stat-product-card" onclick="openItem(${it._id})">
    <div class="book-cover stat-item-cover" style="${coverStyle}">
      ${coverInner}
      ${isDiscount ? `<div class="discount-ribbon">−${discountPct}%</div>` : ""}
      <div class="book-cover-overlay"><span>${t("viewItem")}</span></div>
    </div>
    <div class="book-meta">
      <div class="book-name">${esc(sName(it))}</div>
      ${it.category ? `<div class="book-author-name">${esc(sCat(it))}</div>` : ""}
      <div class="book-footer-row">
        <div class="book-price-wrap">${priceHTML}</div>
        <span class="badge ${st.cls}">${st.label[currentLang]}</span>
      </div>
    </div>
  </div>`;
}

/* ==========================================================
   STATIONERY — MODAL
   ========================================================== */
function openItem(id) {
    currentItem = allItems.find(it => it._id === id);
    if (!currentItem) return;
    const it = currentItem;
    const p = it._palette;
    const st = stockBadge(it.quantity);
    const imgUrl = statImageMap[it._key];
    const modalCoverStyle = imgUrl
        ? `background:${p.bg};padding:0;overflow:hidden`
        : `background:${p.bg};color:${p.tx}`;
    const coverHTML = imgUrl
        ? `<img src="${imgUrl}" alt="${esc(sName(it))}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit;pointer-events:none">`
        : `<div class="stat-item-icon" style="font-size:2.5rem">✏️</div>
           <div style="font-size:1rem;font-weight:600;text-align:center;padding:0 1rem">${esc(sName(it))}</div>`;
    const coverClass = imgUrl ? "modal-cover stat-modal-cover has-image" : "modal-cover stat-item-cover stat-modal-cover";
    const coverClick = imgUrl ? `onclick="openLightbox('${imgUrl}','${esc(sName(it))}')" title="გადიდება"` : "";

    document.getElementById("stat-modal-content").innerHTML = `
  <div class="modal-top">
    <div class="${coverClass}" style="${modalCoverStyle}" ${coverClick}>
      ${coverHTML}
    </div>
    <div class="modal-info">
      <div class="modal-title" style="color:var(--ink)">${esc(sName(it))}</div>
      ${it.category ? `<div class="modal-author-line">${esc(sCat(it))}</div>` : ""}
    </div>
  </div>
  <div class="modal-fields">
    <div class="m-field">
      <div class="m-label">${t("pPrice")}</div>
      <div class="m-val">
        ${it.original_price > 0 && it.original_price > it.price
            ? `<span style="color:var(--green);font-weight:600">₾${it.price.toFixed(2)}</span>
               <span style="text-decoration:line-through;color:var(--ink3);font-size:12px;margin-left:6px">₾${it.original_price.toFixed(2)}</span>
               <span class="badge badge-sale" style="margin-left:6px">−${Math.round((1 - it.price / it.original_price) * 100)}%</span>`
            : `<span style="color:var(--ink)">${it.price ? "₾" + it.price.toFixed(2) : "—"}</span>`
        }
      </div>
    </div>
    ${it.category ? `<div class="m-field">
      <div class="m-label">${t("pCat")}</div>
      <div class="m-val" style="color:var(--ink)">${esc(sCat(it))}</div>
    </div>` : ""}
    <div class="m-field">
      <div class="m-label">${t("pAvail")}</div>
      <div class="m-val"><span class="badge ${st.cls}">${st.label[currentLang]}</span></div>
    </div>
    <div class="m-field">
      <div class="m-label">${t("pUnits")}</div>
      <div class="m-val" style="color:var(--ink)">${it.quantity}</div>
    </div>
  </div>`;

    document.getElementById("stat-modal").classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeStatModal() {
    document.getElementById("stat-modal").classList.remove("open");
    document.body.style.overflow = "";
}

function orderCurrentItem() {
    if (!currentItem) return;
    closeStatModal();
    const msg = t("statOrderMsg", sName(currentItem));
    localStorage.setItem("novalisi_order_msg", msg);
    window.location.href = "index.html";
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
   VAKHODEV TOOLTIP
   ========================================================== */
function attachVakhoTooltip() {
    document.querySelectorAll(".vakho-credit").forEach(el => {
        if (el.dataset.tooltipReady) return;
        el.dataset.tooltipReady = "1";

        let tip = null;

        function showTip() {
            if (tip) return;
            tip = document.createElement("div");
            tip.className = "vakho-tooltip";
            tip.textContent = "+995 551 03 47 47";
            document.body.appendChild(tip);
            const r = el.getBoundingClientRect();
            tip.style.left = (r.left + r.width / 2 - tip.offsetWidth / 2 + window.scrollX) + "px";
            tip.style.top = (r.top - tip.offsetHeight - 8 + window.scrollY) + "px";
            requestAnimationFrame(() => tip && tip.classList.add("visible"));
        }

        function hideTip() {
            if (!tip) return;
            tip.remove(); tip = null;
        }

        el.addEventListener("mouseenter", showTip);
        el.addEventListener("mouseleave", hideTip);
        el.addEventListener("click", () => {
            if (tip) { hideTip(); } else { showTip(); setTimeout(hideTip, 3000); }
        });
    });
}

/* ==========================================================
   APPLY STORE CONFIG
   ========================================================== */
function applyStore() {
    const cp = $("c-phone"); if (cp) cp.textContent = STORE.phone;
    const ce = $("c-email"); if (ce) ce.textContent = STORE.email;
    const ca = $("c-address"); if (ca) ca.textContent = STORE.address[currentLang];
    const ch = $("c-hours"); if (ch) ch.textContent = STORE.hours[currentLang];
}

/* ==========================================================
   NAV SCROLL EFFECT
   ========================================================== */
(function () {
    let lastY = 0;
    let hidden = false;
    const HIDE_THRESHOLD = 80;
    const SHOW_DELTA = 8;

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
   LIGHTBOX
   ========================================================== */
function openLightbox(src, alt) {
    let lb = document.getElementById("lightbox");
    if (!lb) return;
    lb.querySelector("img").src = src;
    lb.querySelector("img").alt = alt || "";
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    const lb = document.getElementById("lightbox");
    if (lb) lb.classList.remove("open");
    document.body.style.overflow = "";
}

/* ==========================================================
   KEYBOARD
   ========================================================== */
document.addEventListener("keydown", e => { if (e.key === "Escape") { closeModal(); closeStatModal(); closeLightbox(); } });

/* ==========================================================
   INIT
   ========================================================== */
// Restore language preference before anything renders
(function () {
    const saved = localStorage.getItem("novalisi_lang");
    if (saved === "en") {
        currentLang = "en";
        const btnKa = document.getElementById("btn-ka");
        const btnEn = document.getElementById("btn-en");
        if (btnKa) btnKa.classList.remove("active");
        if (btnEn) btnEn.classList.add("active");
    }
})();

applyStore();
applyLang();
attachVakhoTooltip();
loadBooks();
attachLiveValidation();

// If arriving from stationery page with a pending order, scroll to contact and pre-fill form
(function () {
    const pendingMsg = localStorage.getItem("novalisi_order_msg");
    if (pendingMsg) {
        localStorage.removeItem("novalisi_order_msg");
        setTimeout(() => {
            scrollToSection("section-contact");
            const fm = $("f-msg");
            if (fm) fm.value = pendingMsg;
        }, 600);
    }
})();