# Modal Component

## Objective

Build a reusable, accessible modal dialog overlay with complete close interactions: close button, background backdrop click, and keyboard Escape key dismissal.

## Requirements

- Button to trigger opening the modal dialog.
- Semi-transparent backdrop overlay covering the background viewport.
- Centered modal dialog card with header, body content, and action buttons.
- Dismiss modal via:
  - Close icon button in the header
  - Secondary "Cancel" button in the footer
  - Clicking on the backdrop outside the modal card
  - Pressing the keyboard `Escape` key
- Manage ARIA attributes (`role="dialog"`, `aria-modal="true"`).

## Concepts Practiced

- Event listeners for mouse and keyboard events
- Event propagation (`event.stopPropagation()`)
- Keyboard accessibility (`event.key === 'Escape'`)
- CSS positioning (`fixed`, `z-index`, backdrop blur)

## Bonus Challenges

- Focus trapping inside the modal when open.
- Save and restore focus to the trigger button when closing.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
