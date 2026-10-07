# Palindrome Checker

## Objective

Build a tool that verifies whether a word or sentence is a palindrome (reads identically forwards and backwards), ignoring case, spacing, and punctuation marks.

## Requirements

- Input text field for phrase entry.
- Clean the input using regular expressions to strip non-alphanumeric characters.
- Normalize string to lowercase.
- Compare sanitized string with its reverse.
- Display clear visual confirmation indicating whether it is a palindrome.
- Show both the normalized string and its reversed string.
- Provide quick sample buttons for instant testing.

## Concepts Practiced

- Regular expressions (`/[^a-z0-9]/gi`)
- String methods (`toLowerCase()`, `replace()`)
- Array reversal (`split('').reverse().join('')`)
- Conditional feedback and DOM manipulation

## Bonus Challenges

- Highlight matching and mismatching characters.
- Maintain a list of tested words.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
