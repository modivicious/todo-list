import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addTask,
  deleteTask,
  completeTask,
  editTask,
  clearTasks,
  changeTitle,
} from "../../actions/actionCreator";

import Top from "../../components/Top";
import TodoList from "../../components/TodoList";
import Bottom from "../../components/Bottom";

const Todo = () => {
  const tasks = useSelector((state) => state.tasks);
  const title = useSelector((state) => state.title)[0].listTitle || "";
  const dispatch = useDispatch();

  const onAdd = () => {
    dispatch(addTask());
  };

  const onDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const onComplete = (id) => {
    dispatch(completeTask(id));
  };

  const onEdit = (id, text) => {
    dispatch(editTask(id, text));
  };

  const onClear = () => {
    dispatch(clearTasks());
  };

  const onTitleChange = (newTitle) => {
    dispatch(changeTitle(newTitle));
  };

  return (
    <>
      <Top items={tasks} title={title} onTitleChange={onTitleChange} />
      <TodoList
        items={tasks}
        onDelete={onDelete}
        onComplete={onComplete}
        onEdit={onEdit}
      />
      <Bottom onAdd={onAdd} onClear={onClear} />
    </>
  );
};

export default Todo;
