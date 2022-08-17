import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { VscHeart } from "react-icons/vsc";
import styled, { keyframes } from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";
import isDoneimg from "../images/isDone.png";

const PostCards = ({ product }) => {
  let navigate = useNavigate();
  const productCost = product.price
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <PostCardContainer
      onClick={() => {
        navigate(`/detail/${product.id}`);
      }}
    >
      <Darkness>
        {" "}
        <Btnplus>상세보기<FaLongArrowAltRight/></Btnplus>
      </Darkness>

      <PostCardBox>
        {product.isDone ? <PostCardImg src={isDoneimg} />:<PostCardImg src={product.imgUrl} />}
      </PostCardBox>

      <PostTitleContainer>
        <PostTitleText>{product.title}</PostTitleText>
      </PostTitleContainer>
      <PostCost>
        <span style={{ fontWeight: "bold" }}>{productCost}</span>&nbsp;원
      </PostCost>
      <PostBody>{product.content}</PostBody>
      <PostViewsDibs>
        조회수:&nbsp;{product.view}&nbsp;&nbsp;&nbsp;찜개수:&nbsp;
        {product.dibCount}
      </PostViewsDibs>
    </PostCardContainer>
  );
};

export default PostCards;

const PostCardContainer = styled.div`
  display: border;
  flex-direction: column;
  border: none;
  width: 14rem;
  gap: 5px;
  cursor: pointer;
`;

const PostCardBox = styled.div`
  width: 100%;
  height: 15rem;
`;

const PostCardImg = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: fill;
  border: none;
  border-radius: 10px;
`;

const PostTitleContainer = styled.div`
  display: block;
`;

const PostTitleTitle = styled.div`
  font-weight: bold;
`;

const PostTitleText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  font-size: 24px;
  width: 14rem;
  text-overflow: ellipsis;
`;

const PostCost = styled.div``;

const PostBody = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 8px;
`;

const PostViewsDibs = styled.div`
  font-size: 9px;
`;

const Darkness = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  width: 14.12rem;
  height: 21rem;
  opacity: 0;
  transition: all 0.6s linear;

  &:hover {
    opacity: 1;
  }
`;



const OnerKeyFrame = keyframes`
  0% {
    scale: 1;
      color: white;
  }

  50%{
    scale: 1.1;
    color: white;

   
  }

  100% {  
    scaele:1;
    color: white;

  }
`;


const Btnplus = styled.div`
  position: absolute;
  color: white;
  display: flex;
  top: 150px;
  left: 70px;
  text-align: center;
  vertical-align: middle;
  animation-name: ${OnerKeyFrame};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
  padding-top: 3px;
`;
