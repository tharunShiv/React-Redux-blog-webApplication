import React from "react";
import "./App.css";

// for react-redux
import { Provider } from "react-redux";

import Posts from "./components/Posts";
import PostForm from "./components/Postform";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
