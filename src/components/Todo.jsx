import React from "react";

function Todo({ todo, onDelete }) {
  return (
    <li className="flex justify-between items-center gap-2 rounded-md shadow-lg p-3 bg-[#333] text-white">
      <span className="">{todo.task}</span>
      <button
        onClick={onDelete}
        data-id={todo.id}
        className="px-4 py-2 bg-[red] rounded-md text-white hover:bg-white hover:text-[red] transition-colors"
      >
        X
      </button>
    </li>
  );
}

export default Todo;
