# Mini Weather App

## Objective

Build a weather application that fetches real-time meteorological data using a public, keyless REST API (Open-Meteo), featuring loading states, error handling, and weather condition visualization.

## Requirements

- Input field to search weather by city name.
- Fetch geographic coordinates and current weather using the free public Open-Meteo REST API (requires no secret API key).
- Display:
  - City name and country
  - Current temperature in &deg;C
  - Weather condition description and icon (mapped from WMO weather codes)
  - Relative humidity percentage
  - Wind speed in km/h
- Provide an active loading state while the asynchronous request is pending.
- Gracefully handle errors: invalid city name, offline/network errors, and failed responses.
- No secret API keys exposed in source code.

## Concepts Practiced

- Fetch API (`fetch()`) with asynchronous `async / await`
- Promise handling and `try ... catch` error boundaries
- Parsing JSON responses
- Dynamic state rendering (loading, success, error)
- WMO weather code interpretation

## Bonus Challenges

- Add quick city shortcut pills (London, Tokyo, New York, Paris).
- Add temperature unit toggle (&deg;C vs &deg;F).

## Restrictions

Use only HTML, CSS and Vanilla JavaScript.

Do not use frameworks or libraries. Do not hardcode secret keys.

## How to Run

Open `index.html` in a browser.
