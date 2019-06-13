import { FETCH_POSTS, NEW_POST } from "../actions/types";

// items: [] this will represent the post that is gonna represent
// the post that is gonna be returned from action, where we will put the fetch request

// item: {} wil represent the single post in response
const initialState = {
  items: [],
  item: {}
};

// action.type will be of either FETCH_POST or NEW_POST
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        // return the current state
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
