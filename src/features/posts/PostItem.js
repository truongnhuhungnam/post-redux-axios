const PostItem = ({ id, title, body, userId }) => {
    return (
        <div className="border-b border-black p-2">
            <h2 className="text-[22px] font-bold">
                {title}
            </h2>
            <p>{body}</p>
        </div>
    );
};
export default PostItem;
