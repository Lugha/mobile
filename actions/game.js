import { GET_END_GAME } from "../events";

export const GET_NEXT_ROUND = "GET_NEXT_ROUND";
export const STORE_END_GAME = "STORE_END_GAME";
export const UPDATE_GAME = "UPDATE_GAME";

export const emitGetNextRound = (room, success) => {
  return {
    event: GET_NEXT_ROUND,
    emit: true,
    payload: { room, success }
  };
};

export const subscribeEndGame = () => {
  return {
    handle: STORE_END_GAME,
    event: GET_END_GAME,
  };
};

export const updateGame = () => {
  return {type: UPDATE_GAME};
};