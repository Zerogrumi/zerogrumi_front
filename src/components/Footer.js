import React from "react";
import styles from "../css/Footer.module.css";

const footer = () => {
  return (
    <div className={styles.content}>
      <div className={styles.commu_tip}>
        <img src="../img/user.svg" />
      </div>
      <div className={styles.commu_add}></div>
      <div className={styles.home}></div>
      <div className={styles.store}></div>
      <div className={styles.myPage}></div>
    </div>
  );
};
export default footer;
