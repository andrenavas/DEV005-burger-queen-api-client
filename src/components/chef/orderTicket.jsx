import {Button} from '../gralComponents/gralComponents';
import PropTypes from 'prop-types';

const OrderTicket = ({order, changeStatus}) => {
  

  return(
    <>
    <div className="ticket-order">
      <div className="order-client">Cliente: {order.client}</div>
      {/* <div className="order-client">UserId: {order.userId}</div> */}
      <div className="order-list">
      <table>
        <thead>
          <tr>
            <th>Cant</th>
            <th>Producto</th>
          </tr>
        </thead>
        <tbody>
          {order.products.map((item, index) => (
            <tr key={index}>
              <td>{item.quantity}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className='container-orderdate-orderstatus'>
        <div className='order-status'>Estado: {order.status}</div>
        <div className='order-date'>Hora: {order.dataEntry}</div>
      </div>
      <div className="container-btn-add">
    
        <Button className ="btn-order-ready" text="Listo" onClick= {() => changeStatus(order)}/>

      </div>
    </div>
    </>
  )
};
OrderTicket.propTypes = {
  order: PropTypes.object,
  changeStatus: PropTypes.func,
}
export default OrderTicket

