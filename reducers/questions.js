import { STORE_QUESTION } from "../actions/questions";

export default function(state, action) {
  switch (action.type) {
    case STORE_QUESTION:
      return { ...state, ...JSON.parse(action.result) };
    default:
      return {};
  }
}
