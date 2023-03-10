import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getPost from "./postAPI";

const initialState = {
  isLoading: false,
  post: {},
  error: "",
};

export const fetchPost = createAsyncThunk("posts/fetchPosts", async (id) => {
  const post = await getPost(id);
  return post;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
