import styled from "styled-components";
import PostCards from "./PostCards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getDibsThunk } from "../redux/modules/dibsSlice";

export const MyPageList = ({ member_Id }) => {
  const dispatch = useDispatch();

  const { dibs, uploads } = useSelector((state) => state.dibs);

  console.log(member_Id);
  console.log(dibs);
  console.log(uploads);

  useEffect(() => {
    dispatch(__getDibsThunk());
    console.log("MypageList useEffect");
  }, [dispatch]);

  return (
    <ListContainer>
      <ListTitle>찜한 목록</ListTitle>
      <ListWrapper>
        {dibs?.map((product) => {
          return <PostCards key={product.id} product={product} />;
        })}
      </ListWrapper>
      <ListTitle>판매중인 목록</ListTitle>
      <ListWrapper>
        {uploads?.map((product) => {
          return <PostCards key={product.id} product={product} />;
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
