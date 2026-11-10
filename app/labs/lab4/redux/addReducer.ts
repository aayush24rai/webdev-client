import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = { sum: 0, difference: 0 };
const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{ a: number; b: number }>) => {
      state.sum = action.payload.a + action.payload.b;
    },
    subtract: (state, action: PayloadAction<{ a: number; b: number }>) => {
      state.difference = action.payload.a - action.payload.b;
    },
  },
});
export const { add, subtract } = addSlice.actions;
export default addSlice.reducer;
