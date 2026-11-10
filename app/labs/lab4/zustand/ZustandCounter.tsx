"use client";
import { useCounterStore } from "./counterStore";
export default function ZustandCounter() {
  const count = useCounterStore((s) => s.count);
  const up = useCounterStore((s) => s.up);
  const down = useCounterStore((s) => s.down);
  const reset = useCounterStore((s) => s.reset);
  return (
    <div id="wd-zustand-counter">
      <h3>Zustand Counter: {count}</h3>
      <button onClick={up} id="wd-zustand-up-click">
        Up
      </button>{" "}
      <button onClick={down} id="wd-zustand-down-click">
        Down
      </button>{" "}
      <button onClick={reset} id="wd-zustand-reset-click">
        Reset
      </button>
    </div>
  );
}
