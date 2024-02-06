import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ItemBlog from "./blog/ItemBlog";

import axios from "axios";
import useFetch from "./hooks/useFetch";

function App() {
  const title = "Jim Kun";
  const handleDelete = (id)=>{
    console.log("Handle Delete");
  };

  const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs");
  
  
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
