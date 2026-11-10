"use client";
import { useAppDispatch, useAppSelector } from "./store";
import { addTodo, setTodo, updateTodo } from "./todosReducer";
export default function ReduxTodoForm() {
  const { todo } = useAppSelector((state) => state.todosReducer);
  const dispatch = useAppDispatch();
  return (
    <li id="wd-redux-todo-form">
      <input
        id="wd-redux-todo-title"
        className="border p-1"
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />{" "}
      <button onClick={() => dispatch(addTodo(todo))} id="wd-redux-add-todo-click">
        Add
      </button>{" "}
      <button onClick={() => dispatch(updateTodo(todo))} id="wd-redux-update-todo-click">
        Update
      </button>
    </li>
  );
}
