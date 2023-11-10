import React, { useEffect, useRef, useState } from "react";
import styles from "../css/WritePage.module.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Write = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.nav}>
          <div className={styles.title2}>게시글 작성하기</div>
        </div>
        <img className={styles.zeroImg}></img>
        <div className={styles.btnBox}>
          <button className={styles.tipBtn}>Tip</button>
          <button className={styles.storeBtn}>Store</button>
        </div>
        <div className={styles.textbox}>
          <div className={styles.userTitle}>
            <label>제목</label>
            <input className={styles.inputTitle}></input>
          </div>
          <div className={styles.userContent}>
            <label
              style={{
                height: "20px",
                verticalAlign: "top",
                marginTop: "300px",
              }}
            >
              내용
            </label>
            <textarea className={styles.inputContent}></textarea>
          </div>
        </div>
        <button className={styles.uploadBtn}>Upload</button>
        <Footer />
      </div>
    </>
  );
};

export default Write;
