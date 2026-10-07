# Temperature Converter

## Objective

Build a bidirectional temperature converter that transforms values between Celsius and Fahrenheit in real time with formulas displayed.

## Requirements

- Input fields for Celsius and Fahrenheit.
- Entering a value in Celsius automatically updates Fahrenheit.
- Entering a value in Fahrenheit automatically updates Celsius.
- Display the mathematical conversion formula used.
- Clear/reset button to wipe all fields.

## Concepts Practiced

- Input event handling
- Mathematical formulas:
  - $F = (C \times \frac{9}{5}) + 32$
  - $C = (F - 32) \times \frac{5}{9}$
- Number validation and handling `NaN` / empty strings
- Keeping two-way input states synchronized without infinite loops

## Bonus Challenges

- Add Kelvin as a third temperature unit.
- Provide visual feedback (cold/warm color gradient) based on the temperature.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
