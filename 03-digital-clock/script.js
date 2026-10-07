let is24HourFormat = false;

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmBadge = document.getElementById("ampmBadge");
const dateDisplay = document.getElementById("dateDisplay");
const formatToggle = document.getElementById("formatToggle");

function padZero(num) {
  return String(num).padStart(2, "0");
}

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  if (is24HourFormat) {
    ampmBadge.style.display = "none";
    hoursEl.textContent = padZero(hours);
  } else {
    ampmBadge.style.display = "inline-block";
    const ampm = hours >= 12 ? "PM" : "AM";
    ampmBadge.textContent = ampm;
    hours = hours % 12;
    hours = hours ? hours : 12;
    hoursEl.textContent = padZero(hours);
  }

  minutesEl.textContent = padZero(minutes);
  secondsEl.textContent = padZero(seconds);

  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  dateDisplay.textContent = now.toLocaleDateString("en-US", options);
}

formatToggle.addEventListener("click", () => {
  is24HourFormat = !is24HourFormat;
  formatToggle.textContent = is24HourFormat ? "Switch to 12-Hour" : "Switch to 24-Hour";
  updateClock();
});

// Run immediately and every second
updateClock();
setInterval(updateClock, 1000);
