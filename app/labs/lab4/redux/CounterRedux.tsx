"use client";
import { useAppDispatch, useAppSelector } from "./store";
import { down, reset, up } from "./counterReducer";
export default function CounterRedux() {
  const { count } = useAppSelector((state) => state.counterReducer);
  const dispatch = useAppDispatch();
  return (
    <div id="wd-redux-counter">
      <h3>Redux Counter: {count}</h3>
      <button onClick={() => dispatch(up())} id="wd-redux-up-click">
        Up
      </button>{" "}
      <button onClick={() => dispatch(down())} id="wd-redux-down-click">
        Down
      </button>{" "}
      <button onClick={() => dispatch(reset())} id="wd-redux-reset-click">
        Reset
      </button>
    </div>
  );
}
