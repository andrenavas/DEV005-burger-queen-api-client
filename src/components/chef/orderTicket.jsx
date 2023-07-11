import { Button } from '../gralComponents/gralComponents';
import PropTypes from 'prop-types';
// import { useEffect, useState } from 'react';

const OrderTicket = ({ order, changeStatus, showButton, text }) => {
  return (
    <>
      <div className="ticket-order">
        <div>
          <div className="order-client">{order.client}</div>
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
        </div>
        <div className='container-orderdate-orderstatus'>
          <div className='order-status'>Estado: {order.status}</div>
          <div className='order-date'>A cocina: {order.dataEntry}</div>
          {order.dataExit !== null &&
            <div className='order-date-exit'> T.Preparación: {order.dataExit} min</div>
          }
          <div className="container-btn-add">
            {showButton &&
              <Button className="btn-order-ready" text={text} showButton={true} onClick={() => changeStatus(order)} />
            }
          </div>
        </div>

      </div>
    </>
  )
};
OrderTicket.propTypes = {
  order: PropTypes.object,
  changeStatus: PropTypes.func,
  showButton: PropTypes.bool,
  text: PropTypes.string
}
export default OrderTicket
