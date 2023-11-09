import React from "react";
import styles from "../css/First.module.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const First = (props) => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.nav}></div>
        <Link to="/">
          <div className={styles.zeroImg}></div>
        </Link>
        <Link to="/">
          <div className={styles.title}>ZERO WASTE</div>
        </Link>
        <Link to="/">
          <div className={styles.subhead}>Start with me, Start with you</div>
        </Link>

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
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default First;
