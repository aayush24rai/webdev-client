import { FaPencil, FaTrash } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="flex shrink-0 items-center gap-2 text-base">
      <button
        type="button"
        aria-label="Edit module"
        id="wd-edit-module-click"
        onClick={() => editModule(moduleId)}
        className="text-blue-600"
      >
        <FaPencil />
      </button>
      <button
        type="button"
        aria-label="Delete module"
        id="wd-delete-module-click"
        onClick={() => deleteModule(moduleId)}
        className="text-red-600"
      >
        <FaTrash />
      </button>
      <GreenCheckmark />
      <BsPlus className="text-2xl" />
      <IoEllipsisVertical className="text-xl" />
    </div>
  );
}
