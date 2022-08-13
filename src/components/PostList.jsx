import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getPostThunk } from "../redux/modules/postsSlice";
import PostCards from "./PostCards";

export const PostList = ({ category }) => {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.posts);

  console.log(posts);

  useEffect(() => {
    dispatch(__getPostThunk());
  }, [dispatch]);

  return (
    <>
      {
        [
          <ListContainer>
            <ListTitle>의류</ListTitle>
            <ListWrapper>
              {posts?.map((product) => {
                return <PostCards key={product.id} product={product} />;
              })}
            </ListWrapper>
            <ListTitle>스포츠용품</ListTitle>
            <ListWrapper>
              {posts?.map((product) => {
                return <PostCards key={product.id} product={product} />;
              })}
            </ListWrapper>
            <ListTitle>도서</ListTitle>
            <ListWrapper>
              {posts?.map((product) => {
                return <PostCards key={product.id} product={product} />;
              })}
            </ListWrapper>
            <ListTitle>전자기기</ListTitle>
            <ListWrapper>
              {posts?.map((product) => {
                return <PostCards key={product.id} product={product} />;
              })}
            </ListWrapper>
          </ListContainer>,
          <ListContainer>
            <ListTitle>의류</ListTitle>
            <ListWrapper>
              {posts?.map((product) => {
                return <PostCards key={product.id} product={product} />;
              })}
            </ListWrapper>
          </ListContainer>,
          <ListContainer>
            <ListTitle>스포츠용품</ListTitle>
            <ListWrapper>
              {posts?.map((product) => {
                return <PostCards key={product.id} product={product} />;
              })}
            </ListWrapper>
          </ListContainer>,
          <ListContainer>
            <ListTitle>도서</ListTitle>
            <ListWrapper>
              {posts?.map((product) => {
                return <PostCards key={product.id} product={product} />;
              })}
            </ListWrapper>
          </ListContainer>,
          <ListContainer>
            <ListTitle>전자기기</ListTitle>
            <ListWrapper>
              {posts?.map((product) => {
                return <PostCards key={product.id} product={product} />;
              })}
            </ListWrapper>
          </ListContainer>,
        ][category]
      }
    </>
  );
};

const ListContainer = styled.div`
  padding: 40px 0px 80px;
  position: relative;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const ListTitle = styled.h2``;
