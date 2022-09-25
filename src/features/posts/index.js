import { useSelector } from "react-redux";
import PostItem from "./PostItem";
import { getAllPosts } from "./postsSlide";

const Posts = () => {
    const posts = useSelector(getAllPosts);

    return (
        <div className="flex">
            <div className="w-2/3 mx-auto px-4">
                {posts.map((post) => (
                    <PostItem
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                        userId={post.userId}
                    />
                ))}
            </div>
            <div className="w-1/3 h-screen px-4">
                <label className="block">
                    <span className="text-gray-700">Full name</span>
                    <input type="text" className="input-primary" />
                </label>
                <label className="block">
                    <span className="text-gray-700">Additional details</span>
                    <textarea className="input-primary" rows="2"></textarea>
                </label>
                <button className="btn-primary w-1/3 mt-4">Add Post</button>
            </div>
        </div>
    );
};
export default Posts;
