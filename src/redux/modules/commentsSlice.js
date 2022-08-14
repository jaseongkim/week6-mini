import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./instance";

export const getCommentsThunk = createAsyncThunk(
  "getComment",
  async (payload, thunkAPI) => {
    try {
      const { commentResponseDtoList } = await instance.get(`/posts/${payload}`);
      return thunkAPI.fulfillWithValue(commentResponseDtoList);
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
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const deletCommentThunk = createAsyncThunk(
  "createComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.delete(
        `/posts/${payload.postId}/comments/${payload.Id}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  comments: [],
  error: null,
};

export const commentsSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [getCommentsThunk.fulfilled]: (state, action) => {
      state.comments = action.payload;
    },
    [getCommentsThunk.rejected]: (state, action) => {
      // console.log(state);
      state.error = action.payload;
    },
    [getCommentsThunk.pending]: (state, action) => {
      // console.log(action);
      // console.log(state);
    },
    [createCommentThunk.fulfilled]: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
    [createCommentThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [createCommentThunk.pending]: () => {},
    [deletCommentThunk.fulfilled]: (state, action) => {
        const target = state.comments.findIndex(
          (comments) => comments.id === action.payload
        );
  
        state.comments.splice(target, 1);
      },
      [deletCommentThunk.rejected]: () => {},
      [deletCommentThunk.pending]: () => {},
  },
});

export default commentsSlice.reducer;
