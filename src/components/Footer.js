import React from "react";
import styles from "../css/Footer.module.css";
import commu_tip from "../img/user.svg";

const footer = () => {
  return (
    <div className={styles.content}>
      <div className={styles.commu_tip}>
        <commu_tip />
      </div>
      <div className={styles.commu_add}></div>
      <div className={styles.home}></div>
      <div className={styles.store}></div>
      <div className={styles.myPage}></div>
    </div>
  );
};
export default footer;
