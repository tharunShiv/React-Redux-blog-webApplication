// import React from "react";
// import { render } from "react-dom";

// import { User } from "./components/User";
// import { Main } from "./components/Main";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       username: "Max"
//     };
//   }

//   changeUsername(newName) {
//     this.setState({
//       username: newName
//     });
//   }

//   render() {
//     return (
//       <div className="container">
//         <Main changeUsername={this.changeUsername.bind(this)} />
//         <User username={this.state.username} />
//       </div>
//     );
//   }
// }

// render(<App />, window.document.getElementById("app"));

import { createStore, combineReducers } from "redux";

// it takes 2 args
// the first argument is the reducer we want to use,
// we can use multiple reducer
// a reducer takes an action and changes the state
// the second argument takes the initial application state

// the first time we set up our store and no initial state is sent, initialState is sent

const mathReducer = (
  state = {
    result: 1,
    lastValues: [],
    username: "shiv"
  },
  action
) => {
  // we typically want to determine which action occured
  switch (action.type) {
    case "ADD":
      //   state = state + action.payload;
      //   state.result += action.payload;
      /**
       * If you directly change it like this,
       * then it will change it in the memory and the same memory
       * location is changed.
       * hence the result value of previous states are also changed to the
       * recent ones.
       * so we will follow another approach
       */
      // we will create a new state
      // and use all teh properties of the old state
      // DONT DO THIS>> WIL NOT WORK FOR lastValues
      //   state = {
      //     ...state
      //   };
      //   state.result += action.payload;
      // DO THIS
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };

      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
  }

  // reducer has to return a state
  // and this is the new state that our application wil use now onwards
  return state;
};

const userReducer = (
  state = {
    name: "shiv",
    age: 20
  },
  action
) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      };
      break;
  }
  return state;
};
// since we are initializing state in the above arguments
// const store = createStore(reducer, 1);
const store = createStore(combineReducers({ mathReducer, userReducer }));

// the call back function is run everytime the store is updated
store.subscribe(() => {
  console.log("Store Updated", store.getState());
});

// dispatchin actions
// actions are dispatched to the store and store sends it to the reducer, andn doesnt handle it

// the dispatch expects a jS action
// payload is the data to use for the state
store.dispatch({
  type: "ADD",
  payload: 10
});

store.dispatch({
  type: "ADD",
  payload: 10
});

store.dispatch({
  type: "SUBTRACT",
  payload: 10
});

store.dispatch({
  type: "SET_AGE",
  payload: 22
});
