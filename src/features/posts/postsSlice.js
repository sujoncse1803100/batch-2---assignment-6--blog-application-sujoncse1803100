import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getPosts from "./postsAPI";

const initialState = {
  isLoading: false,
  posts: [],
  error: "",
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const posts = await getPosts();
  return posts;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    sort: (state, action) => {
      if (action.payload === "newest") {
        const sortedDAta = [...state.posts].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        state.posts = sortedDAta;
      } else if (action.payload === "most_liked") {
        const sortedDAta = [...state.posts].sort((a, b) => b.likes - a.likes);
        state.posts = sortedDAta;
      }
    },
    filter: (state, action) => {
      if (action.payload === "saved") {
        const sortedDAta = state.posts.filter((post) => post.isSaved);
        state.posts = sortedDAta;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
export const { sort, filter } = postsSlice.actions;
