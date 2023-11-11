import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import CategoryList from "../components/ContentListPage/ContentList";
import { contentData } from "../data/writtenPostData";
import Footer from "../components/Footer";

const ContentListPage = () => {
  const storedData = JSON.parse(localStorage.getItem("writeData")) || [];

  return (
    <>
      <PageContainer>
        <StyleContainer>
          <CategoryList category="tipShare" />
        </StyleContainer>
        <Footer />
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  padding-top: 38px;
  width: 375px;
  height: 812px;
  background: #158d6c;
  margin: auto;
`;

const StyleContainer = styled.div`
  width: 375px;
  margin: auto;
`;

export default ContentListPage;
