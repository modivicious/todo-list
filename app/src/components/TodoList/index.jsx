import React from "react";

import TodoItem from "../TodoItem";

import styles from "./TodoList.module.scss";

const TodoList = ({ array }) => {
  return (
    <ul className={styles.list}>
      {array.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default TodoList;
