import React, { useState } from "react";
import styled from "styled-components";
import DropDown from "../components/DropDown";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { postPostThunk } from "../redux/modules/postsSlice";
import imageButton from "../images/imageButton.png";
import { useNavigate } from "react-router-dom";
new Blob([JSON.stringify()], { type: "application/json" });

const Posting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fileImage, setFileImage] = useState("");

  const initialState = {
    title: "",
    content: "",
    price: "",
    category: "",
  };
  const [upLoad, setUpLoad] = useState(initialState);

  const onUpLoadHandler = (e) => {
    const { name, value } = e.target;
    setUpLoad({ ...upLoad, [name]: value });
  };

  // 파일 저장
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  const onPostingHandler = async (e) => {
    if (
      upLoad.title === "" ||
      upLoad.content === "" ||
      upLoad.price === "" ||
      upLoad.category === ""
    ) {
      alert("빈칸을 다 채워주세요.");
      return;
    }
    e.preventDefault();
    let frm = new FormData();
    let postimage = document.getElementById("ex_file");

    frm.append(
      "data",
      new Blob([JSON.stringify(upLoad)], { type: "application/json" })
    );
    frm.append("image", postimage.files[0]);
      try {
        const response = await dispatch(postPostThunk(frm)).unwrap();
        if(response){
          navigate(`/detail/${response.id}`)
        }
      }
      catch (error){
        console.log(error)
      }
  };


  return (
    <Layout>
      <Stiky>
        <Header />
      </Stiky>
      <PostingBox enctype="multipart/form-data" onSubmit={onPostingHandler}>
        <PostingContainer>
          <PostingLeft>
            {fileImage === "" ? (
              <PostingImgBox></PostingImgBox>
            ) : (
              <AddPostingImg src={fileImage}></AddPostingImg>
            )}
                <AppStyle>
      <label htmlFor="ex_file">
        <div className="btnStart">
          <img src={imageButton} alt="btnStart" />
        </div>
      </label>
      <input
        type="file"
        id="ex_file"
        accept="image/jpg, image/png, image/jpeg"
        onChange={saveFileImage}
      />
    </AppStyle>
          </PostingLeft>
          <PostingRight>
            <PostingText>제목</PostingText>
            <PostingInputBox
              type="text"
              name="title"
              value={upLoad.title}
              onChange={onUpLoadHandler}
            />
            <PostingText>가격</PostingText>
            <PostingInputBox
              type="number"
              name="price"
              value={upLoad.price}
              onChange={onUpLoadHandler}
            />
            <PostingText>내용</PostingText>
            <PostingInputBoxContents
              type="text"
              name="content"
              value={upLoad.content}
              onChange={onUpLoadHandler}
            />
            <PostingText>카테고리</PostingText>
            <DropDown onUpLoadHandler={onUpLoadHandler} upLoad={upLoad} />
          </PostingRight>
        </PostingContainer>
        <PostingButton>등록하기</PostingButton>
      </PostingBox>
    </Layout>
  );
};

export default Posting;

const Stiky = styled.section`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const PostingBox = styled.form`
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

const AppStyle = styled.div`
  box-sizing: border-box;
  margin-top: 20px;
  img {
    width: 310px;
    max-height: 40px;
    border-radius: 10px;
    opacity: 0.8;
    &:hover{
        opacity: 1;
    }
  }
  label {
    display: inline-block;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
  }
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
