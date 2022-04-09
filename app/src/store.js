import { createStore } from "redux";

import rootReducer from "./reducers";

const configStore = preloadedState => (
  createStore(rootReducer, preloadedState)
);

const store = configStore({});

export default store;