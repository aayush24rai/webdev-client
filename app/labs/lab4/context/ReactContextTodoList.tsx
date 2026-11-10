"use client";
import { useState } from "react";
import { initialContextTodos, Todo, TodosContext, useTodosContext } from "./todosContext";

const emptyTodo: Todo = { id: "-1", title: "Learn React Context" };

function ContextTodoForm() {
  const { todo, setTodo, addTodo, updateTodo } = useTodosContext();
  return (
    <li id="wd-context-todo-form">
      <input
        id="wd-context-todo-title"
        className="border p-1"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />{" "}
      <button onClick={addTodo} id="wd-context-add-todo-click">
        Add
      </button>{" "}
      <button onClick={updateTodo} id="wd-context-update-todo-click">
        Update
      </button>
    </li>
  );
}

function ContextTodoItem({ todo }: { todo: Todo }) {
  const { setTodo, deleteTodo } = useTodosContext();
  return (
    <li id={`wd-context-todo-${todo.id}`}>
      {todo.title}{" "}
      <button onClick={() => setTodo(todo)} id={`wd-context-edit-todo-${todo.id}-click`}>
        Edit
      </button>{" "}
      <button onClick={() => deleteTodo(todo.id)} id={`wd-context-delete-todo-${todo.id}-click`}>
        Delete
      </button>
    </li>
  );
}

export default function ReactContextTodoList() {
  const [todos, setTodos] = useState<Todo[]>(initialContextTodos);
  const [todo, setTodo] = useState<Todo>(emptyTodo);
  const [nextId, setNextId] = useState(4);
  const value = {
    todos,
    todo,
    setTodo,
    addTodo: () => {
      setTodos([...todos, { ...todo, id: String(nextId) }]);
      setNextId(nextId + 1);
      setTodo(emptyTodo);
    },
    updateTodo: () => {
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setTodo(emptyTodo);
    },
    deleteTodo: (id: string) => setTodos(todos.filter((t) => t.id !== id)),
  };
  return (
    <TodosContext.Provider value={value}>
      <div id="wd-context-todo-list">
        <h3>React Context Todo List</h3>
        <ul>
          <ContextTodoForm />
          {todos.map((t) => (
            <ContextTodoItem key={t.id} todo={t} />
          ))}
        </ul>
      </div>
    </TodosContext.Provider>
  );
}
