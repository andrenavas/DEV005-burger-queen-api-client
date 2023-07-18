import { useNavigate } from 'react-router-dom';
import IconoMesero from '../../assets/img/IconoMesero.png';
import BQLogo from '../../assets/img/BQLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Orders from '../../assets/img/Orders.png'
// import { Button } from '../gralComponents/gralComponents';

const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} size="2xl" style={{ color: "#D11515", }} />

const NavWaiter = () => {
  const navigateTo = useNavigate();
  const logout = () => {
    navigateTo('/');
  }
  const navMenu = () => {
    // console.log('click en order')
    navigateTo('/waiter');
  };
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
              <div className='container-orders-view'>
                <div className='container-order-logo' onClick={navMenu}>
                  <img src={IconoMesero} className='waiterIcon' alt='waiter icon' />
                </div>
                <div className='container-order-logo' onClick={statusOrder}>
                  <img src={Orders} className='orderLogo' alt='orders icon' />
                  {/* <Button dataTestid={'btn_breakfast'} className="btn btn-order all" text="Ordenes" onClick={statusOrder}/> */}
                </div>
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