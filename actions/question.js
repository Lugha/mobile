import { GET_RANDOM_ROUND } from "../events";

export const STORE_QUESTION = "STORE_QUESTION";

export const subscribeQuestions = () => {
  console.log("subscribe questions");
  return {
    handle: STORE_QUESTION,
    event: GET_RANDOM_ROUND
  };
};

export const requestQuestions = () => ({
  event: GET_RANDOM_ROUND,
  emit: true
});
