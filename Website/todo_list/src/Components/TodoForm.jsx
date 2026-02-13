import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

function TodoForm({ addTodo }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    console.log("handle Submit!", name);
    e.preventDefault();
    if (name.trim().length === 0) {
      toast.error("Pleasse Fill Input", { autoclose: 2000 });
      return;
    }
    const newTodo = {
      name: name,
      completed: false,
      id: uuid(),
    };
    addTodo(newTodo);
    setName("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border m-2 bg-white p-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="border p-3 rounded-lg bg-amber-950 text-white"
          type="submit "
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
