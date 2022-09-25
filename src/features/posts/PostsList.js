import PostItem from "./PostItem";
import AddPostForm from "./AddPostForm";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, selectAllPosts } from "./postsSlide";

const Posts = () => {
    const dispatch = useDispatch();
    const { loading, error, posts } = useSelector(selectAllPosts);

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

    return (
        <section className="flex">
            <main className="w-2/3 mx-auto px-4">
                <h2 className="text-center text-[32px] font-bold">
                    Post crud with axios
                </h2>
                <div className="mt-8 w-2/3 mx-auto">{renderPosts()}</div>
            </main>
            <div className="w-1/3 h-screen border-l border-black px-4">
                <AddPostForm />
            </div>
        </section>
    );
};
export default Posts;
