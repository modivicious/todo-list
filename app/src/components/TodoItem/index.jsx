import React, { useState } from "react";

import styles from "./TodoItem.module.scss";

const TodoItem = ({ item, onDelete, onComplete }) => {
  const [inputValue, setInputValue] = useState(item.text);
  const [isChecked, setIsChecked] = useState(false);

  const onTextChange = (e) => {
    setInputValue(e.target.value);
  };

  const onCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className={styles.item}>
      <div className={styles.checkboxContainer}>
        <input
          className={`${styles.realCheckbox} visuallyHidden`}
          id={`check${item.id}`}
          checked={isChecked}
          onChange={onCheck}
          onClick={() => onComplete(item.id)}
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
