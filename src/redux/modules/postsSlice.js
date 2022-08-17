import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./instance";

export const __getPostThunk = createAsyncThunk(
  "GET_TODO",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const postPostThunk = createAsyncThunk(
  "POST_POST",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post("auth/posts", payload, {
        "Content-Type": "multipart/form-data",
        withCredentials: true,
      });
      if (data.success === false) {
        window.alert("이미지를 첨부해주세요!");
      } else {
        return thunkAPI.fulfillWithValue(data.data);
      }
    } catch (e) {
      return console.log(e);
    }
  }
);

export const delPostThunk = createAsyncThunk(
  "DEL_POST",
  async (payload, api) => {
    try {
      await instance.delete(`auth/posts/${payload}`);
      return window.location.replace("/");
    } catch (e) {
      return api.rejectWithValue(e);
    }
  }
);

const initialState = {
  posts: [],
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPostThunk.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [__getPostThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [__getPostThunk.pending]: () => {},
    [postPostThunk.fulfilled]: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    [postPostThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [postPostThunk.pending]: (state, action) => {},
  },
});

// export const {} = postsSlice.actions;
export default postsSlice.reducer;
