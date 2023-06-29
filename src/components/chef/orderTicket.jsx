import {Button} from '../gralComponents/gralComponents';
import PropTypes from 'prop-types';
// import { useEffect, useState } from 'react';

const OrderTicket = ({order, changeStatus, showButton}) => {
  // const [dataExit, setDataExit] = useState(order.dataExit);

  // useEffect(() => {
  //   setDataExit(order.dataExit);
  // }, [order.dataExit]);
  return(
    <>
    <div className="ticket-order">
      <div className="order-client">Cliente: {order.client}</div>
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
        <div className='order-date'>A cocina: {order.dataEntry}</div>
        <div className='order-date-exit'> T.Preparación: {order.dataExit}</div>
       
      </div>
      
      
      <div className="container-btn-add">
        {showButton &&
        <Button className ="btn-order-ready" text="Preparado" onClick= {() => changeStatus(order)}/> 
        }
      </div>
    </div>
    </>
  )
};
OrderTicket.propTypes = {
  order: PropTypes.object,
  changeStatus: PropTypes.func,
  showButton: PropTypes.bool,
}
export default OrderTicket

