import { useEffect, useState } from 'react';
import '../StyleSheets/BestProducts.css'
import CardBestProduct from './CardBestProduct';
import { getProductsOferta } from '../../../PF_Backend/api';
import { ProOferta } from '../types';

const BestProducts = () => {

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [proOferta, setProOferta] = useState<ProOferta[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductsOferta();
        setProOferta(products);
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
    //Contenedor de los productos mas vendidos de la tienda
    <div className='section'>
    <h2>Las mejores ofertas</h2>
        <section className='bestProducts'>
          {/* Cartas de los productos mas vendidos */}
            {proOferta.map(product => (
              <CardBestProduct key={product.id} title={product.nombre} image={product.imagen_url} id={product.id} descuento={product.descuento}/>
            ))}
        </section>
    </div>
  );
};

export default BestProducts;
