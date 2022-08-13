import React, { useState } from "react";
import styled from "styled-components";
import DropDown from "../components/DropDown";
import Modal from "react-bootstrap/Modal";
import UploadImg from "../components/UploadImg";
import "./Posting.css";

const Posting = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fileImage, setFileImage] = useState("");

  // const [newPosting, setNewPosting] = useState({
  //   title,
  //   content,
  //   price,
  //   category,
  //   img,
  // })

  console.log(fileImage);

  // 파일 저장
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
  };

  return (
    <PostingBox>
      <PostingContainer>
        <PostingLeft>
          {fileImage === "" ? (
            <PostingImgBox></PostingImgBox>
          ) : (
            <AddPostingImg src={fileImage}></AddPostingImg>
          )}

          <PostingImgButton onClick={handleShow}>
            이미지 업로드
          </PostingImgButton>

          {show ? (
            <Modal show={show} onHide={handleClose}>
              <UploadImg
                fileImage={fileImage}
                saveFileImage={saveFileImage}
                deleteFileImage={deleteFileImage}
                handleClose={handleClose}
              />
            </Modal>
          ) : (
            ""
          )}
        </PostingLeft>
        <PostingRight>
          <PostingText>제목</PostingText>
          <PostingInputBox />
          <PostingText>가격</PostingText>
          <PostingInputBox />
          <PostingText>내용</PostingText>
          <PostingInputBoxContents type="text" />
          <PostingText>카테고리</PostingText>
          <DropDown />
        </PostingRight>
      </PostingContainer>
      <PostingButton>등록하기</PostingButton>
    </PostingBox>
  );
};

export default Posting;

const PostingBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const PostingContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  border: none;
  margin: 5% auto 0 auto;
  width: 700px;
  height: 420px;
`;

const PostingLeft = styled.div`
  position: relative;
  width: 350px;
  height: 420px;
  box-sizing: border-box;
  padding: 20px;
`;
const PostingImgBox = styled.div`
  width: 310px;
  height: 300px;
  box-sizing: border-box;
  border: 1px solid #0064ff;
  border-radius: 5px;
`;

const AddPostingImg = styled.img`
  width: 310px;
  height: 300px;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
`;

const PostingImgButton = styled.button`
  width: 310px;
  height: 40px;
  border: none;
  cursor: pointer;
  background: #0064ff;
  margin-top: 20px;
  color: white;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const PostingRight = styled.div`
  position: relative;
  padding: 20px;
  width: 350px;
  height: 420px;
`;

const PostingText = styled.div`
  margin-bottom: 1%;
`;

const PostingInputBox = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: 0.5px solid #b1aeae;
  opacity: 0.5;
  border-radius: 5px;
  height: 35px;
  margin-bottom: 5%;
  padding: 10px;
`;

const PostingInputBoxContents = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  border: 0.5px solid #b1aeae;
  opacity: 0.5;
  border-radius: 5px;
  height: 110px;
  margin-bottom: 5%;
  padding: 10px;
`;

const PostingButton = styled.button`
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background: #0064ff;
  color: white;
  font-size: 20px;
  margin: 20px auto 0 auto;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
