import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ContentBlock = ({ content }) => {
  const { title, heart } = content;

  const truncatedTitle = title.length > 20 ? `${title.slice(0, 19)}...` : title;

  if (heart >= 10) {
    return (
      <div>
        <FontStyles>
          <Link to={`/comu`}>
            <Title>{truncatedTitle}</Title>
          </Link>
        </FontStyles>
      </div>
    );
  } else {
    return null;
  }
};
export default ContentBlock;

const Title = styled.div`
  width: 322px;
  height: 36px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 6px;
  margin-bottom: 7px;
  font-family: "kfont";
  overflow: hidden;
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
