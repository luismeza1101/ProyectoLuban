import { useContext, useState } from 'react'
import '../StyleSheets/ProductCar.css'
// import { decreaseCant, increaseCant } from '../fuctions'
import { ProductContext } from '../context/Contexto'

interface Props {
  name: string
  price: number
}

const ProductCar: React.FC<Props> = ({name, price}) => {

  const productContext = useContext(ProductContext);

  if (!productContext) {
    return null;
  }

  const { removeProductFromCar, setPagoTotal, pagoTotal } = productContext;

    // Hook para manejar la cantidad de productos que puede comprar una persona
    const [minCant, setMinCant] = useState(1)
    const newPrice = price.toString()

 const increaseCant = () => {
  if (minCant == 5) {
    alert("Solo puedes comprar un maximo de 5 productos");
  } else {
    setMinCant(minCant + 1);
    setPagoTotal(pagoTotal + parseFloat(newPrice))
  }
  
};

 const decreaseCant = () => {
  if (minCant == 1) {
    alert("Debes comprar como minimo un producto");
  } else {
    setMinCant(minCant - 1);
    setPagoTotal(pagoTotal - parseFloat(newPrice))
  }
}

console.log(typeof pagoTotal)

  return (
    <>
    {/* Sección donde estaran los productos añadidos al carrito */}
        <div className='itemProduct'>
          {/* Datos del producto */}
          <div className='info grid-container'>
            {/* Nombre del producto */}
            <p className='info__name m-0'>{name}</p>
            {/* Cantidad del producto */}
            <span className='info__precio'>{`S/${price}`}</span>
          </div>
          {/* Botones para calcular la cantidad y eliminar un producto */}
          <div className='actuDatos'>
            <button className="btn btn-secondary" onClick={() =>decreaseCant()}>-</button>
            <p className='actuDatos__cant m-auto'>{minCant}</p>
            <button className="btn btn-secondary" onClick={() =>increaseCant()}>+</button>
            <button type="button" className="btn btn-danger" onClick={() => removeProductFromCar(name, price , minCant)}><i className="bi bi-trash-fill"></i></button>
          </div>
        </div>
        <hr />
    </>
  )
}


export default ProductCar;



