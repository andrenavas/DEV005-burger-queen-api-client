import {Button} from '../gralComponents/gralComponents';
import PropTypes from 'prop-types';

const Card = ({ product, handleAddProduct, children }) => {


  return(
    <>
    <div className="card-product">
      <div className="product-name">{product.name}</div>
      <div className="product-image">
        <img className ="product-img" src = {product.image}/>
      </div>
      <div className="container-price-btnAdd">
        <div className="product-price">${product.price}</div>
        <div className="container-btn-add">
          {/* Falta agregar el onClick */}
        <Button className='btn-add' text='+' onClick= {() => handleAddProduct(product)} aria-labelledby='add-button'/>
        {/* onClick={() => typeMenu("Almuerzo")} */}
        {children}
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