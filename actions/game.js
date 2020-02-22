export const END_ROUND = "END_ROUND";

export const emitEndRound = room => {
    return {
      event: END_ROUND,
      emit: true,
      payload: { room }
    };
  };
  