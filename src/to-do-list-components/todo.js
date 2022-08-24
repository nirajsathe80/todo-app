import React, { useState } from "react";
import TodoForm from "./todo-form";
import "./style.css";
import TodoList from "./todo-list";
import TodoModify from "./todo-modify";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [modify, setModify] = useState(false);
  const [todoTobeUpdated, setTodoTobeUpdated] = useState("");
  const [indexSelected, setIndexSelected] = useState(null);
  return (
    <div className="todo">
      <h1>What's the Plan for Today?</h1>
      <TodoForm setTodos={setTodos} todos={todos} />
      {modify && (
        <TodoModify
          setModify={setModify}
          todoTobeUpdated={todoTobeUpdated}
          indexSelected={indexSelected}
          todos={todos}
        />
      )}
      <TodoList
        setTodos={setTodos}
        todos={todos}
        setModify={setModify}
        setTodoTobeUpdated={setTodoTobeUpdated}
        setIndexSelected={setIndexSelected}
      />
    </div>
  );
}

export default Todo;
