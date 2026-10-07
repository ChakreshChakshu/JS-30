// State variable
let count = 0;

// DOM Elements
const countDisplay = document.getElementById("countDisplay");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");
const stepInput = document.getElementById("stepInput");

// Update UI display and dynamic coloring
function updateDisplay() {
  countDisplay.textContent = count;

  if (count > 0) {
    countDisplay.className = "counter-display positive";
  } else if (count < 0) {
    countDisplay.className = "counter-display negative";
  } else {
    countDisplay.className = "counter-display";
  }
}

function getStepValue() {
  const step = parseInt(stepInput.value, 10);
  return isNaN(step) || step < 1 ? 1 : step;
}

function increment() {
  count += getStepValue();
  updateDisplay();
}

function decrement() {
  count -= getStepValue();
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}

// Event Listeners
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);

// Keyboard controls
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    increment();
  } else if (event.key === "ArrowDown") {
    decrement();
  } else if (event.key.toLowerCase() === "r") {
    reset();
  }
});
