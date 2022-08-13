import React from "react";
import styled from "styled-components";

const CommentCards = ({ id, comment }) => {
  return (
    <CommentBox>
      <Commentwrap>
        <CommentID>{comment.memberId}</CommentID>
        <CommentBody>{comment.content}</CommentBody>
      </Commentwrap>
    </CommentBox>
  );
};

export default CommentCards;

const CommentBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  padding-right: 20px;
`;
const Commentwrap = styled.div`
  width: 70%;
  box-sizing: border-box;
  height: 30px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const CommentID = styled.div`
    height: 30px;
    box-sizing: border-box;
    width: 120px;
    background: rgba(0, 0, 0, 0.05);
    border:none;
    border-radius: 5px;
`
const CommentBody = styled.div`
    height: 30px;
    width: 400px;
    border:none;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 5px;
`
