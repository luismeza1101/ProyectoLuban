import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductInfo from "../components/ProductInfo";
import { useEffect, useState } from "react";
import { getProductById } from "../../../PF_Backend/api";
import { Mueble } from "../types";

const DataProductos = () => {
  const { id } = useParams<{ id: string }>();
  const [mueble, setMueble] = useState<Mueble | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id!);
        setMueble(data);
      } catch (error) {
        setError("Error");
      }
    };
    fetchProduct();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!mueble) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Header />
      <ProductInfo
        nombre={mueble.nombre}
        precio={mueble.precio}
        stock={mueble.stock}
        image={mueble.imagen_url}
        categoria={mueble.categoria_id}
        id={id!}
      />
      <section className="container infoAd">
        <p>{mueble.descripcion}</p>
      </section>
      <Footer />
    </>
  );
};

export default DataProductos;
