let totalSeconds = 300;
let remainingSeconds = 300;
let timerId = null;

const timeDisplay = document.getElementById("timeDisplay");
const statusMsg = document.getElementById("statusMsg");
const secondsInput = document.getElementById("secondsInput");
const setBtn = document.getElementById("setBtn");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(remainingSeconds);
}

function startTimer() {
  if (timerId !== null) return;
  statusMsg.textContent = "";
  timerId = setInterval(() => {
    if (remainingSeconds > 0) {
      remainingSeconds--;
      updateDisplay();
    } else {
      clearInterval(timerId);
      timerId = null;
      statusMsg.textContent = "⏰ Time's up!";
      startBtn.disabled = false;
      pauseBtn.disabled = true;
    }
  }, 1000);

  startBtn.disabled = true;
  pauseBtn.disabled = false;
}

function pauseTimer() {
  if (timerId === null) return;
  clearInterval(timerId);
  timerId = null;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  statusMsg.textContent = "Paused";
}

function resetTimer() {
  clearInterval(timerId);
  timerId = null;
  remainingSeconds = totalSeconds;
  updateDisplay();
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  statusMsg.textContent = "";
}

setBtn.addEventListener("click", () => {
  const val = parseInt(secondsInput.value, 10);
  if (!isNaN(val) && val > 0) {
    totalSeconds = val;
    resetTimer();
  }
});

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();
