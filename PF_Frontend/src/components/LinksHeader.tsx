import { Link } from "react-router-dom";
import { ProductContext } from "../context/Contexto";
import { useContext } from "react";


const LinksHeader: React.FC = () => {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    return null;
  }

  const { user } = productContext;

  return (
    <div className={`enlaces enlaces-desktop`} id="navbarSupportedContent">
    <ul className="lista">
      <li className="lista__item">
        {/* Link que manda a la pagina de sobre nosotros */}
        <Link className="lista__link" to="/aboutUs">
          Sobre Nosotros
        </Link>
      </li>
      <li className="lista__item">
        {/* Link que manda a la pagina de categorias */}
        <Link className="lista__link" to="/categories">
          Categorias
        </Link>
      </li>
      <li className="lista__item">
        {/* Link que manda a la pagina de ayuda */}
        <Link className="lista__link" to="/help">
          Ayuda
        </Link>
      </li>
      <li className="lista__item item__carrito">
        <Link className="lista__link" aria-disabled="true" to="/carShop">
          {/* Icono que manda a la pagina del carrito de compras */}
          <i className="bi bi-cart3"></i>
        </Link>
      </li>
      <li className="lista__item lista__item--account">
        {/* Imagen que despliega las opciones de cuenta */}
        <Link to={'/login'} className="lista__link">
        {user}
        </Link>
      </li>
    </ul>
  </div>
  )
}

export default LinksHeader
