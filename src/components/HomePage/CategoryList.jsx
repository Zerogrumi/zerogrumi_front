import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Content from "./Content";

import { contentData } from "../../data/writtenPostData";

const CategoryList = ({ category }) => {
  const storedDataString = sessionStorage.getItem("writeData");
  const storedData = storedDataString ? JSON.parse(storedDataString) : [];

  const filteredData = storedData
    .filter((data) => data.category === category)
    .reverse();

  return (
    <div>
      <Container>
        <ContentContainer>
          {filteredData.map((data) => (
            <Link to={`/comu/${data.id}`}>
              <Content
                key={data.id}
                title={data.title}
                content={data.content}
              />
            </Link>
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
