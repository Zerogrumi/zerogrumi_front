import React from "react";
import styled from "styled-components";

const ContentBlock = ({ content }) => {
  const { title, heart } = content;

  const truncatedTitle = title.length > 2 ? `${title.slice(0, 19)}...` : title;

  if (heart >= 10) {
    return (
      <div>
        <FontStyles>
          <Title>{truncatedTitle}</Title>
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
  background-color: #158d6c;
  border-radius: 5px;
  padding: 3px;
  margin: 1px;
  font-family: "kfont";

  &:hover {
    color: #ffffff;
    border: 3px solid #ef9f38;
    // transition: 0.3s;
  }

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
