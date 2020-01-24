import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducers/game";

const rootReducer = combineReducers({ game: gameReducer });
/**
 * Function to create the store from either an initial state (necessary for next) or initialize it to the normal defaults.
 *
 * @param {*} initialState Not checked for correct shape. Use carefully.
 */
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
