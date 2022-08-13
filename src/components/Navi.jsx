import React from "react";
import styled from "styled-components";

const Navi = ({ setCartegory }) => {
  return (
    <>
      <NaviContainer>
        <StContainer>
          <Container>
            <NaviForm>
              <NaviGroup onClick={() => setCartegory(0)}>전체</NaviGroup>
              <NaviGroup margin="8px" onClick={() => setCartegory(1)}>
                의류
              </NaviGroup>
              <NaviGroup margin="8px" onClick={() => setCartegory(2)}>
                스포츠용품
              </NaviGroup>
              <NaviGroup margin="8px" onClick={() => setCartegory(3)}>
                도서
              </NaviGroup>
              <NaviGroup margin="8px" onClick={() => setCartegory(4)}>
                전자기기
              </NaviGroup>
            </NaviForm>
          </Container>
        </StContainer>
      </NaviContainer>
    </>
  );
};

export default Navi;

const NaviContainer = styled.nav`
  border-radius: 0;
  width: 100%;
  height: auto;
  background-color: #ffffff;
  border-color: #e5e5e5;
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
  position: relative;
`;
const NaviForm = styled.div`
  margin-top: 30px;
  display: flex;
  overflow: auto;
`;

const NaviGroup = styled.div`
  margin-left: ${(props) => props.margin};
  position: relative;
  overflow: hidden;
  flex: 0 0 auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(26, 26, 26);
`;
