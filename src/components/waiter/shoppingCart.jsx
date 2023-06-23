import PropTypes from 'prop-types';
import ShoppingList from './shoppingList';


const ShoppingCart = ({selectedProducts, totalPrice, reduceProduct}) => {
  return(
    <>
    <div className='container-order'>  
      <div className='container-shopping-list'>
        <ShoppingList selectedProducts = {selectedProducts} totalPrice = {totalPrice} reduceProduct = {reduceProduct}/>
      </div>
    </div>
  </>
  )

};

ShoppingCart.propTypes = {
  selectedProducts: PropTypes.array,
  totalPrice: PropTypes.number,
  reduceProduct: PropTypes.func
}
export default ShoppingCart
