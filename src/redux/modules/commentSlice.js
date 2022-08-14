import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./instance";

export const getCommentThunk = createAsyncThunk(
  "getComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/posts/${payload.postId}/comments/${payload.Id}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const createCommentThunk = createAsyncThunk(
  "createComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post(
        `/posts/${payload.postId}/comments`,
        payload.content
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const editCommentThunk = createAsyncThunk(
  "editComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.put(
        `/posts/${payload.postId}/comments/${payload.Id}`,payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  comment: {},
  error: null,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [getCommentThunk.fulfilled]: (state, action) => {
      state.comment = action.payload;
    },
    [getCommentThunk.rejected]: (state, action) => {
      // console.log(state);
      state.error = action.payload;
    },
    [getCommentThunk.pending]: (state, action) => {
      // console.log(action);
      // console.log(state);
    },
    [editCommentThunk.pending]: (state) => {
      console.log(state);
    },
    [editCommentThunk.fulfilled]: (state, action) => {
      state.comment.content = action.payload.content;
    },
    [editCommentThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default commentSlice.reducer;
