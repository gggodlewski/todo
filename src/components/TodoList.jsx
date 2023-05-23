import React from "react";
import Todo from "./Todo";

function TodoList({ todos, handleDelete }) {
  return (
    <ul className="w-full flex flex-col items-stretch gap-2">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} onDelete={handleDelete} />
      ))}
    </ul>
  );
}

export default TodoList;
