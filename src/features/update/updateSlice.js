import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import updatePostNow from "./updateAPI";

const initialState = {
  isLoading: false,
  isUpdate: false,
  error: "",
};

export const updatePost = createAsyncThunk(
  "update/updatePost",
  async (data) => {
    const posts = await updatePostNow(data);
    return posts;
  }
);

const updatePostSlice = createSlice({
  name: "updatePost",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
        state.isUpdate = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isUpdate = true;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.error = action.error.message;
        state.isUpdate = true;
      });
  },
});

export default updatePostSlice.reducer;
