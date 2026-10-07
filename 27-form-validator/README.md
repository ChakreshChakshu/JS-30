# Form Validator

## Objective

Build a registration form featuring robust client-side validation for required fields, email formatting, password strength, password confirmation matching, and phone number validation.

## Requirements

- Fields:
  - Full Name (required, min 2 characters)
  - Email Address (valid email format regex)
  - Password (min 8 characters, includes numbers and letters)
  - Confirm Password (must match password exactly)
  - Phone Number (valid numeric phone formatting)
- Display specific validation error messages directly beneath each field.
- Highlight input borders in red for invalid fields and green for valid fields.
- Prevent form submission if any validations fail.
- Display a success confirmation card on valid submission.

## Concepts Practiced

- Form events (`submit`, `input`, `blur`)
- Regular expressions for input testing (`regex.test()`)
- DOM error messaging and state updates
- Preventing default submission behavior (`event.preventDefault()`)

## Bonus Challenges

- Add real-time validation on `blur` or `input`.
- Add an eye toggle for password visibility.

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries.

## How to Run

Open `index.html` in a browser.
