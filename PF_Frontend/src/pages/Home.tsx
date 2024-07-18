import { Link } from "react-router-dom"
import BestProducts from "../components/BestProducts"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import Header from '../components/Header'
import '../StyleSheets/Home.css'
import { reseñasClientes } from "../data"

const Home = () => {
  return (
    // Pagina principal
    <>
     {/*Header  */}
        <Header/>
        {/* Carrusel de productos en oferta */}
        <Carousel/>
        <section className="diseño">
          <div className="diseño__image"></div>
          <div className="diseñoText">
            <h3>Tu hogar, tu estilo, <br></br>tu mueble ideal.</h3>
            <button className="btn btn-dark"><Link to={'/categories'} className="btnProd"> Ver todos los productos</Link></button>
          </div>
        </section>
        {/* Sección de los productos mas vendidos */}
        <BestProducts/>
        <section className="clientes">
          <h2>Nuestros mejores clientes</h2>
          <div className="reseñasClientes">
            {reseñasClientes.map(reseña => (
              <div className="reseña" key={reseña.nombre}>
                <div className="reseña__user">
                  <img src={`../../public/clientes/${reseña.imagen}.jpg`} alt="Imagen de la persona" className="reseña__imagen"/>
                  <h5 className="reseña__nombre">{reseña.nombre}</h5>
                </div>
                <p className="reseña__descriptcion">{reseña.descripcion}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Footer */}
        <Footer/>
    </>
  )
}

export default Home
