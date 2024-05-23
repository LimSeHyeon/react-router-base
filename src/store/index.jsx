import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counter";
import { configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = configureStore({ reducer: rootReducer});
// console.log(store.getState());
export default store;