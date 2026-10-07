const textInput = document.getElementById("textInput");
const checkBtn = document.getElementById("checkBtn");
const statusHeading = document.getElementById("statusHeading");
const details = document.getElementById("details");
const cleanedTextEl = document.getElementById("cleanedText");
const reversedTextEl = document.getElementById("reversedText");
const chips = document.querySelectorAll(".chip");

function checkPalindrome() {
  const raw = textInput.value.trim();
  if (!raw) {
    statusHeading.textContent = "Please enter text to check.";
    statusHeading.className = "status-heading";
    details.style.display = "none";
    return;
  }

  // Clean: remove non-alphanumeric, convert to lowercase
  const cleaned = raw.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (!cleaned) {
    statusHeading.textContent = "No alphanumeric characters found.";
    statusHeading.className = "status-heading";
    details.style.display = "none";
    return;
  }

  const reversed = cleaned.split("").reverse().join("");
  const isPalindrome = cleaned === reversed;

  cleanedTextEl.textContent = cleaned;
  reversedTextEl.textContent = reversed;
  details.style.display = "block";

  if (isPalindrome) {
    statusHeading.textContent = "🎉 Yes! It's a Palindrome!";
    statusHeading.className = "status-heading yes";
  } else {
    statusHeading.textContent = "❌ No, not a Palindrome.";
    statusHeading.className = "status-heading no";
  }
}

checkBtn.addEventListener("click", checkPalindrome);

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    textInput.value = chip.textContent;
    checkPalindrome();
  });
});
