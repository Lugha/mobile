export const UPDATE_SCORE = "UPDATE_SCORE";

export function updateScore(newScore) {
  return {
    type: UPDATE_SCORE,
    score: newScore
  };
}
