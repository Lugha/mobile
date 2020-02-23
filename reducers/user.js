import { GET_USER } from "../actions/user";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, ...action.user };
    default:
      return state;
  }
}
