import React from "react";
import { useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoDisplay from "./Components/TodoDisplay";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Sakshi_mudgul", completed: "ECE" },
    { id: 2, title: "Shruti_saskar", completed: "ECE" },
    { id: 3, title: "Rohit_pawar", completed: "ECE" },
    { id: 4, title: "Tanuja_sanap", completed: "ECE" },
    { id: 5, title: "Tanishka_kalamkar", completed: "ECE" },
    { id: 6, title: "Pratiksha_Gavahle", completed: "ECE" },
    { id: 7, title: "Khusbu_deore", completed: "ECE" },
    { id: 8, title: "Raghini_dighe", completed: "ECE" },
  ]);

  // 🔹 Edit states
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // 🔹 Start editing
  const startEdit = (id, title) => {
    setEditId(id);
    setEditText(title);
  };

  // 🔹 Save edited todo
  const saveEdit = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, title: editText } : todo,
      ),
    );
    setEditId(null);
    setEditText("");
  };

  // 🔹 Cancel editing
  const cancelEdit = () => {
    setEditId(null);
    setEditText("");
  };
  return (
    <div className="bg-amber-200">
      <ToastContainer />
      <h1 className="flex justify-center text-2xl font-bold">Todo List</h1>

      <TodoForm addTodo={addTodo} />

      <TodoDisplay
        todos={todos}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
        editId={editId}
        editText={editText}
        setEditText={setEditText}
        startEdit={startEdit}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
      />
    </div>
  );
}

export default App;
