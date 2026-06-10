const categoryMeta = [
  {
    id: "acrylic",
    name: "Acrylic Awards",
    material: "Acrylic",
    accent: "#1e4d8d",
    asset: "assets/acrylic-awards.png",
    bestFor: "Modern recognition, trainers, teams, employees",
    customization: "Custom shapes and sizes, UV printing, laser engraving",
    analysis: "Clear forms with blue, black, and gold accents make this family useful for clean corporate awards."
  },
  {
    id: "crystal",
    name: "Crystal Awards",
    material: "K9 Crystal",
    accent: "#6d91c6",
    asset: "assets/crystal-awards.png",
    bestFor: "Premium leadership, excellence, milestone awards",
    customization: "Laser engraving, UV printing, custom crystal design",
    analysis: "Tall obelisks, globes, shields, and faceted silhouettes read as the most premium recognition range."
  },
  {
    id: "wooden",
    name: "Wooden Mementos",
    material: "Wood",
    accent: "#6b3222",
    asset: "assets/wooden-mementos.png",
    bestFor: "Felicitation, retirement, appreciation, associations",
    customization: "Premium wood finish, UV printing, laser engraving",
    analysis: "Warm wood and gold plates suit formal certificates, legacy gifts, and institution-led ceremonies."
  },
  {
    id: "metal",
    name: "Metal Awards",
    material: "Metal",
    accent: "#9c9fa4",
    asset: "assets/metal-awards.png",
    bestFor: "Strong corporate recognition and executive awards",
    customization: "Premium metal, laser engraving, UV coating, custom made",
    analysis: "Heavier gold, black, and silver forms give these awards a durable and senior feel."
  },
  {
    id: "sports",
    name: "Sports Trophies",
    material: "Metal",
    accent: "#c98c21",
    asset: "assets/sports-trophies.png",
    bestFor: "Championship cups, sports events, tournament winners",
    customization: "Any sport, laser engraving, UV coating, custom design",
    analysis: "The sheet separates large cups from sport-specific figures, which makes event ordering easier."
  },
  {
    id: "medals",
    name: "Medals",
    material: "Gold, Silver, Bronze",
    accent: "#ad6532",
    asset: "assets/medals.png",
    bestFor: "Bulk awards, ranks, participation, sports and academics",
    customization: "Custom ribbons, multiple finishes, fine detailing",
    analysis: "Every medal is shown at 2.75 inches, so volume orders can mix purposes while keeping one size."
  },
  {
    id: "plaques",
    name: "Plaques and Shields",
    material: "Wood and Metal",
    accent: "#8a4d28",
    asset: "assets/plaques-shields.png",
    bestFor: "Certificates, shields, service and academic awards",
    customization: "UV printing, laser engraving, custom made sizes",
    analysis: "Classic plaques and shield silhouettes suit formal recognition where text readability matters."
  },
  {
    id: "gifts",
    name: "Corporate Gifts",
    material: "Mixed Premium",
    accent: "#b17520",
    asset: "assets/corporate-gifts.png",
    bestFor: "Clients, employees, branded onboarding and events",
    customization: "Custom branding, gift packaging, ready stock",
    analysis: "Useful desk, drinkware, tech, and stationery items turn the catalogue into a gifting range."
  }
];

const overviewSheet = {
  id: "overview",
  name: "Complete Category Overview",
  asset: "assets/catalog-overview.png",
  bestFor: "Quick presentation of the full range",
  customization: "In-house manufacturing, custom designing, laser engraving, UV printing"
};

const rows = (category, list) =>
  list.map(([code, name, size]) => ({ category, code, name, size }));

const products = [
  ...rows("acrylic", [
    ["TA-101", "Star Performer Award", '9.5" (H)'],
    ["TA-102", "Outstanding Achiever Award", '9" (H)'],
    ["TA-103", "Excellence Award", '9.5" (H)'],
    ["TA-104", "Leadership Award", '9.5" (H)'],
    ["TA-105", "Appreciation Award", '9" (H)'],
    ["TA-106", "Service Excellence Award", '9.5" (H)'],
    ["TA-107", "Employee of the Year", '8.5" (H)'],
    ["TA-108", "Performance Excellence Award", '9.5" (H)'],
    ["TA-109", "Innovation Award", '9" (H)'],
    ["TA-110", "Best Team Award", '9" (H)'],
    ["TA-111", "Dedication Award", '9" (H)'],
    ["TA-112", "Quality Excellence Award", '9.5" (H)'],
    ["TA-113", "Rising Star Award", '9.5" (H)'],
    ["TA-114", "Honor Award", '9" (H)'],
    ["TA-115", "Outstanding Contribution Award", '9.5" (H)'],
    ["TA-116", "Customer Service Award", '9" (H)'],
    ["TA-117", "Safety Excellence Award", '9.5" (H)'],
    ["TA-118", "Strategic Partner Award", '9" (H)'],
    ["TA-119", "Long Service Award", '9" (H)'],
    ["TA-120", "Trainer of the Year", '8.5" (H)'],
    ["TA-121", "Inspiring Leader Award", '9.5" (H)']
  ]),
  ...rows("crystal", [
    ["CR-101", "Diamond Excellence Award", '8.5" (H)'],
    ["CR-102", "Crystal Obelisk Award", '10" (H)'],
    ["CR-103", "Flame Crystal Award", '9" (H)'],
    ["CR-104", "Crystal Globe Award", '10.5" (H)'],
    ["CR-105", "Crystal Shield Award", '8.5" (H)'],
    ["CR-106", "Star Crystal Award", '9.5" (H)'],
    ["CR-107", "Slant Crystal Award", '9.5" (H)'],
    ["CR-108", "Octagon Crystal Award", '8.5" (H)'],
    ["CR-109", "Teardrop Crystal Award", '8.5" (H)'],
    ["CR-110", "Sail Crystal Award", '9.5" (H)'],
    ["CR-111", "Facet Crystal Award", '8.5" (H)'],
    ["CR-112", "Crystal Star Column", '9.5" (H)'],
    ["CR-113", "Wave Crystal Award", '8.5" (H)'],
    ["CR-114", "Diamond Crystal Award", '8.5" (H)'],
    ["CR-115", "Breeze Crystal Award", '9.5" (H)'],
    ["CR-116", "Curved Crystal Award", '8.5" (H)'],
    ["CR-117", "Round Crystal Award", '8" (H)'],
    ["CR-118", "Twin Star Crystal Award", '9.5" (H)'],
    ["CR-119", "Gem Crystal Award", '8.5" (H)'],
    ["CR-120", "World Crystal Award", '10" (H)'],
    ["CR-121", "Crest Crystal Award", '8.5" (H)'],
    ["CR-122", "Infinity Crystal Award", '9.5" (H)'],
    ["CR-123", "Angular Crystal Award", '9" (H)'],
    ["CR-124", "Crystal Tower Award", '10.5" (H)']
  ]),
  ...rows("wooden", [
    ["TW-101", "Executive Plaque", '8" x 10"'],
    ["TW-102", "Appreciation Plaque", '8" x 10"'],
    ["TW-103", "Achievement Plaque", '8" x 10"'],
    ["TW-104", "Leadership Memento", '7" x 9.5"'],
    ["TW-105", "Thank You Memento", '7.5" x 9.5"'],
    ["TW-106", "Service Excellence", '8" x 10"'],
    ["TW-107", "Round Plaque", '8" (Dia)'],
    ["TW-108", "Recognition Plaque", '8" x 10"'],
    ["TW-109", "Motivation Plaque", '7.5" x 9.5"'],
    ["TW-110", "Association Plaque", '8" x 10"'],
    ["TW-111", "Contribution Award", '8" x 10"'],
    ["TW-112", "Inspiration Plaque", '7.5" x 9.5"'],
    ["TW-113", "Retirement Memento", '7.5" x 9.5"'],
    ["TW-114", "Motivational Memento", '7.5" x 9.5"'],
    ["TW-115", "Felicitation Plaque", '8" x 10"'],
    ["TW-116", "Teamwork Plaque", '7.5" x 9.5"'],
    ["TW-117", "Hexagon Plaque", '8" x 9"'],
    ["TW-118", "Tree of Success Memento", '8" x 10"']
  ]),
  ...rows("metal", [
    ["TM-101", "Star Performer Award", '10.5" (H)'],
    ["TM-102", "Leadership Excellence Award", '11" (H)'],
    ["TM-103", "Global Achiever Award", '11.5" (H)'],
    ["TM-104", "Service Excellence Award", '10.5" (H)'],
    ["TM-105", "Outstanding Performance Award", '10.5" (H)'],
    ["TM-106", "Employee of the Year Award", '10" (H)'],
    ["TM-107", "Dedication Award", '9.5" (H)'],
    ["TM-108", "Partnership Excellence Award", '10.5" (H)'],
    ["TM-109", "Contribution Award", '9.5" (H)'],
    ["TM-110", "Innovation Award", '10.5" (H)'],
    ["TM-111", "Quality Excellence Award", '10" (H)'],
    ["TM-112", "Safety Excellence Award", '10" (H)'],
    ["TM-113", "Rising Star Award", '11" (H)'],
    ["TM-114", "Best Team Award", '10.5" (H)'],
    ["TM-115", "Champion of Excellence Award", '11.5" (H)'],
    ["TM-116", "Long Service Award", '10.5" (H)'],
    ["TM-117", "Appreciation Award", '9.5" (H)'],
    ["TM-118", "Visionary Leadership Award", '11" (H)']
  ]),
  ...rows("sports", [
    ["TS-101", "Champion Cup", '18" (H)'],
    ["TS-102", "Victory Cup", '20" (H)'],
    ["TS-103", "Premier League Cup", '19" (H)'],
    ["TS-104", "Excellence Cup", '18" (H)'],
    ["TS-105", "Grand Champion Cup", '20" (H)'],
    ["TS-106", "Winner Trophy", '17.5" (H)'],
    ["TS-107", "Triumph Trophy", '18" (H)'],
    ["TS-201", "Cricket Trophy", '16.5" (H)'],
    ["TS-202", "Football Trophy", '16" (H)'],
    ["TS-203", "Basketball Trophy", '16.5" (H)'],
    ["TS-204", "Volleyball Trophy", '16" (H)'],
    ["TS-205", "Badminton Trophy", '15.5" (H)'],
    ["TS-206", "Table Tennis Trophy", '14.5" (H)'],
    ["TS-207", "Tennis Trophy", '15.5" (H)'],
    ["TS-208", "Running Trophy", '15.5" (H)'],
    ["TS-209", "Swimming Trophy", '14.5" (H)'],
    ["TS-210", "Athletic Star Trophy", '16" (H)'],
    ["TS-211", "Golf Trophy", '16" (H)'],
    ["TS-212", "Shooting Trophy", '15.5" (H)'],
    ["TS-213", "Kabaddi Trophy", '16.5" (H)'],
    ["TS-214", "Overall Star Trophy", '17" (H)']
  ]),
  ...rows("medals", [
    ["MD-101", "Champion Medal - Gold", '2.75" (Dia)'],
    ["MD-102", "Excellence Medal - Silver", '2.75" (Dia)'],
    ["MD-103", "Achiever Medal - Bronze", '2.75" (Dia)'],
    ["MD-104", "Winner Medal", '2.75" (Dia)'],
    ["MD-105", "Runner Up Medal", '2.75" (Dia)'],
    ["MD-106", "Third Place Medal", '2.75" (Dia)'],
    ["MD-107", "Sports Medal - Gold", '2.75" (Dia)'],
    ["MD-108", "Sports Medal - Silver", '2.75" (Dia)'],
    ["MD-109", "Sports Medal - Bronze", '2.75" (Dia)'],
    ["MD-110", "Academic Excellence Medal", '2.75" (Dia)'],
    ["MD-111", "Outstanding Performance Medal", '2.75" (Dia)'],
    ["MD-112", "Best Student Medal", '2.75" (Dia)'],
    ["MD-113", "Star Performer Medal", '2.75" (Dia)'],
    ["MD-114", "Participation Medal", '2.75" (Dia)'],
    ["MD-115", "Appreciation Medal", '2.75" (Dia)'],
    ["MD-116", "Leadership Award Medal", '2.75" (Dia)'],
    ["MD-117", "Service Excellence Medal", '2.75" (Dia)'],
    ["MD-118", "Inspiring the Future Medal", '2.75" (Dia)']
  ]),
  ...rows("plaques", [
    ["PL-101", "Executive Plaque", '8" x 10"'],
    ["PL-102", "Leadership Plaque", '8" x 10"'],
    ["PL-103", "Achievement Shield", '9" x 11"'],
    ["PL-104", "Appreciation Plaque", '8" x 10"'],
    ["PL-105", "Service Excellence Plaque", '7.5" x 9.5"'],
    ["PL-106", "Employee of the Year Plaque", '8" x 10"'],
    ["PL-107", "Round Plaque", '9" (Dia)'],
    ["PL-108", "Octagon Plaque", '8" x 8"'],
    ["PL-109", "Wave Plaque", '7.5" x 9.5"'],
    ["PL-110", "Academic Shield", '9" x 11"'],
    ["PL-111", "Association Plaque", '8" x 10"'],
    ["PL-112", "Success Shield", '8.5" x 10.5"'],
    ["PL-113", "Star Award Plaque", '7.5" x 9.5"'],
    ["PL-114", "Teamwork Plaque", '8" x 10"'],
    ["PL-115", "Champion Shield", '10" x 12"'],
    ["PL-116", "Excellence Plaque", '8" x 10"'],
    ["PL-117", "Motivation Plaque", '7.5" x 9.5"'],
    ["PL-118", "Thank You Plaque", '8" x 10"']
  ]),
  ...rows("gifts", [
    ["CG-101", "Premium Pen Set", "Box 17 x 6.5 cm"],
    ["CG-102", "Wooden Desk Clock", "15 x 13 cm"],
    ["CG-103", "Acrylic Pen Stand", "10 x 10 x 12.5 cm"],
    ["CG-104", "Metal Card Holder", "9.5 x 6 x 2 cm"],
    ["CG-105", "Executive Notebook", "21 x 14.5 cm"],
    ["CG-106", "Vacuum Flask", "500 ml"],
    ["CG-107", "Insulated Tumbler", "350 ml"],
    ["CG-108", "Crystal Cube", "6 x 6 x 6 cm"],
    ["CG-109", "Metal USB Drive", "32 GB"],
    ["CG-110", "Premium Keychain", "3.5 x 9 cm"],
    ["CG-111", "Desktop Organizer", "20 x 10 x 10 cm"],
    ["CG-112", "Wireless Charger", "Dia 9.5 cm"],
    ["CG-113", "Metal Bottle", "750 ml"],
    ["CG-114", "Wooden Photo Frame", '18 x 23 cm (5" x 7")'],
    ["CG-115", "Corporate Gift Set", "Box 25 x 20 x 4 cm"]
  ])
];

const occasions = [
  ["all", "All occasions"],
  ["appreciation", "Appreciation"],
  ["leadership", "Leadership"],
  ["performance", "Performance"],
  ["service", "Service and safety"],
  ["sports", "Sports"],
  ["academic", "Academic"],
  ["gifting", "Corporate gifting"],
  ["partnership", "Partnership and teamwork"],
  ["retirement", "Retirement"]
];

const needFilters = {
  all: () => true,
  premium: (product) => ["crystal", "metal", "acrylic"].includes(product.category),
  sports: (product) => product.category === "sports" || product.category === "medals" || matchesOccasion(product, "academic"),
  corporate: (product) =>
    ["acrylic", "crystal", "metal", "plaques", "wooden"].includes(product.category) &&
    ["leadership", "performance", "service", "partnership", "appreciation"].some((occasion) => matchesOccasion(product, occasion)),
  gifting: (product) => product.category === "gifts"
};

let state = {
  category: "all",
  occasion: "all",
  finish: "all",
  search: "",
  need: "all"
};

const $ = (selector) => document.querySelector(selector);
const categoryById = Object.fromEntries(categoryMeta.map((category) => [category.id, category]));
const productByCode = Object.fromEntries(products.map((product) => [product.code, product]));
let quote = readQuote();

function productText(product) {
  const category = categoryById[product.category];
  return `${product.code} ${product.name} ${product.size} ${category.name} ${category.material} ${category.bestFor} ${category.customization}`.toLowerCase();
}

function matchesOccasion(product, occasion) {
  if (occasion === "all") return true;
  const text = productText(product);
  const rules = {
    appreciation: ["appreciation", "thank you", "contribution", "felicitation", "dedication", "recognition"],
    leadership: ["leadership", "leader", "visionary", "trainer", "global achiever"],
    performance: ["performance", "star", "achiever", "excellence", "quality", "innovation", "best team", "champion"],
    service: ["service", "safety", "long service", "customer service"],
    sports: ["sports", "trophy", "cup", "cricket", "football", "basketball", "volleyball", "badminton", "tennis", "running", "swimming", "golf", "shooting", "kabaddi", "winner", "runner", "third place"],
    academic: ["academic", "student", "participation", "trainer", "school", "college"],
    gifting: ["gift", "pen", "notebook", "flask", "tumbler", "usb", "keychain", "charger", "bottle", "card holder", "organizer", "photo frame", "clock"],
    partnership: ["partner", "partnership", "association", "teamwork", "team"],
    retirement: ["retirement"]
  };
  return rules[occasion].some((term) => text.includes(term));
}

function productTags(product) {
  const tags = [];
  const checks = ["appreciation", "leadership", "performance", "service", "sports", "academic", "gifting", "partnership", "retirement"];
  checks.forEach((occasion) => {
    if (matchesOccasion(product, occasion)) tags.push(occasions.find(([id]) => id === occasion)[1]);
  });
  return tags.slice(0, 3);
}

function filteredProducts() {
  return products.filter((product) => {
    const category = categoryById[product.category];
    const searchOk = state.search.trim() === "" || productText(product).includes(state.search.trim().toLowerCase());
    const categoryOk = state.category === "all" || product.category === state.category;
    const occasionOk = matchesOccasion(product, state.occasion);
    const finishOk = state.finish === "all" || category.material === state.finish;
    const needOk = needFilters[state.need](product);
    return searchOk && categoryOk && occasionOk && finishOk && needOk;
  });
}

function renderFilters() {
  const categoryFilters = $("#categoryFilters");
  categoryFilters.innerHTML = "";

  const allButton = filterButton("All", "all", state.category === "all", () => {
    state.category = "all";
    state.need = "all";
    sync();
  });
  categoryFilters.appendChild(allButton);

  categoryMeta.forEach((category) => {
    categoryFilters.appendChild(
      filterButton(category.name.replace(" and ", " & "), category.id, state.category === category.id, () => {
        state.category = category.id;
        state.need = "all";
        sync();
      })
    );
  });

  const occasionFilter = $("#occasionFilter");
  occasionFilter.innerHTML = occasions.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
  occasionFilter.value = state.occasion;

  const materials = ["all", ...new Set(categoryMeta.map((category) => category.material))];
  $("#finishFilter").innerHTML = materials
    .map((material) => `<option value="${material}">${material === "all" ? "All finishes and materials" : material}</option>`)
    .join("");
  $("#finishFilter").value = state.finish;
}

function filterButton(label, value, active, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  button.dataset.value = value;
  button.className = active ? "is-active" : "";
  button.addEventListener("click", onClick);
  return button;
}

function renderInsights() {
  const selected = state.category === "all" ? categoryMeta.slice(0, 4) : [categoryById[state.category]];
  $("#insightCards").innerHTML = selected
    .map((category) => {
      const count = products.filter((product) => product.category === category.id).length;
      return `
        <article class="insight-card" style="--image: url('${category.asset}')">
          <strong>${category.name}</strong>
          <span>${count} SKUs | ${category.material}</span>
        </article>
      `;
    })
    .join("");
}

function renderProducts() {
  const list = filteredProducts();
  $("#totalSkus").textContent = products.length;
  $("#resultSummary").textContent = `${list.length} matching products from ${products.length} analysed SKUs.`;
  $("#resultTitle").textContent = state.category === "all" ? "All catalogue products" : categoryById[state.category].name;
  $("#activeFilters").textContent = activeFilterText(list.length);

  const grid = $("#productGrid");
  if (!list.length) {
    grid.innerHTML = `<div class="no-results">No matching products. Try another category, occasion, or search term.</div>`;
    return;
  }

  grid.innerHTML = list
    .map((product) => {
      const category = categoryById[product.category];
      const tags = productTags(product)
        .map((tag) => `<span class="tag">${tag}</span>`)
        .join("");
      return `
        <article class="product-card" style="--accent: ${category.accent}">
          <div>
            <div class="product-code">${product.code}</div>
            <h3>${product.name}</h3>
            <div class="product-meta">
              <span>${category.name}</span>
              <span>${product.size}</span>
            </div>
            <div class="tag-row">${tags}</div>
          </div>
          <div></div>
          <div class="card-actions">
            <button class="primary-button" type="button" data-add="${product.code}">Add to Quote</button>
            <button class="ghost-button" type="button" data-sheet="${product.category}">View Sheet</button>
          </div>
        </article>
      `;
    })
    .join("");

  grid.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => addToQuote(button.dataset.add));
  });
  grid.querySelectorAll("[data-sheet]").forEach((button) => {
    button.addEventListener("click", () => openSheet(button.dataset.sheet));
  });
}

function activeFilterText(count) {
  const parts = [`${count} products`];
  if (state.need !== "all") parts.push(titleCase(state.need));
  if (state.category !== "all") parts.push(categoryById[state.category].name);
  if (state.occasion !== "all") parts.push(occasions.find(([id]) => id === state.occasion)[1]);
  if (state.finish !== "all") parts.push(state.finish);
  if (state.search.trim()) parts.push(`"${state.search.trim()}"`);
  return `Showing ${parts.join(" | ")}`;
}

function renderAnalysis() {
  $("#categoryAnalysis").innerHTML = categoryMeta
    .map((category) => {
      const count = products.filter((product) => product.category === category.id).length;
      return `
        <article class="analysis-card">
          <img src="${category.asset}" alt="${category.name} catalogue sheet" loading="lazy" />
          <div class="analysis-body">
            <h3>${category.name}</h3>
            <dl>
              <div>
                <dt>Range</dt>
                <dd>${count} products | ${category.material}</dd>
              </div>
              <div>
                <dt>Best for</dt>
                <dd>${category.bestFor}</dd>
              </div>
              <div>
                <dt>Customisation</dt>
                <dd>${category.customization}</dd>
              </div>
              <div>
                <dt>Image read</dt>
                <dd>${category.analysis}</dd>
              </div>
            </dl>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderSheets() {
  const sheets = [overviewSheet, ...categoryMeta];
  $("#sheetGallery").innerHTML = sheets
    .map((sheet) => {
      const count = sheet.id === "overview" ? products.length : products.filter((product) => product.category === sheet.id).length;
      return `
        <article class="sheet-card">
          <img src="${sheet.asset}" alt="${sheet.name} sheet preview" loading="lazy" />
          <div class="sheet-card-body">
            <div>
              <h3>${sheet.name}</h3>
              <p>${count} listed SKUs. ${sheet.bestFor}.</p>
            </div>
            <button class="primary-button" type="button" data-open-sheet="${sheet.id}">Open Sheet</button>
          </div>
        </article>
      `;
    })
    .join("");

  $("#sheetGallery").querySelectorAll("[data-open-sheet]").forEach((button) => {
    button.addEventListener("click", () => openSheet(button.dataset.openSheet));
  });
}

function renderQuote() {
  const container = $("#quoteItems");
  const totalQty = quote.reduce((sum, item) => sum + item.qty, 0);
  $("#quoteCount").textContent = `${totalQty} item${totalQty === 1 ? "" : "s"}`;

  if (!quote.length) {
    container.innerHTML = `<div class="quote-empty">No products selected yet.</div>`;
  } else {
    container.innerHTML = quote
      .map((item) => {
        const product = productByCode[item.code];
        const category = categoryById[product.category];
        return `
          <article class="quote-item">
            <div>
              <strong>${product.code} | ${product.name}</strong>
              <span>${category.name} | ${product.size}</span>
            </div>
            <div class="qty-row">
              <button type="button" aria-label="Decrease ${product.code}" data-dec="${product.code}">-</button>
              <input type="number" min="1" value="${item.qty}" aria-label="Quantity for ${product.code}" data-qty="${product.code}" />
              <button type="button" aria-label="Increase ${product.code}" data-inc="${product.code}">+</button>
              <button type="button" aria-label="Remove ${product.code}" data-remove="${product.code}">Remove</button>
            </div>
          </article>
        `;
      })
      .join("");
  }

  container.querySelectorAll("[data-dec]").forEach((button) => {
    button.addEventListener("click", () => changeQty(button.dataset.dec, -1));
  });
  container.querySelectorAll("[data-inc]").forEach((button) => {
    button.addEventListener("click", () => changeQty(button.dataset.inc, 1));
  });
  container.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => removeFromQuote(button.dataset.remove));
  });
  container.querySelectorAll("[data-qty]").forEach((input) => {
    input.addEventListener("change", () => setQty(input.dataset.qty, Number(input.value)));
  });

  updateMessage();
  saveQuote();
}

function addToQuote(code) {
  const existing = quote.find((item) => item.code === code);
  if (existing) {
    existing.qty += 1;
  } else {
    quote.push({ code, qty: 1 });
  }
  renderQuote();
  showToast(`${code} added to quote list.`);
}

function changeQty(code, delta) {
  const item = quote.find((entry) => entry.code === code);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  renderQuote();
}

function setQty(code, qty) {
  const item = quote.find((entry) => entry.code === code);
  if (!item) return;
  item.qty = Math.max(1, Number.isFinite(qty) ? Math.round(qty) : 1);
  renderQuote();
}

function removeFromQuote(code) {
  quote = quote.filter((entry) => entry.code !== code);
  renderQuote();
}

function readQuote() {
  try {
    const parsed = JSON.parse(localStorage.getItem("trophiqQuote") || "[]");
    return parsed.filter((item) => productByCode[item.code] && Number(item.qty) > 0);
  } catch {
    return [];
  }
}

function saveQuote() {
  try {
    localStorage.setItem("trophiqQuote", JSON.stringify(quote));
  } catch {
    // The quote builder still works in memory if browser storage is unavailable.
  }
}

function updateMessage() {
  const eventType = $("#eventType").value.trim();
  const brandingNotes = $("#brandingNotes").value.trim();
  const lines = [
    "Hello Trophiq,",
    "",
    "Please share pricing, branding options, and delivery timeline for:"
  ];

  if (quote.length) {
    quote.forEach((item, index) => {
      const product = productByCode[item.code];
      const category = categoryById[product.category];
      lines.push(`${index + 1}. ${product.code} - ${product.name} (${category.name}, ${product.size}) x ${item.qty}`);
    });
  } else {
    lines.push("1. I am shortlisting products from the catalogue.");
  }

  lines.push("");
  lines.push(`Event/Purpose: ${eventType || "To be confirmed"}`);
  lines.push(`Branding/Customisation: ${brandingNotes || "Logo branding and engraving options required"}`);
  lines.push("");
  lines.push("Kindly include bulk order options and delivery estimate.");

  $("#enquiryMessage").value = lines.join("\n");
}

function openSheet(id) {
  const sheet = id === "overview" ? overviewSheet : categoryById[id];
  if (!sheet) return;
  $("#modalTitle").textContent = sheet.name;
  $("#modalImage").src = sheet.asset;
  $("#modalImage").alt = `${sheet.name} catalogue sheet`;
  $("#sheetModal").classList.add("is-open");
  $("#sheetModal").setAttribute("aria-hidden", "false");
}

function closeModal() {
  $("#sheetModal").classList.remove("is-open");
  $("#sheetModal").setAttribute("aria-hidden", "true");
  $("#modalImage").src = "";
}

function titleCase(value) {
  return value.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

async function copyEnquiry() {
  updateMessage();
  const value = $("#enquiryMessage").value;
  try {
    await navigator.clipboard.writeText(value);
    showToast("Enquiry message copied.");
  } catch {
    $("#enquiryMessage").select();
    document.execCommand("copy");
    showToast("Enquiry message copied.");
  }
}

function resetFilters() {
  state = { category: "all", occasion: "all", finish: "all", search: "", need: "all" };
  $("#searchInput").value = "";
  sync();
}

function syncQuickModes() {
  document.querySelectorAll(".quick-modes button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.need === state.need);
  });
}

function sync() {
  renderFilters();
  renderInsights();
  renderProducts();
  syncQuickModes();
}

function init() {
  renderAnalysis();
  renderSheets();
  sync();
  renderQuote();

  $("#searchInput").addEventListener("input", (event) => {
    state.search = event.target.value;
    sync();
  });

  $("#occasionFilter").addEventListener("change", (event) => {
    state.occasion = event.target.value;
    sync();
  });

  $("#finishFilter").addEventListener("change", (event) => {
    state.finish = event.target.value;
    sync();
  });

  document.querySelectorAll(".quick-modes button").forEach((button) => {
    button.addEventListener("click", () => {
      state.need = button.dataset.need;
      state.category = "all";
      sync();
    });
  });

  $("#resetFilters").addEventListener("click", resetFilters);
  $("#eventType").addEventListener("input", updateMessage);
  $("#brandingNotes").addEventListener("input", updateMessage);
  $("#copyEnquiry").addEventListener("click", copyEnquiry);
  $("#printQuote").addEventListener("click", () => window.print());
  $("#printQuoteTop").addEventListener("click", () => window.print());
  $("#clearQuote").addEventListener("click", () => {
    quote = [];
    renderQuote();
    showToast("Quote list cleared.");
  });

  document.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

init();
