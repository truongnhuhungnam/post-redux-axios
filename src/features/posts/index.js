import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "./postsSlide";

const Posts = () => {
    const posts = useSelector(getAllPosts);
    console.log(posts);

    return <div>Posts List</div>;
};
export default Posts;
