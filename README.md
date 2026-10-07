# JavaScript 30 Projects

30 small HTML, CSS and JavaScript projects for practicing frontend development.

This repository provides a progressive, hands-on curriculum designed for students and developers learning modern frontend fundamentals. All projects are built strictly with **HTML, CSS, and Vanilla JavaScript** — without frameworks, libraries, build tools, or external dependencies.

---

## Levels

### Level 1 — DOM & Events
**Projects 01–10**  
Focuses on fundamental browser concepts: selecting DOM elements, modifying text and styles, handling click and input events, and managing basic component state.

### Level 2 — Core JavaScript
**Projects 11–20**  
Focuses on core JavaScript logic: control flow, string manipulation, regular expressions, arrays, objects, timing APIs (`setInterval`), and mathematical algorithms without external helpers.

### Level 3 — Intermediate Browser JavaScript
**Projects 21–30**  
Focuses on intermediate browser patterns: event delegation, `localStorage` persistence, complex filtering and sorting, form validation, accessible component patterns (tabs and modals), and asynchronous network requests using `fetch` with `async/await`.

---

## Project Catalog

| # | Project | Level | Main Concepts |
|---|---|---|---|
| 01 | [Counter App](./01-counter-app) | Level 1 &bull; DOM & Events | Variables, DOM Selection, `textContent`, `addEventListener`, Dynamic Styling |
| 02 | [Color Changer](./02-color-changer) | Level 1 &bull; DOM & Events | Style Manipulation, Random Hex Generation, Clipboard API, History |
| 03 | [Digital Clock](./03-digital-clock) | Level 1 &bull; DOM & Events | `Date` Object, `setInterval`, String Padding (`padStart`), 12h/24h Toggle |
| 04 | [Character Counter](./04-character-counter) | Level 1 &bull; DOM & Events | `input` Event, String `.length`, Word Counting, Character Limits |
| 05 | [Tip Calculator](./05-tip-calculator) | Level 1 &bull; DOM & Events | Number Parsing, Arithmetic Calculation, `toFixed(2)`, Input Handling |
| 06 | [Temperature Converter](./06-temperature-converter) | Level 1 &bull; DOM & Events | Bidirectional Sync, Mathematical Formulas, Unit Conversion |
| 07 | [Show/Hide Password](./07-show-hide-password) | Level 1 &bull; DOM & Events | Input Types (`password`/`text`), Attribute Toggling, Strength Meter |
| 08 | [Image Switcher](./08-image-switcher) | Level 1 &bull; DOM & Events | Array Indices, Carousel Navigation, Button `disabled` State, SVG Artwork |
| 09 | [Random Quote Generator](./09-random-quote-generator) | Level 1 &bull; DOM & Events | Array of Objects, `Math.random()`, Deduplication, Clipboard API |
| 10 | [Accordion](./10-accordion) | Level 1 &bull; DOM & Events | DOM Traversal, `classList`, Accordion Mutual Exclusion, ARIA Attributes |
| 11 | [Number Guessing Game](./11-number-guessing-game) | Level 2 &bull; Core JavaScript | Random Numbers, Conditional Logic, Game State, Attempts Tracking |
| 12 | [Rock Paper Scissors](./12-rock-paper-scissors) | Level 2 &bull; Core JavaScript | Randomization, Win/Loss Decision Logic, Scoreboard State |
| 13 | [Dice Roller](./13-dice-roller) | Level 2 &bull; Core JavaScript | Random Integers (1–6), Roll History Array, Rolling Average, Keyframe Animation |
| 14 | [Simple Calculator](./14-simple-calculator) | Level 2 &bull; Core JavaScript | State Machine, Arithmetic Operators, Zero Division Guard, No `eval()` |
| 15 | [Countdown Timer](./15-countdown-timer) | Level 2 &bull; Core JavaScript | `setInterval`, `clearInterval`, Time Formatting, Pause/Resume State |
| 16 | [Password Generator](./16-password-generator) | Level 2 &bull; Core JavaScript | Character Pools, Random Sampling, Clipboard API, Checkbox Controls |
| 17 | [Word Counter](./17-word-counter) | Level 2 &bull; Core JavaScript | Regex Tokenization, Array Filtering, Reading Speed Estimation |
| 18 | [Palindrome Checker](./18-palindrome-checker) | Level 2 &bull; Core JavaScript | String Sanitization, Regex (`/[^a-z0-9]/gi`), Array Reversal |
| 19 | [Character Frequency Counter](./19-character-frequency-counter) | Level 2 &bull; Core JavaScript | Hash Maps / Dictionaries, `Object.entries()`, Descending Sort, DOM Bars |
| 20 | [Shopping List](./20-shopping-list) | Level 2 &bull; Core JavaScript | Array of Objects, Dynamic DOM Creation, Checkbox Strikethrough, CRUD |
| 21 | [Todo List](./21-todo-list) | Level 3 &bull; Intermediate Browser JS | Event Delegation, Inline Task Editing, Filter Tabs, CRUD Operations |
| 22 | [Notes App](./22-notes-app) | Level 3 &bull; Intermediate Browser JS | `localStorage`, `JSON.stringify/parse`, Live Search, Card Grid |
| 23 | [Expense Tracker](./23-expense-tracker) | Level 3 &bull; Intermediate Browser JS | `Array.prototype.reduce()`, `localStorage`, Balance Computation |
| 24 | [Quiz App](./24-quiz-app) | Level 3 &bull; Intermediate Browser JS | 10 Question Dataset, Real-Time Feedback, Progress Bar, Score Screen |
| 25 | [Product Filter](./25-product-filter) | Level 3 &bull; Intermediate Browser JS | `.filter()`, `.map()`, `.sort()`, `.includes()`, Dynamic Product Grid |
| 26 | [Search Filter](./26-search-filter) | Level 3 &bull; Intermediate Browser JS | Real-Time Search, Case-Insensitive Matching, Empty-State Handling |
| 27 | [Form Validator](./27-form-validator) | Level 3 &bull; Intermediate Browser JS | Form Submission, Regex Validation, Inline Error Messaging |
| 28 | [Tabs Component](./28-tabs-component) | Level 3 &bull; Intermediate Browser JS | ARIA Roles (`tab`, `tabpanel`), Class Toggling, Modular UI |
| 29 | [Modal Component](./29-modal-component) | Level 3 &bull; Intermediate Browser JS | Backdrop Click Dismissal, `Escape` Key Event, Focus Management |
| 30 | [Mini Weather App](./30-mini-weather-app) | Level 3 &bull; Intermediate Browser JS | `fetch()`, `async/await`, REST API, WMO Codes, Loading & Error States |

---

## How to Run the Projects

Because each project is built entirely with vanilla web standards, no bundlers, compilation steps, or `npm install` commands are needed.

### Option 1: Direct File Opening
1. Navigate into any project directory (for example `01-counter-app`).
2. Double-click `index.html` or open it directly in any modern web browser (Chrome, Firefox, Safari, Edge).

### Option 2: Local Static Server (Recommended)
Running through a local static HTTP server allows browser features like `fetch()` to execute with optimal CORS behavior:

Using Python:
```bash
# From the repository root
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser and click on any project folder.

Using Node (`npx serve`):
```bash
npx serve .
```

---

## Directory Structure

Each project folder follows a clean, consistent structure:

```text
01-counter-app/
├── index.html   # Semantic HTML markup
├── style.css    # Clean, modern CSS styling
├── script.js    # Readable Vanilla JavaScript
└── README.md    # Student exercise specification & bonus challenges
```

---

## Guidelines for Students

- **Practice First**: Read the project's individual `README.md` objective, requirements, and concepts before inspecting the implementation.
- **Tackle Bonus Challenges**: Each project includes bonus exercises designed to push your understanding further.
- **Keep it Vanilla**: Resist the temptation to introduce external libraries — mastering vanilla JavaScript makes learning any frontend framework much simpler.
