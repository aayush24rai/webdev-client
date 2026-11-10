"use client";
import { useAppDispatch } from "./store";
import { deleteTodo, ReduxTodo, setTodo } from "./todosReducer";
export default function ReduxTodoItem({ todo }: { todo: ReduxTodo }) {
  const dispatch = useAppDispatch();
  return (
    <li id={`wd-redux-todo-${todo.id}`}>
      {todo.title}{" "}
      <button onClick={() => dispatch(setTodo(todo))} id={`wd-redux-edit-todo-${todo.id}-click`}>
        Edit
      </button>{" "}
      <button onClick={() => dispatch(deleteTodo(todo.id))} id={`wd-redux-delete-todo-${todo.id}-click`}>
        Delete
      </button>
    </li>
  );
}
