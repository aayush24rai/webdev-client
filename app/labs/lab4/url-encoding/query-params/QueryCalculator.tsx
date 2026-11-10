"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function QueryCalculator() {
  const searchParams = useSearchParams();
  const a = Number(searchParams.get("a") ?? 0);
  const b = Number(searchParams.get("b") ?? 0);
  const cParam = searchParams.get("c");
  const c = cParam === null ? null : Number(cParam);
  return (
    <div id="wd-query-calculator">
      <h1>Calculator – Query Parameters</h1>
      <h2 id="wd-query-sum">
        {a} + {b} = {a + b}
      </h2>
      {c !== null && (
        <h3 id="wd-query-sum-c">
          {a} + {b} + {c} = {a + b + c}
        </h3>
      )}
      <Link href="/labs/lab4" id="wd-query-back-link">
        Back to Lab 4
      </Link>
    </div>
  );
}
