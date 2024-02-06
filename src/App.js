import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ItemBlog from "./blog/ItemBlog";

import axios from "axios";

function App() {
  const title = "Jim Kun";
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
          setLoading(false);
          setError(false);
        } catch (error) {
          console.log(error);
          setError(true);
          setLoading(false);
        }
    };
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);
  
  
  return (
    <div>
      <Navbar brand={title}/>
      <div className="container mt-3">
      <h1 className="text-primary">Hello World</h1>
      {error &&(
        <h1 className="text-danger">Error when get data</h1>
      )}
      {loading &&(
        <h1 className="text-muted">Loading...</h1>
      )}
      {blogs && (
        <ItemBlog blogs={blogs} handleDelete={handleDelete}/>
      )}
      </div>
    </div>
  );
}

export default App;
