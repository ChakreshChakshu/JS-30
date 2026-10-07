let targetNumber = generateTarget();
let attempts = 0;
let guesses = [];
let gameOver = false;

const feedback = document.getElementById("feedback");
const guessForm = document.getElementById("guessForm");
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const attemptCount = document.getElementById("attemptCount");
const guessesList = document.getElementById("guessesList");
const restartBtn = document.getElementById("restartBtn");

function generateTarget() {
  return Math.floor(Math.random() * 100) + 1;
}

function handleGuess(event) {
  event.preventDefault();
  if (gameOver) return;

  const guess = parseInt(guessInput.value, 10);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedback.textContent = "Please enter a valid number between 1 and 100.";
    feedback.className = "feedback-box";
    return;
  }

  attempts++;
  guesses.push(guess);
  attemptCount.textContent = attempts;
  guessesList.textContent = guesses.join(", ");

  if (guess === targetNumber) {
    feedback.textContent = `🎉 Correct! The number was ${targetNumber} in ${attempts} tries!`;
    feedback.className = "feedback-box correct";
    gameOver = true;
    submitBtn.disabled = true;
    guessInput.disabled = true;
  } else if (guess > targetNumber) {
    feedback.textContent = "📈 Too high! Try a lower number.";
    feedback.className = "feedback-box high";
  } else {
    feedback.textContent = "📉 Too low! Try a higher number.";
    feedback.className = "feedback-box low";
  }

  guessInput.value = "";
  guessInput.focus();
}

function resetGame() {
  targetNumber = generateTarget();
  attempts = 0;
  guesses = [];
  gameOver = false;
  submitBtn.disabled = false;
  guessInput.disabled = false;
  guessInput.value = "";
  attemptCount.textContent = "0";
  guessesList.textContent = "None";
  feedback.textContent = "Enter your guess below to start!";
  feedback.className = "feedback-box";
  guessInput.focus();
}

guessForm.addEventListener("submit", handleGuess);
restartBtn.addEventListener("click", resetGame);
