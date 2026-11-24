"use client";
import { useState } from "react";

const SYMBOLS: Record<string, string> = { add: "+", subtract: "-", multiply: "×", divide: "÷" };
const input = "rounded border border-neutral-300 px-3 py-1.5";

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const calculate = async (op: string = operation) => {
    setError("");
    setResult("");
    const params = new URLSearchParams({ a, b, operation: op });
    const response = await fetch(`/api/lab5/calculator?${params.toString()}`);
    const data = await response.json();
    if (!response.ok) {
      setError(data.error ?? `HTTP ${response.status}`);
      return;
    }
    setResult(`${data.a} ${SYMBOLS[op] ?? op} ${data.b} = ${data.result}`);
  };

  return (
    <div id="wd-calculator" className="space-y-2">
      <h4 className="text-lg font-semibold">Calculator (Next.js Web API)</h4>
      <div className="flex flex-wrap items-center gap-2">
        <label htmlFor="wd-calc-a">A:</label>
        <input id="wd-calc-a" className={`${input} w-24`} type="number" value={a}
          onChange={(e) => setA(e.target.value)} />
        <label htmlFor="wd-calc-b">B:</label>
        <input id="wd-calc-b" className={`${input} w-24`} type="number" value={b}
          onChange={(e) => setB(e.target.value)} />
        <label htmlFor="wd-calc-operation">Operation:</label>
        <select id="wd-calc-operation" className={input} value={operation}
          onChange={(e) => {
            setOperation(e.target.value);
            calculate(e.target.value);
          }}>
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">×</option>
          <option value="divide">÷</option>
        </select>
        <button type="button" className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          onClick={() => calculate()}>
          Calculate
        </button>
      </div>
      <input id="wd-calc-result" className={`${input} w-64`} readOnly value={error || result} />
    </div>
  );
}
