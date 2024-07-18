import { useContext, useEffect } from 'react';
import '../StyleSheets/ModalPago.css'
import { ProductContext } from '../context/Contexto';

const ModalPago = () => {

  const productContext = useContext(ProductContext);

  if (!productContext) {
    return null; // O cualquier manejo de error adecuado
  }

  const { pagoTotal, productCar, setPagoTotal } = productContext

  useEffect(() => {
    if(productCar.length == 0){
      setPagoTotal(0)
    }
  }, [productCar])
  return (
    <div className='modalPago'>
        <div className="pago">
          <p className='pago__info'><i className="bi bi-cart-check-fill pago__carrito"></i>Detalles de la compra</p>
          <div className='dinero'>
            <p className='dinero__deuda'>Total : </p>
            <p className='dinero__pagar'>{`S/${pagoTotal.toFixed(2)}`}</p>
          </div>
          <p className='pago__terminos'>
            *Sujeto a <a href='#'>Términos y Condiciones de promociones comerciales</a>. El
            descuento de tu cupón podría visualizarse una vez elijas el método de
            pago en el siguiente paso.
          </p>
        </div>
        <a href="https://link.mercadopago.com.pe/lubanpago" target='blanck'><button type="button" className="btn btn-dark btnPagar">Ir a Comprar</button></a>
    </div>
  );
};

export default ModalPago;
