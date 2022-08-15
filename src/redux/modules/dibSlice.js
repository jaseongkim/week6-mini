import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./instance";

export const dibsThunk = createAsyncThunk(
  "postdib",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post(`auth/dibs/posts/${payload}`);
      return console.log(data)
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  dibs: {
    data: "down"
  }
};

export const dibsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {}

});

export default dibsSlice.reducer;
