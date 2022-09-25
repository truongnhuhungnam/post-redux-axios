import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostItem from "./PostItem";
import { getPosts, selectAllPosts, addPosts } from "../posts/postsSlide";

const Posts = () => {
    const dispatch = useDispatch();
    const { loading, error, posts } = useSelector(selectAllPosts);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

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
            />
        ));
    };

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const onBodyChange = (e) => {
        setBody(e.target.value);
    };

    const onAddPostClick = () => {
        if (title && body) {
            dispatch(addPosts(title, body));
            setTitle("");
            setBody("");
        } else {
            alert("Please fill the inputs...");
        }
    };

    return (
        <section className="flex">
            <main className="w-2/3 mx-auto px-4">
                <h2 className="text-center text-[32px] font-bold">
                    Post crud with axios
                </h2>
                <div className="mt-8 w-2/3 mx-auto">{renderPosts()}</div>
            </main>
            <div className="w-1/3 h-screen border-l border-black px-4">
                <label className="block">
                    <span className="text-gray-700">Title</span>
                    <input
                        type="text"
                        value={title}
                        className="input-primary"
                        onChange={onTitleChange}
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700">Content</span>
                    <textarea
                        value={body}
                        onChange={onBodyChange}
                        className="input-primary"
                        rows="2"
                    ></textarea>
                </label>
                <button
                    onClick={onAddPostClick}
                    className="btn-primary w-1/3 mt-4"
                >
                    Add Post
                </button>
            </div>
        </section>
    );
};
export default Posts;
