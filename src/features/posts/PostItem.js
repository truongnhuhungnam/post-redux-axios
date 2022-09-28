import { FaTrash, FaEdit } from "react-icons/fa";
import PostAuthor from "./PostAuthor";

const PostItem = ({ id, title, body, userId, onDeletePost, onUpdatePost }) => {
  return (
    <article className="border-b border-black p-2">
      <h3 className="text-[22px] font-bold">{title}</h3>
      <p>{body.substring(0, 100)}</p>
      <PostAuthor userId={userId} />
      <div className="flex gap-4 justify-end mt-4">
        <FaTrash
          onClick={() => onDeletePost(id)}
          className="cursor-pointer hover:opacity-80"
        />
        <FaEdit
          onClick={() => onUpdatePost(id)}
          className="cursor-pointer hover:opacity-80"
        />
      </div>
    </article>
  );
};
export default PostItem;
