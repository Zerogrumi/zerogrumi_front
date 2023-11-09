import React from "react";
import styles from "../css/Footer.module.css";
import { Link } from "react-router-dom";
import commu_tip from "../img/commu1.svg";
import commu_add from "../img/commu2.svg";
import home from "../img/home.svg";
import store from "../img/store.svg";
import myPage from "../img/user.svg";

const footer = () => {
  return (
    <div className={styles.content}>
      <div className={styles.commu_tip}>
        <Link to="/home">
          <img src={commu_tip} />
        </Link>
      </div>
      <div className={styles.commu_add}>
        <Link to="/home">
          <img src={commu_add} />
        </Link>
      </div>
      <div className={styles.home}>
        <Link to="/home">
          <img src={home} />
        </Link>
      </div>
      <div className={styles.store}>
        <Link to="/home">
          <img src={store} />
        </Link>
      </div>
      <div className={styles.myPage}>
        <Link to="/myPage">
          <img src={myPage} />
        </Link>
      </div>
    </div>
  );
};
export default footer;
