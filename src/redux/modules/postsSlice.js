import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getPostThunk = createAsyncThunk(
  "GET_TODO",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.get();
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
};

export const postsSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    clearTodo: (state) => {
      state.todo = {
        id: 0,
        body: "",
        username: "",
        title: "",
      };
    },
  },
  extraReducers: {},
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
