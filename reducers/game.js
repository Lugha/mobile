import { END_ROUND } from "../actions/game";

export default function(state = {}, action) {
  switch (action.type) {
    case END_ROUND:
      return action.result;
    default:
      return state;
  }
}
