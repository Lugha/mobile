import { combineReducers } from "redux";

// import questions from "./questions";
// import score from "./score";
// import room from "./room";
import user from "./user";
import game from "./game";

//questions, score, room,

const reducers = combineReducers({ user, game });

export default reducers;
