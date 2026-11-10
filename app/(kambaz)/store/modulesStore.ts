import { create } from "zustand";
import { modules as initialModules } from "../database";

type Lesson = { _id: string; name: string; description?: string; module?: string };
export type Module = {
  _id: string;
  name: string;
  description?: string;
  course: string;
  lessons?: Lesson[];
  editing?: boolean;
};

type ModulesState = {
  modules: Module[];
  addModule: (module: { name: string; course: string }) => void;
  deleteModule: (moduleId: string) => void;
  updateModule: (module: Module) => void;
  editModule: (moduleId: string) => void;
};

export const useModulesStore = create<ModulesState>((set) => ({
  modules: initialModules as Module[],
  addModule: (module) =>
    set((state) => ({
      modules: [
        ...state.modules,
        { ...module, _id: Date.now().toString(), lessons: [] },
      ],
    })),
  deleteModule: (moduleId) =>
    set((state) => ({
      modules: state.modules.filter((m) => m._id !== moduleId),
    })),
  updateModule: (module) =>
    set((state) => ({
      modules: state.modules.map((m) => (m._id === module._id ? module : m)),
    })),
  editModule: (moduleId) =>
    set((state) => ({
      modules: state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : m,
      ),
    })),
}));
