import { useNavigate } from 'react-router-dom';
import IconoMesero from '../../assets/img/IconoMesero.png';
import BQLogo from '../../assets/img/BQLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket,faUtensils } from '@fortawesome/free-solid-svg-icons'

const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} size="2xl" style={{ color: "#db3f0a", }} />
const iconWaiter = <FontAwesomeIcon icon={faUtensils} size="2xl" style={{ color: "#FFF", }} />

const NavOrders = () => {
  const navigateTo = useNavigate();
  const logout = () => {
    navigateTo('/');
  }
  const navMenu = () => {
    console.log('click en order')
    navigateTo('/waiter');
  };
  return (
    <>
      <section className='section-waiter'>
        <div className='waiter-nav'>
          <div className='logos'>
              <div className='container-order-logo' onClick={navMenu}>Menu{iconWaiter}
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