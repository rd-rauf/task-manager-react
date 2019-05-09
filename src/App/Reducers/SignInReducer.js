import * as actionTypes from "../Actions/ActionTypes";

const initialState = {
  networkAccess: true,
  userAuthFailed: false,
  isAuthenticated: localStorage.getItem("userInfo") ? true : false,
  userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : undefined
};

const signInReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS: {
      return { ...state, networkAccess: true, isAuthenticated: true, userAuthFailed: false, userInfo: action.payload };
    }
    case actionTypes.AUTH_FAIL: {
      return { ...state, networkAccess: true, isAuthenticated: false, userAuthFailed: true };
    }
    case actionTypes.AUTH_LOGOUT: {
      return { ...state, isAuthenticated: false };
    }
    case actionTypes.NETWORK_ACCESS_ERROR: {
      return { ...state, networkAccess: false, userAuthFailed: false };
    }
    default:
      return state;
  }
};

export default signInReducer;
