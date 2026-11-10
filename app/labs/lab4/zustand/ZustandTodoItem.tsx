"use client";
import { Todo, useTodoStore } from "./todoStore";
export default function ZustandTodoItem({ todo }: { todo: Todo }) {
  const setTodo = useTodoStore((s) => s.setTodo);
  const deleteTodo = useTodoStore((s) => s.deleteTodo);
  const toggleDone = useTodoStore((s) => s.toggleDone);
  return (
    <li id={`wd-zustand-todo-${todo.id}`}>
      <input
        type="checkbox"
        id={`wd-zustand-todo-done-${todo.id}`}
        checked={todo.done}
        onChange={() => toggleDone(todo.id)}
      />{" "}
      <span className={todo.done ? "line-through" : ""}>{todo.title}</span>{" "}
      <button onClick={() => setTodo(todo)} id={`wd-zustand-edit-todo-${todo.id}-click`}>
        Edit
      </button>{" "}
      <button onClick={() => deleteTodo(todo.id)} id={`wd-zustand-delete-todo-${todo.id}-click`}>
        Delete
      </button>
    </li>
  );
}
