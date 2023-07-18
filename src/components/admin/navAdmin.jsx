import { useNavigate } from 'react-router-dom';
import BQLogo from '../../assets/img/BQLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faTableList } from '@fortawesome/free-solid-svg-icons'

const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} size="2xl" style={{ color: "#D11515", }} />
const iconProducts = <FontAwesomeIcon icon={faTableList} size="2xl" style={{ color: "#FFF", }} />

const NavAdmin = () => {
  const navigateTo = useNavigate();
  const logout = () => {
    navigateTo('/');
  }

  const productsView = () => {
    console.log('click en order')
    navigateTo('/adminProducts');
  };
  return (
    <>
      <section className='section-waiter'>
        <div className='waiter-nav'>
          <div className='logos'>
            <div className='container-order-logo' onClick={productsView}>Productos{iconProducts}</div>
            <h1 className='title-view'> Administrar Trabajadores </h1>
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
export default NavAdmin