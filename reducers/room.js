import { CREATE_ROOM, LEAVE_ROOM, CANCEL_CREATE_ROOM, UPDATE_ROOM } from "../actions/room";

export default function(state = null, action) {
  switch (action.type) {
    case CREATE_ROOM:
      alert('action result ' + action.result)
      return action.result;
    case LEAVE_ROOM:
      return state;
    case CANCEL_CREATE_ROOM:
      return state;
    case UPDATE_ROOM:
      if (!action.result) action.result = null;
      return action.result;
    default:
      return state;
  }
}
