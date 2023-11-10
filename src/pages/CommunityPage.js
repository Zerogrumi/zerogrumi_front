import React from "react";
import styles from "../css/CommunityPage.module.css";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.nav}>
          <div className={styles.title}>길거리 음식도 제로웨이스트하자</div>
        </div>
        <Card />
        <div className={styles.comment}>
          오 그건 생각 못했네 좋은 방법 공유 고마워!
        </div>
        <div className={styles.comment}>음료수도 텀블러에 담아가면 좋아!</div>

        <div className={styles.commentbox}>
          <input className={styles.inputComment}></input>
          <button className={styles.commentBtn}>보내기</button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Community;
