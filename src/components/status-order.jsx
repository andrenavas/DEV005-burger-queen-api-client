import Background from './background';
import './chef.css';
import OrderTicket from './chef/orderTicket';
import { useState, useEffect } from 'react';
import NavOrders from './orders/navOrders';



const StatusOrder = () => {

  const [orders, setOrders] = useState([]);
  const changeStatusDelivered = () => {
    console.log('Cambiando status a entregado')
  }
  
useEffect(() =>{const token = localStorage.getItem('accessToken'); 
  fetch('http://localhost:8080/orders', {

  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'authorization': `Bearer ${token}`,
  }
  })
  .then((resp) => resp.json())
  .then((dataOrders) => {
    console.log(dataOrders)
    setOrders(dataOrders)
  })
  .catch(error => console.log(error))
}, [])

  return(
  <> 
  <Background/>
    <NavOrders/>
    <section className='container-order-cooking'>
        <div className='container-order-ticket'>
        {orders
        .filter(order => order.status === 'delivery')
        .map(order => (<OrderTicket key={order.id} order={order} changeStatus={changeStatusDelivered} btnText = "ORDEN LISTA"/>))}
        </div>
        
   </section> 
  </>
  );
};

export default StatusOrder

