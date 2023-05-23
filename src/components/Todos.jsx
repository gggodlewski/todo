import { React, useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.length <= 0) return;
    const id = new Date().getTime().toString();
    setTodos((prevState) => [...prevState, { task: todo, id }]);
    setTodo("");
  };

  const handleDelete = (e) => {
    const newTodos = todos.filter((todo) => todo.id !== e.target.dataset.id);
    setTodos(newTodos);
  };

  return (
    <div className="w-full max-w-5xl p-5 flex flex-col gap-4 bg-black rounded-md shadow-lg">
      <TodoList todos={todos} handleDelete={handleDelete} />
      <TodoForm todo={todo} handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default Todos;
