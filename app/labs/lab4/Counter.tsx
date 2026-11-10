"use client";
import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(7);
  return (
    <div id="wd-counter">
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)} id="wd-counter-up-click">
        Up
      </button>{" "}
      <button onClick={() => setCount(count - 1)} id="wd-counter-down-click">
        Down
      </button>{" "}
      <button onClick={() => setCount(7)} id="wd-counter-reset-click">
        Reset
      </button>
      <hr />
    </div>
  );
}
