const textInput = document.getElementById("textInput");
const ignoreSpaces = document.getElementById("ignoreSpaces");
const caseInsensitive = document.getElementById("caseInsensitive");
const frequencyList = document.getElementById("frequencyList");

function analyze() {
  let text = textInput.value;
  if (!text) {
    frequencyList.innerHTML = '<p class="empty-state">Type text above to view frequency distribution.</p>';
    return;
  }

  if (caseInsensitive.checked) {
    text = text.toLowerCase();
  }

  const freq = {};
  let totalValidChars = 0;

  for (const char of text) {
    if (ignoreSpaces.checked && /\s/.test(char)) continue;
    freq[char] = (freq[char] || 0) + 1;
    totalValidChars++;
  }

  if (totalValidChars === 0) {
    frequencyList.innerHTML = '<p class="empty-state">No matching characters to analyze.</p>';
    return;
  }

  const sortedEntries = Object.entries(freq).sort((a, b) => b[1] - a[1]);

  frequencyList.innerHTML = "";
  sortedEntries.forEach(([char, count]) => {
    const percentage = ((count / totalValidChars) * 100).toFixed(1);
    const row = document.createElement("div");
    row.className = "freq-row";

    const displayChar = char === " " ? "[space]" : char;

    row.innerHTML = `
      <span class="char-badge">${displayChar}</span>
      <span>${count}</span>
      <div class="bar-wrapper" title="${percentage}%">
        <div class="bar-fill" style="width: ${percentage}%"></div>
      </div>
    `;
    frequencyList.appendChild(row);
  });
}

textInput.addEventListener("input", analyze);
ignoreSpaces.addEventListener("change", analyze);
caseInsensitive.addEventListener("change", analyze);
