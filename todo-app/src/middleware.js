// src/middleware.js

const validateTodo = (req, res, next) => {
  const { text } = req.body;
  if (!text || typeof text !== "string" || text.trim().length === 0) {
    return res.status(400).json({ error: "Invalid todo text" });
  }
  next();
};

module.exports = { validateTodo };
