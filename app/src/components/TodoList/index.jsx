import React from "react";

import TodoItem from "../TodoItem";

const TodoList = ({ array }) => {
  return (
    <ul>
      {array.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default TodoList;
