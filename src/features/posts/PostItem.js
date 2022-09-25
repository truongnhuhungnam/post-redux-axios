const PostItem = ({ id, title, body, userId }) => {
    return (
        <div className="border-b border-black">
            <h2 className="text-[22px] font-bold">{title}</h2>
            <p>{body.substring(0, 120) + "..."}</p>
        </div>
    );
};
export default PostItem;
