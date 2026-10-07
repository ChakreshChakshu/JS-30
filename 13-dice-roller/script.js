const dice = document.getElementById("dice");
const rollBtn = document.getElementById("rollBtn");
const totalRollsEl = document.getElementById("totalRolls");
const averageRollEl = document.getElementById("averageRoll");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

const history = [];

function rollDice() {
  dice.classList.add("rolling");
  rollBtn.disabled = true;

  setTimeout(() => {
    const value = Math.floor(Math.random() * 6) + 1;
    dice.textContent = value;
    dice.classList.remove("rolling");
    rollBtn.disabled = false;

    history.unshift(value);
    updateStats();
    renderHistory();
  }, 400);
}

function updateStats() {
  totalRollsEl.textContent = history.length;
  if (history.length === 0) {
    averageRollEl.textContent = "0.0";
    return;
  }
  const sum = history.reduce((acc, curr) => acc + curr, 0);
  const avg = (sum / history.length).toFixed(1);
  averageRollEl.textContent = avg;
}

function renderHistory() {
  if (history.length === 0) {
    historyList.innerHTML = '<p class="empty-state">No rolls yet.</p>';
    return;
  }

  historyList.innerHTML = "";
  history.slice(0, 15).forEach((val) => {
    const badge = document.createElement("span");
    badge.className = "roll-badge";
    badge.textContent = val;
    historyList.appendChild(badge);
  });
}

clearHistoryBtn.addEventListener("click", () => {
  history.length = 0;
  updateStats();
  renderHistory();
  dice.textContent = "1";
});

rollBtn.addEventListener("click", rollDice);
