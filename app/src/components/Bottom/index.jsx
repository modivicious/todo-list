import React from "react";

import styles from "./Bottom.module.scss";

const Bottom = ({ onAdd, onClear }) => {
  return (
    <div className={styles.bottom}>
      <button className={styles.add} onClick={() => onAdd()}>
        Add new task
      </button>
      <button className={styles.clear} onClick={() => onClear()}>
        Clear all
      </button>
    </div>
  );
};

export default Bottom;
