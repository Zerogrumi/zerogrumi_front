import React, { useEffect, useState } from "react";
import styles from "../css/CommunityPage.module.css";
import { useParams, useLocation } from "react-router-dom";

const Card = ({ showRecommendBar = true, commentCount }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [saveCount, setSaveCount] = useState(0);
  const [postData, setPostData] = useState({});
  const { id } = useParams();
  const location = useLocation(); // useLocation을 여기서 가져옴

  useEffect(() => {
    if (location.state) {
      const storedDataString = sessionStorage.getItem("writeData");
      const storedData = storedDataString ? JSON.parse(storedDataString) : [];
      const post = storedData.find((data) => data.id === parseInt(id));

      if (post) {
        setPostData(post);
      }
    }
  }, [id, location.state]);

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
          <img
            className={styles.userImg}
            src={postData.UserImg}
            alt="User"
          ></img>
          <div className={styles.userName}>
            <div style={{ width: "100%", fontSize: "18px", fontWeight: "2px" }}>
              {postData.name}
            </div>
            제로등급: {postData.zeroGrade}
          </div>
        </div>
        <div className={styles.userContentbox}>
          <div className={styles.subtitle}>{postData.title}</div>
          <div className={styles.subcontent}>{postData.content}</div>
        </div>
        {showRecommendBar && (
          <div className={styles.recommendBar}>
            <div className={styles.recommend}>
              공감 {likeCount} 저장 {saveCount} 댓글 {commentCount}
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
