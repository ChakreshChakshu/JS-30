const billInput = document.getElementById("billAmount");
const customTipInput = document.getElementById("customTip");
const peopleInput = document.getElementById("peopleCount");
const tipButtons = document.querySelectorAll(".tip-btn");

const tipAmountEl = document.getElementById("tipAmount");
const totalAmountEl = document.getElementById("totalAmount");
const tipPerPersonEl = document.getElementById("tipPerPerson");
const totalPerPersonEl = document.getElementById("totalPerPerson");
const resetBtn = document.getElementById("resetBtn");

let activeTipPercent = 10;

function calculate() {
  const bill = parseFloat(billInput.value) || 0;
  let tipPercent = activeTipPercent;

  if (customTipInput.value !== "") {
    tipPercent = parseFloat(customTipInput.value) || 0;
  }

  const people = parseInt(peopleInput.value, 10) || 1;
  const safePeople = people > 0 ? people : 1;

  const tipTotal = bill * (tipPercent / 100);
  const total = bill + tipTotal;
  const tipPerPerson = tipTotal / safePeople;
  const totalPerPerson = total / safePeople;

  tipAmountEl.textContent = "$" + tipTotal.toFixed(2);
  totalAmountEl.textContent = "$" + total.toFixed(2);
  tipPerPersonEl.textContent = "$" + tipPerPerson.toFixed(2);
  totalPerPersonEl.textContent = "$" + totalPerPerson.toFixed(2);
}

tipButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tipButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeTipPercent = parseFloat(btn.dataset.tip);
    customTipInput.value = "";
    calculate();
  });
});

customTipInput.addEventListener("input", () => {
  tipButtons.forEach((b) => b.classList.remove("active"));
  calculate();
});

billInput.addEventListener("input", calculate);
peopleInput.addEventListener("input", calculate);

resetBtn.addEventListener("click", () => {
  billInput.value = "";
  customTipInput.value = "";
  peopleInput.value = "1";
  activeTipPercent = 10;
  tipButtons.forEach((b) => b.classList.remove("active"));
  tipButtons[1].classList.add("active");
  calculate();
});

calculate();
