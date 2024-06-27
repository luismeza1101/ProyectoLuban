import ProductCard from "./ProductCard";
import "../StyleSheets/Products.css";
import { getProducts } from "../../../PF_Backend/api";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/Contexto";



const Products: React.FC = () => {

  const productContext = useContext(ProductContext);
  
  
  if (!productContext) {
    return null;
  }
  
  const { setProducts, filterPro, setFilterPro} = productContext;

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
        setFilterPro(products)
      } catch (error) {
        setError("Error al obtener los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;


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
        />
      ))}
    </section>
  );
};

export default Products;
