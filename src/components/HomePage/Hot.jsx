import React, { useState } from "react";
import styled from "styled-components";
import ContentBlock from "./ContentBlock.jsx";
import { contentData } from "../../data/writtenPostData.jsx";

const Hot = () => {
  const storedData = JSON.parse(sessionStorage.getItem("writeData")) || [];

  const [contentList, setContentList] = useState(storedData);

  return (
    <>
      <Container>
        <Title>Hot 게시글</Title>
        <ContentArea>
          {contentList.map((content) => (
            <ContentBlock key={content.id} content={content} />
          ))}
        </ContentArea>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 16px;
  width: 333px;
  flex-shrink: 0;
  background-color: #158d6c;
  padding: 5px;
  border-radius: 10px;
  margin: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.div`
  display: flex;
  width: 104px;
  height: 33px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #ffffff;
  font-family: kfont;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 322px;
  height: 35px;
  margin: auto;
  text-align: center;
  border-radius: 10px;
  background-color: #158d6c;
  margin-bottom: 10px;
`;

const ContentArea = styled.div`
  width: 322px;
  height: 123px;
  margin: auto;
  background-color: #158d6c;
  overflow: hidden;
`;

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

export default Hot;
