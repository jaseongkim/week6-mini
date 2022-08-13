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
        console.log(response);
        window.location.replace("/");
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
            console.log(response),
            localStorage.setItem("token", response.headers.authorization),
            localStorage.setItem("memberId", response.data.data.memberId),
            alert(`${localStorage.memberId}님 환영합니다.`),
            window.location.replace("/")
          )
        }

        // localStorage.setItem("refreshToken", response.data.refreshToken);
        // localStorage.setItem("user_id", response.headers.memberId);
      })
      .catch((response) => {
        console.log(response);
      });
  };
};

export const logOutDB = (data) => {
  console.log(data);
  return async function (dispatch) {
    await instance.post("/user/logout", data, {
      "Content-Type": "application/json",
      withCredentials: true,
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
