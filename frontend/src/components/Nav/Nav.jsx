import "./Nav.css"
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav-container">
      <h3>Thoughts</h3>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/contents">Contents</Link>
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