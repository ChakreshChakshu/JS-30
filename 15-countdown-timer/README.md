# Countdown Timer

## Objective

Build an interactive countdown timer that allows users to set a duration in seconds or minutes, start, pause, and reset the timer, displaying a completion message when finished.

## Requirements

- Input fields allowing the user to configure initial seconds (or minutes:seconds).
- Start button that initiates the countdown.
- Pause button that freezes the countdown at the current second.
- Reset button that restores the initial configured duration.
- Display remaining time formatted as `MM:SS`.
- Display a visible alert banner when the countdown reaches zero.

## Concepts Practiced

- Asynchronous timers with `setInterval` and `clearInterval`
- State management (`isRunning`, `remainingSeconds`, `totalSeconds`)
- String formatting with `padStart(2, '0')`
- Disabling and enabling control buttons based on timer state

## Bonus Challenges

- Add audio chime notification using the Web Audio API when time expires.
- Add preset duration buttons (1 min, 5 min, 10 min, 25 min Pomodoro).

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
