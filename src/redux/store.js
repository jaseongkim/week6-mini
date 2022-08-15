import { configureStore } from "@reduxjs/toolkit";
import post from "./modules/postSlice";
import posts from "./modules/postsSlice";
import members from "./modules/membersSlice";
import comments from "./modules/commentsSlice";

export default configureStore({
  reducer: {
    members,
    post,
    posts,
    comments,
  },
});
