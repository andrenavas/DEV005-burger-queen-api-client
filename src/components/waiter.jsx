import Background from './background';
import './waiter.css';
import NavWaiter from './waiter/navWaiter';
import ClientName from './waiter/clientName';
import Products from './waiter/products';
import Cart from './waiter/cart';
import { useState } from 'react';


const Waiter = () => {
  //selección de productos del usuario
  const[selectedProducts, setSelectedProducts] = useState([]);
  //función del btn que agrega los productos seleccionados al carrito
  const handleAddProduct = (selectedProduct) => {
    setSelectedProducts([
      ...selectedProducts, selectedProduct])
      console.log('ADD');
      console.log(selectedProduct);
      
  };



  return(
  <>
  <section className='background'>
    <Background/>
  </section>
  <section>
    <NavWaiter/>
  </section>
  <section>
    <ClientName/>
  </section>
  <section className='container-order-products'>
    <Products handleAddProduct = {handleAddProduct}/> 
    <Cart products = {selectedProducts} />
  </section> 
  </>
  );
};

export default Waiter

