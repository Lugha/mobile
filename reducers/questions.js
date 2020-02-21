import { STORE_QUESTION } from "../actions/questions";

const cloneObject = function(obj) {
  return JSON.parse(JSON.stringify(obj));
};

export default function(state, action) {
  switch (action.type) {
    case STORE_QUESTION:
      console.log({ result: action.result })
      const newState = cloneObject(state);
      return { ...newState, ...JSON.parse(action.result) };
    default:
      return {};
  }
}
