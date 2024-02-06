import useFetch from "../hooks/useFetch";
import ItemBlog from "../components/blog/ItemBlog";

const Home = () => {
    const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  const handleDelete = () => {
    console.log("handleDelete");
  };

    return ( 
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
     );    
};

export default Home;