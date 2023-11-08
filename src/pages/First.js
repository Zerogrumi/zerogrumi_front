import React from "react";
import styles from "../css/First.module.css";
import { Link } from "react-router-dom";

const First = (props) => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.nav}></div>
        <div className={styles.zeroImg}></div>
        <div className={styles.title}>ZERO WASTE</div>
        <div className={styles.subhead}>Start with me, Start with you</div>
        <div className={styles.First_btn}>
          <Link to="/login">
            <p>SIGN IN</p>
          </Link>
        </div>
        <div className={styles.First_btn}>
          <Link to="/signup">
            <p>SIGN UP</p>
          </Link>
        </div>
        <div className={styles.First_btn}>
          <Link to="/home">
            <p>HOME</p>
          </Link>
        </div>
        <div className={styles.footer}></div>
      </div>
    </>
  );
};

export default First;
