"use client";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { add, subtract } from "./addReducer";
export default function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  const { sum, difference } = useAppSelector((state) => state.addReducer);
  const dispatch = useAppDispatch();
  return (
    <div id="wd-add-redux" className="w-25">
      <h3>Add Redux</h3>
      <h4 id="wd-add-redux-result">
        {a} + {b} = {sum}
      </h4>
      <h4 id="wd-subtract-redux-result">
        {a} - {b} = {difference}
      </h4>
      <input
        id="wd-add-redux-a"
        type="number"
        className="border p-1"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value) || 0)}
      />{" "}
      <input
        id="wd-add-redux-b"
        type="number"
        className="border p-1"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value) || 0)}
      />{" "}
      <button onClick={() => dispatch(add({ a, b }))} id="wd-add-redux-click">
        Add Redux
      </button>{" "}
      <button onClick={() => dispatch(subtract({ a, b }))} id="wd-subtract-redux-click">
        Subtract Redux
      </button>
    </div>
  );
}
