import React from "react";

import TodoItem from "../TodoItem";

import styles from "./TodoList.module.scss";

const TodoList = ({ items, onDelete, onComplete, onEdit }) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <TodoItem
          key={item.id + item.text}
          item={item}
          onDelete={onDelete}
          onComplete={onComplete}
          onEdit={onEdit}
          task={index}
        />
      ))}
    </ul>
  );
};

export default TodoList;
