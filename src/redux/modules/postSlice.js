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
  post: {
    id: 0,
    body: "",
    username: "",
    title: "",
  },
  error: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearTodo: (state) => {
      state.post = {
        id: 0,
        body: "",
        username: "",
        title: "",
      };
    },
  },
  extraReducers: {},
});

export const { clearTodo } = postSlice.actions;
export default postSlice.reducer;
