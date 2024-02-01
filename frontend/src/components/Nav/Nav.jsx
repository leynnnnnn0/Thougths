import "./Nav.css"
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
const Nav = () => {
  return (
    <div className="nav-container">
      <h3>Logo</h3>
      <div className="links">
        <Link to="/home">Home</Link>
        <a href="#">Contents</a>
        <a href="#">About</a>
        <Link to="/products">Contacts</Link>
      </div>
      <div className="buttons">
        <button>Log in</button>
      </div>
    </div>
  );
}

export default Nav