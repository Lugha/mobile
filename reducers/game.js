import { GET_NEXT_ROUND, STORE_END_GAME, UPDATE_GAME } from "../actions/game";

const initState = {
  end: false,
}

export default function(state = initState, action) {
  switch (action.type) {
    case GET_NEXT_ROUND:
      return state;
    case STORE_END_GAME:
      console.log({ result: action.result })
      return { ...state, ...JSON.parse(action.result) };
    case UPDATE_GAME:
      return {...state, end: !state.end };
    default:
      return state;
  };
}
