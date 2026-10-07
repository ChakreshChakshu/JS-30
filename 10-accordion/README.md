# Accordion

## Objective

Build an interactive FAQ accordion component where clicking a question reveals its answer while automatically closing all other open items.

## Requirements

- Display a list of at least 4 FAQ question items.
- Clicking any question header expands or collapses its associated answer panel.
- Ensure only one answer panel is open at any given time (strict accordion behavior).
- Display an animated chevron or plus/minus icon indicating expanded/collapsed state.
- Include appropriate ARIA attributes (`aria-expanded`, `aria-controls`) for accessibility.

## Concepts Practiced

- DOM query selection (`querySelectorAll`)
- Iteration and event handling with `forEach`
- Class toggling using `element.classList.toggle`, `add`, and `remove`
- DOM traversal (`parentElement`, `nextElementSibling`)
- Accessible attributes management

## Bonus Challenges

- Add smooth transition animations with CSS `max-height` or grid layout.
- Add an "Expand All / Collapse All" toggle button.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
