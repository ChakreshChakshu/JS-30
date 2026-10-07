# Random Quote Generator

## Objective

Build a quote generator that displays inspirational quotes from a curated collection at random on button click.

## Requirements

- Display a quote along with its author name and category tag.
- Provide a "New Quote" button to select another quote at random.
- Store a collection of at least 10 quotes in an array of objects.
- Ensure the newly picked quote is not an exact duplicate of the currently visible quote.
- Provide a "Copy Quote" button to copy the quote text and author to the clipboard.

## Concepts Practiced

- Array of objects data structure
- Random index selection (`Math.floor(Math.random() * length)`)
- Guard logic against immediate repetition
- DOM manipulation (`textContent`)
- Clipboard API (`navigator.clipboard.writeText`)

## Bonus Challenges

- Add a Twitter / X share button that opens an intent URL with the quote text.
- Add category filter tabs to get quotes only from specific topics (e.g. Science, Tech, Philosophy).

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
