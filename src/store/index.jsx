import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counter";
import todoReducer from "./reducers/todo";
import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';

const myMiddlewares = [logger];


export const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>{
    const middlewares = getDefaultMiddleware().concat(myMiddlewares);
    console.log(middlewares);
    return middlewares;
  }
});

export default store;