import { Link } from 'react-router-dom';
import '../StyleSheets/CardBestProduct.css'
interface CardBestProductProps {
  title: string;
  image: string;
  id: string
  descuento: number
}
const CardBestProduct: React.FC<CardBestProductProps> = ({image,title, id, descuento}) =>{
  return (
    //Carta del producto mas vendido
    <Link className='cardBestP' to={`/product/${id}`}>
      {/* Imagen del producto */}
      <img src= {image} alt="..."  className='cardBestP__img'/>
      {/* Nombre del producto */}
      <p className='cardBestP__text'> {title} </p>
      {/* Descuento */}
      <div className='cardBestP_descuento'>{descuento}%</div>
    </Link>
  )
}

export default CardBestProduct
