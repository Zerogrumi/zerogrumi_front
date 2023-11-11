import React from "react";
import styles from "../css/MyPage.module.css";
import pointImg from "../img/point.svg";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { contentData } from "../data/writtenPostData";

const MyPage = (props) => {
  const storedData = JSON.parse(sessionStorage.getItem("writeData")) || [];

  const filteredData = storedData
    .filter((data) => data.name === "해탈한 로션")
    .reverse();

  return (
    <>
      <div className={styles.content}>
        <div className={styles.nav}></div>
        <Link to="/">
          <div className={styles.title}>ZERO WASTE</div>
        </Link>
        <Link to="/">
          <div className={styles.subhead}>Start with me, Start with you</div>
        </Link>
        <div className={styles.signinText}>
          <p>welcome to MyPage!</p>
        </div>
        <div className={styles.point}>
          <img src={pointImg} />
          <div className={styles.pointNum}>1234</div>
        </div>
        {filteredData.map((data) => (
          <Card
            showRecommendBar={true}
            title={data.title}
            name={data.name}
            content={data.content}
            userImg={data.userImg}
            zeroGrade={data.zeroGrade}
            heart={data.heart}
            commentCount={data.commentCount}
            scrap={data.scrap}
          />
        ))}
        <div className={styles.btnBox}>
          <Link to="/writ">
            <button className={styles.writeBtn}>글 작성하기</button>
          </Link>
          <Link to="/veri">
            <button className={styles.verifyBtn}>실천 인증하기</button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyPage;
