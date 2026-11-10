import { create } from "zustand";
import { courses as initialCourses } from "../database";

export type Course = (typeof initialCourses)[number];

type CoursesState = {
  courses: Course[];
  addCourse: (course: Course) => void;
  updateCourse: (course: Course) => void;
  deleteCourse: (courseId: string) => void;
};

export const useCoursesStore = create<CoursesState>((set) => ({
  courses: initialCourses,
  addCourse: (course) =>
    set((state) => ({ courses: [...state.courses, course] })),
  updateCourse: (course) =>
    set((state) => ({
      courses: state.courses.map((c) => (c._id === course._id ? course : c)),
    })),
  deleteCourse: (courseId) =>
    set((state) => ({
      courses: state.courses.filter((c) => c._id !== courseId),
    })),
}));
