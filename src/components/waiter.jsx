import Background from './background';
import './waiter.css';
import NavWaiter from './waiter/navWaiter';
import ClientName from './waiter/clientName';
import Products from './waiter/products';


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
  <section>
    <Products/>
  </section>
 
 
  </>
  );
};

export default Waiter

