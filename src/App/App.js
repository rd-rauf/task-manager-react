import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { ProtectedRoute } from './Components/HOC/ProtectedRoute';

import SignIn from "./Components/SignIn/SignIn";
import Paperbase from "./Components/Paperbase/Paperbase";
import ProtectedView from './Components/HOC/ProtectedView';

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/dashboard" exact component={Paperbase} />
        </Switch>
      </div>
    );
  }
}

export default App;
