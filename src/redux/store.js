import { configureStore } from "@reduxjs/toolkit";
import post from "./modules/postSlice";
import posts from "./modules/postsSlice";
import members from "./modules/membersSlice";
import comment from "./modules/commentSlice";

export default configureStore({
  reducer: {
    members,
    post,
    posts,
    comment,
  },
});
