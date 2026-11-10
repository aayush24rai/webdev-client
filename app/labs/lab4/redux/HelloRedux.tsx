"use client";
import { useAppSelector } from "./store";
export default function HelloRedux() {
  const { message } = useAppSelector((state) => state.helloReducer);
  return (
    <div id="wd-hello-redux">
      <h3>Hello Redux</h3>
      <h4 id="wd-hello-redux-message">{message}</h4>
    </div>
  );
}
