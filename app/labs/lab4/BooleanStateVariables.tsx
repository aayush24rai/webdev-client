"use client";
import { useState } from "react";
export default function BooleanStateVariables() {
  const [done, setDone] = useState(true);
  const [saved, setSaved] = useState(false);
  return (
    <div id="wd-boolean-state-variables">
      <h2>Boolean State Variables</h2>
      <p>{done ? "Done" : "Not done"}</p>
      <label>
        <input
          type="checkbox"
          id="wd-boolean-checkbox"
          checked={done}
          onChange={() => setDone(!done)}
        />{" "}
        Done
      </label>
      {done && <div className="bg-yellow-200 p-2">Yay! Done</div>}
      <br />
      <label>
        <input
          type="checkbox"
          id="wd-boolean-saved"
          checked={saved}
          onChange={() => setSaved(!saved)}
        />{" "}
        Saved
      </label>
      {saved && <div className="bg-green-200 p-2">Saved</div>}
      <hr />
    </div>
  );
}
