import { useState } from "react";
import Navbar from "./components/Navbar";
import ItemBlog from "./blog/ItemBlog";

function App() {
  
  
  return (
    <div>
      <Navbar/>
      <div className="container mt-3">
      <h1 className="text-primary">Hello World</h1>
        <ItemBlog/>
      </div>
    </div>
  );
}

export default App;
