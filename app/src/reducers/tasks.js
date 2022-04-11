import { load } from 'redux-localstorage-simple';

import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
  CLEAR_TASKS
} from "../constants";

let TASKS = load({
  states: ["tasks"],
  namespace: 'todo-list',
});

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
  TASKS = {
    tasks: [],
  }
}

const tasks = (state = TASKS.tasks, { type, id, text, isCompleted = false }) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state, {
          id,
          text,
          isCompleted,
        }
      ];
    case DELETE_TASK:
      return [...state].filter(task => task.id !== id);
    case COMPLETE_TASK:
      return [...state].map(task => {
        if (task.id === id)
          task.isCompleted = !task.isCompleted;
        return task;
      });
    case EDIT_TASK:
      return [...state].map(task => {
        if (task.id === id)
          task.text = text;
        return task;
      });
    case CLEAR_TASKS:
      return [];
    default:
      return state;
  }
}

export default tasks;