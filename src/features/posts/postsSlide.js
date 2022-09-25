import { createSlice, nanoid } from "@reduxjs/toolkit";
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
        addPosts: {
            reducer(state, action) {
                state.posts.push(action.payload);
            },
            prepare(title, body) {
                return {
                    payload: {
                        userId: nanoid(),
                        id: nanoid(),
                        title,
                        body,
                    },
                };
            },
        },
    },
});

export const { setLoading, setPosts, setError, addPosts } = postsSlide.actions;

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
