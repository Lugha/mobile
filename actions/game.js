import { UPDATE_GAME } from "../events";

export const GET_NEXT_STAGE = "GET_NEXT_ROUND";
export const CLEAN_GAME = "CLEAN_GAME"
export const STORE_GAME = "STORE_GAME"; 
export const JOIN_TRADUCTIONS_WAITINGLIST = "JOIN_TRADUCTIONS_WAITINGLIST";
export const LEAVE_TRADUCTIONS_WAITINGLIST = "LEAVE_TRADUCTIONS_WAITINGLIST";
export const JOIN_ROOM = "JOIN_ROOM";

//SUBSCRIBE ACTIONS
export const subscribeGame = () => {
  return {
    handle: STORE_GAME,
    event: UPDATE_GAME, 
  }
}

export const unsubscribeGame = () => {
  return {
    event: UPDATE_GAME,
    leave: true,
  }
}

//EMIT ACTIONS
export const emitUpdateStage = (room, currentGameSuccess) => {
  return {
    event: GET_UPDATE_STAGE,
    emit: true,
    payload: { room, currentGameSuccess }
  };
};


//CLEAN STORE ACTION
export const cleanGame = () => {
  return {
    type: CLEAN_GAME,
  };
};

export const emitJoinWaitingList = () => {
  return {
    event: JOIN_TRADUCTIONS_WAITINGLIST,
    emit: true,
  };
};

export const emitLeaveWaitingList = () => {
  return {
    event: LEAVE_TRADUCTIONS_WAITINGLIST,
    emit: true,
  };
}

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

// export const subscribeEndGame = () => {
//   return {
//     handle: STORE_END_GAME,
//     event: GET_END_GAME,
//   };
// };

// export const updateGame = () => {
//   return {type: UPDATE_GAME};
// };

// export const unsubscribeEndGame = () => {
//   return {
//     event: GET_END_GAME,
//     leave: true
//   };
// };