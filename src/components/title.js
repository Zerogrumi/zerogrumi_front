import React from "react";
import styles from "../css/SignUP.module.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <>
      <Link to="/">
        <div className={styles.title}>ZERO WASTE</div>
      </Link>
      <Link to="/">
        <div className={styles.subhead}>Start with me, Start with you</div>
      </Link>
    </>
  );
};

export default Title;
