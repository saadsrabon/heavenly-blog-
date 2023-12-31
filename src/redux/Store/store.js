import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../Fetures/Blogs/blogSlice'
import blogReducer from '../Fetures/SingleBlog/singleBlogSlice'
import relatedBlogsReducer from '../Fetures/RelatedBlogs/relatedBlogsSlice'
const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        blog: blogReducer,
        relatedBlogs:relatedBlogsReducer
    }
})

export default store;