import { Link } from "react-router-dom";

const navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark-subtle">
      <div className="container">
        <Link to='/' className="navbar-brand">
          {props.brand}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
            <Link to='/add' className="nav-link">Add Blog</Link>
            <Link to='/profile' className="nav-link">Profile</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navbar;