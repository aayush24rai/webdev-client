import { createSlice } from "@reduxjs/toolkit";
const initialState = { count: 7 };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    up: (state) => {
      state.count = state.count + 1;
    },
    down: (state) => {
      state.count = state.count - 1;
    },
    reset: (state) => {
      state.count = 7;
    },
  },
});
export const { up, down, reset } = counterSlice.actions;
export default counterSlice.reducer;
