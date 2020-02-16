import { STORE_QUESTION } from "../actions/question";

const cloneObject = function(obj) {
  return JSON.parse(JSON.stringify(obj));
};

export default function(state, action) {
  switch (action.type) {
    case STORE_QUESTION:
      const newState = cloneObject(state);
      newState.questions = action.questions;
      return newState;
    default:
      return {};
  }
}
