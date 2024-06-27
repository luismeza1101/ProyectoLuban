import { Link } from "react-router-dom";
import "../StyleSheets/Footer.css";

const Footer = () => {
  return (
    // Footer de la pagina
    <footer className="footer">
      {/* Sección donde irá información acerca de la empresa */}
      <div className="footer__grid footer__grid--empresa">
        <h4 className="empresa__nombre">Luban</h4>
        <p className="empresa__info">
        Somos tu tienda online de muebles, donde encontrarás piezas que combinan estilo y funcionalidad para transformar tu espacio en un hogar acogedor y moderno. Descubre nuestra selección de muebles de calidad diseñados para todos los gustos y necesidades
        </p>
      </div>
      {/* Sección donde se muestran las redes sociales de la tienda */}
      <div className="footer__grid footer__grid--redes">
        <h4 className="redes__titulo">Nuestras redes </h4>
        <div className="redes__rrss">
          <a
            href="https://www.facebook.com/profile.php?id=61561375644454"
            target="blanck"
            className="redes__link"
          >
            <i className="bi bi-facebook redes__icon"></i>
          </a>
          <a
            href="https://www.instagram.com/luban_oficial20/"
            target="blanck"
            className="redes__link"
          >
            <i className="bi bi-instagram redes__icon"></i>
          </a>
        </div>
      </div>
      {/* Seccion donde estara links para la navegacion */}
      <div className="footer__grid footer__grid--links">
        <h4 className="links__titulo">Links</h4>
        <ul className="links__lista">
          <li className="links__item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="links__item">
            <Link to="/help">Contactanos</Link>
          </li>
          <li className="links__item">
            <Link to="/categories">Productos</Link>
          </li>
          <li className="links__item">
            <Link to="/aboutUs">Sobre Nosotros</Link>
          </li>
        </ul>
      </div>
      <hr className="footer__linea" />
      <span className="footer__descripcion">&copy; Luis Meza Corilla</span>
    </footer>
  );
};

export default Footer;
