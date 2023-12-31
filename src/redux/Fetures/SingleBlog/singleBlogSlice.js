import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchblog, { saveblogItem } from "./singleBlogApi";


export const fetchBlogthunk = createAsyncThunk("blogs/fetchBlog", async (id) => {
    const data = await fetchblog(id);
    return data;
});

export const saveBlog = createAsyncThunk("blogs/saveBlog", async (id) => {  
    console.log(id)
    const data = await saveblogItem(id);
    return data;
} )  

const singleblogsSlice = createSlice({
    name: "blog",
    initialState: {
        blog: {},
        loading: false,
        error: null,
    },
    extraReducers:builder =>{
        builder.addCase(fetchBlogthunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchBlogthunk.fulfilled, (state, action) => {
            state.blog = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchBlogthunk.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });

        builder.addCase(saveBlog.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(saveBlog.fulfilled, (state, action) => {
            state.blog = action.payload;
            state.loading = false;
        });
        builder.addCase(saveBlog.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    }
    
});   

export default singleblogsSlice.reducer;