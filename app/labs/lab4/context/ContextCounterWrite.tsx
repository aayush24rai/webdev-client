"use client";
import { useCounterContext } from "./CounterContext";
export default function ContextCounterWrite() {
  const { up, down, reset } = useCounterContext();
  return (
    <div id="wd-context-counter-write">
      <h3>Writer</h3>
      <button onClick={up} id="wd-context-up-click">
        Up
      </button>{" "}
      <button onClick={down} id="wd-context-down-click">
        Down
      </button>{" "}
      <button onClick={reset} id="wd-context-reset-click">
        Reset
      </button>
    </div>
  );
}
