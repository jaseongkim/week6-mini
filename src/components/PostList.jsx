import React, { useState } from "react";
import styled from "styled-components";
import PostCards from "./PostCards";

export const PostList = () => {
  let [products] = useState([
    {
      id: 1,
      title: "안녕",
      content: "나는 옷이에요",
      price: "10000000원",
    },
    {
      id: 1,
      title: "안녕",
      content: "나는 옷이에요",
      price: "10000000원",
    },
    {
      id: 1,
      title: "안녕",
      content: "나는 옷이에요",
      price: "10000000원",
    },
    {
      id: 1,
      title: "안녕",
      content: "나는 옷이에요",
      price: "10000000원",
    },
    {
      id: 1,
      title: "안녕",
      content: "나는 옷이에요",
      price: "10000000원",
    },
    {
      id: 1,
      title: "안녕",
      content: "나는 옷이에요",
      price: "10000000원",
    },
  ]);

  return (
    <ListContainer>
      <ListTitle>카테고리</ListTitle>
      <ListWrapper>
        {products.map((product) => {
          return <PostCards product={product} />;
        })}
      </ListWrapper>
      <ListTitle>카테고리</ListTitle>
      <ListWrapper>
        {products.map((product) => {
          return <PostCards product={product} />;
        })}
      </ListWrapper>
      <ListTitle>카테고리</ListTitle>
      <ListWrapper>
        {products.map((product) => {
          return <PostCards product={product} />;
        })}
      </ListWrapper>
    </ListContainer>
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
