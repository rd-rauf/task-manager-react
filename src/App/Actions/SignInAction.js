import signInService from "../Services/SignInService";
import * as actionTypes from "./ActionTypes";

export const signInAction = (email, password) => {
  return dispatch => {
    dispatch({ type: actionTypes.AUTH_START });
    signInService
      .signIn(email, password)
      .then(userInfo => {
        dispatch({ type: actionTypes.AUTH_SUCCESS, payload: userInfo });
      })
      .catch(error => {
        dispatch({ type: actionTypes.AUTH_FAIL });
      });
  };
};
