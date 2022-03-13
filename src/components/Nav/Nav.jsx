import { Link } from "react-router-dom";
import "./Nav.scss";
const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/nosotros" className="item">
            Nosotros
          </Link>
        </li>
        <li>
          <Link to="/" className="item">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/clases" className="item">
            Clases
          </Link>
        </li>
        <li>
          <Link to="/galeria" className="item">
            Galería
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
