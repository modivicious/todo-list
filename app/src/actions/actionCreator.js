import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
  CLEAR_TASKS,
  CHANGE_TITLE,
} from "../constants";

export const addTask = () => ({
  type: ADD_TASK,
  id: +Date.now(),
  text: "",
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  id,
});

export const completeTask = (id) => ({
  type: COMPLETE_TASK,
  id,
});

export const editTask = (id, text) => ({
  type: EDIT_TASK,
  id,
  text,
});

export const clearTasks = () => ({
  type: CLEAR_TASKS,
});

export const changeTitle = (newTitle) => ({
  type: CHANGE_TITLE,
  newTitle,
});
