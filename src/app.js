const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/greet/:name", (req, res) => {
  const { name } = req.params;
  if (!name || name.trim() === "") {
    return res.status(400).json({ error: "Name is required" });
  }
  res.json({ message: `Hello, ${name}!` });
});

app.post("/sum", (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({ error: "Both a and b must be numbers" });
  }
  res.json({ result: a + b });
});

// This is the commnet to test the workflow

module.exports = app;
