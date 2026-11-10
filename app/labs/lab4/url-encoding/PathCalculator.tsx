import Link from "next/link";
export default function PathCalculator({ a, b }: { a: string; b: string }) {
  const x = Number(decodeURIComponent(a));
  const y = Number(decodeURIComponent(b));
  return (
    <div id="wd-path-calculator">
      <h1>Calculator – Path Parameters</h1>
      <h2 id="wd-path-sum">
        {x} + {y} = {x + y}
      </h2>
      <Link href="/labs/lab4" id="wd-path-back-link">
        Back to Lab 4
      </Link>
    </div>
  );
}
