import React from "react";
import { ImCross } from "react-icons/im";
import { FaEdit, FaCheck, FaTimes } from "react-icons/fa";

function Todo({
  title,
  completed,
  id,
  toggleCompleted,
  removeTodo,
  editId,
  editText,
  setEditText,
  startEdit,
  saveEdit,
  cancelEdit,
}) {
  const isEditing = editId === id;
  return (
    <div>
      <div className="flex">
        {isEditing && (
          <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleCompleted(id)}
          ></input>
        )}
        <div className="text-black border p-2 w-full m-4"> Name : {title}</div>
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          ></input>
        ) : (
          <p className={completed ? "complted" : ""}></p>
        )}
      </div>
      <div className="todo-actions ml-4">
        {isEditing ? (
          <>
            <span className="save-btn" onClick={() => saveEdit(id)}>
              <FaCheck />
            </span>
            <span className="cancel-btn" onClick={cancelEdit}>
              <FaTimes />
            </span>
          </>
        ) : (
          <>
            <span className="edit-btn " onClick={() => startEdit(id, title)}>
              <FaEdit />
            </span>
            <span className="cross-btn" onClick={() => removeTodo(id)}>
              <ImCross />
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default Todo;
