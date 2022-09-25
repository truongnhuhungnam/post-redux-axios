import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostItem from "./PostItem";
import { fetchPosts, postsSelector } from "../posts/postsSlide";

const Posts = () => {
    const dispatch = useDispatch();
    const { loading, error, posts } = useSelector(postsSelector);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const renderItems = () => {
        if (loading) return <strong>Loading please wait...</strong>;

        if (error) return <strong>Items not available at this time</strong>;

        return posts.map((post) => (
            <PostItem
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                userId={post.userId}
            />
        ));
    };

    return (
        <div className="flex">
            <div className="w-2/3 mx-auto px-4">
                <h1 className="text-center text-[32px] font-bold">
                    Post crud with axios
                </h1>
                <div className="mt-8 w-2/3 mx-auto">{renderItems()}</div>
            </div>
            <div className="w-1/3 h-screen border-l border-black px-4">
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
