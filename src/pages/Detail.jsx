import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import DetailBox from "../components/DetailBox";
import CommentBox from "../components/CommentBox";
import { useSelector, useDispatch } from "react-redux";
import { getPostThunk } from "../redux/modules/postSlice";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostThunk(id));
  }, [dispatch, id]);

  const post = useSelector((state) => state.post.post.data);
  const member_Id = localStorage.getItem("memberId");

  console.log(post)

  const notLogin = () => {
    window.location.replace("/login");
  };

  if (post === undefined) {
    return;
  }

  return (
    <>
      {!member_Id ? (
        <>
          <div>로그인이 필요합니다.</div>
          <button onClick={notLogin}>로그인으로 가기</button>
        </>
      ) : (
        <Layout>
          <Stiky>
            <Header />
          </Stiky>
          <DetailBox post={post} />
          <CommentBox id={id} />
        </Layout>
      )}
    </>
  );
};

export default Detail;

const Stiky = styled.section`
  position: sticky;
  top: 0;
  z-index: 1;
`;
