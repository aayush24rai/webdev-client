"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UrlEncoding() {
  const router = useRouter();
  const [a, setA] = useState("5");
  const [b, setB] = useState("10");
  const [c, setC] = useState("2");
  const queryUrl = `/labs/lab4/url-encoding/query-params?a=${encodeURIComponent(a)}&b=${encodeURIComponent(b)}&c=${encodeURIComponent(c)}`;
  const pathUrl = `/labs/lab4/url-encoding/path-params/${encodeURIComponent(a)}/${encodeURIComponent(b)}`;
  return (
    <div id="wd-url-encoding">
      <h2>Addition Calculator</h2>
      <input id="wd-url-a" type="number" className="border p-1" value={a} onChange={(e) => setA(e.target.value)} />{" "}
      <input id="wd-url-b" type="number" className="border p-1" value={b} onChange={(e) => setB(e.target.value)} />{" "}
      <input id="wd-url-c" type="number" className="border p-1" value={c} onChange={(e) => setC(e.target.value)} />
      <h3>Programmatic navigation (using router.push):</h3>
      <button onClick={() => router.push(queryUrl)} id="wd-url-query-programmatic">
        Add with query parameters
      </button>{" "}
      <button onClick={() => router.push(pathUrl)} id="wd-url-path-programmatic">
        Add with path parameters
      </button>
      <h3>Declarative navigation (using Link):</h3>
      <Link href={queryUrl} id="wd-url-query-link">
        Query parameters: {a} + {b} (+ {c})
      </Link>
      <br />
      <Link href={pathUrl} id="wd-url-path-link">
        Path parameters: {a} + {b}
      </Link>
      <hr />
    </div>
  );
}
