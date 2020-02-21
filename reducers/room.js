import { CREATE_ROOM, UPDATE_ROOM } from "../actions/room";

export default function(state = null, action) {
  switch (action.type) {
    case CREATE_ROOM:
      return action.result;
    case UPDATE_ROOM:
      return action.room;
    default:
      return state;
  }
}
