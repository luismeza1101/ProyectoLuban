import { useParams } from "react-router-dom";
import { productsMasVendidos } from '../data';
import '../StyleSheets/InfoAdicionalProduct.css'

import { Producto } from '../types';


const InfoAdicionalProduct = () => {
  const { id } = useParams<{ id: string }>();

  const producto: Producto | undefined = productsMasVendidos.find(p => p.id === id);

  if (!producto) {
      return <h2>Producto no encontrado</h2>;
    }
  return (
    <section className="container infoAd">
      <p>{producto.descripcion}</p>
    </section>
  );
};

export default InfoAdicionalProduct;
