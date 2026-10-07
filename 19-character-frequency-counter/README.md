# Character Frequency Counter

## Objective

Build a text analyzer that computes the frequency of each character in a given text string and visualizes the distribution sorted by occurrence.

## Requirements

- Text input area for user text.
- Compute occurrences of each character using an object dictionary map.
- Option or default to ignore whitespace.
- Sort frequency results in descending order (highest occurrences first).
- Render results in a clean table or visual frequency list.

## Concepts Practiced

- Object hash maps (`frequency[char] = (frequency[char] || 0) + 1`)
- `Object.entries()`
- Array sorting with `.sort((a, b) => b[1] - a[1])`
- Dynamic DOM generation (`document.createElement`)

## Bonus Challenges

- Display visual percentage progress bars for each character.
- Add an option to ignore or respect letter case.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
