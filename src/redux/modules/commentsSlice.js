import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import instance from "./instance";

export const getCommentsThunk = createAsyncThunk(
  "getComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`posts/${payload}`);
      return thunkAPI.fulfillWithValue(data.data.commentResponseDtoList);
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
        `auth/posts/${payload.postId}/comments`,
        { content: payload.content },
        { withCredentials: true }
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const deletCommentThunk = createAsyncThunk(
  "deletComment",
  async (payload, thunkAPI) => {
    try {
      await instance.delete(
        `auth/posts/${payload.postId}/comments/${payload.id}`
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const editCommentThunk = createAsyncThunk(
  "editComment",
  async (payload, thunkAPI) => {
    try {
      await instance.put(
        `auth/posts/${payload.postId}/comments/${payload.id}`,
        { content: payload.content },
        { withCredentials: true }
      );
      return thunkAPI.fulfillWithValue(payload);
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
  name: "comments",
  initialState,
  reducers: {
    onEditHandler: (state, action) => {
      state.comments.map((comment) => {
        if (comment.id === action.payload) {
          return (comment.isEditMode = !comment.isEditMode);
        } else {
          return state;
        }
      });
    },
  },
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
    [createCommentThunk.pending]: (state) => {
      // console.log(state);
    },
    [createCommentThunk.fulfilled]: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
    [createCommentThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [deletCommentThunk.fulfilled]: (state, action) => {
      const new_commentlist = state.comments.filter(
        (v) => v.id !== action.payload.id
      );
      state.comments = new_commentlist;
    },
    [deletCommentThunk.rejected]: () => {},
    [deletCommentThunk.pending]: () => {},
    [editCommentThunk.fulfilled]: (state, action) => {
      state.comments.map((comment) => {
        if (comment.id == action.payload.id) {
          return (
            (comment.content = action.payload.content),
            (comment.isEditMode = !comment.isEditMode)
          );
        }
        return comment;
      });
    },

    [editCommentThunk.rejected]: () => {},
    [editCommentThunk.pending]: () => {},
  },
});

export let { onEditHandler } = commentsSlice.actions;
export default commentsSlice.reducer;
