import React, { useState } from "react";
import styles from "../css/WritePage.module.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();

  const handleSaveToStorage = () => {
    const storedData = JSON.parse(sessionStorage.getItem("writeData")) || [];

    const newItem = {
      id: storedData.length > 0 ? storedData[storedData.length - 1].id + 1 : 1,
      title,
      date: new Date().toISOString().split("T")[0],
      name: "로그인된 이름",
      zeroGrade: "로그인된 등급",
      UserImg: "../img/user.svg",
      content,
      category,
      heart: 0,
      commentCount: 0,
      scrap: 0,
    };

    storedData.push(newItem);

    sessionStorage.setItem("writeData", JSON.stringify(storedData));

    console.log("저장:", storedData);
    navigate("/home");
  };

  const handleCategorySelection = (selectedCategory) => {
    setCategory(selectedCategory);
    setSelectedButton(selectedCategory);
  };

  const handleCategorySave = (selectedCategory) => {
    setCategory(selectedCategory);
  };
  return (
    <>
      <div className={styles.content}>
        <div className={styles.nav}>
          <div className={styles.title2}>게시글 작성하기</div>
        </div>
        <img className={styles.zeroImg}></img>
        <div className={styles.btnBox}>
          <button
            className={`${styles.tipBtn} ${
              selectedButton === "tipShare" ? styles.selected : ""
            }`}
            style={{
              backgroundColor: selectedButton === "tipShare" ? "green" : "",
            }}
            onClick={() => {
              handleCategorySelection("tipShare");
              handleCategorySave("tipShare");
            }}
          >
            Tip
          </button>
          <button
            className={`${styles.tipBtn} ${
              selectedButton === "tipShare" ? styles.selected : ""
            }`}
            style={{
              backgroundColor: selectedButton === "tipShare" ? "green" : "",
            }}
            onClick={() => {
              handleCategorySelection("spaceShare");
              handleCategorySave("spaceShare");
            }}
          >
            Store
          </button>
        </div>
        <div className={styles.textbox}>
          <div className={styles.userTitle}>
            <label>제목</label>
            <input
              className={styles.inputTitle}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
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
            <textarea
              className={styles.inputContent}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button className={styles.uploadBtn} onClick={handleSaveToStorage}>
          Upload
        </button>
        <Footer />
      </div>
    </>
  );
};

export default Write;
