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

import { createStore } from "redux";

// it takes 2 args
// the first argument is the reducer we want to use,
// we can use multiple reducer
// a reducer takes an action and changes the state
// the second argument takes the initial application state

const reducer = (state, action) => {
  // we typically want to determine which action occured
  switch (action.type) {
    case "ADD":
      state = state + action.payload;
      break;
    case "SUBTRACT":
      state = state - action.payload;
      break;
  }

  // reducer has to return a state
  // and this is the new state that our application wil use now onwards
  return state;
};

const store = createStore(reducer, 1);

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
