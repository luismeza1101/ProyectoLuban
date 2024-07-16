import Footer from "../components/Footer";
import Header from "../components/Header";
import "../StyleSheets/AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="furniture-company-section">
        <div className="overlay"></div>
        <div className="content">
          <h2>LUBAN</h2>
          <p>Calidad Confort Elegancia</p>
        </div>
      </section>
      <section className="historia">
        <div className="containerHisto">
          <img src="../../public/Histori.jpeg" alt="Imagen" />
          <div>
            <h3 className="historia__titulo">HISTORIA</h3>
            <p className="historia__info">
              Luban nació de la idea compartida entre cuatro amigos durante una
              reunión, decididos a competir en el mercado de venta de muebles
              con una misión clara: ofrecer muebles de alta calidad a precios
              accesibles, fabricados de manera sostenible. Su enfoque se centra
              en proporcionar soluciones integrales que no solo satisfagan las
              necesidades de los clientes, sino que también promuevan prácticas
              responsables hacia el medio ambiente, estableciéndose así como un
              referente en la industria por su compromiso con la calidad y la
              sostenibilidad.
            </p>
          </div>
        </div>
      </section>
      <section className="container objetivos">
        <div className="vision">
          <h4>Nuestra vision</h4>
          <i className="bi bi-building-fill-up icon"></i>
          <p>
            Ser líderes en el mercado de muebles de alta calidad, ofreciendo
            diseños innovadores y duraderos que transformen los hogares de
            nuestros clientes.
          </p>
        </div>
        <div className="mision">
          <h4>Nuestra mision</h4>
          <i className="bi bi-bar-chart-fill icon"></i>
          <p>
            Ofrecer muebles de diseño y alta calidad a precios asequibles,
            mejorando los hogares de nuestros clientes y brindando una
            experiencia de compra excepcional.
          </p>
        </div>
      </section>
      <section className="eco">
        <div className="eco__image">
          <img src="../../public/Ecologico.jpeg" alt="Imagen ecologica" />
        </div>
        <div className="eco__info">
          <h4>
            En Luban, creamos muebles sostenibles con materiales ecológicos y
            procesos amigables con el medio ambiente.
          </h4>
          <div className="actions">
            <p>
              <i className="bi bi-tree-fill"></i>Materiales Sostenibles
            </p>
            <p>
              <i className="bi bi-recycle"></i>Reciclaje y Reutilización
            </p>
            <p>
              <i className="bi bi-recycle"></i>Procesos Ecológicos
            </p>
            <p>
              <i className="bi bi-patch-check-fill"></i>Certificaciones verdes
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
