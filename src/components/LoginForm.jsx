import React, { useRef } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginMemberDB } from "../redux/modules/membersSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //인풋값설정USEREF

  const memberId_ref = useRef(null);
  const password_ref = useRef(null);

  //유효성 검사 및 로그인
  const login = async () => {
    if (memberId_ref.current.value == "" || password_ref.current.value == "") {
      window.alert("아이디와 비밀번호를 입력하세요");
    } else {
      await dispatch(
        loginMemberDB({
          memberId: memberId_ref.current.value,
          password: password_ref.current.value,
        })
      );
    }
  };

  //엔터키 활성화?
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      login();
    }
  };

  return (
    <LoginFormFrame>
      <LoginFormBox>
        <LoginLogo src={logo} onClick={() => navigate("/")} />
        <h2>로그인</h2>

        <LoginText>ID</LoginText>
        <LoginInput type="text" ref={memberId_ref} />
        <LoginText>비밀번호</LoginText>
        <LoginInput type="password" ref={password_ref} />
        <GotoSignUp onClick={() => navigate("/signup")}>
          회원가입하기
        </GotoSignUp>
        <LoginButton onClick={login}>로그인 하기 </LoginButton>
      </LoginFormBox>
    </LoginFormFrame>
  );
};

export default LoginForm;

const LoginLogo = styled.img`
  margin-bottom: 40px;
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`;

const LoginFormFrame = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const LoginFormBox = styled.div`
  width: 70%;
  max-width: 350px;
  min-width: 300px;
  padding: 24px;
  flex: 1 1 0%;
`;

const LoginText = styled.div`
  margin-bottom: 1%;
`;

const LoginInput = styled.input`
  box-sizing: border-box;
  border: 0.5px solid #b1aeae;
  opacity: 0.5;
  border-radius: 5px;
  margin: auto;
  height: 35px;
  width: 100%;
  margin-bottom: 5%;
  padding: 10px;
`;

const LoginButton = styled.button`
  width: 100%;
  opacity: 0.8;
  margin: auto;
  border: 0.5px solid #0064ff;
  border-radius: 5px;
  background: #0064ff;
  height: 40px;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const GotoSignUp = styled.div`
  text-align: right;
  margin-bottom: 20px;
  font-size: 10px;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
