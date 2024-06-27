import { useContext } from 'react'
import '../StyleSheets/ProductCard.css'
import { ProductContext } from '../context/Contexto'
import { getImage } from '../fuctions'
// import { Link } from 'react-router-dom';

interface Props {
  name: string
  price: number
  image: string
  categoria: number
}

const ProductCard: React.FC<Props> = ({name, price, image, categoria,}) => {

  const productContext = useContext(ProductContext);

  
  
  if (!productContext) {
    return null;
  }
  
  const { productCar, setProductCar, setPagoTotal, pagoTotal } = productContext;
  

  const imageURL = getImage(image, categoria);


  const addCar = () => {
    let newPrice = price.toString()
    setProductCar([...productCar, {name: name, price: price}])
    alert('Producto añadido al carrito')
    setPagoTotal(pagoTotal + parseFloat(newPrice))
  };
  
  


  return (
    // Carta que contiene cada producto en individual
    <div className="card productCard">
      {/* Imagen del producto */}
      <img src={imageURL} className="card-img-top productCard__img" alt="Imagen del producto" />
      <div className="card-body">
        {/* Nombre del producto */}
        <h5 className="card-title">{name}</h5>
        {/* Precio */}
        <p className="card-text price">{`$${price}`}</p>
        {/* Boton de añadir al carrito */}
        <button className="btn btn-dark" onClick={() => addCar()}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;



