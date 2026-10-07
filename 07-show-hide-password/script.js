const passwordInput = document.getElementById("passwordInput");
const toggleBtn = document.getElementById("toggleBtn");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

toggleBtn.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  toggleBtn.textContent = isPassword ? "Hide" : "Show";
  toggleBtn.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
});

function calculateStrength(pwd) {
  if (!pwd) return { level: "", label: "Empty" };
  let score = 0;
  if (pwd.length >= 8) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;

  if (score <= 1) return { level: "weak", label: "Weak" };
  if (score <= 3) return { level: "medium", label: "Medium" };
  return { level: "strong", label: "Strong" };
}

passwordInput.addEventListener("input", () => {
  const { level, label } = calculateStrength(passwordInput.value);
  strengthBar.className = "strength-bar " + level;
  strengthText.textContent = "Password Strength: " + label;
});
