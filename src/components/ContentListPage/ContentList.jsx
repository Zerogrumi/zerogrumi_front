import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Content from "./Content";
import { contentData } from "../../data/writtenPostData";

const CategoryList = () => {
  const location = useLocation();
  console.log(location.state);

  const category = location.state?.category || "defaultCategory";

  const filteredData = contentData
    .filter((data) => data.category === category)
    .reverse();

  return (
    <div>
      <BoardName>{getBoardName(category)}</BoardName>
      <Container>
        <ContentContainer>
          {filteredData.map((data) => (
            <ContentStyle key={data.id}>
              <Content
                title={data.title}
                name={data.name}
                userImg={data.userImg}
                zeroGrade={data.zeroGrade}
                heart={data.heart}
                commentCount={data.commentCount}
                scrap={data.scrap}
              />
            </ContentStyle>
          ))}
        </ContentContainer>
      </Container>
    </div>
  );
};

const getBoardName = (category) => {
  switch (category) {
    case "tipShare":
      return "꿀팁 공유 게시판";
    case "spaceShare":
      return "가게 공유 게시판";
    default:
      return "";
  }
};

const BoardName = styled.div`
  position: absolute;
  top: 22px;
  width: 375px;
  text-align: center;
  background-color: #ef9f38;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

const Container = styled.div`
  margin: 16px;
  width: 333px;
  background: #96c6ba;
  margin: auto;
`;

const ContentContainer = styled.div`
  margin-top: 30px;
`;

const ContentStyle = styled.div`
  margin-top: 15px;
`;

export default CategoryList;
