import {Button} from '../gralComponents/gralComponents';
import PropTypes from 'prop-types';

const OrderTicket = ({order, changeStatus}) => {
  

  return(
    <>
    <div className="ticket-order">
      <div className="order-client">Cliente: {order.client}</div>
      <div className="order-client">UserId: {order.userId}</div>
      <div className="order-products">
      {order.products.map((item, index) => (
        <div key={index}>
          <div> Producto: {item.name}</div>
          <div>Cantidad: {item.quantity}</div>

        </div>
      ))}
      </div>
      <div className="order-status">Estado: {order.status}</div>
      <div className="order-date">Hora: {order.dataEntry}</div>
      <div className="container-btn-add">
    
        <Button className ="btn-add" text="Listo para servir" onClick= {() => changeStatus()}/>

      </div>
    </div>
    </>
  )
};
OrderTicket.propTypes = {
  order: PropTypes.array,
  changeStatus: PropTypes.func,
}
export default OrderTicket