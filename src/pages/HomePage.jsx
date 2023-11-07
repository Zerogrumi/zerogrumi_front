import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import Hot from "../components/HomePage/Hot";
import CategoryList from "../components/HomePage/CategoryList";
export default function HomePage() {
  return (
    <>
      <PageContainer>
        <TopLine></TopLine>
        <StyleContainer>
          <Hot></Hot>
          <CategoryList />
          <CategoryList />
        </StyleContainer>
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  padding-top: 38px;
  width: 375px;
  height: 812px;
  background: #96c6ba;
  margin: auto;
`;

const StyleContainer = styled.div`
  width: 375px;
  margin: auto;
`;

const TopLine = styled.div`
  position: absolute;
  top: 22px;
  height: 10px;
  width: 375px;
  background-color: #ef9f38;
  margin: auto;
`;
