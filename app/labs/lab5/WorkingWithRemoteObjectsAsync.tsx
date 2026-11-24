"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
import type { Assignment } from "./client";

const input = "block w-full max-w-md rounded border border-neutral-300 px-3 py-1.5";

export default function WorkingWithRemoteObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<Assignment | null>(null);

  const updateTitle = async () => {
    if (!assignment) return;
    setAssignment(await client.updateTitle(assignment.title));
  };

  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        setAssignment(await client.fetchAssignment());
      } catch {
        setAssignment(null);
      }
    };
    fetchAssignment();
  }, []);

  return (
    <div id="wd-asynchronous-objects" className="space-y-2">
      <h3 className="text-xl font-semibold">Working with Objects Asynchronously</h3>
      <h4 className="text-lg font-semibold">Assignment</h4>
      {assignment && (
        <>
          <input className={input} value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
          <textarea className={input} value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />
          <input className={input} type="date" value={assignment.due}
            onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} />
          <label className="flex items-center gap-1">
            <input type="checkbox" checked={assignment.completed}
              onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
            Completed
          </label>
          <button type="button" id="wd-update-title-async"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
            onClick={updateTitle}>
            Update Title
          </button>
        </>
      )}
      <pre className="overflow-x-auto rounded bg-neutral-100 p-2 text-sm">
        {JSON.stringify(assignment ?? {}, null, 2)}
      </pre>
    </div>
  );
}
