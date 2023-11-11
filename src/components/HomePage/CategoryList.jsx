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
            <Link to={`/comu/${data.id}`} key={data.id} state={{ data }}>
              <Content
                key={data.id}
                title={data.title}
                content={data.content}
                name={data.name}
                zeroGrade={data.zeroGrade}
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
  height: 123px;
  background: #158d6c;
  overflow: scroll;

  margin: auto;
`;

const ContentContainer = styled.div``;

export default CategoryList;
