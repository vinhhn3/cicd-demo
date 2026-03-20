# Express GitHub Actions CI Demo

A minimal Node.js/Express app that demonstrates a GitHub Actions CI pipeline.

## Project Structure

```
├── src/
│   ├── app.js          # Express app (routes)
│   └── server.js       # HTTP server entry point
├── tests/
│   └── app.test.js     # Jest + Supertest tests
├── .github/
│   └── workflows/
│       └── ci.yml      # GitHub Actions CI workflow
├── .eslintrc.js        # ESLint config
└── package.json
```

## API Endpoints

| Method | Path           | Description                       |
|--------|----------------|-----------------------------------|
| GET    | `/`            | Returns a welcome message         |
| GET    | `/health`      | Health check                      |
| GET    | `/greet/:name` | Greets the given name             |
| POST   | `/sum`         | Returns the sum of `a` and `b`    |

### POST /sum — Request Body

```json
{ "a": 5, "b": 3 }
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the server

```bash
npm start
```

### Run tests

```bash
npm test
```

### Run linter

```bash
npm run lint
```

## CI Pipeline (GitHub Actions)

The workflow in [`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs automatically on:

- Every push to `main` or any `feature/**` branch
- Every pull request targeting `main`

### What the CI does

1. **Checkout** — fetches the repository code
2. **Setup Node.js** — installs Node 18.x and 20.x (matrix build)
3. **Install dependencies** — runs `npm ci` for a clean install
4. **Lint** — checks code style with ESLint
5. **Test** — runs Jest with coverage
6. **Upload coverage** — saves the coverage report as a build artifact

```
Push / PR
    │
    ▼
┌─────────────────────────────────┐
│  CI Workflow (ubuntu-latest)    │
│                                 │
│  Matrix: Node 18.x | 20.x      │
│                                 │
│  1. Checkout code               │
│  2. Setup Node.js               │
│  3. npm ci                      │
│  4. npm run lint                │
│  5. npm test (+ coverage)       │
│  6. Upload coverage artifact    │
└─────────────────────────────────┘
```
