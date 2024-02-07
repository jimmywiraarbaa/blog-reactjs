import { useState } from "react";
import { Link } from "react-router-dom";

const ItemBlog = ({ blogs }) => {

  return (
    <>
      {blogs.map((blog, index) => (
        <Link to={'/blog/' + blog.id} key={blog.id} className="card card-blog mt-3 p-3 text-decoration-none">
          <h3>{blog.title}</h3>
          <p className="text-muted fst-italic fs-6">Posted by {blog.author}</p>
          <p className="text-muted">{blog.body.slice(0, 40)}</p>
        </Link>
      ))}
    </>
  );
}

export default ItemBlog;