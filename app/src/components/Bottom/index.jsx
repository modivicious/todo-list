import React from "react";

import styles from './Bottom.module.scss';

const Bottom = () => {
  return (
    <div className={styles.bottom}>
      <button className={styles.add}>Add new task</button>
      <button className={styles.clear}>Clear all</button>
    </div>
  );
};

export default Bottom;
