import React, { useState } from "react";
import "./style.css";

function TodoForm({ todos, setTodos }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length !== 0) {
      setTodos([...todos, input]);
      setInput("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Todo"
        value={input}
        className="todo-input"
        onChange={handleChange}
        autoFocus
      />
      <button className="todo-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;
