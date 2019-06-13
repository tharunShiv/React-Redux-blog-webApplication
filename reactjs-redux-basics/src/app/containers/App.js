import React from "react";
import { connect } from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";

import { setName } from "../actions/userActions";

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Hello</h1>
        <Main changeUsername={name => this.props.setName(name)} />
        <User username={this.props.user.name} />
      </div>
    );
  }
}

// mention the state reducers you will be using here..
// use the keys such as user and math in the component properties
const mapStateToProps = state => {
  return {
    user: state.user,
    math: state.math
  };
};

// for teh actions that we can execute and send to the reducer
const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch(setName(name));
    }
  };
};

// we are exporting a hooked up component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
