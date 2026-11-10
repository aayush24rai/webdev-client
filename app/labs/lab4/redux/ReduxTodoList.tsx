"use client";
import { useAppSelector } from "./store";
import ReduxTodoForm from "./ReduxTodoForm";
import ReduxTodoItem from "./ReduxTodoItem";
export default function ReduxTodoList() {
  const { todos } = useAppSelector((state) => state.todosReducer);
  return (
    <div id="wd-redux-todo-list">
      <h3>Redux Todo List</h3>
      <ul>
        <ReduxTodoForm />
        {todos.map((todo) => (
          <ReduxTodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
