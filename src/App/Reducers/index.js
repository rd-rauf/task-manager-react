import { combineReducers } from "redux";
import signInReducer from "./SignInReducer";

export default combineReducers({
  sir: signInReducer
});
