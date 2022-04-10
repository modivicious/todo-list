import React, { useState } from "react";

import styles from "./TodoItem.module.scss";

const TodoItem = ({ item, onDelete, onComplete, onEdit }) => {
  const [inputValue, setInputValue] = useState(item.text);

  const onTextChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <li
      className={`${styles.item} ${item.isCompleted ? styles.completed : ""}`}
    >
      <div className={styles.checkboxContainer}>
        <input
          className={`${styles.realCheckbox} visuallyHidden`}
          id={`check${item.id}`}
          checked={item.isCompleted}
          onChange={() => onComplete(item.id)}
          type="checkbox"
        />
        <label
          className={styles.styledCheckbox}
          htmlFor={`check${item.id}`}
          aria-label="check"
        />
      </div>
      <input
        className={styles.text}
        value={inputValue}
        onChange={onTextChange}
        onBlur={(e) => {
          onEdit(item.id, e.target.value);
        }}
        type="text"
      />
      <button
        className={styles.delete}
        onClick={() => onDelete(item.id)}
        aria-label="Delete"
      />
    </li>
  );
};

export default TodoItem;
