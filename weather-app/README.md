# Weather App

A responsive weather application built with React and Vite.
Search for a city to view the current weather and a multi-day forecast, and save favorite cities for quick access.

## Features

* Search for weather by city
* Display current weather conditions
* Display a multi-day weather forecast
* Weather icons based on weather conditions
* Save cities as favorites
* Remove cities from favorites
* Favorites are saved using `localStorage`
* Loading and error states
* Empty state for favorites
* Responsive design
* Keyboard-friendly navigation
* Screen reader support

## Technologies

* React
* Vite
* React Router
* JavaScript
* CSS
* Open-Meteo API
* localStorage

## Project Structure

```text
src/
├── components/
│   ├── EmptyState/
│   ├── ErrorMessage/
│   ├── ForecastList/
│   ├── Header/
│   ├── Loading/
│   ├── SearchBar/
│   └── WeatherCard/
├── context/
│   └── WeatherContext.jsx
├── helpers/
│   └── weatherHelpers.js
├── hooks/
│   └── useWeather.js
├── pages/
│   ├── Favorites/
│   ├── Home/
│   └── WeatherDetails/
├── App.jsx
└── main.jsx
```

## API

The application uses the free [Open-Meteo API](https://open-meteo.com/) for weather data and geocoding.

Two API requests are used:

1. Geocoding API – finds the coordinates of the searched city.
2. Weather API – retrieves the current weather and forecast using those coordinates.

## Routes

| Route            | Description                       |
| ---------------- | --------------------------------- |
| `/`              | Search for a city                 |
| `/weather/:city` | View weather details and forecast |
| `/favorites`     | View and manage favorite cities   |

## Getting Started

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will then be available through the local development URL shown in the terminal.

## What I Practiced

This project was created as part of my frontend development studies and focuses on:

* React components and Single Responsibility Principle
* React Router
* Context API
* Custom hooks
* API requests
* Loading and error handling
* Form validation
* `localStorage`
* Responsive design
* Accessibility
* Separating data fetching from presentation

## Author

Victoria Friberg

[GitHub](https://github.com/adTori)
