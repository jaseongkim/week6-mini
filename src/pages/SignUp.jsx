import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { debounce } from "lodash";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  console.log(window.innerWidth);

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

  const member_Id = localStorage.getItem("memberId");
  const areadyLogin = () => {
    window.location.replace("/");
  };

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
                <SignUpForm />
              </LoginSmallBody>
            ) : (
              <LoginSmallBody>
                <LoginFormBody>
                  <SignUpForm />
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
  background-image: url(https://i.pinimg.com/564x/48/c4/49/48c44903119ecd11b79a42e9c271d13e.jpg);
  background-size: cover;
`;

export default SignUp;
