import React, { useReducer, useState } from "react";

// Reducer function
const todoReducer = (todos, action) => {
  switch (action.type) {
    case "add":
      return [...todos, action.text];
    case "remove":
      return todos.filter((_, index) => index !== action.index);
    default:
      return todos;
  }
};

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      dispatch({ type: "add", text: input });
      setInput("");
    }
  };

  return (
    <div>
      <h3>Simple Todo List</h3>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => dispatch({ type: "remove", index })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
