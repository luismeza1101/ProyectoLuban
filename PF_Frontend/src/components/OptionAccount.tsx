import { useContext } from "react";
import "../StyleSheets/OptionAccount.css";
import { ProductContext } from "../context/Contexto";

const OptionAccount = () => {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    return null;
  }

  const { logout, userData, setIsModifyOpen} = productContext;

  return (
    // Modal de las opciones de la cuenta
    <>
      <section className="cuenta container">
        <h5 className="cuenta__titulo">{userData?.name}</h5>
          <ul className="dataUser">
            <li className="dataUser__item dataUser__item--email">{userData?.email}</li>
            <li className="dataUser__item">
              {`${userData?.adrees}, ${userData?.country}`}
            </li>
          </ul>
          <div className="opcionesUser">
            <span className="opcionesUser__action" onClick={() => setIsModifyOpen(true)}>
              <i className="bi bi-person-fill-gear"></i>Editar
            </span>
            <span className="opcionesUser__action" onClick={() => logout()}>
              <i className="bi bi-box-arrow-right"></i>Cerrar sesion
            </span>
          </div>
      </section>
    </>
  );
};

export default OptionAccount;
