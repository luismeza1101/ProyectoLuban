import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import Search from "./Algolia";
import User from "./User";
import RegisterUser from "./RegisterUser";
import { ProductContext } from "../context/Contexto";
import "../StyleSheets/Header.css";
import ItemBarSearch from "./SearchBar";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const productContext = useContext(ProductContext);

  if (!productContext) {
    return null;
  }

  const { isLogged} = productContext;



  return (
    <nav className="nav">
      <div className="containerNav">
        <Link className="nav__item nav__item--logo" to="/">
          <img src="/logo.png" alt="LOGO" />
        </Link>
        <ItemBarSearch/>
          <input type="text" />
        <ul className={`links ${showLinks ? "show" : ""}`}>
          <li className="links__option">
            <Link className="links__link" to="/aboutUs">
              Sobre Nosotros
            </Link>
          </li>
          <li className="links__option">
            <Link className="links__link" to="/categories">
              Categorias
            </Link>
          </li>
          <li className="links__option">
            <Link className="links__link" to="/help">
              Ayuda
            </Link>
          </li>
          <li className="links__option links__option--car">
            <Link className="links__link" aria-disabled="true" to="/carShop">
              <i className="bi bi-cart3"></i>
            </Link>
          </li>
          {isLogged ? <User /> : <RegisterUser />}
          {showLinks ? <i
            className="bi bi-x-lg btn--close"
            onClick={() => setShowLinks(false)}
          ></i> : null}
          
        </ul>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setShowLinks(!showLinks)}
        >
          <i className="bi bi-list"></i>
        </button>
      </div>
    </nav>
  );
};

export default Header;
