# Character Counter

## Objective

Build a text counter tool that tracks characters typed, remaining characters under a maximum limit, and total word count in real time as the user types.

## Requirements

- Provide a `<textarea>` element for user text entry.
- Set a maximum character limit (e.g., 200 characters).
- Display the count of characters currently entered.
- Display remaining characters before the limit is reached.
- Display total word count.
- Prevent or visually warn the user when the limit is approached or reached.

## Concepts Practiced

- Listening to the `input` event on textarea
- String length measurement (`str.length`)
- String splitting and regex for word counting
- DOM manipulation to update multiple output fields
- CSS classes for warning/error state

## Bonus Challenges

- Add a button to copy the typed text to the clipboard.
- Add a button to clear the text area.
- Make the maximum character limit customizable via an input field.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
