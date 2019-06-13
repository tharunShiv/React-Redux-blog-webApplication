import React from "react";
import { connect } from "react-redux";

import { User } from "./User";
import { Main } from "./Main";

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Hello</h1>
        <Main changeUsername={() => this.props.setName("nandi")} />
        <User username={this.props.user.name} />
      </div>
    );
  }
}

// mention the state reducers you will be using here..
// use the keys such as user and math in the component properties
const mapStateToProps = state => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  };
};

// for teh actions that we can execute and send to the reducer
const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch({
        type: "SET_NAME",
        payload: name
      });
    }
  };
};

// we are exporting a hooked up component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
