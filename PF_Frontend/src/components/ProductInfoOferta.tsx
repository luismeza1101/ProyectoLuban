import { useContext, useState } from 'react'
import '../StyleSheets/ProductInfo.css'
import { ProductContext } from '../context/Contexto';
import { addCar, decreaseCant, increaseCant } from '../fuctions';

interface Props {
    nombre: string;
    precio: number;
    stock: number;
    image: string;
    descuento: number
  }

const ProductInfo: React.FC<Props>= ({nombre, precio, image, stock, descuento}) => {

    const [cantidad, setCantidad] = useState(1)
    const productContext = useContext(ProductContext);

  if (!productContext) {
    return null;
  }

  const { productCar, setProductCar, setPagoTotal, pagoTotal } = productContext;
    

  return (

    <section className="container data">
        <div className="data__imagen">
            <img src={`../../public/${image}`} alt={`Imagen de ${nombre}`} />
        </div>
        <div className="info">
            <div className="general">
                <h5 className="general__nombre fs-2">{nombre}</h5>
            </div>
            <div className="precios">
                <table className="precios__tabla">
                    <tbody>
                        <tr>
                            <td>Normal</td>
                            <td>{`$${precio}`}</td>
                        </tr>
                        <tr>
                            <td>Descuento</td>
                            <td>{`${descuento}%`}</td>
                        </tr>
                        <tr>
                            <td>Stock</td>
                            <td>{`${stock}`}</td>
                        </tr>
                        <tr>
                            <th>Precio Final</th>
                            <th>{`$${(precio - (descuento * precio / 100)).toFixed(2)}`}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="cantidad">
          <button
            type="button"
            className="btn cantidad__modificar"
            onClick={() => decreaseCant(cantidad, setCantidad)}
          >
            -
          </button>
          {cantidad}
          <button
            type="button"
            className="btn cantidad__modificar"
            onClick={() => increaseCant(cantidad, setCantidad)}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-dark cantidad__agregar"
            onClick={() =>
              addCar(
                Number(precio),
                productCar,
                setProductCar,
                setPagoTotal,
                pagoTotal,
                nombre
              )
            }
          >
            Agregar al carrito
          </button>
        </div>
        </div>
    </section>
  )
}

export default ProductInfo
