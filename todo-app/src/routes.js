// src/routes.js

const express = require("express");
const router = express.Router();
const {
  getTodos,
  addTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
} = require("./todoModel");
const { validateTodo } = require("./middleware");

router.get("/todos", (req, res) => {
  res.json(getTodos());
});

router.post("/todos", validateTodo, (req, res) => {
  const { text } = req.body;
  const newTodo = addTodo(text);
  res.status(201).json(newTodo);
});

router.get("/todos/:id", (req, res) => {
  const todo = getTodoById(Number(req.params.id));
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

router.put("/todos/:id", validateTodo, (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;
  const updates = { text, completed };
  const updatedTodo = updateTodo(Number(id), updates);
  if (updatedTodo) {
    res.json(updatedTodo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

router.delete("/todos/:id", (req, res) => {
  const todo = deleteTodo(Number(req.params.id));
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

module.exports = router;
