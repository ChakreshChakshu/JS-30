const form = document.getElementById("regForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmInput = document.getElementById("confirmInput");
const phoneInput = document.getElementById("phoneInput");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");
const phoneError = document.getElementById("phoneError");
const successBanner = document.getElementById("successBanner");

function setError(input, errorEl, message) {
  input.classList.remove("valid");
  input.classList.add("invalid");
  errorEl.textContent = message;
}

function setValid(input, errorEl) {
  input.classList.remove("invalid");
  input.classList.add("valid");
  errorEl.textContent = "";
}

function validateName() {
  const val = nameInput.value.trim();
  if (val.length < 2) {
    setError(nameInput, nameError, "Name must be at least 2 characters.");
    return false;
  }
  setValid(nameInput, nameError);
  return true;
}

function validateEmail() {
  const val = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(val)) {
    setError(emailInput, emailError, "Please enter a valid email address.");
    return false;
  }
  setValid(emailInput, emailError);
  return true;
}

function validatePassword() {
  const val = passwordInput.value;
  if (val.length < 8) {
    setError(passwordInput, passwordError, "Password must be at least 8 characters.");
    return false;
  }
  if (!/[A-Za-z]/.test(val) || !/[0-9]/.test(val)) {
    setError(passwordInput, passwordError, "Password must contain both letters and numbers.");
    return false;
  }
  setValid(passwordInput, passwordError);
  return true;
}

function validateConfirmPassword() {
  const val = confirmInput.value;
  if (val !== passwordInput.value || val === "") {
    setError(confirmInput, confirmError, "Passwords do not match.");
    return false;
  }
  setValid(confirmInput, confirmError);
  return true;
}

function validatePhone() {
  const val = phoneInput.value.trim().replace(/[^0-9]/g, "");
  if (val.length < 10) {
    setError(phoneInput, phoneError, "Phone must have at least 10 digits.");
    return false;
  }
  setValid(phoneInput, phoneError);
  return true;
}

// Live validation on blur
nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);
confirmInput.addEventListener("blur", validateConfirmPassword);
phoneInput.addEventListener("blur", validatePhone);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmValid = validateConfirmPassword();
  const isPhoneValid = validatePhone();

  if (isNameValid && isEmailValid && isPasswordValid && isConfirmValid && isPhoneValid) {
    successBanner.style.display = "block";
    form.reset();
    document.querySelectorAll("input").forEach((inp) => inp.classList.remove("valid"));
    setTimeout(() => {
      successBanner.style.display = "none";
    }, 4000);
  } else {
    successBanner.style.display = "none";
  }
});
