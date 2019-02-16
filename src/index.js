import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

import App from "./App/App";
import rootReducer from "./App/Reducers";
import "./index.scss";

const actionLoggerMiddleware = store => next => action => {
  console.log(" ACTION: ", action);
  next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(actionLoggerMiddleware, thunk));

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
