# Product Filter

## Objective

Build an interactive e-commerce product catalog with an embedded dataset that supports category filtering, search, and sorting by price and name.

## Requirements

- Embedded JavaScript dataset of at least 10 products with fields: id, name, category, price, rating.
- Category filter buttons (e.g. "All", "Electronics", "Clothing", "Books", "Home").
- Search input to filter products by title/name (`includes()`).
- Sort dropdown:
  - Price: Low to High
  - Price: High to Low
  - Name: A to Z
  - Name: Z to A
- Render responsive product cards dynamically.
- Display "No products found" message when filters yield no matches.

## Concepts Practiced

- Array methods: `.filter()`, `.map()`, `.sort()`, `.includes()`
- Event handling across multiple filter controls
- Dynamic template string rendering

## Bonus Challenges

- Add price range slider filter.
- Add "Add to Cart" notification toast.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
