import * as actionTypes from "../Actions/ActionTypes";

const initialState = {
  userLoggedIn: false
};

const signInReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS: {
      return { ...state, userLoggedIn: true, payload: action.payload };
    }
    default:
      return state;
  }
};

export default signInReducer;
