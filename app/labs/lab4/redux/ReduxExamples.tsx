"use client";
import StoreProvider from "./StoreProvider";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import ReduxTodoList from "./ReduxTodoList";
export default function ReduxExamples() {
  return (
    <StoreProvider>
      <div id="wd-redux-examples">
        <h2>Redux Toolkit</h2>
        <HelloRedux />
        <CounterRedux />
        <AddRedux />
        <ReduxTodoList />
        <hr />
      </div>
    </StoreProvider>
  );
}
