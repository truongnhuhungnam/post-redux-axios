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
    editPost: (state, action) => {
      state.loading = false;
      state.error = false;
      const { id } = action.payload;
      const prevPost = state.posts.filter((post) => post.id !== id);
      state.posts = [...prevPost, action.payload];
    },
    removePost: (state, action) => {
      state.loading = false;
      state.error = false;
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { setLoading, setPosts, setError, addPost, editPost, removePost } =
  postsSlide.actions;

export const selectAllPosts = (state) => state.posts;

export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId);

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

export const postPost = (userId, title, body) => {
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

export const updatePost = (userId, id, title, body) => {
  return async (dispatch) => {
    api
      .put(`/posts/${id}`, {
        userId,
        id,
        title,
        body,
      })
      .then((response) => {
        dispatch(editPost(response.data));
      })
      .catch((er) => {
        dispatch(setError());
      });
  };
};
