import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./modules/postSlice";
import postsSlice from "./modules/postsSlice";

export default configureStore({
  reducer: {
    postSlice,
    postsSlice,
  },
});
