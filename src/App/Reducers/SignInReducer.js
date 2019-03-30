import * as actionTypes from "../Actions/ActionTypes";

const initialState = {
  isAuthenticated: localStorage.getItem("userInfo") ? true : false
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS: {
      return { ...state, isAuthenticated: true, payload: action.payload };
    }
    default:
      return state;
  }
};

export default signInReducer;
