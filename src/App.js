import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ItemBlog from "./blog/ItemBlog";

import axios from "axios";

function App() {
  const title = "Jim Kun";
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id)=>{
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  };

  useEffect(() => {
     const fetchData = async () =>{
        try {
          const response = await axios.get("http://localhost:8000/blogs");
          console.log(response.data);
          setBlogs(response.data);
        } catch (error) {
          console.log(error);
        }
     };

     fetchData();
  }, []);
  
  
  return (
    <div>
      <Navbar brand={title}/>
      <div className="container mt-3">
      <h1 className="text-primary">Hello World</h1>
        {blogs && (
          <ItemBlog blogs={blogs} handleDelete={handleDelete}/>
        )}
      </div>
    </div>
  );
}

export default App;
