import PropTypes from 'prop-types';
// import { Button } from '../gralComponents/gralComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

const iconDeleteTrash = <FontAwesomeIcon icon={faTrashCan} size="xl" style={{ color: "#D11515", }} />

const ShoppingList = ({ selectedProducts, totalPrice, reduceProduct }) => {
  return (
    <table className='table-products'>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cant</th>
          <th>Total</th>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {selectedProducts.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td>${item.quantity * item.price}</td>
            <td className='container-delete-icon' onClick={() => reduceProduct(item)}>  <i>{iconDeleteTrash}</i></td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3} align="center">Total a pagar</td>
          <td>${totalPrice}</td>
        </tr>
      </tfoot>
    </table>
  );
};
ShoppingList.propTypes = {
  selectedProducts: PropTypes.array,
  totalPrice: PropTypes.number,
  reduceProduct: PropTypes.func
}
export default ShoppingList