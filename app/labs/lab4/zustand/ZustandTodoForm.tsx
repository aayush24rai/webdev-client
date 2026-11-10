"use client";
import { useTodoStore } from "./todoStore";
export default function ZustandTodoForm() {
  const todo = useTodoStore((s) => s.todo);
  const setTodo = useTodoStore((s) => s.setTodo);
  const addTodo = useTodoStore((s) => s.addTodo);
  const updateTodo = useTodoStore((s) => s.updateTodo);
  return (
    <li id="wd-zustand-todo-form">
      <input
        id="wd-zustand-todo-title"
        className="border p-1"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />{" "}
      <button onClick={addTodo} id="wd-zustand-add-todo-click">
        Add
      </button>{" "}
      <button onClick={updateTodo} id="wd-zustand-update-todo-click">
        Update
      </button>
    </li>
  );
}
