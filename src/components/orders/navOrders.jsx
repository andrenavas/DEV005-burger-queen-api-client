import { useNavigate } from 'react-router-dom';
import IconoOrders from '../../assets/img/IconoOrders.png'
import IconoHrs from '../../assets/img/IconoHrs.png'
import BQLogo from '../../assets/img/BQLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} size="2xl" style={{color:"#db3f0a",}} />

const NavOrders= () => {
  const navigateTo = useNavigate();
  const logout = () => {
    navigateTo('/');
  } 
  return (
    <>
    <section className='section-waiter'>
    <div className='waiter-nav'>
      <div className='logos'>
        <img src={IconoOrders} className='waiterIcon' alt='waiter icon'/>
        <h1> Estado de órdenes </h1>
        <div className='container-logos'>
          <img src={BQLogo} className='BQLogo' alt='hours icon'/>
          <img src={IconoHrs} className='hrsIcon' alt='hours icon'/>
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