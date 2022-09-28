import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postPost, updatePost, selectPostById } from "./postsSlide";
import { useEffect } from "react";
import { getUsers, selectAllUsers } from "../users/usersSlice";

const AddPostForm = ({ updateId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { loading, error, users } = useSelector(selectAllUsers);
  const post = useSelector((state) => selectPostById(state, updateId));

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setUserId(post.userId);
    }
  }, [post]);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onBodyChange = (e) => setBody(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const onAddPostClick = () => {
    if (title && body) {
      dispatch(postPost(Number(userId), title, body));
      setTitle("");
      setBody("");
    }
  };

  const onUpdatePostClick = () => {
    if (title && body) {
      dispatch(updatePost(Number(userId), updateId, title, body));
      setTitle("");
      setBody("");
    }
  };

  const canSave = Boolean(title) && Boolean(body) && Boolean(userId);

  const renderUsersOptions = () => {
    if (loading) return <strong>Loading please wait...</strong>;

    if (error) return <strong>Items not available at this time</strong>;

    return users.map((user) => (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    ));
  };

  return (
    <>
      <label className="block">
        <span className="text-gray-700">Title</span>
        <input
          type="text"
          value={title}
          className="input-primary"
          onChange={onTitleChange}
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Author</span>
        <select
          value={userId}
          onChange={onAuthorChange}
          className="input-primary"
        >
          <option value=""></option>
          {renderUsersOptions()}
        </select>
      </label>
      <label className="block">
        <span className="text-gray-700">Content</span>
        <textarea
          value={body}
          onChange={onBodyChange}
          className="input-primary"
          rows="2"
        ></textarea>
      </label>

      <button
        onClick={updateId ? onUpdatePostClick : onAddPostClick}
        disabled={!canSave}
        className="btn-primary w-1/3 mt-4"
      >
        {updateId ? "Update Post" : "Add Post"}
      </button>
    </>
  );
};
export default AddPostForm;
