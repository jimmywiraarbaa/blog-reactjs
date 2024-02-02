import { useState } from "react";

const ItemBlog = ({blogs}) => {
    
    return ( 
        <>
        {blogs.map((blog, index) => (
          <div className="card mt-3 p-3">
            <h3>{blog.title}</h3>
            <p className="text-muted fst-italic fs-6">Posted by {blog.author}</p>
            <p className="text-muted">{blog.body}</p>
          </div>
        ))}
        </>
     );
}
 
export default ItemBlog;