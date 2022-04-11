import React from "react";

import styles from "./Bottom.module.scss";

const Bottom = ({ onAdd, onClear }) => {
  return (
    <div>
      <div className={styles.buttonsBox}>
        <button
          className={`${styles.button} ${styles.add}`}
          onClick={() => onAdd()}
        >
          Add new task
        </button>
        <button
          className={`${styles.button} ${styles.clear}`}
          onClick={() => onClear()}
        >
          Clear all
        </button>
      </div>
      <div className={styles.saveInfo}>
        <span>You should unfocus the input fields to save your changes.</span>
      </div>
    </div>
  );
};

export default Bottom;
