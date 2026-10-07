const STORAGE_KEY = "js30_expenses";

let transactions = loadTransactions();

const balanceEl = document.getElementById("balance");
const totalIncomeEl = document.getElementById("totalIncome");
const totalExpenseEl = document.getElementById("totalExpense");
const historyList = document.getElementById("historyList");
const transactionForm = document.getElementById("transactionForm");
const descInput = document.getElementById("descInput");
const amountInput = document.getElementById("amountInput");
const typeInput = document.getElementById("typeInput");

function loadTransactions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [
      { id: 1, desc: "Salary", amount: 3000, type: "income" },
      { id: 2, desc: "Groceries", amount: 150, type: "expense" }
    ];
  } catch (e) {
    return [];
  }
}

function saveTransactions() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}

function updateValues() {
  // Using reduce() to compute totals
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = totalIncome - totalExpense;

  balanceEl.textContent = `${balance < 0 ? "-" : ""}$${Math.abs(balance).toFixed(2)}`;
  totalIncomeEl.textContent = `+$${totalIncome.toFixed(2)}`;
  totalExpenseEl.textContent = `-$${totalExpense.toFixed(2)}`;
}

function renderList() {
  if (transactions.length === 0) {
    historyList.innerHTML = '<li class="empty-state">No transactions recorded.</li>';
    return;
  }

  historyList.innerHTML = "";
  transactions.forEach((item) => {
    const li = document.createElement("li");
    li.className = `history-item ${item.type}`;
    const sign = item.type === "income" ? "+" : "-";

    li.innerHTML = `
      <span class="item-desc">${escapeHtml(item.desc)}</span>
      <div class="item-right">
        <span class="item-amount">${sign}$${item.amount.toFixed(2)}</span>
        <button type="button" class="del-btn" aria-label="Delete">&times;</button>
      </div>
    `;

    li.querySelector(".del-btn").addEventListener("click", () => {
      transactions = transactions.filter((t) => t.id !== item.id);
      saveTransactions();
      updateValues();
      renderList();
    });

    historyList.appendChild(li);
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

transactionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const desc = descInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const type = typeInput.value;

  if (!desc || isNaN(amount) || amount <= 0) return;

  transactions.unshift({
    id: Date.now(),
    desc,
    amount,
    type
  });

  saveTransactions();
  updateValues();
  renderList();

  descInput.value = "";
  amountInput.value = "";
});

updateValues();
renderList();
