import Link from "next/link";
import Image from "next/image";
import type { Course } from "../store/coursesStore";
export default function CourseCard({
  course,
  onEdit,
  onDelete,
  enrollment,
}: {
  course: Course;
  onEdit: (course: Course) => void;
  onDelete: (courseId: string) => void;
  enrollment?: { enrolled: boolean; toggle: () => void };
}) {
  const { _id, name, description, image } = course;
  return (
    <div className="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      <Link
        href={`/courses/${_id}/home`}
        className="wd-dashboard-course-link block text-neutral-900 no-underline"
      >
        <Image
          src={image || "/images/reactjs.jpg"}
          width={300}
          height={160}
          alt={name}
          className="h-40 w-full object-cover"
        />
        <div className="p-4">
          <h5 className="wd-dashboard-course-title m-0 mb-2 truncate text-lg font-semibold whitespace-nowrap">
            {name}
          </h5>
          <p className="wd-dashboard-course-description m-0 mb-3 h-[100px] overflow-hidden text-sm text-neutral-600">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Go
            </button>
            {enrollment && (
              <button
                type="button"
                id="wd-enroll-course-click"
                onClick={(event) => {
                  event.preventDefault();
                  enrollment.toggle();
                }}
                className={`rounded px-3 py-1.5 text-sm font-medium text-white ${
                  enrollment.enrolled ? "bg-red-600" : "bg-green-600"
                }`}
              >
                {enrollment.enrolled ? "Unenroll" : "Enroll"}
              </button>
            )}
            <button
              type="button"
              id="wd-delete-course-click"
              onClick={(event) => {
                event.preventDefault();
                onDelete(_id);
              }}
              className="ms-auto rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Delete
            </button>
            <button
              type="button"
              id="wd-edit-course-click"
              onClick={(event) => {
                event.preventDefault();
                onEdit(course);
              }}
              className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium text-neutral-900"
            >
              Edit
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
