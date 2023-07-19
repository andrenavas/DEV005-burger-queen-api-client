import PropTypes from 'prop-types';
import ShoppingList from './shoppingList';
import { Button } from '../gralComponents/gralComponents';
import { useState, useEffect } from 'react';


const ShoppingCart = ({ selectedProducts, totalPrice, reduceProduct, sendOrder, clientValue, handleModalMessage }) => {
  //habilita/deshabilita el btn de cocinar
  //  console.log(selectedProducts)
  
  const [btnActive, setBtnActive] = useState(false);
  useEffect(() => {
    //evaluar un valor y cambiarlos a boolean, se usa doble !!(doble negación)
    setBtnActive(!!clientValue && clientValue.length > 0 && selectedProducts.length > 0);
    // console.log('selectedProducts', selectedProducts)
    // console.log('CLIENT VALUE',!!clientValue && clientValue.length > 0,);
  }, [clientValue, selectedProducts]);

  return (
    <>
      <div className='container-order'>
        <div className='container-shopping-list'>
          <ShoppingList selectedProducts={selectedProducts} totalPrice={totalPrice} reduceProduct={reduceProduct} />
        </div>
        <div className='container-btn-order'>
          <Button className="btn btn-cook all" onClick={() => {sendOrder(), handleModalMessage()}} text="Enviar Pedido" disabled={!btnActive} />
        </div>
      </div>
    </>
  )
};

ShoppingCart.propTypes = {
  selectedProducts: PropTypes.array,
  totalPrice: PropTypes.number,
  reduceProduct: PropTypes.func,
  sendOrder: PropTypes.func,
  clientValue: PropTypes.string,
  handleModalMessage: PropTypes.func
}
export default ShoppingCart
