import React from "react";
import styled from "styled-components";

const UploadImg = ({ handleClose, saveFileImage, deleteFileImage }) => {
  return (
    <ModalBox>
      <ModalInput type="file" accept="image/*" onChange={saveFileImage}/>
      <Modalbutton onClick={handleClose}>등록하기</Modalbutton>
    </ModalBox>
  );
};

export default UploadImg;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: white;
  margin: 20% auto;
  width: 400px;
  height: 100px;
  padding: 20px;
  box-sizing: border-box;
`;

const ModalInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 25px;
`;

const Modalbutton = styled.button`
  box-sizing: border-box;
  margin: auto;
  background: #0064ff;
  border: none;
  border-radius: 5px;
  color: white;
  width: 20%;
  height: 25px;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
