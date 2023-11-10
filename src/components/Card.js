import React, { useState } from "react";
import styles from "../css/CommunityPage.module.css";

const Card = ({ showRecommendBar = true }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [saveCount, setSaveCount] = useState(0);

  const handleLikeClick = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  const handleSaveClick = () => {
    setSaveCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div className={styles.box}>
        <div className={styles.user}>
          <img className={styles.userImg}></img>
          <div className={styles.userName}>
            <div style={{ width: "100%", fontSize: "18px", fontWeight: "2px" }}>
              환경이좋아님
            </div>
            제로등급: OOOXO
          </div>
        </div>
        <div className={styles.userContentbox}>
          <div className={styles.subtitle}>길거리 음식도 제로웨이스트하자</div>
          <div className={styles.subcontent}>
            길거리 음식 사먹을때 일회용품에 담아주니까 낭비가 되는거 같아서
          </div>
        </div>
        {showRecommendBar && (
          <div className={styles.recommendBar}>
            <div className={styles.recommend}>
              공감 {likeCount} 저장 {saveCount} 댓글 2
            </div>
            <button className={styles.recommendBtn} onClick={handleLikeClick}>
              공감
            </button>
            <button className={styles.saveBtn} onClick={handleSaveClick}>
              저장
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
