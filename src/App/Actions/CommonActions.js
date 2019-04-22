
import * as actionTypes from "./ActionTypes";

export function SetPageTitle(title) {
  return { type: actionTypes.AUTH_START, payload: title };
}