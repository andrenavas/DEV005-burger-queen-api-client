import Background from './background';
import './chef.css';
import NavChef from './chef/navChef';
import OrderTicket from './chef/orderTicket';
import { useState, useEffect } from 'react';



const Chef = () => {

  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem('accessToken');
  useEffect(() =>{ 
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
  }, [token])

  //Cambiando el estado de la orden de pending a delivery
  const changeStatus = (order) => {
    console.log(order.id)
    fetch(`http://localhost:8080/orders/${order.id}`, {

  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'authorization': `Bearer ${token}`,
    
  },
  body: JSON.stringify({status: 'delivery'})
  })
  .then((resp) => resp.json())
    .then((updatedOrder) => {
      updateOrderStatus(updatedOrder.id, updatedOrder.status);
    })
  .catch(error => console.log(error))
  }

  // Actualizando la lista de pedidos luego del cambio de estado  
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prevOrders => {
      return prevOrders.map(order => {
        if (order.id === orderId) {
          return { ...order, status: newStatus };
        }
        return order;
      });
    });
  };
  let showButton = true;


  return(
  <> 
  <Background/>
    <NavChef/> 
    <section className='title-chef-orders'>
      <h1 className='title-status-chef'>Pendientes</h1>
      <h1 className='title-status-chef'>Listas para servir</h1>
      </section>
    <section className='container-order-cooking'>
        <div className='container-order-ticket'>
        {orders
        .filter(order => order.status === 'pending')
        .map(order => (<OrderTicket key={order.id} order={order} changeStatus={changeStatus} showButton= {showButton}/>))}
        </div>
        <div className='container-order-to-delivery'>
        {orders
        .filter(order => order.status === 'delivery')
        .map(order => (<OrderTicket key={order.id} order={order} showButton= {false}/>))}
        </div>
        
   </section> 
  </>
  );
};

export default Chef

