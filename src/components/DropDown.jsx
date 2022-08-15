import React from "react";
import styled from "styled-components";

import { useState } from "react";

const DropDown = ({onUpLoadHandler,upLoad}) => {
  return (
    <PostingDropDown name="category" value={upLoad.category} onChange={onUpLoadHandler} >
      <option value="">Choose One</option>
      <option value="clothes">의류</option>
      <option value="electronics">전자기기</option>
      <option value="books">도서</option>
      <option value="sports">스포츠용품</option>
    </PostingDropDown>
  );
};

export default DropDown;

const PostingDropDown = styled.select`
  box-sizing: border-box;
  width: 100%;
  border: 0.5px solid #b1aeae;
  opacity: 0.5;
  border-radius: 5px;
  height: 35px;
  margin-bottom: 5%;
  padding: 10px;
`;
