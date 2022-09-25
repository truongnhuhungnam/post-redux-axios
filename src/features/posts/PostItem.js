const PostItem = ({ id, title, body, userId }) => {
    return (
        <div className="border-b border-black p-2">
            <h2 className="text-[22px] font-bold">
                {title.substring(0, 60) + "..."}
            </h2>
            <p>{body.substring(0, 120) + "..."}</p>
        </div>
    );
};
export default PostItem;
