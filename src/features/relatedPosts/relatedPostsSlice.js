import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getRelatedPosts from "./relatedPostsAPI";

const initialState = {
  isLoading: false,
  posts: [],
  error: "",
};

export const fetchRelatedPosts = createAsyncThunk(
  "relatedPosts/fetchPosts",
  async ({ tags, id }) => {
    const posts = await getRelatedPosts({ tags, id });
    return posts;
  }
);

const relatedPostsSlice = createSlice({
  name: "relatedPosts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRelatedPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchRelatedPosts.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default relatedPostsSlice.reducer;
