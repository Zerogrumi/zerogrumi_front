import React from "react";
import styled from "styled-components";
const Content = () => {
  return (
    <Container>
      <ContentBox>
        <Title>길거리 음식도 제로웨이스트 하자</Title>
        <ContentText>
          우리가 길거리에서 사먹는 음식들 있잔아 맛있겠다 갑자기 치킨먹고싶네
          얘들아 지구를 위해서 용기들고가라
        </ContentText>
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  width: 169px;
  height: 176px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #158d6c;
  padding: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  margin: 0px 10px 0px 0px;
`;

const ContentBox = styled.div`
  background: #158d6c;
`;

const Title = styled.div`
  width: 160px;
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
`;

const ContentText = styled.div`
  background: #158d6c;
  width: 160px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default Content;
