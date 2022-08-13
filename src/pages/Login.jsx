import React, { useEffect, useState, useCallback, useRef } from "react";
import styled from "styled-components";
import { debounce } from "lodash";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = debounce(() => {
    setWindowSize({
      width: window.innerWidth,
    });
  }, 300);

  const areadyLogin = () => {
    window.location.replace("/");
  };

  const member_Id = localStorage.getItem("memberId");

  return (
    <>
      {member_Id ? (
        <>
          <div>{member_Id}님 이미 로그인 하셨습니다.</div>
          <button onClick={areadyLogin}>뒤로가기</button>
        </>
      ) : (
        <LoginBody>
          <LoginMinBody>
            {windowSize.width <= 1200 ? (
              <LoginSmallBody>
                <LoginForm />
              </LoginSmallBody>
            ) : (
              <LoginSmallBody>
                <LoginFormBody>
                  <LoginForm />
                </LoginFormBody>
                <LoginFormBody>
                  <LoginImgBody></LoginImgBody>
                </LoginFormBody>
              </LoginSmallBody>
            )}
          </LoginMinBody>
        </LoginBody>
      )}
    </>
  );
};

export default Login;

const LoginBody = styled.div`
  display: block;
  height: 100vh;
`;

const LoginMinBody = styled.div`
  display: block;
  height: 100vh;
`;

const LoginFormBody = styled.div`
  display: block;
  height: 100vh;
  width: 50%;
`;

const LoginSmallBody = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginImgBody = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(https://img.freepik.com/premium-vector/save-planet-illustrated-theme_23-2148536735.jpg?w=826);
  background-size: cover;
`;
