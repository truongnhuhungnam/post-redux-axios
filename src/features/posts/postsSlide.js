import { createSlice } from "@reduxjs/toolkit";
import { postsApi } from "../../api/index";

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
        setPosts: (state, { payload }) => {
            state.loading = false;
            state.error = false;
            state.posts = payload;
        },
        setError: (state) => {
            state.error = true;
        },
    },
});

export const { setLoading, setPosts, setError } = postsSlide.actions;

export const postsSelector = (state) => state.posts;

export default postsSlide.reducer;
