import React from "react";

function TodoForm({ handleSubmit, handleOnChange, todo, loading }) {
  return (
    <form onSubmit={handleSubmit} className="w-full flex item-center gap-2">
      <input disabled={loading} onChange={handleOnChange} value={todo} className="flex-grow px-2" type="text" />
      <button
        disabled={loading}
        className="px-4 py-2 bg-[#333] rounded-md text-white hover:bg-white hover:text-[#333] transition-colors"
      >
        {loading ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
}

export default TodoForm;
