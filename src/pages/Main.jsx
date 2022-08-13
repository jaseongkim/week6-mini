import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { PostList } from "../components/PostList";

const Main = () => {
  return (
    <Layout>
      <Header />
      <PostList />
    </Layout>
  );
};

export default Main;
