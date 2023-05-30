import { React, useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { useFetch } from "../hooks/useFetch";
import TodoListSkeleton from "./TodoListSkeleton";

function Todos() {
  const { data: todos, isLoading, postData, deleteData } = useFetch("http://localhost:3000/todos");
  const [todo, setTodo] = useState("");

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.length <= 0) return;
    postData({
      task: todo,
    });
    setTodo("");
  };

  const handleDelete = (e) => {
    deleteData(+e.target.dataset.id);
  };

  return (
    <div className="w-full max-w-5xl p-5 flex flex-col gap-4 bg-black rounded-md shadow-lg">
      {isLoading && todos.length <= 0 ? <TodoListSkeleton /> : <TodoList todos={todos} handleDelete={handleDelete} />}
      <TodoForm loading={isLoading} todo={todo} handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default Todos;
