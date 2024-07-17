import { useContext } from "react";
import "../StyleSheets/ProductInfo.css";
import { addCar } from "../fuctions";
import { getImage } from "../fuctions";
import { ProductContext } from "../context/Contexto";
import { CarProduct } from "../types";

interface Props {
  nombre: string;
  precio: string;
  stock: number;
  image: string;
  categoria: number;
  id: string
}

const ProductInfo: React.FC<Props> = ({
  nombre,
  precio,
  image,
  stock,
  categoria,
  id
}) => {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    return null;
  }

  const { productCar, setProductCar, setPagoTotal, pagoTotal } = productContext;

  const handleAddCar  = () => {
    const product: CarProduct = { id, name: nombre, price: Number(precio)}
    addCar({ product, productCar, setProductCar, setPagoTotal, pagoTotal });  
  }

  const catImg = getImage(image, categoria);

  return (
    <section className="container data">
      <div className="data__imagen">
        <img src={`../../public/${catImg}`} alt={`Imagen de ${nombre}`} />
      </div>
      <div className="info">
        <div className="general">
          <h5 className="general__nombre fs-2">{nombre}</h5>
        </div>
        <div className="precios">
          <table className="precios__tabla">
            <tbody>
              <tr>
                <td>Precio</td>
                <td>{`$${precio}`}</td>
              </tr>
              <tr>
                <td>Stock</td>
                <td>{`${stock}`}</td>
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
