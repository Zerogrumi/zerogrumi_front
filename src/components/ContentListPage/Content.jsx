import React from "react";
import styled from "styled-components";

const Content = ({
  title,
  name,
  userImg,
  zeroGrade,
  heart,
  commentCount,
  scrap,
}) => {
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
        <UserInfoDIv>
          <UserImg src={userImg} />
        </UserInfoDIv>
        <UserInfoDIv>
          <UserInfoStyleDiv>
            <UserName>{name}</UserName>
            <UserGrade>{renderStars()}</UserGrade>
          </UserInfoStyleDiv>
        </UserInfoDIv>
        <Title>{title}</Title>
        <ContentResponse>
          공감 {heart + " "}
          댓글 {commentCount + " "}
          저장 {scrap + " "}
        </ContentResponse>
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  width: 330px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #158d6c;
  padding: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 0px 10px 0px 0px;
`;

const ContentBox = styled.div`
  background: #158d6c;
`;

const Title = styled.div`
  flex-direction: column;
  justify-content: center;
  color: #000000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: #158d6c;
  margin-bottom: 10px;
  margin-left: 12px;
  margin-right: 12px;
`;

const UserInfoDIv = styled.div`
  display: inline-block;
`;

const UserImg = styled.div`
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
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const UserGrade = styled.div`
  flex-shrink: 0;
  color: #000;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ContentResponse = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  display: flex;
  width: 304px;
  height: 17px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
`;

export default Content;
