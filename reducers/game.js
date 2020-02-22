import { GET_NEXT_ROUND } from "../actions/game";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_NEXT_ROUND:
      return state;
    default:
      return state;
  }
}
