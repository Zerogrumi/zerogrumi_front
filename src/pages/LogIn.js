import React from "react";
import styles from "../css/Login.module.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const LogIn = () => {
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
        <Link to="/home">
          <div className={styles.signIn_btn}>
            <p>sign in</p>
          </div>
        </Link>
        <div className={styles.line}></div>
        <div className={styles.conment}>계정이 없으신가요? </div>
        <Link to="/signup">
          <div className={styles.signUp_btn}>
            <p>sign up</p>
          </div>
        </Link>
        <Footer />
      </div>
    </>
  );
};

export default LogIn;
