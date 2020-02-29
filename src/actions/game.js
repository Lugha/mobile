import {
  UPDATE_GAME,
  JOIN_ROOM,
  JOIN_WAITINGLIST,
  LEAVE_ROOM,
  LEAVE_WAITINGLIST
} from "../events";

export const CLEAN_GAME = "CLEAN_GAME";
export const STORE_GAME = "STORE_GAME";

//SUBSCRIBE ACTIONS
export const subscribeGame = () => {
  return {
    handle: STORE_GAME,
    event: UPDATE_GAME
  };
};

export const unsubscribeGame = () => {
  return {
    event: UPDATE_GAME,
    leave: true
  };
};

//EMIT ACTIONS
export const emitUpdateStage = payload => {
  return {
    event: UPDATE_GAME,
    emit: true,
    payload
  };
};

//CLEAN STORE ACTIONS
export const cleanGame = () => {
  return {
    type: CLEAN_GAME
  };
};

//WAITING LIST ACTIONS
export const emitJoinWaitingList = () => {
  return {
    event: JOIN_WAITINGLIST,
    emit: true
  };
};

export const emitLeaveWaitingList = () => {
  return {
    event: LEAVE_WAITINGLIST,
    emit: true
  };
};

//ROOM ACTIONS
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
