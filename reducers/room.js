import { CREATE_ROOM } from "../actions/room";

export default function(state = null, action) {
  switch (action.type) {
    case CREATE_ROOM:
      return action.result;
    default:
      return state;
  }
}
