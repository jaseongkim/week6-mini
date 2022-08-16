import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./instance";

export const getPostThunk = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`posts/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  post: {
    id: 0,
    title: "",
    content: "",
    imgUrl: "",
    price: "",
    dibCount: 0,
    view: 0,
    commentsCount: 0,
    isEditMode: false,
    isDone: false,
  },
  error: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    onEditPostHandler: (state, action) => {
      state.post.isEditMode = !state.post.isEditMode;
    },
    onDonePostHandler: (state, action) => {
      state.post.isDone = true;
    },
  },
  extraReducers: {
    [getPostThunk.fulfilled]: (state, action) => {
      state.post = action.payload;
    },
    [getPostThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getPostThunk.pending]: () => {},
  },
});

export const { onEditPostHandler, onDonePostHandler } = postSlice.actions;
export default postSlice.reducer;
