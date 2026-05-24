# My Calculator

A clean calculator app built with React.

It supports basic arithmetic operations with a simple UI and responsive layout.

## Features

- Basic operations: addition (`+`), subtraction (`-`), multiplication (`×`), and division (`÷`)
- Decimal number input (`.`)
- Sign toggle (`±`)
- Backspace/delete (`⌫`)
- All clear reset (`AC`)
- Chained operations support (compute while selecting a new operator)

## Tech Stack

- React
- Create React App (`react-scripts`)
- Plain CSS for styling

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm start
```

Then open:

`http://localhost:3000`

## Available Scripts

- `npm start` - Starts the app in development mode.
- `npm test` - Runs tests in watch mode.
- `npm run build` - Creates an optimized production build in `build/`.
- `npm run eject` - Ejects CRA config (irreversible).

## Project Structure

```text
my-calculator/
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Usage Notes

- Results are rounded to 2 decimal places.
- Display starts at `0`.
- Press `=` to evaluate the current expression.

## Future Improvements

- Keyboard support
- Calculation history
- Unit/integration tests for calculator behavior
- Better handling for edge cases (e.g., division by zero messaging)
