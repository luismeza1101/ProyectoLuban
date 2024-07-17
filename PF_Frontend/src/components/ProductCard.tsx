import { useContext } from "react";
import "../StyleSheets/ProductCard.css";
import { ProductContext } from "../context/Contexto";
import { addCar, getImage } from "../fuctions";
import { Link } from 'react-router-dom';
import { CarProduct } from "../types";

interface Props {
  name: string;
  price: number;
  image: string;
  categoria: number;
  id: string
}

const ProductCard: React.FC<Props> = ({ name, price, image, categoria, id}) => {

  const productContext = useContext(ProductContext);

  if (!productContext) {
    return null;
  }

  const { productCar, setProductCar, setPagoTotal, pagoTotal } = productContext;

  const imageURL = getImage(image, categoria);

  const handleAddCar  = () => {
    const product: CarProduct = { id, name, price}
    addCar({ product, productCar, setProductCar, setPagoTotal, pagoTotal });  
  }

  return (
    // Carta que contiene cada producto en individual
    <div className="card productCard">
      <Link className='card__link' to={`/product/${id}`}>
        {/* Imagen del producto */}
        <img
          src={imageURL}
          className="card-img-top productCard__img"
          alt="Imagen del producto"
        />
        <div className="card-body">
          {/* Nombre del producto */}
          <h5 className="card-title">{name}</h5>
          {/* Precio */}
          <p className="card-text price">{`S/${price}`}</p>
        </div>
      </Link>
          {/* Boton de añadir al carrito */}
          <button className="btn btn-dark productCard__btn" onClick={handleAddCar}>
          <i className="bi bi-cart2"></i>
          </button>
    </div>
  );
};

export default ProductCard;
