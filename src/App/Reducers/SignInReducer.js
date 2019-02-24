import * as actionTypes from "../Actions/ActionTypes";

const initialState = {
  isAuthenticated: false
};

const signInReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS: {
      return { ...state, isAuthenticated: true, payload: action.payload };
    }
    default:
      return state;
  }
};

export default signInReducer;
