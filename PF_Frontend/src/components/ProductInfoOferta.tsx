import { useContext } from "react";
import "../StyleSheets/ProductInfo.css";
import { ProductContext } from "../context/Contexto";
import { addCar } from "../fuctions";
import { CarProduct } from "../types";

interface Props {
  nombre: string;
  precio: number;
  stock: number;
  image: string;
  descuento: number;
  id: string
}

const ProductInfo: React.FC<Props> = ({nombre, precio, image, stock, descuento, id}) => {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    return null;
  }

  const { productCar, setProductCar, setPagoTotal, pagoTotal } = productContext;
  const handleAddCar  = () => {
    const product: CarProduct = { id, name: nombre, price: precio}
    addCar({ product, productCar, setProductCar, setPagoTotal, pagoTotal });  
  }


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
                <td>{`S/${precio}`}</td>
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
                <th>{`S/${(precio - (descuento * precio) / 100).toFixed(2)}`}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="cantidad">
          <button
            type="button"
            className="btn btn-dark cantidad__agregar"
            onClick={handleAddCar}
    
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
