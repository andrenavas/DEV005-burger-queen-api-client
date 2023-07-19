import { useNavigate } from 'react-router-dom';
import BQLogo from '../../assets/img/BQLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faBurger } from '@fortawesome/free-solid-svg-icons'
// import { Button } from '../gralComponents/gralComponents';

const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} size="2xl" style={{ color: "#D11515", }} />
const iconOrdersReady = <FontAwesomeIcon icon={faBurger} size="2xl" style={{ color: "#FFFF", }} />

const NavWaiter = () => {
  const navigateTo = useNavigate();
  const logout = () => {
    navigateTo('/');
  }

  const statusOrder = () => {
    // console.log('click en order')
    navigateTo('/statusorder');
  };
  return (
    <>
      <section className='section-waiter'>
        <div className='waiter-nav'>
          <div className='logos'>
            <div className='container-logo-order-waiter'>
              <div className='container-order-logo' onClick={statusOrder}>Ordenes{iconOrdersReady}
              </div>
            </div>
            <h1 className='title-view'> Mesera/Mesero </h1>
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
export default NavWaiter