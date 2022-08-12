import React from "react";
import styled from "styled-components";

import { useState } from "react";

const DropDown = () => {
  return (
    <PostingDropDown>
      <option>Choose One</option>
      <option value="1">cloths</option>
      <option value="2">electronics</option>
      <option value="3">books</option>
      <option value="4">sports</option>
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
