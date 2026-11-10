"use client";
import { useCounterContext } from "./CounterContext";
export default function ContextCounterRead() {
  const { count } = useCounterContext();
  return (
    <div id="wd-context-counter-read">
      <h3>Context Counter Reader: {count}</h3>
    </div>
  );
}
