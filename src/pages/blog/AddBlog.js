import { useState } from "react";

const AddBlog = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("jimmy");

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        console.log(blog);
    }

    return (
        <div className="container mt-5">
            <h1 className="text-primary">Add Blog</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                        required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Body</label>
                    <textarea
                        className="form-control"
                        id="body"
                        rows="3"
                        onChange={(e) => setBody(e.target.value)}
                        required></textarea>
                </div>
                <div className="mt-3">
                    <label htmlFor="Author" className="form-label">Author</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        required
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option defaultValue="jimmy">Jimmy Wira Arba'a</option>
                        <option defaultValue="saifullahuddin">Saifullahuddin</option>
                        <option defaultValue="ammarudin">Amaruddin bin kasim</option>
                    </select>
                </div>
                <button className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    );
}

export default AddBlog;