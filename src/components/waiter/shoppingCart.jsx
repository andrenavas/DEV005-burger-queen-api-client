import PropTypes from 'prop-types';
import ShoppingList from './shoppingList';
import { Button } from '../gralComponents/gralComponents';
import { useState, useEffect } from 'react';


const ShoppingCart = ({selectedProducts, totalPrice, reduceProduct,sendOrder, clientValue}) => {
   //habilita/deshabilita el btn de cocinar
   const [btnActive, setBtnActive] = useState(false);
   useEffect(() => {
    //evaluar un valor y cambiarlos a boolean, se usa doble !!(doble negación)
    setBtnActive(!!clientValue && clientValue.length > 0);
    console.log('CLIENT VALUE',!!clientValue && clientValue.length > 0);
  }, [clientValue]);

   
  return(
    <>
    <div className='container-order'>  
      <div className='container-shopping-list'>
        <ShoppingList selectedProducts = {selectedProducts} totalPrice = {totalPrice} reduceProduct = {reduceProduct}/>
      </div>
      <div className='container-btn-order'>
        <Button onClick ={()=> sendOrder()} text="A cocinar" disabled={!btnActive}/>
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
  clientValue: PropTypes.string
}
export default ShoppingCart
