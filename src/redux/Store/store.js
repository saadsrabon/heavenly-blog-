import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../Fetures/Blogs/blogSlice'

const store = configureStore({
    reducer: {
        blogs: blogsReducer,
    }
})

export default store;