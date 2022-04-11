import { combineReducers } from "redux";

import tasks from "./tasks";
import title from "./title";

const rootReducer = combineReducers({ tasks, title });

export default rootReducer;
