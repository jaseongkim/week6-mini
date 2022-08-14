import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { onEditHandler } from "../redux/modules/commentsSlice";
import {
  createCommentThunk,
  getCommentsThunk,
  deletCommentThunk,
  editCommentThunk,
} from "../redux/modules/commentsSlice";
import { FaPenSquare, FaTrash, FaCheck, FaTimes } from "react-icons/fa";

const CommentBox = ({ id, post }) => {
  const dispatch = useDispatch();
  const [commentShow, setCommentShow] = useState(false);

  const show = () => {
    commentShow ? setCommentShow(false) : setCommentShow(true);
  };

  useEffect(() => {
    dispatch(getCommentsThunk(id));
  }, [dispatch, id]);

  const { comments } = useSelector((state) => state.comments);

  console.log(comments);

  const member_Id = localStorage.getItem("memberId");

  const noLogin = () => {
    alert("로그인해주세요!");
  };

  const initialState = {
    postId: "",
    content: "",
  };

  const [newComment, setNewComment] = useState(initialState);
  const [editComment, setEditComment] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value, postId: id });
  };

  const onSubmitHandler = (e) => {
    if (newComment === "") {
      e.preventDefault();
      alert("내용을 입력해주세요");
    } else {
      dispatch(createCommentThunk(newComment));
      setNewComment(initialState);
    }
  };

  const onEditSubmitHandler = (e) => {
    if (editComment.content === "") {
      e.preventDefault();
      alert("내용을 입력해주세요");
    } else {
      dispatch(editCommentThunk(editComment));
      setEditComment(initialState);
    }
  };

  if (comments === undefined) {
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
          {comments.map((comment) => {
            return (
              <CommentB key={comment.id}>
                {!comment.isEditMode ? (
                  <>
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
                          <FaPenSquare
                            onClick={() => dispatch(onEditHandler(comment.id))}
                          />
                        </EditCommentBox>
                        <DeleteCommentBox
                          onClick={() => {
                            dispatch(deletCommentThunk(comment));
                          }}
                        >
                          <FaTrash />
                        </DeleteCommentBox>
                      </EditCommentContainer>
                    ) : (
                      ""
                    )}{" "}
                  </>
                ) : (
                  <>
                    <Commentwrap>
                      <EditCommentBody
                        type="text"
                        name="content"
                        value={editComment.content}
                        onChange={(e) => {
                          const { name, value } = e.target;
                          setEditComment({
                            ...editComment,
                            [name]: value,
                            id: comment.id,
                            postId: id,
                          });
                        }}
                      />
                    </Commentwrap>
                    <EditCommentContainer>
                      <CheckCommentBox>
                        <FaCheck onClick={onEditSubmitHandler} />
                      </CheckCommentBox>
                      <DeleteCommentBox>
                        <FaTimes
                          onClick={() => dispatch(onEditHandler(comment.id))}
                        />
                      </DeleteCommentBox>
                    </EditCommentContainer>
                  </>
                )}
              </CommentB>
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
  padding-bottom: 10px;
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
  min-height: 400px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 6px;
  padding-bottom: 15px;
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

const CommentB = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  padding-bottom: 20px;
`;

const Commentwrap = styled.div`
  width: 80%;
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
  width: 40%;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  animation-name: ${OnerKeyFrame};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
  text-align: center;
  padding-top: 3px;
`;

const CommentID = styled.div`
  height: 30px;
  box-sizing: border-box;
  width: 40%;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 5px;
  text-align: center;
  padding-top: 3px;
`;
const CommentBody = styled.div`
  min-height: 30px;
  width: 100%;
  border: none;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 3px;
`;

const EditCommentBody = styled.input`
  min-height: 30px;
  width: 100%;
  border: none;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 3px;
`;

const EditCommentContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 20%;
  justify-content: center;
  gap: 30px;
  padding-left: 40px;
  margin: auto;
`;

const EditCommentBox = styled.div`
  cursor: pointer;
  color: #0064ff;
  &:hover {
    scale: 1.1;
  }
`;

const CheckCommentBox = styled.div`
  cursor: pointer;
  color: #1add3b;
  &:hover {
    scale: 1.1;
  }
`;

const DeleteCommentBox = styled.div`
  cursor: pointer;
  color: #0064ff;
  &:hover {
    scale: 1.1;
  }
`;
