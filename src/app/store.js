import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import postReducer from "../features/post/postSlice";
import relatedPostsReducer from "../features/relatedPosts/relatedPostsSlice";
import updateReducer from "../features/update/updateSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: postReducer,
    relatedPosts: relatedPostsReducer,
    update: updateReducer,
  },
});
