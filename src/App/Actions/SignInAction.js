import signInService from "../Services/SignInService";
import * as actionTypes from "./ActionTypes";

export const signInAction = (email, password) => {
  return dispatch => {
    dispatch({ type: actionTypes.AUTH_START });
    signInService
      .signIn(email, password)
      .then(userInfo => {
        if (userInfo) {
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          dispatch({ type: actionTypes.AUTH_SUCCESS, payload: userInfo });
        } else {
          dispatch({ type: actionTypes.AUTH_FAIL, payload: undefined });
        }
      })
      .catch(error => {
        dispatch({ type: actionTypes.NETWORK_ACCESS_ERROR });
      });
  };
};

export const signOutAction = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};
