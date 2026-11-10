import { create } from "zustand";
import { enrollments as initialEnrollments } from "../database";

export type Enrollment = { _id: string; user: string; course: string };

type EnrollmentsState = {
  enrollments: Enrollment[];
  enroll: (user: string, course: string) => void;
  unenroll: (user: string, course: string) => void;
};

export const useEnrollmentsStore = create<EnrollmentsState>((set) => ({
  enrollments: initialEnrollments,
  enroll: (user, course) =>
    set((state) => ({
      enrollments: [
        ...state.enrollments,
        { _id: Date.now().toString(), user, course },
      ],
    })),
  unenroll: (user, course) =>
    set((state) => ({
      enrollments: state.enrollments.filter(
        (e) => !(e.user === user && e.course === course),
      ),
    })),
}));
