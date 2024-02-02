import { useState } from "react";
import Navbar from "./components/Navbar";
import ItemBlog from "./blog/ItemBlog";

function App() {
  const title = "Jim Kun";
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title:"blog Pertama",
      body:'Halo ini blog pertma aku',
      author:"Jimmy Wira Arbaa",
    },
    {
      id: 2,
      title:"blog Kedua",
      body:'Halo ini blog pertma aku',
      author:"Jimmy Wira Arbaa",
    },
    {
      id: 3,
      title:"blog Ketiga",
      body:'Halo ini blog pertma aku',
      author:"Jimmy Wira Arbaa",
    },
    // {
    //   id: 4,
    //   title:"blog Keempat",
    //   body:'Halo ini blog pertama aku',
    //   author:"Jimmy Wira Arbaa",
    // },
  ]);
  
  return (
    <div>
      <Navbar brand={title}/>
      <div className="container mt-3">
      <h1 className="text-primary">Hello World</h1>
        <ItemBlog blogs={blogs}/>
      </div>
    </div>
  );
}

export default App;
