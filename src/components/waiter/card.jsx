import {Button} from '../gralComponents/gralComponents';
import PropTypes from 'prop-types';

const Card = ({ product, handleAddProduct}) => {


  return(
    <>
    <div className="card-product">
      <div className="product-name">{product.name}</div>
      <div className="product-image">
        <img className="product-img" src={product.image}/>
      </div>
      <div className="container-price-btnAdd">
        <div className="product-price">${product.price}</div>
        <div className="container-btn-add">
        <Button className='btn-add' text='+' onClick={() => handleAddProduct(product)} aria-labelledby='add-button'/>
        </div>
      </div>
    </div>
    </>
  )
};
Card.propTypes = {
  handleAddProduct: PropTypes.func,
  product: PropTypes.object,
}
export default Card