# Tabs Component

## Objective

Build an accessible, modular tabbed navigation interface that switches dynamically between multiple panels of content while managing ARIA attributes and active states.

## Requirements

- Multiple tab trigger buttons (e.g. "Overview", "Features", "Specs", "Reviews").
- Corresponding content panels with only the active panel visible.
- Highlight the currently active tab visually.
- Support ARIA roles and states:
  - `role="tablist"` on container
  - `role="tab"` and `aria-selected` on buttons
  - `role="tabpanel"` on panels
- Smooth, instant panel switching on click.

## Concepts Practiced

- DOM class manipulation (`element.classList.add/remove`)
- Attribute manipulation (`setAttribute('aria-selected', ...)`)
- State management for active index
- Accessibility best practices

## Bonus Challenges

- Support keyboard navigation using Arrow Left and Arrow Right keys.
- Add fade-in animation for tab content panels.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
