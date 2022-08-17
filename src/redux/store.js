import { configureStore } from "@reduxjs/toolkit";
import post from "./modules/postSlice";
import posts from "./modules/postsSlice";
import members from "./modules/membersSlice";
import comments from "./modules/commentsSlice";
import dibs from "./modules/dibsSlice";
import dib from "./modules/dibSlice";

export default configureStore({
  reducer: {
    members,
    post,
    posts,
    comments,
    dibs,
    dib,
  },
});
