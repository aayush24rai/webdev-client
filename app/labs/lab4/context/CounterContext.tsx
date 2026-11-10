"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type CounterContextValue = {
  count: number;
  up: () => void;
  down: () => void;
  reset: () => void;
};

const CounterContext = createContext<CounterContextValue | null>(null);

export function CounterProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(7);
  const value = {
    count,
    up: () => setCount((c) => c + 1),
    down: () => setCount((c) => c - 1),
    reset: () => setCount(7),
  };
  return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>;
}

export function useCounterContext() {
  const ctx = useContext(CounterContext);
  if (!ctx) throw new Error("useCounterContext must be used inside CounterProvider");
  return ctx;
}
