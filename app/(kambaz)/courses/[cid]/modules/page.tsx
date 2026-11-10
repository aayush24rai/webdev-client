"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import Lesson from "./Lesson";
import { useModulesStore } from "../../../store/modulesStore";
export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const [moduleName, setModuleName] = useState("");
  const { modules, addModule, deleteModule, editModule, updateModule } =
    useModulesStore();
  const courseModules = modules.filter((module) => module.course === cid);
  const createModule = () => {
    addModule({ name: moduleName.trim() || "New Module", course: cid });
    setModuleName("");
  };
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          Collapse All
        </button>
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          View Progress
        </button>
        <select
          defaultValue="publish-all"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          <option value="publish-all">Publish All</option>
          <option value="unpublish-all">Unpublish All</option>
        </select>
        <input
          id="wd-new-module-name"
          aria-label="New module name"
          placeholder="New module name"
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") createModule();
          }}
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        />
        <button
          type="button"
          id="wd-add-module-btn"
          onClick={createModule}
          className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          + Module
        </button>
      </div>
      <ul id="wd-modules" className="m-0 list-none p-0">
        {courseModules.map((module) => (
          <Module
            key={module._id}
            module={module}
            deleteModule={deleteModule}
            editModule={editModule}
            updateModule={updateModule}
          >
            {module.lessons?.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name} />
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}
