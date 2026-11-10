"use client";
import { useState } from "react";
const INITIAL = [1, 2, 3, 4, 5];
export default function ArrayStateVariable() {
  const [array, setArray] = useState(INITIAL);
  const addElement = () => {
    // deterministic next value (no Math.random) - one more than the max
    setArray([...array, array.length ? Math.max(...array) + 1 : 1]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button onClick={addElement} id="wd-add-element-click">
        Add Element
      </button>{" "}
      <button onClick={() => setArray(INITIAL)} id="wd-clear-array-click">
        Clear
      </button>
      <ul>
        {array.map((item, index) => (
          <li key={index} id={`wd-array-element-${index}`}>
            {item}{" "}
            <button onClick={() => deleteElement(index)} id={`wd-delete-element-${index}-click`}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
