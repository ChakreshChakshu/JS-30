const products = [
  { id: 1, name: "Wireless Noise-Canceling Headphones", category: "Electronics", price: 199.99, rating: 4.8 },
  { id: 2, name: "Mechanical Gaming Keyboard", category: "Electronics", price: 89.99, rating: 4.6 },
  { id: 3, name: "USB-C Fast Charging Hub", category: "Electronics", price: 34.50, rating: 4.3 },
  { id: 4, name: "Organic Cotton Crewneck T-Shirt", category: "Apparel", price: 28.00, rating: 4.5 },
  { id: 5, name: "Waterproof Windbreaker Jacket", category: "Apparel", price: 79.99, rating: 4.7 },
  { id: 6, name: "Classic Denim Jeans", category: "Apparel", price: 59.00, rating: 4.2 },
  { id: 7, name: "Eloquent JavaScript (3rd Ed)", category: "Books", price: 31.95, rating: 4.9 },
  { id: 8, name: "Designing Data-Intensive Applications", category: "Books", price: 44.99, rating: 4.9 },
  { id: 9, name: "Clean Code Handbook", category: "Books", price: 37.50, rating: 4.7 },
  { id: 10, name: "Ergonomic Memory Foam Desk Chair", category: "Home", price: 219.00, rating: 4.5 },
  { id: 11, name: "Minimalist Dimmable LED Desk Lamp", category: "Home", price: 42.00, rating: 4.4 },
  { id: 12, name: "Stainless Steel French Press", category: "Home", price: 29.99, rating: 4.6 }
];

let selectedCategory = "all";

const searchInput = document.getElementById("searchInput");
const categoryPills = document.querySelectorAll(".pill");
const sortSelect = document.getElementById("sortSelect");
const productsGrid = document.getElementById("productsGrid");

function render() {
  const query = searchInput.value.toLowerCase().trim();
  const sortMode = sortSelect.value;

  // 1. Filter
  let filtered = products.filter((p) => {
    const matchesCat = selectedCategory === "all" || p.category === selectedCategory;
    const matchesQuery = p.name.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  // 2. Sort
  filtered.sort((a, b) => {
    if (sortMode === "price-asc") return a.price - b.price;
    if (sortMode === "price-desc") return b.price - a.price;
    if (sortMode === "name-asc") return a.name.localeCompare(b.name);
    if (sortMode === "name-desc") return b.name.localeCompare(a.name);
    return 0; // featured / default
  });

  // 3. Render
  if (filtered.length === 0) {
    productsGrid.innerHTML = '<p class="empty-state">No products found matching your criteria.</p>';
    return;
  }

  productsGrid.innerHTML = filtered
    .map(
      (p) => `
      <div class="product-card">
        <div>
          <span class="product-category">${p.category}</span>
          <h3 class="product-title">${escapeHtml(p.name)}</h3>
        </div>
        <div class="product-footer">
          <span class="product-price">$${p.price.toFixed(2)}</span>
          <span class="product-rating">&#9733; ${p.rating}</span>
        </div>
      </div>
    `
    )
    .join("");
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

categoryPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    categoryPills.forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    selectedCategory = pill.dataset.cat;
    render();
  });
});

searchInput.addEventListener("input", render);
sortSelect.addEventListener("change", render);

render();
