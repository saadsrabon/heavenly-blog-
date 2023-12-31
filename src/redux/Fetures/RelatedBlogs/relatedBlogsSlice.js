import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchRelatedblogs from "./relatedBlogApi";



export const relatedBlogThunk = createAsyncThunk("relatedBlog/fetch", async ({tags,id}) => {
    const data = await fetchRelatedblogs({tags,id});
    return data;
});



const relatedblogsSlice = createSlice({
    name: "realtedblogs",
    initialState: {
        related: [],
        loading: false,
        error: null,
    },
    extraReducers:builder =>{
        builder.addCase(relatedBlogThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(relatedBlogThunk.fulfilled, (state, action) => {
            state.related = action.payload;
            state.loading = false;
        });
        builder.addCase(relatedBlogThunk.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });

       
    }
    
});   

export default relatedblogsSlice.reducer;