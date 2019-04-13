import React, { Component } from "react";
import { Switch, Route } from "react-router";
import ProtectedRoute from "./Components/HOC/ProtectedRoute";

import SignIn from "./Components/SignIn/SignIn";
import Paperbase from "./Components/Paperbase/Paperbase";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/signin" exact component={SignIn} />
          <ProtectedRoute path="/" exact component={Paperbase} />
          <ProtectedRoute path="/dashboard" exact component={Paperbase} />
        </Switch>
      </div>
    );
  }
}

export default App;
