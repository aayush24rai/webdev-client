import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ReduxTodo = { id: string; title: string };
const emptyTodo: ReduxTodo = { id: "-1", title: "Learn Redux" };

const initialState = {
  todos: [
    { id: "1", title: "Train a sentiment classifier (NLP)" },
    { id: "2", title: "Run a Wireshark capture for security lab" },
    { id: "3", title: "Wire Kambaz to Redux" },
  ] as ReduxTodo[],
  todo: emptyTodo,
  nextId: 4,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ReduxTodo>) => {
      state.todos.push({ ...action.payload, id: String(state.nextId) });
      state.nextId += 1;
      state.todo = emptyTodo;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<ReduxTodo>) => {
      state.todos = state.todos.map((t) => (t.id === action.payload.id ? action.payload : t));
      state.todo = emptyTodo;
    },
    setTodo: (state, action: PayloadAction<ReduxTodo>) => {
      state.todo = action.payload;
    },
  },
});
export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;
