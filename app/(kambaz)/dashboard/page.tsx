"use client";
import { useState } from "react";
import CourseCard from "./CourseCard";
import { useCoursesStore, type Course } from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccount } from "../account/AccountContext";

const emptyCourse: Course = {
  _id: "0",
  name: "New Course",
  number: "New Number",
  startDate: "2023-09-10",
  endDate: "2023-12-15",
  department: "D123",
  credits: 4,
  description: "New Description",
  image: "/images/reactjs.jpg",
  term: "Fall 2023",
};

const inputClass = "w-full rounded border border-neutral-300 px-3 py-2";

export default function Dashboard() {
  const { courses, addCourse, updateCourse, deleteCourse } = useCoursesStore();
  const { enrollments, enroll, unenroll } = useEnrollmentsStore();
  const { currentUser } = useAccount();
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAll, setShowAll] = useState(false);

  const isEnrolled = (courseId: string) =>
    !!currentUser &&
    enrollments.some(
      (e) => e.user === currentUser._id && e.course === courseId,
    );
  // Signed out: show every course. Signed in: show only enrolled courses
  // unless the Enrollments toggle is on.
  const visibleCourses =
    currentUser && !showAll
      ? courses.filter((c) => isEnrolled(c._id))
      : courses;

  const addNewCourse = () => {
    const newCourse = { ...course, _id: Date.now().toString() };
    addCourse(newCourse);
    if (currentUser) enroll(currentUser._id, newCourse._id);
  };
  const removeCourse = (courseId: string) => {
    deleteCourse(courseId);
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="text-3xl font-semibold">
        Dashboard
      </h1>
      <hr className="my-3" />
      <div id="wd-dashboard-course-form" className="mb-4 max-w-2xl">
        <div className="mb-2 flex items-center justify-between gap-2">
          <h5 className="text-lg font-semibold">New Course</h5>
          <div className="flex gap-2">
            <button
              type="button"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
              className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Add
            </button>
            <button
              type="button"
              id="wd-update-course-click"
              onClick={() => updateCourse(course)}
              className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium text-neutral-900"
            >
              Update
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <input
            id="wd-course-name"
            aria-label="Course name"
            placeholder="Course name"
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            className={inputClass}
          />
          <input
            id="wd-course-number"
            aria-label="Course number"
            placeholder="Course number"
            value={course.number}
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
            className={inputClass}
          />
          <input
            id="wd-course-start-date"
            aria-label="Start date"
            type="date"
            value={course.startDate}
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
            className={inputClass}
          />
          <input
            id="wd-course-end-date"
            aria-label="End date"
            type="date"
            value={course.endDate}
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
            className={inputClass}
          />
          <textarea
            id="wd-course-description"
            aria-label="Course description"
            placeholder="Course description"
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
            className={`${inputClass} sm:col-span-2`}
          />
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 id="wd-dashboard-published" className="text-2xl">
          Published Courses ({visibleCourses.length})
        </h2>
        {currentUser && (
          <button
            type="button"
            id="wd-enrollments-toggle"
            onClick={() => setShowAll(!showAll)}
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            {showAll ? "My Courses" : "Enrollments"}
          </button>
        )}
      </div>
      <hr className="my-3" />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {visibleCourses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            onEdit={setCourse}
            onDelete={removeCourse}
            enrollment={
              currentUser && showAll
                ? {
                    enrolled: isEnrolled(c._id),
                    toggle: () =>
                      isEnrolled(c._id)
                        ? unenroll(currentUser._id, c._id)
                        : enroll(currentUser._id, c._id),
                  }
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}
