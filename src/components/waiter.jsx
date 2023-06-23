import Background from './background';
import './waiter.css';
import NavWaiter from './waiter/navWaiter';
import ClientName from './waiter/clientName';
import Products from './waiter/products';
import ShoppingCart from './waiter/shoppingCart';
import { useState } from 'react';

const Waiter = () => {
  //selección de productos del usuario
  const[selectedProducts, setSelectedProducts] = useState([]);
  //constante con el total del valor a pagar
  const [totalPrice, setTotalPrice] = useState(0);
  //función del btn que agrega los productos seleccionados al carrito
  const handleAddProduct = (selectedProduct) => {
    //revisar si el elemento agregado existe a través del id del producto, 
    if(selectedProducts.find(item => item.id === selectedProduct.id)){
      const newProducts = selectedProducts.map(item => item.id === selectedProduct.id
        ?{ ...item, quantity: item.quantity + 1}
      : item 
      )
      setTotalPrice(totalPrice + selectedProduct.price)
      return setSelectedProducts([...newProducts]);
    }
    setTotalPrice(totalPrice + selectedProduct.price)
    setSelectedProducts([
      ...selectedProducts, selectedProduct])
      console.log('Click en agregar');
      // console.log(selectedProduct);
      
  };
  console.log('Este es el arreglo del producto seleccionado', selectedProducts);
  console.log('TOTAL PRICE', totalPrice)
  

  return(
  <> 
  <Background/>
    <NavWaiter/>
    <section>
    <ClientName/>
    </section>
    <section className='container-order-products'>
    <Products handleAddProduct = {handleAddProduct}/>
    <ShoppingCart selectedProducts = {selectedProducts} totalPrice = {totalPrice} />
    </section> 
  </>
  );
};

export default Waiter

