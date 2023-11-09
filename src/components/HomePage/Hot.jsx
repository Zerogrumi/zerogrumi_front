import React, { useState } from "react";
import styled from "styled-components";
import ContentBlock from "./ContentBlock.jsx";
import { contentData } from "../../data/writtenPostData.jsx";

const Hot = () => {
  const [contentList, setContentList] = useState(contentData);

  return (
    <>
      <Container>
        <Title>Hot 게시판</Title>
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
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: auto;

  //가로스크롤이없애고싶다진짜로
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
  color: #000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: kfont;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 322px;
  height: 35px;
  margin: auto;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #ffffff;
  margin-bottom: 10px;
`;

const ContentArea = styled.div`
  width: 322px;
  margin: auto;
  background-color: #158d6c;
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
