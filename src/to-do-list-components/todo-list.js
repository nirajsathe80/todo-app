import React from "react";

function TodoList({
  todos,
  setTodos,
  setModify,
  setTodoTobeUpdated,
  setIndexSelected,
}) {
  const handleDeleteItem = (selectedIdx) => {
    let modifiedTodoList = todos.filter((el, index) => selectedIdx !== index);
    setTodos([...modifiedTodoList]);
  };

  const handleModify = (selectedIdx) => {
    setModify(true);
    setTodoTobeUpdated(todos[selectedIdx]);
    setIndexSelected(selectedIdx);
  };
  return (
    <div className="todo-card">
      {todos.map((todo, idx) => (
        <div className="todo-card-container" key={idx}>
          <p>{todo}</p>
          <div className="todo-update">
            <div className="todo-close" onClick={() => handleDeleteItem(idx)}>
              X
            </div>
            <div className="todo-modify" onClick={() => handleModify(idx)}>
              <i className="fa-regular fa-pen-to-square"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
