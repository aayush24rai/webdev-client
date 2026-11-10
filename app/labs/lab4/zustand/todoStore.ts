import { create } from "zustand";

export type Todo = { id: string; title: string; done: boolean };

export const emptyTodo: Todo = { id: "-1", title: "Learn Zustand", done: false };

type TodoState = {
  todos: Todo[];
  todo: Todo;
  nextId: number;
  setTodo: (todo: Todo) => void;
  addTodo: () => void;
  updateTodo: () => void;
  deleteTodo: (id: string) => void;
  toggleDone: (id: string) => void;
};

export const useTodoStore = create<TodoState>((set) => ({
  todos: [
    { id: "1", title: "Learn HTML", done: true },
    { id: "2", title: "Learn CSS", done: true },
    { id: "3", title: "Learn JavaScript", done: false },
  ],
  todo: emptyTodo,
  nextId: 4,
  setTodo: (todo) => set({ todo }),
  addTodo: () =>
    set((s) => ({
      todos: [...s.todos, { ...s.todo, id: String(s.nextId) }],
      nextId: s.nextId + 1,
      todo: emptyTodo,
    })),
  updateTodo: () =>
    set((s) => ({
      todos: s.todos.map((t) => (t.id === s.todo.id ? s.todo : t)),
      todo: emptyTodo,
    })),
  deleteTodo: (id) => set((s) => ({ todos: s.todos.filter((t) => t.id !== id) })),
  toggleDone: (id) =>
    set((s) => ({ todos: s.todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)) })),
}));
