import { useContext, useState } from "react";
import "../StyleSheets/ProductInfo.css";
import { addCar, decreaseCant, increaseCant } from "../fuctions";
import { getImage } from "../fuctions";
import { ProductContext } from "../context/Contexto";

interface Props {
  nombre: string;
  precio: string;
  stock: number;
  image: string;
  categoria: number;
}

const ProductInfo: React.FC<Props> = ({
  nombre,
  precio,
  image,
  stock,
  categoria,
}) => {
  const [cantidad, setCantidad] = useState(1);
  const productContext = useContext(ProductContext);

  if (!productContext) {
    return null;
  }

  const { productCar, setProductCar, setPagoTotal, pagoTotal } = productContext;

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
  );
};

export default ProductInfo;
