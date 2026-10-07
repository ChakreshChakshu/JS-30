let currentOperand = "0";
let previousOperand = "";
let operation = undefined;

const currentOperandText = document.getElementById("currentOperand");
const previousOperandText = document.getElementById("previousOperand");

function clearAll() {
  currentOperand = "0";
  previousOperand = "";
  operation = undefined;
  updateDisplay();
}

function deleteNumber() {
  if (currentOperand === "0") return;
  if (currentOperand.length === 1) {
    currentOperand = "0";
  } else {
    currentOperand = currentOperand.slice(0, -1);
  }
  updateDisplay();
}

function appendNumber(number) {
  if (number === "." && currentOperand.includes(".")) return;
  if (currentOperand === "0" && number !== ".") {
    currentOperand = number.toString();
  } else {
    currentOperand += number.toString();
  }
  updateDisplay();
}

function chooseOperation(op) {
  if (currentOperand === "" && previousOperand === "") return;
  if (previousOperand !== "") {
    compute();
  }
  operation = op;
  previousOperand = currentOperand;
  currentOperand = "";
  updateDisplay();
}

function compute() {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;

  let computation;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      if (current === 0) {
        currentOperand = "Error";
        previousOperand = "";
        operation = undefined;
        updateDisplay();
        return;
      }
      computation = prev / current;
      break;
    default:
      return;
  }

  currentOperand = Math.round(computation * 100000000) / 100000000 + "";
  operation = undefined;
  previousOperand = "";
  updateDisplay();
}

function updateDisplay() {
  currentOperandText.textContent = currentOperand;
  if (operation != null) {
    previousOperandText.textContent = `${previousOperand} ${operation}`;
  } else {
    previousOperandText.textContent = "";
  }
}

// Event Listeners for keypad
document.querySelectorAll("[data-num]").forEach((btn) => {
  btn.addEventListener("click", () => appendNumber(btn.dataset.num));
});

document.querySelectorAll("[data-operator]").forEach((btn) => {
  btn.addEventListener("click", () => chooseOperation(btn.dataset.operator));
});

document.querySelector("[data-action='clear']").addEventListener("click", clearAll);
document.querySelector("[data-action='delete']").addEventListener("click", deleteNumber);
document.querySelector("[data-action='equals']").addEventListener("click", compute);
