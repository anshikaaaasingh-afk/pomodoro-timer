# Pomodoro Timer ⏱️

A simple, clean Pomodoro Timer web app built with vanilla HTML, CSS, and
JavaScript to help you stay focused using the Pomodoro Technique.

## About

The Pomodoro Technique breaks work into focused intervals (usually 25
minutes), separated by short breaks. This app lets you start, pause, and
reset focus and break sessions right from your browser — no frameworks
required.

## Demo

```
🍅 Pomodoro Timer

        25:00

   [ Start ]  [ Pause ]  [ Reset ]

   Focus | Short Break | Long Break
```

## Features

- Focus, short break, and long break modes with separate durations
- Start, pause, and reset controls
- Visual countdown display (MM:SS format)
- Auto-switches between focus and break sessions
- Session counter to track completed Pomodoros
- Audio/visual alert when a session ends
- Responsive design for desktop and mobile

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)

### Run Locally

1. Clone or download this repository.
2. Open `index.html` directly in your browser, **or**
3. Use VS Code's **Live Server** extension for auto-reload during development.

```bash
git clone https://github.com/anshikaaaasingh-afk/pomodoro-timer.git
cd pomodoro-timer
```

Then open `index.html` in your browser.

## How to Use

1. Choose a mode: **Focus**, **Short Break**, or **Long Break**.
2. Click **Start** to begin the countdown.
3. Use **Pause** to take a breather without losing progress.
4. Use **Reset** to restart the current session from the beginning.
5. When the timer hits zero, it alerts you and moves to the next session.

## Project Structure

```
pomodoro-timer/
├── index.html      # App structure
├── style.css       # Styling and layout
├── script.js       # Timer logic (countdown, mode switching, alerts)
└── README.md       # This file
```

## Built With

- HTML5
- CSS3 (Flexbox/Grid, transitions)
- Vanilla JavaScript (setInterval, DOM manipulation)

## Future Improvements

- Customizable session/break durations
- Desktop notifications
- Dark/light mode toggle
- Task list integration to track what each Pomodoro was spent on
- Save session history using local storage

## License

Free to use and modify for personal or educational purposes.
