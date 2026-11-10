import { create } from "zustand";

type CounterState = {
  count: number;
  up: () => void;
  down: () => void;
  reset: () => void;
};

export const useCounterStore = create<CounterState>((set) => ({
  count: 7,
  up: () => set((state) => ({ count: state.count + 1 })),
  down: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 7 }),
}));
