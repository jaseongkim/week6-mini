import { configureStore } from "@reduxjs/toolkit";
import post from "./modules/postSlice";
import posts from "./modules/postsSlice";
import members from "./modules/membersSlice";
import comments from "./modules/commentsSlice";
import dibs from "./modules/dibsSlice";


export default configureStore({
  reducer: {
    members,
    post,
    posts,
    comments,
    dibs,
  },
});
