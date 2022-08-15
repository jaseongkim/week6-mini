import { createSlice } from "@reduxjs/toolkit";
import instance from "./instance";

//회원가입
export const createMemberDB = (data) => {
  return async function (dispatch) {
    await instance
      .post("members/signup", data, {
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.success === false) {
          return window.alert(response.data.error.message);
        } else {
          return (
            window.alert(
              `${response.data.data.memberId}님 회원가입을 축하드립니다!`
            ),
            window.location.replace("/")
          );
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          window.alert(error.response.data.message);
        }
      });
  };
};

//로그인
export const loginMemberDB = (data) => {
  return async function (dispatch) {
    await instance
      .post("members/login", data, {
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.success === false) {
          return window.alert(response.data.error.message);
        } else {
          return (
            localStorage.setItem("token", response.headers.authorization),
            localStorage.setItem("memberId", response.data.data.memberId),
            alert(`${localStorage.memberId}님 환영합니다.`),
            window.location.replace("/")
          );
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };
};

const memberSlice = createSlice({
  name: "member",
  initialState: {
    member_list: [],
  },
  reducers: {
    loadMember: (state, action) => {
      state.member_list.push(action.payload);
    },
  },
});

export const { loadMember } = memberSlice.actions;
export default memberSlice.reducer;
