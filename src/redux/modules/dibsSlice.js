import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./instance";

export const __getDibsThunk = createAsyncThunk(
  "DibGET_TODO",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("auth/my-page");
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  dibs: [],
  uploads: [],
  error: null,
};

export const dibsSlice = createSlice({
  name: "dibs",
  initialState,
  reducers: {},
  extraReducers: {
    [__getDibsThunk.fulfilled]: (state, action) => {
      state.dibs = action.payload.dibs;
      state.uploads = action.payload.uploads;
    },
    [__getDibsThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [__getDibsThunk.pending]: () => {},
  },
});

// export const {} = dibsSlice.actions;
export default dibsSlice.reducer;
