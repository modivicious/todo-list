import React, { useState } from "react";

import styles from "./TodoItem.module.scss";

const TodoItem = ({ item }) => {
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
          checked={isChecked}
          onChange={onCheck}
          id={`check${item.id}`}
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
      <button className={styles.delete} aria-label="Delete" />
    </li>
  );
};

export default TodoItem;
