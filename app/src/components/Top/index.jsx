import React from "react";

import styles from "./Top.module.scss";

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles.leftside}>
        <input
          className={styles.title}
          placeholder="Untitled project"
          type="text"
          maxLength={40}
        />
        <span className={styles.tasks}>3 tasks left</span>
      </div>
      <div className={styles.progress}>
        <div className={styles.progressBar} style={{ width: "33%" }} />
      </div>
    </div>
  );
};

export default Top;
