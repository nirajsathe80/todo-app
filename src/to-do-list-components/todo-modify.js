import React, { useState } from "react";

function TodoModify({ setModify, todoTobeUpdated, indexSelected, todos }) {
  const [changedInput, setChnagedInput] = useState(todoTobeUpdated);
  const handleUpdate = (e) => {
    e.preventDefault();
    setModify(false);
    todos[indexSelected] = changedInput;
  };

  const handleChange = (e) => {
    setChnagedInput(e.target.value);
  };
  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        value={changedInput}
        className="todo-input"
        onChange={handleChange}
        autoFocus
      />
      <button className="todo-button todo-update-button">Update</button>
    </form>
  );
}

export default TodoModify;
