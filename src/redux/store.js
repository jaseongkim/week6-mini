import { configureStore } from "@reduxjs/toolkit";
import members from "./modules/membersSlice";


export default configureStore({
  reducer: {
    members,
  },
});
