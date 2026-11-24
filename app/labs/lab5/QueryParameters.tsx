"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const input = "mb-2 block w-40 rounded border border-neutral-300 px-3 py-1.5";
const button = "rounded bg-blue-600 px-3 py-1.5 text-sm text-white";

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  const url = (operation: string) =>
    `${HTTP_SERVER}/lab5/calculator?operation=${operation}&a=${a}&b=${b}`;
  return (
    <div id="wd-query-parameters">
      <h4 className="text-lg font-semibold">Query Parameters</h4>
      <input id="wd-query-parameter-a" className={input} type="number"
        value={a} onChange={(e) => setA(e.target.value)} />
      <input id="wd-query-parameter-b" className={input} type="number"
        value={b} onChange={(e) => setB(e.target.value)} />
      <div className="flex flex-wrap gap-2">
        <a id="wd-query-parameter-add" className={button} href={url("add")}>
          Add {a} + {b}
        </a>
        <a id="wd-query-parameter-subtract" className={button} href={url("subtract")}>
          Subtract {a} - {b}
        </a>
        <a id="wd-query-parameter-multiply" className={button} href={url("multiply")}>
          Multiply {a} × {b}
        </a>
        <a id="wd-query-parameter-divide" className={button} href={url("divide")}>
          Divide {a} ÷ {b}
        </a>
      </div>
    </div>
  );
}
