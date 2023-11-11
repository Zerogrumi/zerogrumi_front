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

        <Link to="/login">
          <div className={styles.First_btn}>
            <p>SIGN IN</p>
          </div>
        </Link>
        <Link to="/signup">
          <div className={styles.First_btn}>
            <p>SIGN UP</p>
          </div>
        </Link>
        <Link to="/home">
          <div className={styles.First_btn}>
            <p>HOME</p>
          </div>
        </Link>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default First;
