import React, { useEffect, useRef, useState } from "react";
import styles from "../css/VerifyPage.module.css";
import Footer from "../components/Footer";
import { useNavigate, Link } from "react-router-dom";

const Verify = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
      category: "expShare",
      heart: 0,
      commentCount: 0,
      scrap: 0,
    };

    storedData.push(newItem);

    sessionStorage.setItem("writeData", JSON.stringify(storedData));

    console.log("저장:", storedData);
    navigate("/home");
  };

  const realUploadRef = useRef(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    const realUpload = realUploadRef.current;
    const upload = document.querySelector(".upload");

    if (realUpload && upload) {
      upload.addEventListener("click", () => realUpload.click());

      return () => {
        upload.removeEventListener("click", () => realUpload.click());
      };
    }
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className={styles.content}>
        <div className={styles.nav}>
          <div className={styles.title1}>ZERO WASTE</div>
          <div className={styles.title2}>실천 인증하기</div>
        </div>
        <img className={styles.zeroImg}></img>
        <div className={styles.putImgbox}>
          {uploadedImage && <img src={uploadedImage} alt="Uploaded" />}
        </div>
        <button
          className={styles.imguploadBtn}
          onClick={() => realUploadRef.current.click()}
        >
          Image Upload
          <input
            type="file"
            className="real-upload"
            ref={realUploadRef}
            required
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
        </button>
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

export default Verify;
