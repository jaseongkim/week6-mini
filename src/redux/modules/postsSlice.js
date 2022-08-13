import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./instance";

export const __getPostThunk = createAsyncThunk(
  "GET_TODO",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("posts");
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
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
      console.log(state.posts);
    },
    [__getPostThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [__getPostThunk.pending]: () => {},
  },
});

// export const {} = postsSlice.actions;
export default postsSlice.reducer;
