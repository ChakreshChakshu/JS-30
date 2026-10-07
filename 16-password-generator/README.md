# Password Generator

## Objective

Build a customizable password generator that produces cryptographically secure random passwords based on user-selected character sets and length.

## Requirements

- Slider and/or input to select password length (e.g. 6 to 32 characters).
- Checkbox options for character types:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Symbols (!@#$%^&*)
- Require at least one character type to be selected.
- "Generate Password" button to create and display password.
- "Copy Password" button using `navigator.clipboard.writeText` with feedback.

## Concepts Practiced

- String building and character arrays
- Random character sampling (`Math.random()`)
- Form control state reading (`checkbox.checked`, `range.value`)
- Asynchronous Clipboard API
- Input validation (handling when no checkboxes are checked)

## Bonus Challenges

- Guarantee that at least one character of each selected category is included.
- Display a real-time password entropy / strength score.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
