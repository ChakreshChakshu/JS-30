const changeBtn = document.getElementById("changeBtn");
const copyBtn = document.getElementById("copyBtn");
const colorCode = document.getElementById("colorCode");
const colorPreview = document.getElementById("colorPreview");
const historyList = document.getElementById("historyList");

const history = [];

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateColor(newColor) {
  document.body.style.backgroundColor = newColor;
  colorPreview.style.backgroundColor = newColor;
  colorCode.textContent = newColor;

  if (!history.includes(newColor)) {
    history.unshift(newColor);
    if (history.length > 5) {
      history.pop();
    }
    renderHistory();
  }
}

function renderHistory() {
  historyList.innerHTML = "";
  history.forEach((col) => {
    const chip = document.createElement("button");
    chip.className = "history-chip";
    chip.style.backgroundColor = col;
    chip.title = col;
    chip.setAttribute("aria-label", "Apply " + col);
    chip.addEventListener("click", () => updateColor(col));
    historyList.appendChild(chip);
  });
}

changeBtn.addEventListener("click", () => {
  const color = getRandomHexColor();
  updateColor(color);
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(colorCode.textContent).then(() => {
    const originalText = copyBtn.textContent;
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 1500);
  });
});

// Initialize with default color
updateColor("#4F46E5");
