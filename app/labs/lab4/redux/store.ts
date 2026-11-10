import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import helloReducer from "./helloReducer";
import counterReducer from "./counterReducer";
import addReducer from "./addReducer";
import todosReducer from "./todosReducer";

// A factory (not a module singleton) so each request/browser session gets its own store
export const makeStore = () =>
  configureStore({
    reducer: {
      helloReducer,
      counterReducer,
      addReducer,
      todosReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
