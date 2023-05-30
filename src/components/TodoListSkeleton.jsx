import React from "react";

function TodoListSkeleton() {
  return (
    <ul className="w-full flex flex-col items-stretch gap-2">
      <li className="animate-pulse flex justify-between items-center gap-2 rounded-md shadow-lg p-3 bg-[#333] text-white">
        <span>Loading...</span>
        <button
          disabled
          className="px-4 py-2 bg-[red] rounded-md text-white hover:bg-white hover:text-[red] transition-colors"
        >
          X
        </button>
      </li>
      <li className="animate-pulse flex justify-between items-center gap-2 rounded-md shadow-lg p-3 bg-[#333] text-white">
        <span>Loading...</span>
        <button
          disabled
          className="px-4 py-2 bg-[red] rounded-md text-white hover:bg-white hover:text-[red] transition-colors"
        >
          X
        </button>
      </li>
      <li className="animate-pulse flex justify-between items-center gap-2 rounded-md shadow-lg p-3 bg-[#333] text-white">
        <span>Loading...</span>
        <button
          disabled
          className="px-4 py-2 bg-[red] rounded-md text-white hover:bg-white hover:text-[red] transition-colors"
        >
          X
        </button>
      </li>
    </ul>
  );
}

export default TodoListSkeleton;
