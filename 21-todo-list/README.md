# Todo List

## Objective

Build a full-featured task management application supporting task creation, inline editing, deletion, completion toggling, status filtering, and count tracking using event delegation.

## Requirements

- Add new task via input and Enter key or Add button.
- Toggle task completion with visual strikethrough.
- Edit existing task description inline.
- Delete individual tasks.
- Filter tasks by: "All", "Active", and "Completed".
- Display active task count remaining.
- "Clear Completed" button to purge finished tasks.
- Implement event handling on the task list using **Event Delegation**.

## Concepts Practiced

- Event delegation (`element.addEventListener` on parent listening to `event.target`)
- Array methods (`filter()`, `map()`, `findIndex()`)
- Dynamic DOM updating
- State management and filter views

## Bonus Challenges

- Persist tasks in `localStorage`.
- Drag and drop reordering of tasks.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
