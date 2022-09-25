import { createSlice } from "@reduxjs/toolkit";
import { postsApi } from "../../api/index";

const initialState = {
    loading: false,
    error: false,
    posts: [],
};

const postsSlide = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        setPosts: (state, action) => {
            state.loading = false;
            state.error = false;
            state.posts = action.payload;
        },
        setError: (state) => {
            state.error = true;
        },
    },
});

export const { setLoading, setPosts, setError } = postsSlide.actions;

export const postsSelector = (state) => state.posts;

export default postsSlide.reducer;

export function fetchPosts() {
    return async (dispatch) => {
        postsApi
            .get("/posts")
            .then((response) => {
                dispatch(setPosts(response.data));
            })
            .catch((er) => {
                dispatch(setError());
            });
    };
}
