import Background from './background';
import './waiter.css';
import NavWaiter from './waiter/navWaiter';
import ClientName from './waiter/clientName';
import Products from './waiter/products';
import Order from './waiter/order';


const Waiter = () => {

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
    <Products/> 
    <Order/>
  </section> 
  </>
  );
};

export default Waiter

