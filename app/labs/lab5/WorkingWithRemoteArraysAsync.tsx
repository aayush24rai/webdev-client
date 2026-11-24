"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaPencilAlt, FaPlusCircle, FaTrash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";
import type { Todo } from "./client";

export default function WorkingWithRemoteArraysAsynchronously() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const showError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      setErrorMessage(error.response?.data?.message ?? error.message);
    } else {
      setErrorMessage(String(error));
    }
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setTodos(await client.fetchTodos());
      } catch (error) {
        showError(error);
      }
    };
    fetchTodos();
  }, []);

  // GET versions: the server answers with the whole array
  const createNewTodo = async () => {
    setTodos(await client.createNewTodo());
  };
  const removeTodo = async (todo: Todo) => {
    setTodos(await client.removeTodo(todo));
  };

  // proper verbs: POST returns the new todo, DELETE/PUT return a status
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({ title: "New Posted Todo", completed: false });
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = async (todo: Todo) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
      setErrorMessage(null);
    } catch (error) {
      showError(error);
    }
  };
  const editTodo = (todo: Todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)));
  };
  const updateTodo = async (todo: Todo) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setErrorMessage(null);
    } catch (error) {
      showError(error);
    }
  };

  return (
    <div id="wd-asynchronous-arrays" className="space-y-2">
      <h3 className="text-xl font-semibold">Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <p id="wd-todo-error-message" className="rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      <h4 className="flex items-center gap-2 text-lg font-semibold">
        Todos
        <FaPlusCircle onClick={createNewTodo} id="wd-create-todo"
          className="cursor-pointer text-green-600" title="Create (GET)" />
        <FaPlusCircle onClick={postNewTodo} id="wd-post-todo"
          className="cursor-pointer text-blue-600" title="Create (POST)" />
      </h4>
      <ul className="divide-y rounded border border-neutral-300">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2 px-3 py-2">
            <input type="checkbox" checked={!!todo.completed}
              onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })} />
            {!todo.editing ? (
              <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
            ) : (
              <input className="rounded border border-neutral-300 px-2 py-1"
                defaultValue={todo.title}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, title: e.currentTarget.value, editing: false });
                  }
                }} />
            )}
            <span className="ml-auto flex items-center gap-3">
              <FaPencilAlt onClick={() => editTodo(todo)}
                className="cursor-pointer text-blue-600" title="Edit (PUT)" />
              <TiDelete onClick={() => deleteTodo(todo)} id="wd-delete-todo"
                className="cursor-pointer text-2xl text-red-600" title="Delete (DELETE)" />
              <FaTrash onClick={() => removeTodo(todo)} id="wd-remove-todo"
                className="cursor-pointer text-red-600" title="Remove (GET)" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
