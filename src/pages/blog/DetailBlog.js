import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const DetailBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const {
        data: blog,
        loading,
        error,
    } = useFetch("http://localhost:8000/blogs/" + id);

    const handleDelete = async (blog_id) => {
        try {
            const res = await axios.delete("http://localhost:8000/blogs/" + blog_id);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container mt-5">
            <h1 className="text-primary">Detail Blog</h1>
            {error && (
                <h1 className="text-danger">Error when get data</h1>
            )}
            {loading && (
                <h1 className="text-muted">Loading...</h1>
            )}
            {blog && (
                <div>
                    <h1 className="mt-3 mb-3">{blog.title}</h1>
                    <p className="mt-3 mb-3">{blog.body}</p>
                    <p className="mt-3 mb-3 fst-italic text-muted">posted by {blog.author}</p>
                </div>
            )}
            <button className="btn btn-danger" onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
    );
}

export default DetailBlog;