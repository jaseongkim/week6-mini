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
              <SearchContainer>
                <SearchForm>
                  <SearchBar></SearchBar>
                </SearchForm>
                <VscSearch
                  style={{
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                  onClick={() => {}}
                />
              </SearchContainer>
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

const SearchContainer = styled.div`
  cursor: text;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  display: flex;
  padding: 10px 10px;
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
