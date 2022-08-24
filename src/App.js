import React, { useState, useEffect } from "react";
import Todo from "./to-do-list-components/todo";
import "./App.css";

function App() {
  return (
    <div className="todo-container">
      <Todo />
    </div>
  );
}

export default App;
