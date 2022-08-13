import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return (
    <>
      <StLayout>{props.children}</StLayout>
    </>
  );
};

export default Layout;

const StLayout = styled.div`
  /* height: calc(100vh - 45px); */
  background-color: "white";
  padding: 24px;
`;
