import React, { useState } from "react";

import styles from "./TodoItem.module.scss";

const TodoItem = ({ item, onDelete, onComplete, onEdit, task }) => {
  const [inputValue, setInputValue] = useState(item.text);

  const onTextChange = (e) => {
    setInputValue(e.target.value);
  };

  const focusToItem = (e) => {
    const currentIndex = +e.target.dataset.task;
    if (e.key === "Enter" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextElem = document.querySelector(
        `[data-task="${currentIndex + 1}"]`
      );
      nextElem && nextElem.focus();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevItem = document.querySelector(
        `[data-task="${currentIndex - 1}"]`
      );
      prevItem && prevItem.focus();
    }
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
        data-task={task}
        onChange={onTextChange}
        onBlur={(e) => {
          onEdit(item.id, e.target.value);
        }}
        onKeyDown={(e) => focusToItem(e)}
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
