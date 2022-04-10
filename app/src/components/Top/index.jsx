import React from "react";

import styles from "./Top.module.scss";

const Top = ({ items }) => {
  const percentageOfCompleted =
    Math.round(
      (items.reduce((acc, item) => (item.isCompleted ? (acc += 1) : acc), 0) /
        items.length) *
        100
    ) || 0;
  return (
    <div className={styles.top}>
      <div className={styles.leftside}>
        <input
          className={styles.title}
          placeholder="Untitled project"
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
