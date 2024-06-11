import React, { useState } from "react";
import "../TodoForm.css"; // Correct path to the CSS file

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo({
        id: Math.random().toString(36).substr(2, 9),
        text: input,
        completed: false,
      });
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
