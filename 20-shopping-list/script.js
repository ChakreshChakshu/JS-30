let items = [];

const itemForm = document.getElementById("itemForm");
const itemInput = document.getElementById("itemInput");
const itemList = document.getElementById("itemList");
const summaryText = document.getElementById("summaryText");
const clearAllBtn = document.getElementById("clearAllBtn");

function renderList() {
  if (items.length === 0) {
    itemList.innerHTML = '<li class="empty-state">Your shopping list is empty.</li>';
    summaryText.textContent = "0 items (0 purchased)";
    return;
  }

  itemList.innerHTML = "";
  const purchasedCount = items.filter((it) => it.purchased).length;
  summaryText.textContent = `${items.length} items (${purchasedCount} purchased)`;

  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "item-row" + (item.purchased ? " purchased" : "");

    li.innerHTML = `
      <div class="item-left">
        <input type="checkbox" ${item.purchased ? "checked" : ""} aria-label="Mark purchased">
        <span class="item-name">${item.name}</span>
      </div>
      <button type="button" class="del-btn" aria-label="Delete item">&times;</button>
    `;

    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.addEventListener("change", () => {
      item.purchased = checkbox.checked;
      renderList();
    });

    const delBtn = li.querySelector(".del-btn");
    delBtn.addEventListener("click", () => {
      items = items.filter((it) => it.id !== item.id);
      renderList();
    });

    itemList.appendChild(li);
  });
}

itemForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = itemInput.value.trim();
  if (!name) return;

  items.push({
    id: Date.now(),
    name,
    purchased: false
  });

  itemInput.value = "";
  renderList();
});

clearAllBtn.addEventListener("click", () => {
  items = [];
  renderList();
});

renderList();
