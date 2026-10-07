# Search Filter

## Objective

Build a live search filter over a collection of at least 20 items (e.g. programming languages and web technologies) with instant case-insensitive updates and empty-state messaging.

## Requirements

- Predefined dataset of at least 20 items with title, tag, and brief description.
- Search input listening to user typing in real time.
- Filter the list using case-insensitive string matching (`includes()`).
- Display current count of matching items.
- Display "No results found" when no items match.

## Concepts Practiced

- Input event handling (`input`)
- Array `.filter()` and `String.prototype.includes()`
- Case normalization (`toLowerCase()`)
- Real-time DOM updates

## Bonus Challenges

- Highlight matched search substrings inside item titles.
- Add category filter chips.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
