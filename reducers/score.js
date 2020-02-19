import { UPDATE_SCORE } from "../actions/score";

export default function(state = 0, action) {
  switch (action.type) {
    case UPDATE_SCORE:
      return action.score;
    default:
      return state;
  }
}
