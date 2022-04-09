import React from "react";

import TodoItem from "../TodoItem";

import styles from "./TodoList.module.scss";

const TodoList = ({ items, onDelete, onComplete }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <TodoItem
          key={item.id + item.text}
          item={item}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
