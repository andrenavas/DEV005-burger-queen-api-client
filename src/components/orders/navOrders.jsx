import { useNavigate } from 'react-router-dom';
import IconoMesero from '../../assets/img/IconoMesero.png';
import IconoOrders from '../../assets/img/IconoOrders.png'
import IconoHrs from '../../assets/img/IconoHrs.png'
import BQLogo from '../../assets/img/BQLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} size="2xl" style={{ color: "#db3f0a", }} />

const NavOrders = () => {
  const navigateTo = useNavigate();
  const logout = () => {
    navigateTo('/');
  }
  const navMenu = () => {
    console.log('click en order')
    navigateTo('/waiter');
  };
  const navStatusOrder = () => {
    console.log('click en order')
    navigateTo('/statusorder');
  };
  return (
    <>
      <section className='section-waiter'>
        <div className='waiter-nav'>
          <div className='logos'>
            <div className='container-orders-view'>
              <div className='container-order-logo' onClick={navMenu}>
                <img src={IconoMesero} className='waiterIcon' alt='waiter icon' />
              </div>
              <div className='container-order-logo' onClick={navStatusOrder}>
                <img src={IconoOrders} className='orderLogo' alt='orders icon' />
              </div>
            </div>
            <h1 className='title-view'> Estado de órdenes </h1>
            <div className='container-logos'>
              <img src={BQLogo} className='BQLogo' alt='hours icon' />
            </div>
          </div>
          <div className='container-logout' onClick={logout}>
            {logoutIcon}
          </div>
        </div>
      </section>
    </>
  );
};
export default NavOrders