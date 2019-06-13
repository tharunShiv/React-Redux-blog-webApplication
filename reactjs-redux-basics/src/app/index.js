import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";

import App from "./containers/App";
import store from "./store";
// it takes 2 args
// the first argument is the reducer we want to use,
// we can use multiple reducer
// a reducer takes an action and changes the state
// the second argument takes the initial application state

// the first time we set up our store and no initial state is sent, initialState is sent

/** math reducer moved */

/** user reducer moved */

// // its many fat arrow functions coupled each returns a function
// // and uses the previously returned function
// const myLogger = store => next => action => {
//   console.log("Logged action:", action);
//   // next is a method provided by redux pattern
//   // if next is not called , teh action is not travelling to the store
//   // and will fail.
//   next(action);
// };

//

/**MOVED TO STORE */
// // since we are initializing state in the above arguments
// // const store = createStore(reducer, 1);
// const store = createStore(
//   combineReducers({ mathReducer, userReducer }),
//   {},
//   applyMiddleware(myLogger, createLogger())
// );

// the call back function is run everytime the store is updated
// store.subscribe(() => {
//   console.log("Store Updated", store.getState());
// });

// dispatchin actionsls

// actions are dispatched to the store and store sends it to the reducer, andn doesnt handle it

// the dispatch expects a jS action
// payload is the data to use for the state
// store.dispatch({
//   type: "ADD",
//   payload: 10
// });

// store.dispatch({
//   type: "ADD",
//   payload: 10
// });

// store.dispatch({
//   type: "SUBTRACT",
//   payload: 10
// });

// store.dispatch({
//   type: "SET_AGE",
//   payload: 22
// });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.getElementById("app")
);
