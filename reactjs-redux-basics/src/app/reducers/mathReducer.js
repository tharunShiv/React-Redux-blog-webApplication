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

export default mathReducer;
