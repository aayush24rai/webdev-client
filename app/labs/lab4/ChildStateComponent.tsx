"use client";
export default function ChildStateComponent({
  counter,
  setCounter,
}: {
  counter: number;
  setCounter: (counter: number) => void;
}) {
  return (
    <div id="wd-child-state">
      <h3>Child Counter {counter}</h3>
      <button onClick={() => setCounter(counter + 1)} id="wd-increment-child-state-click">
        Up
      </button>{" "}
      <button onClick={() => setCounter(counter - 1)} id="wd-decrement-child-state-click">
        Down
      </button>{" "}
      <button onClick={() => setCounter(123)} id="wd-reset-child-state-click">
        Reset
      </button>
    </div>
  );
}
