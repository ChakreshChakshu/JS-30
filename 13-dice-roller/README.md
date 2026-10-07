# Dice Roller

## Objective

Build a visual dice rolling application that simulates a six-sided die roll, renders the corresponding dice face, and records roll history.

## Requirements

- Generate a random integer between 1 and 6 on each roll.
- Visually display the rolled dice face (with dots or clear numerical face).
- Maintain and display roll history with timestamps or sequential roll numbers.
- Display statistics: total rolls, average roll value, and count of recent rolls.
- Provide a button to clear the roll history.

## Concepts Practiced

- Random number generation (`Math.floor(Math.random() * 6) + 1`)
- Dynamic DOM element generation for history items
- Array methods (`reduce()` for rolling average, `unshift()` for history)
- CSS animations for simulated rolling effect

## Bonus Challenges

- Support rolling two dice simultaneously (craps style).
- Add sound effects for dice rolling.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
