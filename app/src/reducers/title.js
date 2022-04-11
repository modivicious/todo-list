import { load } from 'redux-localstorage-simple';

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

const title = (state = TITLE.title, { newTitle, type }) => {
  switch (type) {
    case "CHANGE_TITLE":
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