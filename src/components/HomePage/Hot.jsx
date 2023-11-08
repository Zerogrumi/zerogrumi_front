import React from "react";
import styled from "styled-components";

const Hot = () => {
  return (
    <>
      <Container>
        <Title>Hot 게시판</Title>
        <ContentArea>
          <ContentBlock>길거리 음식도 제로웨이스트 하자</ContentBlock>
          <ContentBlock>수세미를 설거지 할 때 쓸 수 있다고?</ContentBlock>
          <ContentBlock>우리 동네 리필샵 공유</ContentBlock>
          <ContentBlock>우리동네 헌옷수거함은 어디?</ContentBlock>
          <ContentBlock>아름다운가게 있는거 알고있었어?</ContentBlock>
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
`;

const Title = styled.div`
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

const ContentBlock = styled.div`
  width: 322px;
  height: 35px;
  background-color: #158d6c;
  border-radius: 5px;
  padding: 3px;
  margin: 1px;

  &:hover {
    color: #ffffff;
    border: 3px solid #ef9f38;
    // transition: 0.3s;
  }
`;

export default Hot;
