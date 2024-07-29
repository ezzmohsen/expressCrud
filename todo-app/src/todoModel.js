// src/todoModel.js

const todos = [];
let nextId = 1;

const getTodos = () => todos;

const addTodo = (text) => {
  const todo = { id: nextId++, text, completed: false };
  todos.push(todo);
  return todo;
};

const getTodoById = (id) => todos.find((todo) => todo.id === id);

const updateTodo = (id, updates) => {
  const todo = getTodoById(id);
  if (todo) {
    Object.assign(todo, updates);
    return todo;
  }
  return null;
};

const deleteTodo = (id) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    return todos.splice(index, 1)[0];
  }
  return null;
};

module.exports = { getTodos, addTodo, getTodoById, updateTodo, deleteTodo };
