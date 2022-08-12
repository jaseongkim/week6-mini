import React from "react";
import styled from "styled-components";

const Posting = () => {
  return (
    <PostingBox>
      <PostingContainer>
        <PostingLeft>
          <PostingImgBox></PostingImgBox>
          <PostingImgButton>이미지 업로드</PostingImgButton>
        </PostingLeft>
        <PostingRight>
          <PostingText>제목</PostingText>
          <PostingInputBox />
          <PostingText>가격</PostingText>
          <PostingInputBox />
          <PostingText>내용</PostingText>
          <PostingInputBoxContents
          type="text" />
          <PostingText>카테고리</PostingText>

        </PostingRight>
      </PostingContainer>
    </PostingBox>
  );
};

export default Posting;

const PostingBox = styled.div`
  width: 100%;
  height: 100vh;
`;

const PostingContainer = styled.div`
  display: flex;
  border: 1px solid #0064ff;
  margin: 5% auto;
  width: 700px;
  height: 500px;
`;

const PostingLeft = styled.div`
  position: relative;
  width: 350px;
  height: 500px;
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
const PostingImgButton = styled.button`
  width: 310px;
  height: 40px;
  border: none;
  cursor: pointer;
  background: #0064ff;
  margin-top: 20px;
  color: white;
`;

const PostingRight = styled.div`
  position: relative;
  padding: 20px;
  width: 350px;
  height: 500px;
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
  height: 90px;
  margin-bottom: 5%;
  padding: 10px;
`;

const PostingDropDown = styled.dvi`
  
`
