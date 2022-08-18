import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { VscSearch } from "react-icons/vsc";

const Header = () => {
  const navigate = useNavigate();

  const member_Id = localStorage.getItem("memberId");
  const logOut = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  return (
    <HeaderContainer>
      <StContainer>
        <Container>
          <InputGroup>
            <div style={{ display: "flex" }}>
              <LoginLogo src={logo} onClick={() => navigate("/")} />
              <div style={{ width: "36px" }}></div>

            </div>
            {!member_Id ? (
              <HeaderP onClick={() => navigate("/login")}>Login</HeaderP>
            ) : (
              <div style={{ display: "flex" }}>
                <HeaderP onClick={logOut}>Logout</HeaderP>
                <div style={{ width: "36px" }}></div>
                <HeaderP onClick={() => navigate("/MyPage")}>MyPage</HeaderP>
              </div>
            )}
          </InputGroup>
        </Container>
      </StContainer>
    </HeaderContainer>
  );
};

export default Header;

const LoginLogo = styled.img`
  margin: auto;
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`;

const HeaderP = styled.p`
  cursor: pointer;
  font-weight: bold;
  color: #0064ff;
  opacity: 0.9;
  &:hover {
    opacity: 1;
    scale: 1.1;
  }
`;

const HeaderContainer = styled.header`
  border-radius: 0;
  width: 100%;
  height: auto;
  background-color: #ffffff;
  border-color: #e5e5e5;
  z-index: 101;
  top: 0;
  left: 0;
  position: sticky;
`;

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1216px;
  padding-left: 20px;
  padding-right: 20px;
  align-items: stretch;
  flex-direction: column;
`;
const InputGroup = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  position: relative;
`;

