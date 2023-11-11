import React from "react";
import styled from "styled-components";

import uImg from "../../img/charactor1.png";

const Content = ({
  title,
  name,
  userImg,
  content,
  zeroGrade,
  heart,
  commentCount,
  scrap,
}) => {
  const truncatedTitle = title.length > 10 ? `${title.slice(0, 10)}...` : title;
  const truncatedContent =
    content.length > 35 ? `${content.slice(0, 35)}...` : content;

  const renderStars = () => {
    const maxStars = 5;
    const filledStars = Math.min(zeroGrade, maxStars);

    const stars = Array(maxStars)
      .fill(0)
      .map((_, index) => (
        <span key={index}>{index < filledStars ? "★" : "☆"}</span>
      ));

    return stars;
  };

  return (
    <Container>
      <ContentBox>
        <Title>{truncatedTitle}</Title>
        <UserInfoDIv>
          <ContentText>{truncatedContent}</ContentText>
        </UserInfoDIv>
        <ContentResponse>
          공감 {heart + " "}
          댓글 {commentCount + " "}
          저장 {scrap + " | "}
          작성자 {name + " "}
        </ContentResponse>
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
  width: 330px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #ffffff;
  padding: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const ContentBox = styled.div`
  background: #ffffff;
  margin: 10px;
`;

const Title = styled.div`
  flex-direction: column;
  justify-content: center;
  color: #000000;
  font-family: kfont;
  font-size: 20px;
  font-style: normal;
  line-height: normal;
  background: #ffffff;
  margin-bottom: 5px;
  margin-right: 10px;
`;

const ContentText = styled.div`
  background: #ffffff;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  font-family: "Tfont";
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  line-height: normal;
  margin-right: 10px;
  margin-bottom: 10px;
  height: 40px;
`;

const UserInfoDIv = styled.div`
  display: inline-block;
`;

const UserImg = styled.img`
  margin: 12px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ffffff;
`;

const UserInfoStyleDiv = styled.div`
  margin-left: 9px;
  position: relative;
  top: -18px;
`;

const UserName = styled.div`
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-family: kfont;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
`;

const UserGrade = styled.div`
  flex-shrink: 0;
  color: #000;
  font-family: kfont;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ContentResponse = styled.div`
  margin-right: 12px;
  display: flex;
  width: 304px;
  height: 17px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-family: kfont;
  font-size: 12px;
  font-style: normal;
  line-height: normal;
  margin-bottom: 10px;
`;

export default Content;
