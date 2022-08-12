import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();

  const initialState = {
    memberId: "",
    password: "",
    password2: "",
  };

  let [passwordType, setPasswordType] = useState({
    type: "password",
    visible: false,
  });
  let [passwordCheck, setPasswordCheck] = useState();
  let [memberIdCheck, setmemberIdCheck] = useState();

  const [member, setMember] = useState(initialState);

  const onSignUPHandler = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

  const idNum = member.memberId.search(/[0-9]/g);
  const idEng = member.memberId.search(/[a-z]/gi);
  const num = member.password.search(/[0-9]/g);
  const eng = member.password.search(/[a-z]/gi);
  const spe = member.password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  useEffect(() => {
    if (member.password.length < 6) {
      setPasswordCheck(false);
    } else if (member.password.search(/\s/) != -1) {
      setPasswordCheck(false);
    } else if (num < 0 || eng < 0 || spe < 0) {
      setPasswordCheck(false);
    } else if (member.password === null) {
      setPasswordCheck(false);
    } else {
      setPasswordCheck(true);
    }
  }, [member.password]);

  useEffect(() => {
    if (member.memberId.length < 6 || member.memberId.length > 12) {
      setmemberIdCheck(false);
    } else if (idNum < 0 || idEng < 0) {
      setmemberIdCheck(false);
    } else if (member.memberId === null) {
      setmemberIdCheck(false);
    } else {
      setmemberIdCheck(true);
    }
  }, [member.memberId]);

  return (
    <LoginFormFrame>
      <LoginFormBox>
        <LoginLogo src={logo} onClick={() => navigate("/")} />
        <h2>회원가입</h2>

        <LoginText>아이디</LoginText>
        <LoginInput
          type="text"
          name="memberId"
          value={member.memberId}
          onChange={onSignUPHandler}
        />
        {!memberIdCheck ? (
          member.memberId === "" ? (
            <PasswordAlert>영문 대소문자/숫자 조합, 6자~12자</PasswordAlert>
          ) : (
            <PasswordAlertRed>
              아이디를 형식에 맞게 설정해주세요!
            </PasswordAlertRed>
          )
        ) : (
          <PasswordAlertGreen>올바른 ID 입니다.</PasswordAlertGreen>
        )}
        <LoginText>비밀번호</LoginText>
        <LoginInput
          type={passwordType.type}
          name="password"
          value={member.password}
          onChange={onSignUPHandler}
        />
        {!passwordCheck ? (
          member.password === "" ? (
            <PasswordAlert>
              영문 대소문자/숫자/특수문자 조합, 6자 이상
            </PasswordAlert>
          ) : (
            <PasswordAlertRed>
              비밀번호를 형식에 맞게 작성해주세요!
            </PasswordAlertRed>
          )
        ) : (
          <PasswordAlertGreen>올바른 비밀번호 입니다.</PasswordAlertGreen>
        )}

        <LoginText>비밀번호 확인</LoginText>
        <LoginInput
          type={passwordType.type}
          name="password2"
          value={member.password2}
          onChange={onSignUPHandler}
        />
        {member.password !== member.password2 ? (
          <PasswordAlertRed>비밀번호가 일치 하지 않습니다.</PasswordAlertRed>
        ) : (
          ""
        )}

        <LoginButton>회원가입 하기 </LoginButton>
      </LoginFormBox>
    </LoginFormFrame>
  );
};

export default SignUpForm;

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
  margin-top: 5%;
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

  padding: 10px;
`;

const PasswordAlert = styled.div`
  font-size: 10px;
  margin-bottom: 10px;
`;
const PasswordAlertRed = styled.div`
  font-size: 10px;
  margin-bottom: 10px;
  color: red;
`;
const PasswordAlertGreen = styled.div`
  font-size: 10px;
  margin-bottom: 10px;
  color: green;
`;

const LoginButton = styled.button`
  width: 100%;
  opacity: 0.8;
  margin: 5% auto;
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
