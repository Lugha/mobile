export const CREATE_ROOM = "CREATE_ROOM";
export const JOIN_ROOM = "JOIN_ROOM";
export const LEAVE_ROOM = "LEAVE_ROOM";
export const CANCEL_CREATE_ROOM = "CANCEL_CREATE_ROOM";

export const subscribeCreateRoom = () => {
  return {
    handle: CREATE_ROOM,
    event: CREATE_ROOM
  };
};

export const unsubscribeCreateRoom = () => {
  return {
    event: CREATE_ROOM,
    leave: true
  };
};

export const emitCreateRoom = () => {
  return {
    event: CREATE_ROOM,
    emit: true,
    payload: {}
  };
};

export const emitCancelCreateRoom = () => {
  return {
    event: CANCEL_CREATE_ROOM,
    emit: true,
    payload: {}
  };
};

export const emitJoinRoom = room => {
  return {
    event: JOIN_ROOM,
    emit: true,
    payload: { room }
  };
};

export const emitLeaveRoom = room => {
  return {
    event: LEAVE_ROOM,
    emit: true,
    payload: { room }
  };
};
