import { useParams } from "react-router-dom";

const DetailBlog = () => {
    const { id } = useParams();
    return (
        <div className="container mt-5">
            <h1 className="text-primary">Detail Blog ke-{id}</h1>
        </div>
    );
}

export default DetailBlog;