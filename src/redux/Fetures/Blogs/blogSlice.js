import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchblogs from "./blogApi";

export const fetchBlogsthunk = createAsyncThunk("blogs/fetchBlogs", async () => {
    const data = await fetchblogs();
    return data;
});

const blogsSlice = createSlice({
    name: "blogs",
    initialState: {
        blogs: [],
        loading: false,
        error: null,
    },
    extraReducers:builder =>{
        builder.addCase(fetchBlogsthunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchBlogsthunk.fulfilled, (state, action) => {
            state.blogs = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchBlogsthunk.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    }
});   

export default blogsSlice.reducer;