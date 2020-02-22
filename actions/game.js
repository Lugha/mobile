export const GET_NEXT_ROUND = "GET_NEXT_ROUND";

export const emitGetNextRound = room => {
  return {
    event: GET_NEXT_ROUND,
    emit: true,
    payload: { room }
  };
};
