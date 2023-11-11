import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import Hot from "../components/HomePage/Hot";
import CategoryList from "../components/HomePage/CategoryList";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";

export default function HomePage() {
  return (
    <>
      <PageContainer>
        <TopLine></TopLine>
        <StyleContainer>
          <Hot></Hot>
          <Link to={`/list`} state={{ category: "tipShare" }}>
            <CategoryName>| 꿀팁 공유 커뮤니티</CategoryName>
          </Link>
          <CategoryList category="tipShare" />
          <Link to={`/list`} state={{ category: "spaceShare" }}>
            <CategoryName>| 가게 공유 커뮤니티</CategoryName>
          </Link>
          <CategoryList category="spaceShare" />
          <Link to={`/list`} state={{ category: "expShare" }}>
            <CategoryName>| 실천 공유 커뮤니티</CategoryName>
            <CategoryList category="expShare" />
          </Link>
        </StyleContainer>
      </PageContainer>
      <Footer />
    </>
  );
}

const FontStyles = styled.div`
  @font-face {
    font-family: "font";
    src: url("../font/Hey\ October.ttf") format("truetype");
  }
  @font-face {
    font-family: "Kfont";
    src: url("../font/SB\ Aggro\ M.ttf") format("truetype");
  }
`;

const PageContainer = styled.div`
  padding-top: 58px;
  width: 375px;
  background: #158d6c;
`;

const StyleContainer = styled.div`
  width: 375px;
`;

const TopLine = styled.div`
  position: absolute;
  top: 22px;
  height: 20px;
  width: 375px;
  background-color: #ef9f38;
  margin: auto;
`;

const CategoryName = styled.div`
  display: flex;
  width: 290px;
  height: 29px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #ffffff;
  font-family: kfont;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 15px;
  margin-left: 20px;
  padding-bottom: 10px;
`;
