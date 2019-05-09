import * as actionTypes from "../Actions/ActionTypes";

const initialState = {
  networkAccess: true,
  isAuthenticated: localStorage.getItem("userInfo") ? true : false,
  userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : undefined
};

const signInReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS: {
      return { ...state, isAuthenticated: true, userInfo: action.payload };
    }
    case actionTypes.AUTH_FAIL: {
      return { ...state, isAuthenticated: false };
    }
    case actionTypes.AUTH_LOGOUT: {
      return { ...state, isAuthenticated: false };
    }
    case actionTypes.NETWORK_ACCESS_ERROR: {
      return { ...state, networkAccess: false };
    }
    default:
      return state;
  }
};

export default signInReducer;
