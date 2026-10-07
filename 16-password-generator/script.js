const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const passwordOutput = document.getElementById("passwordOutput");
const copyBtn = document.getElementById("copyBtn");
const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");
const includeUpper = document.getElementById("includeUpper");
const includeLower = document.getElementById("includeLower");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generateBtn = document.getElementById("generateBtn");

lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {
  const length = parseInt(lengthSlider.value, 10);
  let charPool = "";

  if (includeUpper.checked) charPool += upperChars;
  if (includeLower.checked) charPool += lowerChars;
  if (includeNumbers.checked) charPool += numberChars;
  if (includeSymbols.checked) charPool += symbolChars;

  if (charPool === "") {
    passwordOutput.textContent = "Select at least 1 option";
    return;
  }

  let generated = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    generated += charPool[randomIndex];
  }

  passwordOutput.textContent = generated;
}

copyBtn.addEventListener("click", () => {
  const pwd = passwordOutput.textContent;
  if (!pwd || pwd === "Click Generate" || pwd.includes("Select")) return;

  navigator.clipboard.writeText(pwd).then(() => {
    const original = copyBtn.textContent;
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = original), 1500);
  });
});

generateBtn.addEventListener("click", generatePassword);

// Initialize
generatePassword();
