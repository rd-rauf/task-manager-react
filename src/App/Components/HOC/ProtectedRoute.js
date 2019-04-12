import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthenticated) {
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
