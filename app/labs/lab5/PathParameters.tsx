"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const input = "mb-2 block w-40 rounded border border-neutral-300 px-3 py-1.5";
const button = "rounded bg-blue-600 px-3 py-1.5 text-sm text-white";

export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h4 className="text-lg font-semibold">Path Parameters</h4>
      <input id="wd-path-parameter-a" className={input} type="number"
        value={a} onChange={(e) => setA(e.target.value)} />
      <input id="wd-path-parameter-b" className={input} type="number"
        value={b} onChange={(e) => setB(e.target.value)} />
      <div className="flex flex-wrap gap-2">
        <a id="wd-path-parameter-add" className={button}
          href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}>
          Add {a} + {b}
        </a>
        <a id="wd-path-parameter-subtract" className={button}
          href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}>
          Subtract {a} - {b}
        </a>
        <a id="wd-path-parameter-multiply" className={button}
          href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}>
          Multiply {a} × {b}
        </a>
        <a id="wd-path-parameter-divide" className={button}
          href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}>
          Divide {a} ÷ {b}
        </a>
      </div>
    </div>
  );
}
