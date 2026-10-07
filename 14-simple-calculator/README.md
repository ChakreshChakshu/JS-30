# Simple Calculator

## Objective

Build a functional calculator capable of handling addition, subtraction, multiplication, and division operations without using the unsafe `eval()` function.

## Requirements

- Display showing the current input and previous expression.
- Numeric buttons 0-9 and decimal point.
- Operator buttons (+, -, *, /).
- Equals button (=) to compute and display the result.
- Clear button (C) to reset state.
- Delete/Backspace button (DEL) to undo the last digit.
- Proper handling of division by zero (e.g. display "Error").
- No use of JavaScript's `eval()` function.

## Concepts Practiced

- Calculator state machine (first operand, operator, second operand, awaiting next input)
- Safe arithmetic computation functions
- Input validation and string formatting
- Event handling for calculator keypad
- Precision handling with floating-point numbers

## Bonus Challenges

- Add keyboard support for number and operator keys.
- Add percentage (%) and sign toggle (+/-) buttons.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries. Do not use `eval()`.

## How to Run

Open `index.html` in a browser.
