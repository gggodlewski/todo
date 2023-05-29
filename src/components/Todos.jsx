import { React, useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { useLocalStorage } from "../hooks/useLocalStorage";

function Todos() {
  const [todo, setTodo] = useState("");
  const { value: todos, setValue: setTodos } = useLocalStorage("todos");

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.length <= 0) return;
    const id = new Date().getTime().toString();
    const newTodos = [...todos, { task: todo, id }];
    setTodos(newTodos);
    setTodo("");
    window.localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleDelete = (e) => {
    const newTodos = todos.filter((todo) => todo.id !== e.target.dataset.id);
    setTodos(newTodos);
    window.localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="w-full max-w-5xl p-5 flex flex-col gap-4 bg-black rounded-md shadow-lg">
      {todos && <TodoList todos={todos} handleDelete={handleDelete} />}
      <TodoForm todo={todo} handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default Todos;
