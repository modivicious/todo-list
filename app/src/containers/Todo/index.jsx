import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Top from "../../components/Top";
import TodoList from "../../components/TodoList";
import Bottom from "../../components/Bottom";

const Todo = () => {
  const tasks = useSelector((state) => state.tasks);
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

  const onClear = () => {
    dispatch({ type: "CLEAR_TASKS" });
  };

  return (
    <>
      <Top items={tasks} />
      <TodoList items={tasks} onDelete={onDelete} onComplete={onComplete} />
      <Bottom onAdd={onAdd} onClear={onClear} />
    </>
  );
};

export default Todo;
