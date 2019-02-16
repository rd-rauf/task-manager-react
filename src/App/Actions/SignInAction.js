import * as actionTypes from "../Store/Constants";

function getSignIn(payload) {
  return {
    type: actionTypes.USER_LOGGED_IN,
    payload: payload
  };
}

export const signInAction = payload => {
  return getSignIn(payload);
};

// export const signInAction = payload => {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(getSignIn(payload));
//     }, 2000);
//   };
// };
