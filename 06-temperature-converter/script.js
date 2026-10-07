const celsiusInput = document.getElementById("celsiusInput");
const fahrenheitInput = document.getElementById("fahrenheitInput");
const clearBtn = document.getElementById("clearBtn");

celsiusInput.addEventListener("input", () => {
  const cVal = celsiusInput.value.trim();
  if (cVal === "") {
    fahrenheitInput.value = "";
    return;
  }
  const c = parseFloat(cVal);
  if (!isNaN(c)) {
    const f = (c * 9) / 5 + 32;
    fahrenheitInput.value = Math.round(f * 100) / 100;
  }
});

fahrenheitInput.addEventListener("input", () => {
  const fVal = fahrenheitInput.value.trim();
  if (fVal === "") {
    celsiusInput.value = "";
    return;
  }
  const f = parseFloat(fVal);
  if (!isNaN(f)) {
    const c = ((f - 32) * 5) / 9;
    celsiusInput.value = Math.round(c * 100) / 100;
  }
});

clearBtn.addEventListener("click", () => {
  celsiusInput.value = "";
  fahrenheitInput.value = "";
  celsiusInput.focus();
});
