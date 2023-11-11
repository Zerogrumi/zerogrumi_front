import React from "react";
import styles from "../css/SignUP.module.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const SignUP = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.nav}></div>
        <Link to="/">
          <div className={styles.title}>ZERO WASTE</div>
        </Link>
        <Link to="/">
          <div className={styles.subhead}>Start with me, Start with you</div>
        </Link>
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
        <Link to="/login">
          <div className={styles.signUp_btn}>
            <p>sign up</p>
          </div>
        </Link>
        <Footer />
      </div>
    </>
  );
};

export default SignUP;
