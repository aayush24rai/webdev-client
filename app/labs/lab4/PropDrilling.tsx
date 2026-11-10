"use client";
import { useState } from "react";

type CountProps = { count: number; setCount: (count: number) => void };

function Grandchild({ count, setCount }: CountProps) {
  return (
    <div id="wd-prop-drill-grandchild" className="ms-4 border-l-2 ps-2">
      <h4>Grandchild</h4>
      <button onClick={() => setCount(count + 1)} id="wd-prop-drill-increment-click">
        Increment in grandchild
      </button>
    </div>
  );
}

function Middle({ count, setCount }: CountProps) {
  return (
    <div id="wd-prop-drill-middle" className="ms-4 border-l-2 ps-2">
      <h4>Middle</h4>
      <Grandchild count={count} setCount={setCount} />
    </div>
  );
}

function Child({ count, setCount }: CountProps) {
  return (
    <div id="wd-prop-drill-child" className="ms-4 border-l-2 ps-2">
      <h4>Child</h4>
      <Middle count={count} setCount={setCount} />
    </div>
  );
}

export default function PropDrilling() {
  const [count, setCount] = useState(0);
  return (
    <div id="wd-prop-drilling">
      <h2>Prop Drilling</h2>
      <p id="wd-prop-drill-count">Parent count: {count}</p>
      <Child count={count} setCount={setCount} />
      <hr />
    </div>
  );
}
