import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPosts } from "./postsSlide";

const AddPostForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

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
        <>
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
            <button onClick={onAddPostClick} className="btn-primary w-1/3 mt-4">
                Add Post
            </button>
        </>
    );
};
export default AddPostForm;
