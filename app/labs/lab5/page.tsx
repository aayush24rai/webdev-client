import ServerLinks from "../ServerLinks";
import Environment from "./Environment";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithRemoteObjects from "./WorkingWithRemoteObjects";
import WorkingWithRemoteArrays from "./WorkingWithRemoteArrays";
import HttpClient from "./HttpClient";
import WorkingWithRemoteObjectsAsynchronously from "./WorkingWithRemoteObjectsAsync";
import WorkingWithRemoteArraysAsynchronously from "./WorkingWithRemoteArraysAsync";
import HelloRoute from "./HelloRoute";
import CalculatorNextWebApiClient from "./Calculator";

export default function Lab5() {
  return (
    <div id="wd-lab5" className="space-y-6 p-4">
      <h2 className="text-2xl font-bold">Lab 5</h2>

      <div>
        <h4 className="text-lg font-semibold">Node Server</h4>
        <ServerLinks />
      </div>
      <hr />
      <Environment />
      <hr />
      <PathParameters />
      <hr />
      <QueryParameters />
      <hr />
      <WorkingWithRemoteObjects />
      <hr />
      <WorkingWithRemoteArrays />
      <hr />
      <HttpClient />
      <hr />
      <WorkingWithRemoteObjectsAsynchronously />
      <hr />
      <WorkingWithRemoteArraysAsynchronously />
      <hr />
      <h3 className="text-xl font-semibold">Next.js Route Handlers</h3>
      <HelloRoute />
      <CalculatorNextWebApiClient />
    </div>
  );
}
