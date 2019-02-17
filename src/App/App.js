import React, { Component } from "react";
import { Switch, Route } from "react-router";

import SignIn from "./Components/SignIn/SignIn";
import Paperbase from "../App/Components/Paperbase/Paperbase";

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
