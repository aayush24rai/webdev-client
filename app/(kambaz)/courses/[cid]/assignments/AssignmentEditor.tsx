import Link from "next/link";
import * as db from "../../../database";
export default function AssignmentEditor({
  cid,
  aid,
}: {
  cid: string;
  aid: string;
}) {
  const assignment = db.assignments.find((a) => a._id === aid);
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block font-semibold">
        Assignment Name
      </label>
      <input
        id="wd-name"
        defaultValue={assignment?.title ?? ""}
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
        defaultValue={assignment?.description ?? ""}
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
            defaultValue={assignment?.points ?? 100}
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
          defaultValue={assignment?.due}
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
              defaultValue={assignment?.available}
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
              defaultValue={assignment?.due}
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
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
