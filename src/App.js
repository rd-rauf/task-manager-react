import React, { Component } from "react";
import { Switch, Route } from "react-router";

import SignIn from "./components/SignIn/SignIn";
import Dashboard from "./components/Dashboard/Dashboard";

import "./App.css";

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
