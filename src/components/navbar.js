import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const logout =() =>{
    localStorage.removeItem("token");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        BLOGPOST
      </Link>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">
            Authors
          </Link>
          <Link className="nav-item nav-link" to="/post">
            Most Liked Post
          </Link>
          <Link className="nav-item nav-link" to="/post">
            Least Liked Post
          </Link>
        </div>
      </div>
      <div className="text-right text-light col-1">
        <Link onClick={()=>(logout())} className="nav-item nav-link" to="/" >
          LOGOUT
        </Link>
      </div>
    </nav>
  );
}
