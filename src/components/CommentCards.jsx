import React from "react";
import styled, { keyframes } from "styled-components";
import { FaPenSquare, FaTrash } from "react-icons/fa";

const CommentCards = ({ id, comment, post }) => {
  const member_Id = localStorage.getItem("memberId");

  return (
    <CommentBox>
      <Commentwrap>
        {post.memberId === comment.memberId ? (
          <OnerPostId>판매자</OnerPostId>
        ) : (
          <CommentID>{comment.memberId}</CommentID>
        )}
        <CommentBody>{comment.content}</CommentBody>
      </Commentwrap>
      {member_Id === comment.memberId ? (
        <EditCommentContainer>
          <EditCommentBox>
            <FaPenSquare />
          </EditCommentBox>
          <DeleteCommentBox>
            <FaTrash />
          </DeleteCommentBox>
        </EditCommentContainer>
      ) : (
        ""
      )}
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
`;
const Commentwrap = styled.div`
  width: 70%;
  box-sizing: border-box;
  height: 30px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const OnerKeyFrame = keyframes`
  0% {
      background: #E782FF;
      color: white;
  }

  50%{
    background: #82ff93;
      color: white;
   
  }

  100% {  
    background: #ffd782;
      color: white;
  }
`;
const OnerPostId = styled.div`
  height: 30px;
  box-sizing: border-box;
  width: 20%;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  animation-name: ${OnerKeyFrame};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
`;

const CommentID = styled.div`
  height: 30px;
  box-sizing: border-box;
  width: 20%;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 5px;
`;
const CommentBody = styled.div`
  height: 30px;
  width: 100%;
  border: none;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
`;

const EditCommentContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: center;
  gap: 20px;
`;

const EditCommentBox = styled.div``;
const DeleteCommentBox = styled.div``;
