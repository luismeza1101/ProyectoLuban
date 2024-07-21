import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ModalPago from "../components/ModalPago";
import "../StyleSheets/CarShoping.css";
import { ProductContext } from "../context/Contexto";
import CarProducts from "../components/CarProducts";



// Pagina del carrito de compras
const CarShoping = () => {

  const productContext = useContext(ProductContext);

  if (!productContext) {
    return null; // O cualquier manejo de error adecuado
  }

  const { productCar } = productContext;
  console.log(productCar)

  
  return (
    <>
      <Header />
      <div className="carShop">
        <h3 className="carShop__titulo">Carrito de compras</h3>
        {/* Lista de todos los productos que se añadio */}
        <ul className="listP">
          {productCar.map(pro => (
            <CarProducts key={pro.id} name={pro.name} price={pro.price} />
          ))}
        </ul>
        {/* Formulario para el resumen de todo lo agregado */}
        <ModalPago/>
      </div>
      <Footer />
    </>
  );
};

export default CarShoping;
