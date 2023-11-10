import React from "react";
import styles from "../css/CommunityPage.module.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.nav}>
          <div className={styles.title}>길거리 음식도 제로웨이스트하자</div>
        </div>
        <div className={styles.box}>
          <div className={styles.user}>
            <img className={styles.userImg}></img>
            <div className={styles.userName}>
              <div
                style={{ width: "100%", fontSize: "18px", fontWeight: "2px" }}
              >
                환경이좋아님
              </div>
              제로등급 : OOOXO
            </div>
          </div>
          <div className={styles.userContentbox}>
            <div className={styles.subtitle}>
              길거리 음식도 제로웨이스트하자
            </div>
            <div className={styles.subcontent}>
              길거리 음식 사먹을때 일회용품에 담아주니까 낭비가 되는거 같아서
            </div>
          </div>
          <div className={styles.recommendBar}>
            <div className={styles.recommend}>공감 1 저장 1 댓글 2</div>
            <button className={styles.recommendBtn}>공감</button>
            <button className={styles.saveBtn}>저장</button>
          </div>
        </div>
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
