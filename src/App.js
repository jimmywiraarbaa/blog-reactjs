import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddBlog from "./pages/blog/AddBlog";
import DetailBlog from "./pages/blog/DetailBlog";

//Route
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const title = "Jim Kun";
  return (
    <BrowserRouter>
      <div>
        <Navbar brand={title} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<AddBlog />}></Route>
          <Route path="/blog/:id" element={<DetailBlog />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;