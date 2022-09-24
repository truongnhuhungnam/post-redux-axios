import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "../features/posts/postsSlide";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
});
