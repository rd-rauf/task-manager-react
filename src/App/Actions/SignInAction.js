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
        dispatch({ type: actionTypes.AUTH_SUCCESS, payload: userInfo });
        // history.push("/dashboard");
      })
      .catch(error => {
        dispatch({ type: actionTypes.AUTH_FAIL });
      });
  };
};
