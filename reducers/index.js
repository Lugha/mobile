import { combineReducers } from "redux";

import questions from "./questions";
import score from "./score";
import room from "./room";
import user from "./user";
import game from './game';

const reducers = combineReducers({ questions, score, room, user, game });

export default reducers;
