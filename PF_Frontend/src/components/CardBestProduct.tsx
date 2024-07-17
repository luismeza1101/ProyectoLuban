import { Link } from 'react-router-dom';
import '../StyleSheets/CardBestProduct.css'
import { addCar } from '../fuctions';
import { useContext } from 'react';
import { ProductContext } from '../context/Contexto';
import { CarProduct } from '../types';

interface CardBestProductProps {
  nombre: string;
  image: string;
  id: string
  descuento: number
  precio: number
}
const CardBestProduct: React.FC<CardBestProductProps> = ({image,nombre, id, descuento, precio}) =>{

  const productContext = useContext(ProductContext);

  if (!productContext) {
    return null;
  }

  const { productCar, setProductCar, setPagoTotal, pagoTotal } = productContext;

  const descuentoTotal = precio * descuento / 100
  const precioFinal = precio - descuentoTotal

  const handleAddCar  = () => {
    const product: CarProduct = { id, name: nombre, price: precioFinal}
    addCar({ product, productCar, setProductCar, setPagoTotal, pagoTotal });  
  }

  return (
    //Carta del producto mas vendido
    <div className='ofertaContainer'>
      <Link className='ofertaCard' to={`/oferta/${id}`}>
        {/* Imagen del producto */}
        <img src= {`../../public/${image}`} alt={`Imagen de ${nombre}`}  className='ofertaCard__img'/>
        {/* Nombre del producto */}
        <p className='ofertaCard__text'> {nombre} </p>
        <div className='ofertaCard__comparativa comparativa'>
          <p className='comparativa__antes'>Antes: {precio}</p>
          <p className='comparativa__despues'>Ahora: {precioFinal.toFixed(2)}</p>
        </div>
        {/* Descuento */}
        <p className='ofertaCard_descuento'>-{descuento}%</p>
      </Link>
        <button className="btn btn-dark ofertaCard__btn" onClick={handleAddCar}>
            <i className="bi bi-cart2"></i>
        </button>
    </div>
  )
}

export default CardBestProduct
