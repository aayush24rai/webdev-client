"use client";
export default function PassingFunctions({
  message,
  theFunction,
  theOtherFunction,
}: {
  message: string;
  theFunction: (message: string) => void;
  theOtherFunction: () => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button onClick={() => theFunction(message)} id="wd-pass-functions-click">
        Invoke the Function
      </button>{" "}
      <button onClick={theOtherFunction} id="wd-pass-functions-other-click">
        Invoke the Other Function
      </button>
      <hr />
    </div>
  );
}
