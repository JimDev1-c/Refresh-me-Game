# Refresh Me

Refresh Me is a small two-player dice game. Each time the page is loaded or
refreshed, the game rolls one six-sided die for each player and displays the
result.

## How to play

1. Open the game in a web browser.
2. Compare the two dice:
   - The player with the higher roll wins.
   - Equal rolls result in a draw.
3. Select **Roll again** for another round.

## Requirements

- A modern web browser.
- No installation, build step, or JavaScript dependencies are required.

The page loads the Lobster and Indie Flower fonts from Google Fonts. If those
fonts cannot be reached, the browser uses the CSS fallback fonts.

## Run locally

Open [`RefreshMeGame/index.html`](./RefreshMeGame/index.html) directly in a
browser. Alternatively, serve the `RefreshMeGame` directory with any static
web server and open its `index.html` page.

## Project structure

```text
RefreshMeGame/
├── index.html       # Game page and player display
├── main.js          # Random rolls, dice images, and winner selection
├── style.css        # Layout, colors, and typography
└── Images/
    ├── dice1.png
    ├── dice2.png
    ├── dice3.png
    ├── dice4.png
    ├── dice5.png
    └── dice6.png
```

## Implementation

The project uses plain HTML, CSS, and browser JavaScript. On page load,
`main.js` generates an independent random value from 1 to 6 for each player,
updates the corresponding die images, and changes the heading to show the
winner or a draw. There is no separate server-side component or persisted game
state.

## Compatibility note

The image directory is named `Images` in the project, while the HTML and
JavaScript refer to it as `images`. This works on typical Windows file systems,
which are case-insensitive, but may prevent the dice images from loading on
case-sensitive systems. Keep the directory name and image paths consistent if
the project is moved to such a system.
