import { UPDATE_USER } from "../actions/user";

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_USER:
      return action.user ? { ...state, ...action.user } : {};
    default:
      return state;
  }
}
