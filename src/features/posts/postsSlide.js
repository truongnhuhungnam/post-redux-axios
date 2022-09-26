import { createSlice, nanoid } from "@reduxjs/toolkit";
import { api } from "../../api/posts";

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
    setError: (state) => {
      state.error = true;
    },
    setPosts: (state, action) => {
      state.loading = false;
      state.error = false;
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.loading = false;
      state.error = false;
      state.posts.push(action.payload);
    },
    removePost: (state, action) => {
      state.loading = false;
      state.error = false;
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { setLoading, setPosts, setError, addPost, removePost } =
  postsSlide.actions;

export const selectAllPosts = (state) => state.posts;

export default postsSlide.reducer;

export const getPosts = () => {
  return async (dispatch) => {
    api
      .get("/posts")
      .then((response) => {
        dispatch(setPosts(response.data));
      })
      .catch((er) => {
        dispatch(setError());
      });
  };
};

export const postPost = (title, body, userId) => {
  return async (dispatch) => {
    api
      .post("/posts", {
        userId,
        id: nanoid(),
        title,
        body,
      })
      .then((response) => {
        dispatch(addPost(response.data));
      })
      .catch((er) => {
        dispatch(setError());
      });
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    api
      .delete(`/posts/${id}`)
      .then(dispatch(removePost(id)))
      .catch((er) => {
        dispatch(setError());
      });
  };
};
