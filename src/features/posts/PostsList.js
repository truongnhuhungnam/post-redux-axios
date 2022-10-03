import PostItem from "./PostItem";
import AddPostForm from "./AddPostForm";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, deletePost, selectAllPosts } from "./postsSlide";

const Posts = () => {
  const dispatch = useDispatch();
  const { loading, error, posts } = useSelector(selectAllPosts);
  const [updateId, setUpdateId] = useState();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const onDeletePost = (id) => {
    dispatch(deletePost(id));
  };

  const onUpdatePost = (id) => {
    setUpdateId(id);
  };

  const renderPosts = () => {
    if (loading) return <strong>Loading please wait...</strong>;

    if (error) return <strong>Items not available at this time</strong>;

    return posts.map((post) => (
      <PostItem
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
        userId={post.userId}
        onDeletePost={onDeletePost}
        onUpdatePost={onUpdatePost}
      />
    ));
  };

  return (
    <section className="flex">
      <main className="w-2/3 mx-auto px-4 border-r border-black">
        <div className="mt-8 w-2/3 mx-auto">{renderPosts()}</div>
      </main>
      <div className="w-1/3 h-screen px-4">
        <AddPostForm updateId={updateId} />
      </div>
    </section>
  );
};
export default Posts;
