"use client";
import { createContext, useContext } from "react";

export type Todo = { id: string; title: string };

export const initialContextTodos: Todo[] = [
  { id: "1", title: "Fine-tune a BERT model for NLP class" },
  { id: "2", title: "Review OWASP Top 10 for Kambaz" },
  { id: "3", title: "Finish CS5610 Lab 4" },
];

export type TodosContextValue = {
  todos: Todo[];
  todo: Todo;
  setTodo: (todo: Todo) => void;
  addTodo: () => void;
  updateTodo: () => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextValue | null>(null);

export function useTodosContext() {
  const ctx = useContext(TodosContext);
  if (!ctx) throw new Error("useTodosContext must be used inside TodosContext.Provider");
  return ctx;
}
