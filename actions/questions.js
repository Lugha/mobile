import { GET_RANDOM_ROUND } from "../events";

export const STORE_QUESTION = "STORE_QUESTION";

export const subscribeQuestions = () => {
  return {
    handle: STORE_QUESTION,
    event: GET_RANDOM_ROUND
  };
};

export const unsubscribeQuestions = () => {
  return {
    event: GET_RANDOM_ROUND,
    leave: true
  };
};

export const requestQuestions = () => ({
  event: GET_RANDOM_ROUND,
  emit: true
});
