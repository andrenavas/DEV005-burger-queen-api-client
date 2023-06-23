// import { useEffect } from 'react';
import Background from './background';
import './chef.css';
import NavChef from './chef/navChef';
import OrderTicket from './chef/orderTicket';
import { useState, useEffect } from 'react';



const Chef = () => {

  const [orders, setOrders] = useState([]);
  const changeStatus = () => {
    console.log('Cambiando status')
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
    <NavChef/>
    <section className='container-order-cooking'>
        <div className='container-order-ticket'>
        {orders.map(order => (<OrderTicket key={order.id} order={order} changeStatus={changeStatus} btnText = "ORDEN LISTA"/>))}
        </div>
        
   </section> 
  </>
  );
};

export default Chef

