import PropTypes from 'prop-types';
import ShoppingList from './shoppingList';
import { Button } from '../gralComponents/gralComponents';


const ShoppingCart = ({selectedProducts, totalPrice, reduceProduct,sendOrder}) => {
  return(
    <>
    <div className='container-order'>  
      <div className='container-shopping-list'>
        <ShoppingList selectedProducts = {selectedProducts} totalPrice = {totalPrice} reduceProduct = {reduceProduct}/>
      </div>
      <div className='container-btn-order'>
        <Button onClick ={()=> sendOrder()} text="A cocinar"/>
      </div>
    </div>
  </>
  )
};

ShoppingCart.propTypes = {
  selectedProducts: PropTypes.array,
  totalPrice: PropTypes.number,
  reduceProduct: PropTypes.func,
  sendOrder: PropTypes.func
}
export default ShoppingCart
