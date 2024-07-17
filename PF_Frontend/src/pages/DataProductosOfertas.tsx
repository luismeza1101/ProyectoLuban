import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ProductInfoOferta from "../components/ProductInfoOferta"
import { useEffect, useState } from "react"
import { getProductByIdOferta } from "../../../PF_Backend/api"
import { MuebleOferta } from "../types"


const DataProductos = () => {

  const { id } = useParams<{ id: string }>();
  const [mueble, setMueble] = useState<MuebleOferta | null>(null);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductByIdOferta(id!);
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
        <Header/>
        <ProductInfoOferta
        nombre={mueble.nombre}
        precio={Number(mueble.precio)}
        stock={mueble.stock}
        image={mueble.imagen_url}
        descuento={mueble.descuento}
        id={id!}
        />
        <section className="container infoAd">
        <p>{mueble.descripcion}</p>
      </section>
        <Footer/>
    </>
  )
}

export default DataProductos
