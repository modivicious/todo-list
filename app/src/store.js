import { applyMiddleware, createStore } from "redux";
import { save } from "redux-localstorage-simple";

import rootReducer from "./reducers";

const configStore = (preloadedState) =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      save({ states: ["tasks"], namespace: "todo-list", }),
      save({ states: ["title"], namespace: "todo-title", })
    )
  );

const store = configStore({});

export default store;
