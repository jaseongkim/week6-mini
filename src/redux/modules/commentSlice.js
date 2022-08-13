import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./instance";

export const getCommentThunk = createAsyncThunk(
  "getComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/posts/${payload}/comments`);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  comment: {
    id: 0,
    content: "",
    memberId: "",
 },
  error: null,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    clearTodo: (state) => {
      state.post = {
        id: 0,
        content: "",
        memberId: "",
      };
    },
  },
  extraReducers: {
    [getCommentThunk.fulfilled]:(state, action) => {
      state.post = action.payload;
    },
    [getCommentThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getCommentThunk.pending]: () => {},
  },
});

export const { clearTodo } = commentSlice.actions;
export default commentSlice.reducer;
