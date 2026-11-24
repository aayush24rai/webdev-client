"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");
  const [error, setError] = useState("");

  // on click: the user asks for the data
  const fetchWelcomeOnClick = async () => {
    try {
      setWelcomeOnClick(await client.fetchWelcomeMessage());
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  // on load: useEffect with [] runs once after the first render
  useEffect(() => {
    const fetchWelcomeOnLoad = async () => {
      try {
        setWelcomeOnLoad(await client.fetchWelcomeMessage());
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
      }
    };
    fetchWelcomeOnLoad();
  }, []);

  return (
    <div id="wd-http-client" className="space-y-2">
      <h3 className="text-xl font-semibold">HTTP Client</h3>
      <h4 className="text-lg font-semibold">Requesting on Click</h4>
      <button type="button" id="wd-fetch-welcome"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={fetchWelcomeOnClick}>
        Fetch Welcome
      </button>
      <p>Response from server: <b>{welcomeOnClick}</b></p>
      <h4 className="text-lg font-semibold">Requesting on Load</h4>
      <p>Response from server: <b>{welcomeOnLoad}</b></p>
      {error && <p className="rounded bg-red-100 px-3 py-2 text-red-800">{error}</p>}
    </div>
  );
}
