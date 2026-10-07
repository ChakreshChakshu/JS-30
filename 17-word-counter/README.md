# Word Counter

## Objective

Build a text analysis tool that counts words, characters, characters excluding spaces, paragraphs, and estimates reading time in real time.

## Requirements

- Multi-line textarea for user input.
- Real-time updates as the user types or pastes content.
- Display metrics:
  - Total word count
  - Total character count (including whitespace)
  - Character count (excluding whitespace)
  - Paragraph count
  - Estimated reading time (based on average 200 words per minute).

## Concepts Practiced

- Listening to the `input` event
- String manipulation (`trim()`, `split()`, regex matching)
- Array filtering (`arr.filter(item => item.length > 0)`)
- Math calculations for reading time estimate

## Bonus Challenges

- Add a case transformation menu (Uppercase, Lowercase, Title Case).
- Display the top 3 most frequently used words.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
