import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostThunk } from "../redux/modules/postSlice";

const DetailBox = ({ id, post }) => {
  const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getPostThunk(id));
//   }, [dispatch, id]);

//   const post = useSelector((state) => state.post.post.data);

  return (
    <PostingBox>
      <PostingContainer>
        <PostingLeft>
          <AddPostingImg src={post.imgUrl}></AddPostingImg>
        </PostingLeft>
        <PostingRight>
          <PostingText>제목</PostingText>
          <TextBox>{post.title}</TextBox>
          <PostingText>가격</PostingText>
          <TextBox>{post.price}</TextBox>
          <PostingText>내용</PostingText>
          <TextArea>{post.content}</TextArea>
        </PostingRight>
      </PostingContainer>
    </PostingBox>
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
  border: 1px solid #0064ff;
  border-radius: 5px;
  margin: 5% auto 0 auto;
  width: 700px;
  height: 420px;
  padding-top: 15px;
`;

const PostingLeft = styled.div`
  position: relative;
  width: 350px;
  height: 420px;
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
  height: 420px;
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

