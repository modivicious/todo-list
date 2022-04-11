import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Top from "../../components/Top";
import TodoList from "../../components/TodoList";
import Bottom from "../../components/Bottom";

const Todo = () => {
  const tasks = useSelector((state) => state.tasks);
  const title = useSelector((state) => state.title)[0].listTitle || "";
  const dispatch = useDispatch();

  const onAdd = () => {
    dispatch({
      type: "ADD_TASK",
      id: +Date.now(),
      text: "",
      isSelected: false,
    });
  };

  const onDelete = (id) => {
    dispatch({ type: "DELETE_TASK", id: id });
  };

  const onComplete = (id) => {
    dispatch({ type: "COMPLETE_TASK", id: id });
  };

  const onEdit = (id, text) => {
    dispatch({ type: "EDIT_TASK", id: id, text: text });
  };

  const onClear = () => {
    dispatch({ type: "CLEAR_TASKS" });
  };

  const onTitleChange = (newTitle) => {
    dispatch({ type: "CHANGE_TITLE", newTitle: newTitle });
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
