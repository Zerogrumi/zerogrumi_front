import React from "react";
import styles from "../css/CommunityPage.module.css";

const Comment = ({ commentText }) => {
  return (
    <>
      <div className={styles.comment}>{commentText}</div>
    </>
  );
};

export default Comment;
