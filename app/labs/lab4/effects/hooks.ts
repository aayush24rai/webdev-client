"use client";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

// Custom hook: boolean toggle
export function useToggle(initial = false) {
  const [on, setOn] = useState(initial);
  const toggle = useCallback(() => setOn((v) => !v), []);
  return [on, toggle] as const;
}

// Custom hook: window width via an external-store subscription (0 on the server)
const subscribeResize = (callback: () => void) => {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};
export function useWindowWidth() {
  return useSyncExternalStore(
    subscribeResize,
    () => window.innerWidth,
    () => 0
  );
}

// Custom hook: stopwatch that ticks every second while running
export function useStopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id); // cleanup when stopped or unmounted
  }, [running]);
  return {
    seconds,
    running,
    start: () => setRunning(true),
    stop: () => setRunning(false),
    reset: () => {
      setRunning(false);
      setSeconds(0);
    },
  };
}
