import { STORE_QUESTION } from "../actions/question";

const cloneObject = function(obj) {
  return JSON.parse(JSON.stringify(obj));
};

export default function(state, action) {
  switch (action.type) {
    case STORE_QUESTION:
      const newState = cloneObject(state);
      console.log(action);
      newState.questions = action.result;
      return newState;
    default:
      return {};
  }
}
