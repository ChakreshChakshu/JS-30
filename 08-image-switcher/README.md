# Image Switcher

## Objective

Build an interactive image gallery / carousel slider that cycles through multiple images with Previous and Next navigation buttons.

## Requirements

- Display a gallery image with title/caption and current slide index (e.g. "Image 2 of 5").
- Provide a "Previous" button to navigate to the preceding image.
- Provide a "Next" button to navigate to the following image.
- Disable navigation buttons appropriately when reaching the beginning or end of the gallery.
- Use local self-contained SVG or demo images that work completely offline without external network dependencies.

## Concepts Practiced

- Array indexing and bounds checking
- State management (`currentIndex`)
- DOM updates (`element.setAttribute('src', ...)`, `button.disabled`)
- Visual indicator dots and interactive thumbnails

## Bonus Challenges

- Add automatic slideshow autoplay with a pause on hover.
- Add indicator dot navigation allowing users to jump directly to any slide.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
