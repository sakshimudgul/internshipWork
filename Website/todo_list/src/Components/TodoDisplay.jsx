import React from "react";
import Todo from "./Todo";

function TodoDisplay({
  todos,
  toggleCompleted,
  removeTodo,
  editId,
  editText,
  setEditText,
  startEdit,
  saveEdit,
  cancelEdit,
}) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todos.id}
          {...todo}
          toggleComppleted={toggleCompleted}
          removeTodo={removeTodo}
          editId={editId}
          editText={editText}
          setEditText={setEditText}
          startEdit={startEdit}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      ))}
    </div>
  );
}

export default TodoDisplay;
