import logowebp from "./../../assets/img/logo.webp";
import logo from "./../../assets/img/logo.png";
import "./Header.scss";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="wrapper header">
      <Link to="/">
        <picture>
          <source srcSet={logowebp} type="image/webp" />
          <img
            className="logo"
            loading="lazy"
            src={logo}
            alt="logo"
            width="400px"
            height="200px"
          />
        </picture>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
