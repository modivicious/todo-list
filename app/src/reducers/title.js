import { load } from 'redux-localstorage-simple';

import { CHANGE_TITLE } from "../constants"

let TITLE = load({
  states: ["title"],
  namespace: 'todo-title',
});

if (!TITLE || !TITLE.title || !TITLE.title.length) {
  TITLE = {
    title: [
      {
        listTitle: "",
      }
    ],
  }
}

const title = (state = TITLE.title, { type, newTitle }) => {
  switch (type) {
    case CHANGE_TITLE:
      return [...state].map((task) => {
        if (task.listTitle !== undefined)
          task.listTitle = newTitle;
        return task;
      });
    default:
      return state;
  }
}

export default title;