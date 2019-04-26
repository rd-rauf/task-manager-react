import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : undefined
        debugger;
        if (userInfo) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: "/signin", state: { from: props.location } }} />;
        }
      }}
    />
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.sir.isAuthenticated
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
