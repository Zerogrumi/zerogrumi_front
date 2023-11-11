import React, { useState } from "react";
import styles from "../css/CommunityPage.module.css";
import Card from "../components/Card";
import Title from "../components/title";
import Comment from "../components/Comment";
import Footer from "../components/Footer";

const Community = () => {
  const [inputComment, setInputComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentChange = (event) => {
    setInputComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    setComments((prevComments) => [...prevComments, inputComment]);
    setInputComment("");
  };

  return (
    <>
      <div className={styles.content}>
        <div className={styles.nav}>
          <div className={styles.title}>길거리 음식도 제로웨이스트하자</div>
        </div>
        <Title />
        <Card commentCount={comments.length} />
        {comments.map((comment, index) => (
          <Comment key={index} commentText={comment} />
        ))}
        <div className={styles.commentbox}>
          <input
            className={styles.inputComment}
            value={inputComment}
            onChange={handleCommentChange}
          ></input>
          <button className={styles.commentBtn} onClick={handleCommentSubmit}>
            보내기
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Community;
