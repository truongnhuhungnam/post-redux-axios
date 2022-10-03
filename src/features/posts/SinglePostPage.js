import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlide";

import { FaTrash, FaEdit } from "react-icons/fa";
import PostAuthor from "./PostAuthor";

import { useParams } from "react-router-dom";

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, postId));
  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  } else {
    return (
      <article className="border-b border-black p-2">
        <h3 className="text-[22px] font-bold">{post.title}</h3>
        <p>{post.body.substring(0, 100)}</p>
        <PostAuthor userId={post.userId} />
        <div className="flex gap-4 justify-end mt-4">
          <FaTrash
            // onClick={() => onDeletePost(post.id)}
            className="cursor-pointer hover:opacity-80"
          />
          <FaEdit
            // onClick={() => onUpdatePost(post.id)}
            className="cursor-pointer hover:opacity-80"
          />
        </div>
      </article>
    );
  }
};
export default SinglePostPage;
