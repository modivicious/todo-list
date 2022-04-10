import { load } from 'redux-localstorage-simple';

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
    case "ADD_TASK":
      return [
        ...state, {
          id,
          text,
          isCompleted,
        }
      ];
    case "DELETE_TASK":
      return [...state].filter(task => task.id !== id);
    case "COMPLETE_TASK":
      return [...state].map(task => {
        if (task.id === id)
          task.isCompleted = !task.isCompleted
        return task;
      });
    case "CLEAR_TASKS":
      return [];
    default:
      return state;
  }
}

export default tasks;