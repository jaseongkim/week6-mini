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

  const member_Id = localStorage.getItem("memberId");

  const noLogin = () => {
    alert("로그인해주세요!");
  };

  const initialState = {
    postId: "",
    content: "",
  };

  const [newComment, setNewComment] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value, postId: id });
  };

  const onSubmitHandler = (e) => {
    if (newComment === "") {
      e.preventDefault();
      alert("내용을 입력해주세요");
    } else {
      e.preventDefault();
      dispatch(getPostThunk(newComment));
      setNewComment(initialState);
    }
  };

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
            {!member_Id ? (
              <CommentInputBox>
                <CommentInput placeholder="로그인 후 이용 가능합니다." />
                <CommentButton onClick={noLogin}>입력</CommentButton>
              </CommentInputBox>
            ) : (
              <CommentInputBox>
                <CommentInput
                  type="text"
                  name="content"
                  value={newComment.content}
                  onChange={onChangeHandler}
                />
                <CommentButton onClick={onSubmitHandler}>입력</CommentButton>
              </CommentInputBox>
            )}
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
          {!member_Id ? (
            <CommentInputBox>
              <CommentInput placeholder="로그인 후 이용 가능합니다." />
              <CommentButton onClick={noLogin}>입력</CommentButton>
            </CommentInputBox>
          ) : (
            <CommentInputBox>
              <CommentInput
                type="text"
                name="content"
                value={newComment.content}
                onChange={onChangeHandler}
              />
              <CommentButton onClick={onSubmitHandler}>입력</CommentButton>
            </CommentInputBox>
          )}
          {comment?.map((comment) => {
            return (
              <CommentCards key={comment.id} comment={comment} post={post} />
            );
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
