import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../Fetures/Blogs/blogSlice'
import blogReducer from '../Fetures/SingleBlog/singleBlogSlice'
const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        blog: blogReducer,
    }
})

export default store;