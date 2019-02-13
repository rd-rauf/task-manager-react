import React, { Component } from "react";
import { Switch, Route } from "react-router";

import SignIn from "./Components/SignIn/SignIn";
import Dashboard from "./Components/Dashboard/Dashboard";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
