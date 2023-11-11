import React from "react";
import styled from "../css/Loding.module.css";
import Spinner from "../img/Spinner-1s-219px.gif";

const Loding = () => {
  return (
    <div className={styled.loding}>
      <img src={Spinner} alt="로딩" width="10%" />
    </div>
  );
};

export default Loding;
