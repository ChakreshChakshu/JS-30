# Show/Hide Password

## Objective

Build a password input field with a toggle visibility button that switches between hidden asterisks and plain readable text.

## Requirements

- Provide an `<input>` element initially set to `type="password"`.
- Provide a toggle button beside or inside the input container.
- Clicking the toggle alternates input type between `"password"` and `"text"`.
- Update button label/icon and aria attributes depending on state (e.g. "Show" vs "Hide").
- Display real-time password length and a basic strength indicator.

## Concepts Practiced

- Reading and updating DOM element attributes (`input.type`)
- Toggle logic (`type === 'password' ? 'text' : 'password'`)
- Accessibility: Updating `aria-label` and `aria-pressed`
- Basic string length validation

## Bonus Challenges

- Add an interactive password strength meter (Weak, Medium, Strong).
- Add eye / eye-slash SVG icons instead of plain text.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
