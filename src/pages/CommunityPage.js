import React from "react";
import styles from "../css/CommunityPage.module.css";
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
              <div style={{ fontSize: "17px", fontWeight: "2px" }}>
                환경이좋아님
              </div>
              제로등급 :{" "}
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
        </div>
        <div className={styles.comment}></div>

        <div className={styles.commentbox}>
          <input className={styles.inputComment}></input>
          <button className={styles.commentBtn}>Send</button>
        </div>
      </div>
    </>
  );
};

export default Community;
