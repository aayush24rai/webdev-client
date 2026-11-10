"use client";
import { CounterProvider } from "./CounterContext";
import ContextCounterRead from "./ContextCounterRead";
import ContextCounterWrite from "./ContextCounterWrite";
import ReactContextTodoList from "./ReactContextTodoList";
import ContextProfileForm from "./ContextProfileForm";

export default function ContextExamples() {
  return (
    <div id="wd-context-examples">
      <h2>React Context</h2>
      <CounterProvider>
        <ContextCounterRead />
        <ContextCounterWrite />
      </CounterProvider>
      <ReactContextTodoList />
      <ContextProfileForm />
      <hr />
    </div>
  );
}
