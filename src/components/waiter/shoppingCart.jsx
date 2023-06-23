import PropTypes from 'prop-types';
import ShoppingList from './shoppingList';

const ShoppingCart = ({selectedProducts, totalPrice}) => {
  return(
    <>
    <div className='container-order'>  
      <div className='container-shopping-list'>
        <ShoppingList selectedProducts = {selectedProducts} totalPrice = {totalPrice}/>
      </div>
    </div>
  </>
  )

};

ShoppingCart.propTypes = {
  selectedProducts: PropTypes.array,
  totalPrice: PropTypes.number
}
export default ShoppingCart
