import { createSlice } from "@reduxjs/toolkit";

interface InitialState {}

const initialState: InitialState = {};

const slice = createSlice({
  initialState,
  name: "game",
  reducers: {},
});

const { reducer, actions } = slice;

export const {} = actions;
export default reducer;
