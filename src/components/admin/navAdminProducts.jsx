import { useNavigate } from 'react-router-dom';
import BQLogo from '../../assets/img/BQLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket,faUser } from '@fortawesome/free-solid-svg-icons'

const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} size="2xl" style={{ color: "#D11515", }} />
const iconWorkers = <FontAwesomeIcon icon={faUser} size="2xl" style={{ color: "#FFF", }} />

const NavAdminProducts = () => {
  const navigateTo = useNavigate();
  const logout = () => {
    navigateTo('/');
  }
  const workersView = () => {
    navigateTo('/admin');
  }
  return (
    <>
      <section className='section-waiter'>
        <div className='waiter-nav'>
          <div className='logos'>
          <div className='container-order-logo workers-logo' onClick={workersView}>Personal{iconWorkers}</div>
            <h1 className='title-view'> Administrar Productos</h1>
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
export default NavAdminProducts