import { useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { MyPageList } from "../components/MyPageList";
import Navi from "../components/Navi";

const Mypage = () => {
  const member_Id = localStorage.getItem("memberId");
  const [pageNavi] = useState(1);

  return (
    <Layout>
      <Header />
      <Navi pageNavi={pageNavi} />
      <MyPageList member_Id={member_Id} />
    </Layout>
  );
};
export default Mypage;
