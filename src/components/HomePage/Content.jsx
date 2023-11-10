import React from "react";
import styled from "styled-components";

const Content = ({ title, content }) => {
  const truncatedTitle = title.length > 20 ? `${title.slice(0, 19)}...` : title;
  const truncatedContent =
    content.length > 72 ? `${content.slice(0, 71)}...` : content;

  return (
    <Container>
      <ContentBox>
        <Title>{truncatedTitle}</Title>
        <ContentText>{truncatedContent}</ContentText>
      </ContentBox>
    </Container>
  );
};

const FontStyles = styled.div`
  @font-face {
    font-family: "font";
    src: url("../font/Hey\ October.ttf") format("truetype");
  }
  @font-face {
    font-family: "Kfont";
    src: url("../font/SB\ Aggro\ M.ttf") format("truetype");
  }
  @font-face {
    font-family: "Tfont";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff");
  }
`;

const Container = styled.div`
  width: 169px;
  height: 185px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #158d6c;
  padding: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 0px 10px 0px 0px;
  overflow-x: hidden;
`;

const ContentBox = styled.div`
  background: #158d6c;
`;

const Title = styled.div`
  width: 160px;
  height: 36px;
  flex-direction: column;
  justify-content: center;
  color: #000000;
  font-family: "Kfont";
  font-size: 18px;
  font-style: normal;
  line-height: normal;
  background: #158d6c;
  margin-bottom: 10px;
`;

const ContentText = styled.div`
  background: #158d6c;
  width: 160px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  font-family: "Tfont";
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  line-height: normal;
`;

export default Content;
