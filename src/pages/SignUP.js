import React from "react";
import styles from "../css/SignUP.module.css";
import Title from "../components/title";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const SignUP = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.nav}></div>
        <Title />
        <div className={styles.signinText}>
          <p>sign up</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.signUp_ID}>
          <p>ID</p>
          <input type="text" name="signUp_ID" placeholder="" />
        </div>
        <div className={styles.signUp_nickname}>
          <p>Nickname</p>
          <input type="text" name="signUp_nickname" placeholder="" />
        </div>
        <div className={styles.signUp_pw}>
          <p>Password</p>
          <input type="text" name="signUp_pw" placeholder="" />
        </div>
        <div className={styles.signUp_checkpw}>
          <p>Check Password</p>
          <input type="text" name="signUp_checkPW" placeholder="" />
        </div>
        <div className={styles.signUp_btn}>
          <p>sign up</p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SignUP;
