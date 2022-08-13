import React, { useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { PostList } from "../components/PostList";

const Main = () => {
  const [category, setCartegory] = useState(0);

  console.log(category);

  return (
    <Layout>
      <Header category={category} setCartegory={setCartegory} />
      <PostList category={category} />
    </Layout>
  );
};

export default Main;
