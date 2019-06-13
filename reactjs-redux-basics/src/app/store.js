import { createStore, combineReducers, applyMiddleware } from "redux";
//import createLogger from "redux-logger";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";

const myLogger = store => next => action => {
  console.log("Logged action:", action);
  // next is a method provided by redux pattern
  // if next is not called , teh action is not travelling to the store
  // and will fail.
  next(action);
};

export default createStore(
  combineReducers({ math, user }),
  {},
  applyMiddleware(myLogger)
);
