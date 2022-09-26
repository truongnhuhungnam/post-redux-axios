import { FaTrash, FaEdit } from "react-icons/fa";

const PostItem = ({ id, title, body, userId, onDeletePost }) => {
  return (
    <article className="border-b border-black p-2">
      <h3 className="text-[22px] font-bold">{title}</h3>
      <p>{body.substring(0, 100)}</p>
      <div className="flex gap-4 justify-end mt-4">
        <FaTrash onClick={() => onDeletePost(id)} />
        <FaEdit />
      </div>
    </article>
  );
};
export default PostItem;
