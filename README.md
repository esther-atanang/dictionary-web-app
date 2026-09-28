# Dictionary Web App

A responsive dictionary interface built for the [Frontend Mentor Dictionary web app challenge](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL). It looks up English words with the [Free Dictionary API](https://dictionaryapi.dev/) and presents definitions, pronunciation, and audio when the API provides it.

## Features

- Search for an English word and view its meanings, parts of speech, examples, synonyms, antonyms, and source link when available
- Play pronunciation audio when an audio file is returned by the API
- Switch between sans-serif, serif, and monospace typefaces
- Toggle between light and dark themes
- Show a validation message when submitting an empty search
- Responsive layout for desktop and mobile screens

## Run locally

The app is a static site. No package installation or build step is required. Serve the `dist` directory from a local web server, then open the server URL in a browser.

For example, with Python 3 installed:

```sh
cd dist
python3 -m http.server 8000
```

Visit [http://localhost:8000](http://localhost:8000). Press `Ctrl+C` in the terminal to stop the server.

The app needs an internet connection to request definitions from the Free Dictionary API.

## Project structure

```text
dist/
  index.html          Page markup
  index.js            Search, theme, font, and audio interactions
  styles/             Compiled CSS and its SCSS source
  assets/             Fonts, icons, and images
```

## Technologies

- HTML
- CSS, with SCSS source files
- Vanilla JavaScript
- [Free Dictionary API](https://dictionaryapi.dev/)
- [Font Awesome](https://fontawesome.com/) icons

## Acknowledgments

The interface is based on the [Frontend Mentor Dictionary web app challenge](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL). Definitions are provided by [dictionaryapi.dev](https://dictionaryapi.dev/).
