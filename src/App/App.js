import React, { Component } from "react";
import ProtectedView from './Components/HOC/ProtectedView';

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProtectedView />
      </div>
    );
  }
}

export default App;
