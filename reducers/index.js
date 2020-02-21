import { combineReducers } from "redux";

import questions from "./questions";
import score from "./score";
import room from "./room";
import user from "./user";

const reducers = combineReducers({ questions, score, room, user });

export default reducers;
