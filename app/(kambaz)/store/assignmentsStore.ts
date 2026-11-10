import { create } from "zustand";
import { assignments as initialAssignments } from "../database";

export type Assignment = {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  available: string;
  due: string;
};

type AssignmentsState = {
  assignments: Assignment[];
  addAssignment: (assignment: Omit<Assignment, "_id">) => void;
  updateAssignment: (assignment: Assignment) => void;
  deleteAssignment: (assignmentId: string) => void;
};

export const useAssignmentsStore = create<AssignmentsState>((set) => ({
  assignments: initialAssignments as Assignment[],
  addAssignment: (assignment) =>
    set((state) => ({
      assignments: [
        ...state.assignments,
        { ...assignment, _id: Date.now().toString() },
      ],
    })),
  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a,
      ),
    })),
  deleteAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.filter((a) => a._id !== assignmentId),
    })),
}));
