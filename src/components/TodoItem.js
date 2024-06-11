import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../TodoItem.css"; // Correct path to the CSS file

const TodoItem = ({ todo, completeTodo, removeTodo, updateTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-text" onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="todo-actions">
        <FaEdit onClick={() => updateTodo(todo)} className="edit-icon" />
        <FaTrash onClick={() => removeTodo(todo.id)} className="delete-icon" />
      </div>
    </div>
  );
};

export default TodoItem;
