import { combineReducers } from "redux";

import questions from "./questions";
import score from "./score";

const reducers = combineReducers({ questions, score });

export default reducers;
