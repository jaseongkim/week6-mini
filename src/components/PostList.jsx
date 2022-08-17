import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getPostThunk } from "../redux/modules/postsSlice";
import PostCards from "./PostCards";
import { VscSearch } from "react-icons/vsc";
import { debounce } from "lodash";

export const PostList = ({ category }) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const initialState = {
    searchtitle: "",
  };
  const [searchProduct, setSearchProduct] = useState(initialState);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSearchProduct({ ...searchProduct, [name]: value });
  };

  useEffect(() => {
    dispatch(__getPostThunk());
  }, [dispatch]);

  return (
    <>
      {
        [
          <ListContainer>
            <SearchContainer>
              <SearchForm>
                <SearchBar
                  type="text"
                  name="searchtitle"
                  value={searchProduct.searchtitle}
                  onChange={onChangeHandler}
                ></SearchBar>
              </SearchForm>
              <VscSearch
                style={{
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              />
            </SearchContainer>
            <ListTitle>전체</ListTitle>
            <ListWrapper>
              {posts?.map((product) => {
                if (searchProduct.searchtitle !== "") {
                  if (product.title.includes(searchProduct.searchtitle)) {
                    return <PostCards key={product.id} product={product} />;
                  } else {
                    return null;
                  }
                } else {
                  return <PostCards key={product.id} product={product} />;
                }
              })}
            </ListWrapper>
          </ListContainer>,
          <ListContainer>
            <SearchContainer>
              <SearchForm>
                <SearchBar
                  type="text"
                  name="searchtitle"
                  value={searchProduct.searchtitle}
                  onChange={onChangeHandler}
                ></SearchBar>
              </SearchForm>
              <VscSearch
                style={{
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              />
            </SearchContainer>
            <ListTitle>의류</ListTitle>
            <ListWrapper>
              {posts?.map((product) => {
                if (product.category === "clothes") {
                  if (searchProduct.searchtitle !== "") {
                    if (product.title.includes(searchProduct.searchtitle)) {
                      return <PostCards key={product.id} product={product} />;
                    } else {
                      return null;
                    }
                  } else {
                    return <PostCards key={product.id} product={product} />;
                  }
                } else {
                  return null;
                }
              })}
            </ListWrapper>
          </ListContainer>,
          <ListContainer>
            <SearchContainer>
              <SearchForm>
                <SearchBar
                  type="text"
                  name="searchtitle"
                  value={searchProduct.searchtitle}
                  onChange={onChangeHandler}
                ></SearchBar>
              </SearchForm>
              <VscSearch
                style={{
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              />
            </SearchContainer>
            <ListTitle>스포츠용품</ListTitle>
            <ListWrapper>
              {posts?.map((product) => {
                if (product.category === "sports") {
                  if (searchProduct.searchtitle !== "") {
                    if (product.title.includes(searchProduct.searchtitle)) {
                      return <PostCards key={product.id} product={product} />;
                    } else {
                      return null;
                    }
                  } else {
                    return <PostCards key={product.id} product={product} />;
                  }
                } else {
                  return null;
                }
              })}
            </ListWrapper>
          </ListContainer>,
          <ListContainer>
            <SearchContainer>
              <SearchForm>
                <SearchBar
                  type="text"
                  name="searchtitle"
                  value={searchProduct.searchtitle}
                  onChange={onChangeHandler}
                ></SearchBar>
              </SearchForm>
              <VscSearch
                style={{
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              />
            </SearchContainer>
            <ListTitle>도서</ListTitle>
            <ListWrapper>
              {posts?.map((product) => {
                if (product.category === "books") {
                  if (searchProduct.searchtitle !== "") {
                    if (product.title.includes(searchProduct.searchtitle)) {
                      return <PostCards key={product.id} product={product} />;
                    } else {
                      return null;
                    }
                  } else {
                    return <PostCards key={product.id} product={product} />;
                  }
                } else {
                  return null;
                }
              })}
            </ListWrapper>
          </ListContainer>,
          <ListContainer>
            <SearchContainer>
              <SearchForm>
                <SearchBar
                  type="text"
                  name="searchtitle"
                  value={searchProduct.searchtitle}
                  onChange={onChangeHandler}
                ></SearchBar>
              </SearchForm>
              <VscSearch
                style={{
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              />
            </SearchContainer>
            <ListTitle>전자기기</ListTitle>
            <ListWrapper>
              {posts?.map((product) => {
                if (product.category === "electronics") {
                  if (searchProduct.searchtitle !== "") {
                    if (product.title.includes(searchProduct.searchtitle)) {
                      return <PostCards key={product.id} product={product} />;
                    } else {
                      return null;
                    }
                  } else {
                    return <PostCards key={product.id} product={product} />;
                  }
                } else {
                  return null;
                }
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
  gap: 45px;
`;

const ListTitle = styled.h2``;

const SearchContainer = styled.div`
  cursor: text;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  width: 300px;
  display: flex;
  padding: 10px 20px;
  color: rgb(12, 12, 12);
  align-items: center;
  margin-right: 20px;
`;

const SearchForm = styled.div`
  flex: 1 1 0%;
  margin-right: 12px;
  line-height: normal;
`;

const SearchBar = styled.input`
  background-color: transparent;
  border-width: 0px;
  border-radius: 2px;
  outline-style: none;
  color: var(--system-on-color);
  width: 100%;
  height: 100%;
  font-size: 14px;
`;
