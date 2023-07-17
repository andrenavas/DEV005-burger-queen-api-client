import Background from './background';
import './status-order.css';
import './chef.css';
import OrderTicket from './chef/orderTicket';
import { useState, useEffect } from 'react';
import NavOrders from './orders/navOrders';
import ModalMessage from './gralComponents/modalMessage';

const StatusOrder = () => {

  const [orders, setOrders] = useState([]);

  const changeStatusDelivered = (order) => {
    // console.log('Cambiando status a entregado');
    const token = localStorage.getItem('accessToken');
    fetch(`http://localhost:8080/orders/${order.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ status: 'delivered' })
    })
      .then((resp) => resp.json())
      .then((updatedOrder) => {
        updateOrderStatus(updatedOrder.id, updatedOrder.status);
        // console.log(updatedOrder.status);
      })
      .catch(error => console.log(error))
  }

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
  const token = localStorage.getItem('accessToken');
  useEffect(() => {
    function getOrdersReady() {
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
    }

    getOrdersReady();
    const intervalId = setInterval(getOrdersReady, 10000)
    //este retorno es opcional del useEffect, evita que se ejecute cuando estoy en otra pantalla o que se pueda duplicar
    return () => {
      clearInterval(intervalId)
    };

  }, [token])

  //funciones que abren y cierran el modal
  const [modalMessageIsOpen, setModalMessageIsOpenId] = useState(false)
  const [modalMessageSettings, setModalMessageSettings] = useState({
    modalText: '',
  });
  //función abre el modal
  const openModalMessage = () => {
    setModalMessageIsOpenId(true)
  }
  //fn que cierra el modal
  const closeModalMessage = () => {
    setModalMessageIsOpenId(false)
  }

  const handleModalMessage = () => {
    setModalMessageSettings({
      modalText: 'El pedido ha sido entregado al cliente',
    });
    openModalMessage();
  };

  return (
    <>
      <Background />
      <NavOrders />
      <section className='title-chef-orders'>
        <h1 className='title-status-chef'>Listas para servir</h1>
      </section>
      <section className='container-order-status'>
        <div className='container-order-ticket-status'>
          {orders
            .filter(order => order.status === 'delivery')
            .map(order => (<OrderTicket key={order.id} order={order} changeStatus={changeStatusDelivered} showButton={true} handleModalMessage={handleModalMessage} text="Entregado" />))}
          <ModalMessage
            isOpen={modalMessageIsOpen}
            onRequestClose={closeModalMessage}
            text={modalMessageSettings.modalText}
          />
        </div>
      </section>
    </>
  );
};

export default StatusOrder

