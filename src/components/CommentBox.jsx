import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getPostThunk } from "../redux/modules/postSlice";
import CommentCards from "./CommentCards";

const CommentBox = ({ id, post }) => {
  const dispatch = useDispatch();
  const [commentShow, setCommentShow] = useState(false);
  const show = () => {
    commentShow ? setCommentShow(false) : setCommentShow(true);
  };

  useEffect(() => {
    dispatch(getPostThunk(id));
  }, [dispatch, id]);

  const comment = useSelector(
    (state) => state.post.post.data.commentResponseDtoList
  );

  console.log(comment);

  if (comment === undefined) {
    return (
      <>
        {!commentShow ? (
          <PostingContainer>
            <CommentDown onClick={show}>댓글 내려보기</CommentDown>
          </PostingContainer>
        ) : (
          <ShowPostingContainer>
            <CommentDown onClick={show}>댓글 안보기</CommentDown>
            <CommentInputBox>
              <CommentInput />
              <CommentButton>입력</CommentButton>
            </CommentInputBox>
          </ShowPostingContainer>
        )}
      </>
    );
  }

  return (
    <>
      {!commentShow ? (
        <PostingContainer>
          <CommentDown onClick={show}>댓글 내려보기</CommentDown>
        </PostingContainer>
      ) : (
        <ShowPostingContainer>
          <CommentDown onClick={show}>댓글 안보기</CommentDown>
          <CommentInputBox>
            <CommentInput />
            <CommentButton>입력</CommentButton>
          </CommentInputBox>
          {comment?.map((comment) => {
            return <CommentCards key={comment.id} comment={comment} post={post} />;
          })}
        </ShowPostingContainer>
      )}
    </>
  );
};

export default CommentBox;

const PostingContainer = styled.div`
  box-sizing: border-box;
  flex-direction: column;
  display: flex;
  border: 1px solid #0064ff;
  border-radius: 5px;
  margin: 10px auto;
  width: 700px;
  height: 35px;
  padding-left: 20px;
  padding-top: 6px;
`;

const CommentDown = styled.div`
  display: flex;
  cursor: pointer;
`;

const ShowPostingContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 1px solid #0064ff;
  border-radius: 5px;
  margin: 10px auto;
  width: 700px;
  height: 400px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 6px;
  gap: 15px;
`;

const CommentInputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const CommentInput = styled.input`
  width: 80%;
  box-sizing: border-box;
  border: none;
  height: 30px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding-left: 20px;
`;

const CommentButton = styled.button`
  width: 15%;
  border: none;
  box-sizing: border-box;
  border-radius: 10px;
  height: 30px;
  background: #0064ff;
  color: white;
  font-weight: bold;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
