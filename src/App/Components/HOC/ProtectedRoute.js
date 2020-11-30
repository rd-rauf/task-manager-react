import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actionTypes from "../../Actions/ActionTypes";
import * as actions from "../../Actions/SignInAction";

const ProtectedRoute = ({ component: Component, isAuthenticated, signOutAction, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : undefined;
        if (userInfo) {
          return <Component {...props} />;
        } else {
          signOutAction(); // Set isAuthenticated to false
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

const mapDispatchToProps = dispatch => {
  return {
    signOutAction: () => {
      dispatch({ type: actionTypes.AUTH_LOGOUT });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProtectedRoute);
