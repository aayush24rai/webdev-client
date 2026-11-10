"use client";
import { useState } from "react";
export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("Aayush");
  const [lastName, setLastName] = useState("Rai");
  return (
    <div id="wd-string-state-variables">
      <h2>String State Variables</h2>
      <p id="wd-full-name">
        {firstName} {lastName}
      </p>
      <input
        id="wd-first-name"
        className="border p-1"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />{" "}
      <input
        id="wd-last-name"
        className="border p-1"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <hr />
    </div>
  );
}
