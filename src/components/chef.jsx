import Background from './background';
import './chef.css';
import NavChef from './chef/navChef';
import OrderTicket from './chef/orderTicket';
import { useState, useEffect } from 'react';



const Chef = () => {

  const [orders, setOrders] = useState([]);
  //crear const con dataExit en memoria
  // const [dataExit, setDataExit] = useState(null);
  const token = localStorage.getItem('accessToken');
  //variable que se crea al presionar el boton de chef cuando el pedido está listo
  useEffect(() =>{ 
    function getOrders() {
      fetch('http://localhost:8080/orders', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`,
        }
      })
      .then((resp) => resp.json())
      .then((dataOrders) => {
        console.log(dataOrders);
        setOrders(dataOrders);
      })
      .catch(error => console.log(error));
    }
    // se ejecuta getOrders una vez para que la primera llamada sea inmediata y no esperar 5 segundos
    getOrders();
    // crear un intervalo, donde va la función que trae la petición fetch y luego el tiempo en milisegundos(5 segundos)
    const intervalId = setInterval(getOrders, 5000)
    //este retorno es opcional del useEffect, evita que se ejecute cuando estoy en otra pantalla o que se pueda duplicar
    return () => {
      clearInterval(intervalId)
    };
  }, [token])

  const changeStatus = (order) => {
      //Cambiando el estado de la orden de pending a delivery
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
      //agreggamos constante newDataExit y le asignamos la hora actual
      const newDataExit = new Date(Date.now()).toLocaleTimeString();
      //pasamos hora actual a Data exit
      //agregamos al objeto la propiedad newDataEXit
      updateOrderStatus(updatedOrder.id, updatedOrder.status, newDataExit);
    })
  .catch(error => console.log(error))
  }

  // Actualizando la lista de pedidos luego del cambio de estado  

  const updateOrderStatus = (orderId, newStatus, newDataExit) => {
    setOrders(prevOrders => {
      return prevOrders.map(order => {
        if (order.id === orderId) {
          return { ...order, status: newStatus, dataExit: newDataExit};
        }
        return order;
      });
    });
  };
  //mostrar el Button Preparar en el ticket Chef


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
        .map(order => (<OrderTicket key={order.id} order={order} changeStatus={changeStatus} showButton= {true}/>))}
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

