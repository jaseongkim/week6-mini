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

export const dibsHateThunk = createAsyncThunk(
  "postdibhate",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post(`auth/dibs/posts/${payload}`);
      return thunkAPI.fulfillWithValue(payload)
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const dibsLikeThunk = createAsyncThunk(
  "postdibLike",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post(`auth/dibs/posts/${payload.id}`);
      return thunkAPI.fulfillWithValue(payload)
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

    [dibsHateThunk.fulfilled]: (state, action) => {
      const new_dibs = state.dibs.filter(
        (dib) => dib.id != action.payload
      );
      state.dibs = new_dibs;
    },
    [dibsHateThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [dibsHateThunk.pending]: () => {},
    [dibsLikeThunk.fulfilled]: (state, action) => {
      state.dibs = [...state.dibs, action.payload]
    },
    [dibsLikeThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [dibsLikeThunk.pending]: () => {},
  },
});

// export const {} = dibsSlice.actions;
export default dibsSlice.reducer;
