# Tip Calculator

## Objective

Build a tip calculator that computes tip amount, total bill, and split totals per person based on user input.

## Requirements

- Input field for total bill amount.
- Tip percentage selection (preset percentage buttons and/or a custom percentage input).
- Input field for number of people sharing the bill.
- Calculate and display:
  - Total tip amount
  - Total bill including tip
  - Tip per person
  - Total amount per person
- Provide a reset button to restore default values.

## Concepts Practiced

- Number input parsing (`parseFloat`, `parseInt`)
- Input validation (preventing negative or zero people)
- Arithmetic calculations and decimal rounding with `toFixed(2)`
- Dynamic DOM updates responding to inputs and button clicks

## Bonus Challenges

- Add quick tip preset buttons (10%, 15%, 18%, 20%, 25%).
- Format output amounts in local currency using `Intl.NumberFormat`.
- Add an animation when calculation results update.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
