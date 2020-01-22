import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

export const createStore = (initialState: any) =>
  initialState != null
    ? configureStore({
        preloadedState: initialState,
        reducer: rootReducer,
      })
    : configureStore({ reducer: rootReducer });

type ValuesType<
  T extends ReadonlyArray<any> | ArrayLike<any> | Record<any, any>
> = T extends ReadonlyArray<any>
  ? T[number]
  : T extends ArrayLike<any>
  ? T[number]
  : T extends object
  ? T[keyof T]
  : never;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ValuesType<
  Pick<ReturnType<typeof createStore>, "dispatch">
>;
