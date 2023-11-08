import React from "react";
import styled from "styled-components";

import Content from "./Content";
const CategoryList = () => {
  return (
    <div>
      <Container>
        <CategoryName>About Foods</CategoryName>
        <ContentContainer>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
        </ContentContainer>
      </Container>
    </div>
  );
};

const Container = styled.div`
  margin: 16px;
  width: 333px;
  height: 220px;
  background: #96c6ba;
  overflow: hidden;
  margin: auto;
`;

const CategoryName = styled.div`
  display: flex;
  width: 195px;
  height: 29px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 15px;
`;

const ContentContainer = styled.div`
  display: flex;
  overflow-x: scroll;
`;

export default CategoryList;
