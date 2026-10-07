# Number Guessing Game

## Objective

Build a game where the computer picks a secret random number between 1 and 100, and the player has to guess it using higher/lower feedback clues.

## Requirements

- Generate a secret random integer between 1 and 100 on game start.
- Provide an input field for the player's guess.
- Validate input (ensure it is within 1 to 100).
- Provide instant feedback: "Too high!", "Too low!", or "Correct! You won!".
- Track and display the total number of attempts made.
- Display a history list of previous guesses.
- Provide a "Play Again" button to restart the game with a new random number.

## Concepts Practiced

- Random number generation (`Math.floor(Math.random() * 100) + 1`)
- Conditional logic (`if...else if...else`)
- Game state tracking (target number, attempts count, guesses array)
- Array manipulation and history rendering

## Bonus Challenges

- Limit the maximum allowed attempts (e.g. 10 tries) and declare game over if exhausted.
- Add hot/cold proximity hints based on the difference from the target number.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
