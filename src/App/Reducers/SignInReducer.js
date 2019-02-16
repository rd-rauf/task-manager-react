import * as actionTypes from "../Store/Constants";

const initialState = {
  userLoggedIn: false
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGGED_IN: {
      return { ...state, userLoggedIn: true, payload: action.payload };
    }
    default:
      return state;
  }
};

export default signInReducer;