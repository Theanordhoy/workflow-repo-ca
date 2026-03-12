# Workflow

This is a venue listing web application that already existed.
I have forked the repository and installed and configured tools like ESLint, Prettier and pre-commit hooks. Then I tested the code with Vitest for unit tests and Playwright for e2e tests.

## Features

- ESLint for code linting
- Prettier for code formatting
- Husky and lint-staged for pre-commit hooks
- Vitest for unit tests
- Playwright for e2e tests

## Prerequisites

- Node.js (v20+)
- npm

## Getting Started

### Installation

```bash
npm install
```

### Running the project

```bash
npm run dev
```

### Running tests

#### Vitest

```bash
npm run test
```

#### Playwright:

```bash
npm run e2e
```

## Environmental Variables

Create a `.env` file in the root directory and add the following variables:

```bash
TEST_USER_EMAIL=your-email-here
TEST_USER_PASSWORD=your-password
```

## Available Scripts

- `npm run dev` - Start development Server
- `npm run build` - Build for production
- `npm run start` - Start the live server
- `npx eslint` - Run ESLint
- `npm run test` - Run Vitest unit tests
- `npm run e2e` - Run e2e Playwright tests
- `npm run e2e:ui` - Run with UI mode
- `npm run e2e:headed` - Runs test while showing the browser
- `npm run e2e:debug` - Run in debug mode

## Technologies

- HTML
- CSS
- JavaScript
- ESLint
- Prettier
- JSDOM
- Husky
- lint-staged
- Vitest
- Playwright

## Author

Thea Nordhøy Kristensen

[GitHub](https://github.com/Theanordhoy$0) -
[Linkedin](https://www.linkedin.com/in/thea-nordhøy-kristensen-909990347/) -
thea.n.k@hotmail.com
