const PostItem = ({ id, title, body, userId }) => {
  return (
    <article className="border-b border-black p-2">
      <h3 className="text-[22px] font-bold">{title}</h3>
      <p>{body.substring(0, 100)}</p>
    </article>
  );
};
export default PostItem;
