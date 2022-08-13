import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./modules/postSlice";
import postsSlice from "./modules/postsSlice";
import members from "./modules/membersSlice";


export default configureStore({
  reducer: {
    members,
    postSlice,
    postsSlice,

  },
});
