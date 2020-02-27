//GET_NEXT_ROUND, STORE_END_GAME,

import { STORE_GAME, CLEAN_GAME } from "../actions/game";

export default function(state = {}, action) {
  switch (action.type) {
    // case GET_NEXT_ROUND:
    //   return state;
    // case STORE_END_GAME:
    //   console.log({ result: action.result })
    //   return { ...state, ...JSON.parse(action.result) };
    case STORE_GAME:
      return {...state, ...JSON.parse(action.result) };
    case CLEAN_GAME:
      return {}
    default:
      return state;
  };
}