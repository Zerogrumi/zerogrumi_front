import React from "react";
import styles from "../css/Login.module.css";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.nav}></div>
        <div className={styles.title}>ZERO WASTE</div>
        <div className={styles.subhead}>Start with me, Start with you</div>
        <div className={styles.signinText}>
          <p>sign in</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.signIn_ID}>
          <p>ID</p>
          <input type="text" name="signIn_Id" placeholder="" />
        </div>
        <div className={styles.signIn_PW}>
          <p>Password</p>
          <input type="text" name="signIn_PW" placeholder="" />
        </div>
        <div className={styles.signIn_btn}>
          <Link to="/login">
            <p>sign in</p>
          </Link>
        </div>
        <div className={styles.line}></div>
        <div className={styles.conment}>계정이 없으신가요? </div>
        <div className={styles.signUp_btn}>
          <Link to="/login">
            <p>sign up</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LogIn;
