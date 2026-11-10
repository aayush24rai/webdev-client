"use client";
export default function CounterBroken() {
  // Intentionally broken: a plain variable does not trigger a re-render
  let count = 7;
  console.log(count);
  return (
    <div id="wd-counter-broken">
      <h2>Broken Counter: {count}</h2>
      <button
        onClick={() => {
          count++;
          console.log(count);
        }}
        id="wd-counter-broken-up-click"
      >
        Up
      </button>{" "}
      <button
        onClick={() => {
          count--;
          console.log(count);
        }}
        id="wd-counter-broken-down-click"
      >
        Down
      </button>
      <hr />
    </div>
  );
}
