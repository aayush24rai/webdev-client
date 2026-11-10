import type { ReactNode } from "react";
import ModuleControlButtons from "./ModuleControlButtons";
import type { Module as ModuleType } from "../../../store/modulesStore";
export default function Module({
  module,
  deleteModule,
  editModule,
  updateModule,
  children,
}: {
  module: ModuleType;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
  updateModule: (module: ModuleType) => void;
  children?: ReactNode;
}) {
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
      <div className="wd-title flex items-center justify-between gap-2 bg-neutral-200 p-3 ps-2">
        {!module.editing && <span>{module.name}</span>}
        {module.editing && (
          <input
            autoFocus
            aria-label="Module name"
            className="w-1/2 rounded border border-neutral-300 bg-white px-2 py-1 text-base"
            value={module.name}
            onChange={(e) => updateModule({ ...module, name: e.target.value })}
            onBlur={() => updateModule({ ...module, editing: false })}
            onKeyDown={(e) => {
              if (e.key === "Enter") updateModule({ ...module, editing: false });
            }}
          />
        )}
        <ModuleControlButtons
          moduleId={module._id}
          deleteModule={deleteModule}
          editModule={editModule}
        />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
    </li>
  );
}
