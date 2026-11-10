"use client";
import { useEffect, useState } from "react";
import { useStopwatch, useToggle, useWindowWidth } from "./hooks";

function DocumentTitleEffect() {
  const [clicks, setClicks] = useState(0);
  useEffect(() => {
    const previous = document.title;
    document.title = `Lab 4 - clicked ${clicks} times`;
    return () => {
      document.title = previous;
    };
  }, [clicks]);
  return (
    <div id="wd-effect-document-title">
      <h3>useEffect: Document Title Clicks: {clicks}</h3>
      <button onClick={() => setClicks(clicks + 1)} id="wd-effect-title-click">
        Click me
      </button>
    </div>
  );
}

function StopwatchEffect() {
  const { seconds, running, start, stop, reset } = useStopwatch();
  return (
    <div id="wd-effect-stopwatch">
      <h3>useEffect with Cleanup: Stopwatch {seconds}s</h3>
      <button onClick={start} disabled={running} id="wd-effect-start-click">
        Start
      </button>{" "}
      <button onClick={stop} disabled={!running} id="wd-effect-stop-click">
        Stop
      </button>{" "}
      <button onClick={reset} id="wd-effect-reset-click">
        Reset
      </button>
    </div>
  );
}

function CustomHooks() {
  const width = useWindowWidth();
  const [showTip, toggleTip] = useToggle(false);
  return (
    <div id="wd-custom-hooks">
      <h3>Custom Hooks</h3>
      <p id="wd-window-width">useWindowWidth: {width === 0 ? "measuring…" : `${width}px`}</p>
      <button onClick={toggleTip} id="wd-toggle-tip-click">
        {showTip ? "Hide" : "Show"} security tip
      </button>
      {showTip && (
        <p id="wd-security-tip">Never commit API keys - keep them in .env.local and out of git.</p>
      )}
    </div>
  );
}

export default function EffectExamples() {
  return (
    <div id="wd-effect-examples">
      <h2>useEffect and Custom Hooks</h2>
      <DocumentTitleEffect />
      <StopwatchEffect />
      <CustomHooks />
      <hr />
    </div>
  );
}
