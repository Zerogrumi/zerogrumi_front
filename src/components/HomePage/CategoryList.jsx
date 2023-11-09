import React from "react";
import styled from "styled-components";

import Content from "./Content";
<<<<<<< yunkyeong
import { contentData } from "../../data/writtenPostData";

const CategoryList = ({ category }) => {
  const filteredData = contentData
    .filter((data) => data.category === category)
    .reverse();

  return (
    <div>
      <Container>
        <ContentContainer>
          {filteredData.map((data) => (
            <Content key={data.id} title={data.title} content={data.content} />
          ))}
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

const ContentContainer = styled.div`
  display: flex;
  overflow-x: scroll;
`;

export default CategoryList;
