const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const remainingCount = document.getElementById("remainingCount");
const wordCount = document.getElementById("wordCount");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");

const MAX_CHARS = 200;

function updateCounters() {
  const text = textInput.value;
  const chars = text.length;
  const remaining = MAX_CHARS - chars;

  // Calculate words: split by whitespace and filter empty tokens
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  charCount.textContent = chars;
  remainingCount.textContent = remaining;
  wordCount.textContent = words;

  // Visual warning near limit
  if (remaining <= 0) {
    remainingCount.className = "stat-value danger";
  } else if (remaining <= 20) {
    remainingCount.className = "stat-value warning";
  } else {
    remainingCount.className = "stat-value";
  }
}

textInput.addEventListener("input", updateCounters);

clearBtn.addEventListener("click", () => {
  textInput.value = "";
  updateCounters();
  textInput.focus();
});

copyBtn.addEventListener("click", () => {
  if (!textInput.value) return;
  navigator.clipboard.writeText(textInput.value).then(() => {
    const original = copyBtn.textContent;
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = original), 1500);
  });
});

updateCounters();
