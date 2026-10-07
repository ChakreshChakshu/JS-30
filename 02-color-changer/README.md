# Color Changer

## Objective

Build a web application that generates random colors on button click and applies them to the background, displaying the active color code for the user.

## Requirements

- Provide a button to trigger a random color change.
- Generate random hexadecimal color codes (e.g., `#3A86FF`).
- Apply the generated color to the page background or a dedicated preview canvas.
- Display the current color value in a readable text element.
- Provide a button or click interaction to copy the color code to the clipboard.

## Concepts Practiced

- DOM selection and style manipulation (`element.style.backgroundColor`)
- Event listeners (`click`)
- Random number generation with `Math.random()` and `Math.floor()`
- String manipulation and hexadecimal formatting
- Asynchronous browser APIs (`navigator.clipboard.writeText`)

## Bonus Challenges

- Add a toggle switch between HEX and RGB color formats.
- Maintain a history of the last 5 generated colors.
- Automatically calculate text contrast to ensure readable text against dark or light backgrounds.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
