"use client";
import { useState } from "react";
export default function ObjectStateVariable() {
  const [person, setPerson] = useState({ name: "Aayush", age: 24, city: "Boston" });
  return (
    <div id="wd-object-state-variables">
      <h2>Object State Variables</h2>
      <pre id="wd-person-json">{JSON.stringify(person, null, 2)}</pre>
      <input
        id="wd-person-name"
        className="border p-1"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />{" "}
      <input
        id="wd-person-age"
        type="number"
        className="border p-1"
        value={person.age}
        onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value) || 0 })}
      />{" "}
      <input
        id="wd-person-city"
        className="border p-1"
        value={person.city}
        onChange={(e) => setPerson({ ...person, city: e.target.value })}
      />
      <hr />
    </div>
  );
}
