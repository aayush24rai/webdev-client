"use client";
import { useState, type ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { useCoursesStore } from "../../store/coursesStore";
export default function CourseShell({
  cid,
  children,
}: {
  cid: string;
  children: ReactNode;
}) {
  const course = useCoursesStore((state) =>
    state.courses.find((c) => c._id === cid),
  );
  const [showNavigation, setShowNavigation] = useState(true);
  return (
    <div id="wd-courses">
      <h2 className="text-2xl font-semibold text-red-600">
        <button
          type="button"
          id="wd-course-navigation-toggle"
          aria-label="Toggle course navigation"
          onClick={() => setShowNavigation(!showNavigation)}
          className="me-4 mb-1 inline align-middle"
        >
          <FaAlignJustify className="inline text-xl" />
        </button>
        <Breadcrumb course={course} />
        <span id="wd-course-id" className="ms-2 text-base font-normal text-neutral-500">
          ({course?._id ?? cid})
        </span>
      </h2>
      <hr className="my-3" />
      <div className="flex gap-4">
        {showNavigation && (
          <div className="hidden w-[140px] shrink-0 md:block">
            <CourseNavigation cid={cid} />
          </div>
        )}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
