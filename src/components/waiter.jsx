import Background from './background';
import './waiter.css';
import NavWaiter from './waiter/navWaiter';
import ClientName from './waiter/clientName';
import Products from './waiter/products';
import ShoppingCart from './waiter/shoppingCart';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ModalMessage from './gralComponents/modalMessage';

const Waiter = () => {

  //selección de productos del usuario
  const [selectedProducts, setSelectedProducts] = useState([]);
  //constante con el total del valor a pagar
  const [totalPrice, setTotalPrice] = useState(0);
  //const clientValue será el nombre del cliente y set ClienteValue es la función
  const [clientValue, setClientValue] = useState('')
  //función del btn que agrega los productos seleccionados al carrito
  const handleAddProduct = (selectedProduct) => {
    //revisar si el elemento agregado existe a través del id del producto, 
    if (selectedProducts.find(item => item.id === selectedProduct.id)) {
      const newProducts = selectedProducts.map(item => item.id === selectedProduct.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
      )
      setTotalPrice(totalPrice + selectedProduct.price)
      return setSelectedProducts([...newProducts]);
    }
    setTotalPrice(totalPrice + selectedProduct.price)
    setSelectedProducts([
      ...selectedProducts, selectedProduct])
    // console.log('Click en agregar');
    // console.log(selectedProduct);  
  };

  //Borra el item de la lista (no la cantidad)
  const deleteProduct = productToDelete => {
    // console.log('CLICK EN DELETE')
    const results = selectedProducts.filter(
      item => item.id !== productToDelete.id
    );
    setTotalPrice(totalPrice - productToDelete.price)
    setSelectedProducts(results)
  }
  // console.log('Este es el arreglo del producto seleccionado', selectedProducts);
  // console.log('TOTAL PRICE', totalPrice)

  //Para disminuir la cantidad de item en 1
  const reduceProduct = productToDelete => {
    //si es 1 llama a deleteProduct para que elimine todo el item
    if (productToDelete.quantity === 1) {
      deleteProduct(productToDelete);
    } else {
      const updatedProducts = selectedProducts.map((item) => {
        if (item.id === productToDelete.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setSelectedProducts(updatedProducts);
      setTotalPrice(totalPrice - productToDelete.price);
    }
  };

  // Enviar la orden a la API
  const sendOrder = () => {
    //token de acceso
    const token = localStorage.getItem('accessToken');
    //id de la mesera que está tomando el pedido
    const userId = localStorage.getItem('userId');
    // nombre cliente
    const client = clientValue;
    //fecha actual
    const date = new Date(Date.now()).toLocaleTimeString()
    const manualStatus = 'pending';

    const dataOrder = {
      userId: userId,
      client: client,
      products: selectedProducts,
      status: manualStatus,
      dataEntry: date,
      dataExit: null,
    };

    fetch('https://burgerqueen-apimock-andreypauli.onrender.com/orders', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(dataOrder),

    })
      .then(() => {
        setSelectedProducts([]);
        setTotalPrice(0);
        setClientValue('');
        // console.log('DATA-ORDER', dataOrder)
      })
      .catch(error => console.log(error))
  };

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
      modalText: 'Tu pedido ha sido enviado a la cocina',
    });
    openModalMessage();
  };

  return (
    <>
      <Background />
      <NavWaiter />
      <section>
        <ClientName clientValue={clientValue} setClientValue={setClientValue} />
      </section>
      <section className='container-order-products'>
        <Products handleAddProduct={handleAddProduct} />
        <ShoppingCart selectedProducts={selectedProducts} totalPrice={totalPrice} reduceProduct={reduceProduct} sendOrder={sendOrder} clientValue={clientValue} handleModalMessage={handleModalMessage} />
        <ModalMessage
          isOpen={modalMessageIsOpen}
          onRequestClose={closeModalMessage}
          text={modalMessageSettings.modalText}
        />
      </section>
    </>
  );
};

ClientName.propTypes = {
  clientValue: PropTypes.string,
  setClientValue: PropTypes.func
}
export default Waiter
