import signInService from "../Services/SignInService";
import * as actionTypes from "./ActionTypes";

import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const signInAction = (email, password) => {
  return dispatch => {
    dispatch({ type: actionTypes.AUTH_START });
    signInService
      .signIn(email, password)
      .then(userInfo => {
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        dispatch({ type: actionTypes.AUTH_SUCCESS, payload: userInfo });
      })
      .catch(error => {
        dispatch({ type: actionTypes.AUTH_FAIL });
      });
  };
};
