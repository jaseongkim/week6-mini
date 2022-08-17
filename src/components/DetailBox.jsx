import styled from "styled-components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delPostThunk } from "../redux/modules/postsSlice";
import { donePostThunk, onEditPostHandler } from "../redux/modules/postSlice";
import DetailEdit from "./DetailEdit";
import { useEffect } from "react";
import isDoneimg from "../images/isDone.png";

import {
  __getDibsThunk,
  dibsHateThunk,
  dibsLikeThunk,
} from "../redux/modules/dibsSlice";

const DetailBox = ({ id, member_Id, post }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getDibsThunk());
  }, [dispatch, id]);
  const { dibs } = useSelector((state) => state.dibs);
  const Mydibs = dibs.map((product) => {
    if (product.id === post.id) {
      return true;
    } else {
      return false;
    }
  });
  const realMydibs = Mydibs.includes(true);

  return (
    <>
      {post.isEditMode ? (
        <DetailEdit id={id} />
      ) : (
        <PostingBox>
          <PostingContainer>
            <PostingMiniContainer>
              <PostingLeft>
                {post.isDone ? (
                  <AddPostingImg src={isDoneimg}></AddPostingImg>
                ) : (
                  <AddPostingImg src={post.imgUrl}></AddPostingImg>
                )}
              </PostingLeft>
              <PostingRight>
                <PostingText>제목</PostingText>
                <TextBox>{post.title}</TextBox>
                <PostingText>가격</PostingText>
                <TextBox>{post.price}</TextBox>
                <PostingText>내용</PostingText>
                <TextArea>{post.content}</TextArea>
              </PostingRight>
            </PostingMiniContainer>
            {member_Id ? (
              member_Id === post.memberId ? (
                !post.isDone ? (
                  <DipContanier>
                    <OnerPost>
                      <EditPostButton
                        onClick={() => dispatch(onEditPostHandler())}
                      >
                        수정하기
                      </EditPostButton>
                      <DeletePostbutton
                        onClick={() => dispatch(delPostThunk(id))}
                      >
                        삭제하기
                      </DeletePostbutton>
                      <IsDonePostbutton
                        onClick={() => dispatch(donePostThunk(id))}
                      >
                        판매완료
                      </IsDonePostbutton>
                    </OnerPost>
                  </DipContanier>
                ) : (
                  <DipContanier>
                    <DonePost>
                      <IsDoneDonePostbutton>판매완료</IsDoneDonePostbutton>
                    </DonePost>
                  </DipContanier>
                )
              ) : post.isDone ? (
                <DipContanier>
                  <DonePost>
                    <IsDoneDonePostbutton>판매완료</IsDoneDonePostbutton>
                  </DonePost>
                </DipContanier>
              ) : (
                <DipContanier>
                  {realMydibs ? (
                    <DipCancleButton
                      onClick={() => dispatch(dibsHateThunk(id))}
                    >
                      찜하기취소!
                    </DipCancleButton>
                  ) : (
                    <DipButton onClick={() => dispatch(dibsLikeThunk(post))}>
                      찜하기!
                    </DipButton>
                  )}
                </DipContanier>
              )
            ) : post.isDone ? (
              <DipContanier>
                <DonePost>
                  <IsDoneDonePostbutton>판매완료</IsDoneDonePostbutton>
                </DonePost>
              </DipContanier>
            ) : (
              ""
            )}
          </PostingContainer>
        </PostingBox>
      )}
    </>
  );
};

export default DetailBox;

const PostingBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PostingContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 1px solid #0064ff;
  border-radius: 5px;
  margin: 5% auto 0 auto;
  width: 700px;
  min-height: 420px;
  padding-top: 15px;
`;

const PostingMiniContainer = styled.div`
  display: flex;
`;

const PostingLeft = styled.div`
  position: relative;
  width: 350px;
  box-sizing: border-box;
  padding: 20px;
`;

const AddPostingImg = styled.img`
  width: 310px;
  height: 300px;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
`;

const PostingRight = styled.div`
  position: relative;
  padding: 20px;
  width: 350px;
`;

const PostingText = styled.div`
  margin-bottom: 5px;
`;

const TextBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  border: none;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.05);
  padding: 8px;
  margin-bottom: 20px;
`;

const TextArea = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 110px;
  border: none;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.05);
  padding: 8px;
  margin-bottom: 20px;
`;
const DipContanier = styled.div`
  margin: 0 auto 10px auto;
`;

const OnerPost = styled.div`
  width: 300px;
  height: 50px;
  border: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
`;

const EditPostButton = styled.div`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  background: #0064ff;
  color: white;
  cursor: pointer;
  opacity: 0.8;
  text-align: center;
  padding-top: 13px;
  &:hover {
    opacity: 1;
  }
`;

const DeletePostbutton = styled.div`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  background: #f81717;
  color: white;
  cursor: pointer;
  text-align: center;
  padding-top: 13px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
const IsDonePostbutton = styled.div`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  background: #e0bb17;
  color: white;
  cursor: pointer;
  text-align: center;
  padding-top: 13px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const DipButton = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  background: #0064ff;
  cursor: pointer;
  color: white;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const DipCancleButton = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  background: #ff1e00;
  cursor: pointer;
  color: white;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const DonePost = styled.div`
  width: 300px;
  height: 50px;
  border: none;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const IsDoneDonePostbutton = styled.div`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  background: #e0bb17;
  color: white;
  cursor: pointer;
  text-align: center;
  padding-top: 13px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
