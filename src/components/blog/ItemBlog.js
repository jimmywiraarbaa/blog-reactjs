import { useState } from "react";

const ItemBlog = ({blogs, handleDelete}) => {
    
    return ( 
        <>
        {blogs.map((blog, index) => (
          <div key={blog.id} className="card mt-3 p-3">
            <h3>{blog.title}</h3>
            <p className="text-muted fst-italic fs-6">Posted by {blog.author}</p>
            <p className="text-muted">{blog.body}</p>
            <button className="btn btn-danger col-2" onClick={() =>handleDelete(blog.id)}>Delete Blog</button>
          </div>
        ))}
        </>
     );
}
 
export default ItemBlog;