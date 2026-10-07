# Digital Clock

## Objective

Build a real-time digital clock that displays the current hour, minute, second, and date, updating continuously every second.

## Requirements

- Display current time with hours, minutes, and seconds.
- Format numbers with leading zeros (e.g., `09:05:03` instead of `9:5:3`).
- Update the display every second using `setInterval`.
- Display the current date (weekday, month, day, year).
- Provide a toggle button to switch between 12-hour (AM/PM) and 24-hour time formats.

## Concepts Practiced

- JavaScript `Date` object and methods (`getHours()`, `getMinutes()`, `getSeconds()`)
- Asynchronous timing with `setInterval`
- String formatting with `String.prototype.padStart()`
- DOM selection and text updates
- State toggling (12h vs 24h)

## Bonus Challenges

- Add an analog clock face using CSS transforms and rotating clock hands.
- Add sound effects or a ticking audio switch.
- Display different world timezones (e.g., UTC, Tokyo, London).

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
