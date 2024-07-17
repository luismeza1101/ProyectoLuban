import ProductCard from "./ProductCard";
import "../StyleSheets/Products.css";
import { useContext } from "react";
import { ProductContext } from "../context/Contexto";



const Products: React.FC = () => {

  const productContext = useContext(ProductContext);
  
  
  if (!productContext) {
    return null;
  }
  
  const { filterPro, products} = productContext;


  if (products.length == 0) return <p>Hubo un error en la obtencion de los productos</p>;


  return (
    // Lista de todos los productos que hay en venta
    <section className="listaP">
      {filterPro.map((product) => (
        <ProductCard
          name={product.nombre}
          price={product.precio}
          image={product.imagen_url}
          categoria={product.categoria_id}
          key={product.id}
          id={product.id}
        />
      ))}
    </section>
  );
};

export default Products;
