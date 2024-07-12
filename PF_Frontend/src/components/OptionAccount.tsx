import { useContext } from 'react';
import '../StyleSheets/OptionAccount.css'
import { ProductContext } from '../context/Contexto';

const OptionAccount = () => {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    return null;
  }

  const {logout} = productContext;

  return (
    // Modal de las opciones de la cuenta
    <section className='cuenta container'>
      <h5 className='cuenta__titulo'>Opciones de cuenta</h5>
      {/* Sección donde estan todas las opciones */}
      <div className='opciones'>
        <ul className='listaOp'>
          <li className='listaOp__item'>
            <a href="#">
              <i className="bi bi-person"></i>Informacion de la cuenta
            </a>
          </li>
          <li className='listaOp__item'>
            <a href="#">
              <i className="bi bi-person-fill-gear"></i>Editar informacion
            </a>
          </li>
          <li className='listaOp__item'>
            <a href="" onClick={() => logout()}>
              <i className="bi bi-box-arrow-right"></i>Cerrar sesion
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OptionAccount;
