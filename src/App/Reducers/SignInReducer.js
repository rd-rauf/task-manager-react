import * as actionTypes from "../Actions/ActionTypes";

const initialState = {
  isAuthenticated: localStorage.getItem("userInfo") ? true : false,
  userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : undefined
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS: {
      return { ...state, isAuthenticated: true, userInfo: action.payload };
    }
    default:
      return state;
  }
};

export default signInReducer;
