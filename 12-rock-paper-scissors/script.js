const choices = ["rock", "paper", "scissors"];
const icons = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️"
};

let scores = {
  player: 0,
  draws: 0,
  computer: 0
};

const playerScoreEl = document.getElementById("playerScore");
const drawsScoreEl = document.getElementById("drawsScore");
const computerScoreEl = document.getElementById("computerScore");
const playerChoiceDisplay = document.getElementById("playerChoiceDisplay");
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
const resultMessage = document.getElementById("resultMessage");
const weaponButtons = document.querySelectorAll(".btn-weapon");
const resetBtn = document.getElementById("resetBtn");

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  }
  return "lose";
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  playerChoiceDisplay.textContent = icons[playerChoice];
  computerChoiceDisplay.textContent = icons[computerChoice];

  const outcome = determineWinner(playerChoice, computerChoice);

  if (outcome === "win") {
    scores.player++;
    resultMessage.textContent = "🎉 You win this round!";
    resultMessage.className = "result-message win";
  } else if (outcome === "lose") {
    scores.computer++;
    resultMessage.textContent = "💀 Computer wins this round!";
    resultMessage.className = "result-message lose";
  } else {
    scores.draws++;
    resultMessage.textContent = "🤝 It's a draw!";
    resultMessage.className = "result-message draw";
  }

  updateScoreboard();
}

function updateScoreboard() {
  playerScoreEl.textContent = scores.player;
  drawsScoreEl.textContent = scores.draws;
  computerScoreEl.textContent = scores.computer;
}

weaponButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    playRound(btn.dataset.choice);
  });
});

resetBtn.addEventListener("click", () => {
  scores = { player: 0, draws: 0, computer: 0 };
  updateScoreboard();
  playerChoiceDisplay.textContent = "?";
  computerChoiceDisplay.textContent = "?";
  resultMessage.textContent = "Select your weapon below!";
  resultMessage.className = "result-message";
});
