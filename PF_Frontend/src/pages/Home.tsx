import BestProducts from "../components/BestProducts"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import Header from '../components/Header'
import '../StyleSheets/Home.css'

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
            <h3>Tu hogar, tu estilo, tu mueble ideal.</h3>
          </div>
        </section>
        {/* Sección de los productos mas vendidos */}
        <BestProducts/>
        {/* Footer */}
        <Footer/>
    </>
  )
}

export default Home
