"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const button = "inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white";
const input = "rounded border border-neutral-300 px-3 py-1.5";

export default function WorkingWithRemoteArrays() {
  const API = `${HTTP_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    completed: false,
  });

  return (
    <div id="wd-working-with-arrays" className="space-y-3">
      <h3 className="text-xl font-semibold">Working with Arrays</h3>

      <h4 className="text-lg font-semibold">Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className={button} href={API}>
        Get Todos
      </a>

      <h4 className="text-lg font-semibold">Retrieving an Item from an Array by ID</h4>
      <div className="flex flex-wrap items-center gap-2">
        <a id="wd-retrieve-todo-by-id" className={button} href={`${API}/${todo.id}`}>
          Get Todo by ID
        </a>
        <input id="wd-todo-id" className={`${input} w-24`} value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      </div>

      <h4 className="text-lg font-semibold">Filtering Array Items</h4>
      <a id="wd-retrieve-completed-todos" className={button} href={`${API}?completed=true`}>
        Get Completed Todos
      </a>

      <h4 className="text-lg font-semibold">Creating new Items in an Array</h4>
      <a id="wd-create-todo" className={button} href={`${API}/create`}>
        Create Todo
      </a>

      <h4 className="text-lg font-semibold">Removing from an Array</h4>
      <a id="wd-remove-todo" className={button} href={`${API}/${todo.id}/delete`}>
        Remove Todo with ID = {todo.id}
      </a>

      <h4 className="text-lg font-semibold">Updating an Item in an Array</h4>
      <div className="flex flex-wrap items-center gap-2">
        <a id="wd-update-todo-title" className={button}
          href={`${API}/${todo.id}/title/${encodeURIComponent(todo.title)}`}>
          Update Todo
        </a>
        <input className={`${input} w-24`} value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
        <input id="wd-todo-title" className={input} value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <a id="wd-update-todo-completed" className={button}
          href={`${API}/${todo.id}/completed/${todo.completed}`}>
          Complete Todo ID = {todo.id}
        </a>
        <label className="flex items-center gap-1">
          <input id="wd-todo-completed" type="checkbox" checked={todo.completed}
            onChange={(e) => setTodo({ ...todo, completed: e.target.checked })} />
          Completed
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <a id="wd-update-todo-description" className={button}
          href={`${API}/${todo.id}/description/${encodeURIComponent(todo.description)}`}>
          Describe Todo ID = {todo.id}
        </a>
        <input id="wd-todo-description" className={input} value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
      </div>
    </div>
  );
}
