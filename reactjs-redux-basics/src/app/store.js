import { createStore, combineReducers, applyMiddleware, compose } from "redux";
//import createLogger from "redux-logger";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";

const myLogger = store => next => action => {
  console.log("Logged action:", action);
  // next is a method provided by redux pattern
  // if next is not called , teh action is not travelling to the store
  // and will fail.
  next(action);
};

const store = createStore(
  combineReducers({ math, user }),
  {},
  compose(
    applyMiddleware(myLogger, logger, thunk, promise),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
