# Notes App

## Objective

Build a persistent notes application where users can create, view, edit, delete, and search markdown/text notes with automatic saving to browser `localStorage`.

## Requirements

- Add note with title and body content.
- Display notes in a responsive card grid.
- Search input that filters notes by title or content in real time.
- Edit existing notes.
- Delete individual notes.
- Automatically serialize notes array to JSON and store in `localStorage`.
- Retrieve and restore notes upon page reload.

## Concepts Practiced

- `localStorage.setItem()` and `localStorage.getItem()`
- JSON serialization (`JSON.stringify()`, `JSON.parse()`)
- Form submission and validation
- Dynamic list filtering with `.filter()` and `.includes()`

## Bonus Challenges

- Add note category tags or color badges.
- Show relative timestamp (e.g. "Edited 5 minutes ago").

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
