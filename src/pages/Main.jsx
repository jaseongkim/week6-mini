import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Navi from "../components/Navi";
import { PostList } from "../components/PostList";

const Main = () => {
  const [category, setCartegory] = useState(0);
  const [pageNavi] = useState(0);

  return (
    <Layout>
      <Stiky>
        <Header />
        <Navi setCartegory={setCartegory} pageNavi={pageNavi} />
      </Stiky>
      <PostList category={category} />
    </Layout>
  );
};

export default Main;

const Stiky = styled.section`
  position: sticky;
  top: 0;
  z-index: 1;
`;
