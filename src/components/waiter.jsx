import Background from './background';
import './waiter.css';
import IconoMesero from '../assets/img/IconoMesero.png'
import IconoHrs from '../assets/img/IconoHrs.png'
import BQLogo from '../assets/img/BQLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} size="2xl" style={{color:"#db3f0a",}} />

const Waiter = () => {
  const navigateTo = useNavigate();
  const logout = () => {
    navigateTo('/');
  }

  // const navigateTo = useNavigate();

  return(
  <>
  <section className='background'>
    <Background/>
  </section>
  <section className='section-waiter'>
    <div className='waiter-nav'>
      <div className='logos'>
        <img src={IconoMesero} className='waiterIcon' alt='waiter icon'/>
        <h1> Mesera/Mesero </h1>
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

export default Waiter
{/* <div className='container-w  align-items-center'>
    <h1>Ya tomaremos sus pedidos por acá</h1>
    <p>Developers coding...</p>
  </div> */}
