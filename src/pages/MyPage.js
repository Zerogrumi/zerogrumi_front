import React from "react";
import styles from "../css/MyPage.module.css";
import pointImg from "../img/point.svg";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const MyPage = (props) => {
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
          <p>welcome to MyPage!</p>
        </div>
        <div className={styles.point}>
          <img src={pointImg} />
          <div className={styles.pointNum}>1234</div>
        </div>
        <Card />
      </div>
      <Footer />
    </>
  );
};

export default MyPage;
