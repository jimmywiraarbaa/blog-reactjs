import { useState } from "react";
function App() {
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
  ]);
  
  return (
    <div className="container mt-3">
      <h1 className="text-primary">Hello World</h1>
        {blogs.map((blog, index) => (
          <div className="card mt-3 p-3">
            <h3>{blog.title}</h3>
            <p className="text-muted fst-italic fs-6">Posted by{blog.author}</p>
            <p className="text-muted">{blog.body}</p>
          </div>
        ))}
      </div>
  );
}

export default App;
