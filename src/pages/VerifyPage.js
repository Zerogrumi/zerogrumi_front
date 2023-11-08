import React from "react";
import styles from "../css/VerifyPage.module.css";
import { Link } from "react-router-dom";

const Verify = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.nav}>
          <div className={styles.title1}>ZERO WASTE</div>
          <div className={styles.title2}>실천 인증하기</div>
        </div>
        <img className={styles.zeroImg}></img>
        <div className={styles.putImgbox}></div>
        <button className={styles.imguploadBtn}>Image Upload</button>
        <div className={styles.textbox}>
          <div className={styles.userTitle}>
            <label>제목</label>
            <input className={styles.inputTitle}></input>
          </div>
          <div className={styles.userContent}>
            <label
              style={{
                lineHeight: "20px",
                verticalAlign: "top",
                marginTop: "-50px",
              }}
            >
              내용
            </label>
            <textarea className={styles.inputContent}></textarea>
          </div>
        </div>
        <button className={styles.uploadBtn}>Upload</button>
      </div>
    </>
  );
};

export default Verify;
