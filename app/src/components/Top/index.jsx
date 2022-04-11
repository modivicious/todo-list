import React, { useState } from "react";

import styles from "./Top.module.scss";

const Top = ({ items, title, onTitleChange }) => {
  const [listTitle, setListTitle] = useState(title);

  const percentageOfCompleted =
    Math.round(
      (items.reduce((acc, item) => (item.isCompleted ? (acc += 1) : acc), 0) /
        items.length) *
        100
    ) || 0;

  const onNewTitle = (e) => {
    setListTitle(e.target.value);
  };

  const onEnter = (e) => {
    if (e.key === "Enter") e.target.blur();
  };

  return (
    <div className={styles.top}>
      <div className={styles.leftside}>
        <input
          className={styles.title}
          placeholder="Untitled project"
          value={listTitle}
          onChange={(e) => onNewTitle(e)}
          onBlur={(e) => onTitleChange(e.target.value)}
          onKeyDown={(e) => onEnter(e)}
          type="text"
          maxLength={40}
        />
        <span className={styles.tasksQuantity}>
          {items.length > 0
            ? `${items.length} tasks left`
            : `you have no tasks`}
        </span>
      </div>
      <div className={styles.progressContainer}>
        <div className={styles.progress}>
          <div
            className={styles.progressBar}
            style={{ width: `${percentageOfCompleted}%` }}
          />
        </div>
        <span className={styles.percentage}>{percentageOfCompleted}%</span>
      </div>
    </div>
  );
};

export default Top;
