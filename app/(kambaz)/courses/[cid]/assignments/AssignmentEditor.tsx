"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAssignmentsStore } from "../../../store/assignmentsStore";
export default function AssignmentEditor({
  cid,
  aid,
}: {
  cid: string;
  aid: string;
}) {
  const router = useRouter();
  const { assignments, addAssignment, updateAssignment } =
    useAssignmentsStore();
  const existing = assignments.find((a) => a._id === aid);
  const [assignment, setAssignment] = useState(
    existing ?? {
      _id: aid,
      title: "New Assignment",
      course: cid,
      description: "New Assignment Description",
      points: 100,
      available: "2024-05-06",
      due: "2024-05-13",
    },
  );
  const save = () => {
    if (existing) {
      updateAssignment(assignment);
    } else {
      const { _id, ...rest } = assignment;
      void _id;
      addAssignment({ ...rest, course: cid });
    }
    router.push(`/courses/${cid}/assignments`);
  };
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block font-semibold">
        Assignment Name
      </label>
      <input
        id="wd-name"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        className="mb-1 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <p id="wd-assignment-id" className="mb-4 text-sm text-neutral-600">
        Assignment id: {aid}
      </p>
      <label htmlFor="wd-description" className="mb-1 block font-semibold">
        Description
      </label>
      <textarea
        id="wd-description"
        rows={5}
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="wd-points" className="mb-1 block font-semibold">
            Points
          </label>
          <input
            id="wd-points"
            type="number"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: Number(e.target.value) })
            }
            className="w-full rounded border border-neutral-300 px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="wd-group" className="mb-1 block font-semibold">
            Assignment Group
          </label>
          <select
            id="wd-group"
            defaultValue="ASSIGNMENTS"
            className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="wd-display-grade-as"
            className="mb-1 block font-semibold"
          >
            Display Grade as
          </label>
          <select
            id="wd-display-grade-as"
            defaultValue="Percentage"
            className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
          >
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
            <option value="Letter Grade">Letter Grade</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="wd-submission-type"
            className="mb-1 block font-semibold"
          >
            Submission Type
          </label>
          <select
            id="wd-submission-type"
            defaultValue="Online"
            className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
          >
            <option value="Online">Online</option>
            <option value="On Paper">On Paper</option>
            <option value="No Submission">No Submission</option>
          </select>
        </div>
      </div>
      <fieldset className="mt-4 rounded border border-neutral-300 p-3">
        <legend className="px-1 font-semibold">Online Entry Options</legend>
        <div className="mb-1 flex items-center gap-2">
          <input type="checkbox" id="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label>
        </div>
        <div className="mb-1 flex items-center gap-2">
          <input type="checkbox" id="wd-website-url" defaultChecked />
          <label htmlFor="wd-website-url">Website URL</label>
        </div>
        <div className="mb-1 flex items-center gap-2">
          <input type="checkbox" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
        </div>
        <div className="mb-1 flex items-center gap-2">
          <input type="checkbox" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation">Student Annotation</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-file-upload" />
          <label htmlFor="wd-file-upload">File Upload</label>
        </div>
      </fieldset>
      <fieldset className="mt-4 rounded border border-neutral-300 p-3">
        <legend className="px-1 font-semibold">Assign</legend>
        <label htmlFor="wd-assign-to" className="mb-1 block font-semibold">
          Assign to
        </label>
        <input
          id="wd-assign-to"
          defaultValue="Everyone"
          className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
        />
        <label htmlFor="wd-due-date" className="mb-1 block font-semibold">
          Due
        </label>
        <input
          id="wd-due-date"
          type="date"
          value={assignment.due}
          onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
          className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label
              htmlFor="wd-available-from"
              className="mb-1 block font-semibold"
            >
              Available from
            </label>
            <input
              id="wd-available-from"
              type="date"
              value={assignment.available}
              onChange={(e) =>
                setAssignment({ ...assignment, available: e.target.value })
              }
              className="w-full rounded border border-neutral-300 px-3 py-2"
            />
          </div>
          <div>
            <label
              htmlFor="wd-available-until"
              className="mb-1 block font-semibold"
            >
              Until
            </label>
            <input
              id="wd-available-until"
              type="date"
              value={assignment.due}
              onChange={(e) =>
                setAssignment({ ...assignment, due: e.target.value })
              }
              className="w-full rounded border border-neutral-300 px-3 py-2"
            />
          </div>
        </div>
      </fieldset>
      <label
        htmlFor="wd-ai-editor-notes"
        className="mt-4 mb-1 block font-semibold"
      >
        Sample notes
      </label>
      <textarea
        id="wd-ai-editor-notes"
        rows={3}
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <hr className="my-4 border-neutral-300" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <button
          type="button"
          onClick={save}
          id="wd-save"
          className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
