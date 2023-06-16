import Background from './background';
import './waiter.css';
import IconoMesero from '../assets/img/IconoMesero.png'
import IconoHrs from '../assets/img/IconoHrs.png'
import BQLogo from '../assets/img/BQLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import {Input , Button} from './gralComponents/gralComponents';
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} size="2xl" style={{color:"#db3f0a",}} />

const Waiter = () => {
  const navigateTo = useNavigate();
  const logout = () => {
    navigateTo('/');
  } 
  const inputValue = (event) => {
    setClientValue (event.target.value) 
  };
  const saveClientName = () => {
    console.log('teclickeo');
    inputValue();
  };
  //const clientValue será el nombre del cliente y set ClienteValue es la función
  const [clientValue, setClientValue] = useState('')
  
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
    <section className='client-credentials mb-3'>
      <Input placeholder ="Nombre del Cliente" className="input-name" value = {clientValue} onChange={inputValue}/>
      <Button className ="btn btn-primary" onClick={saveClientName} text="Agregar cliente"/>
      <p className='clientName'>Nombre del Cliente: {clientValue}</p>
      </section>
  </>
  );
};

export default Waiter
{/* <div className='container-w  align-items-center'>
    <h1>Ya tomaremos sus pedidos por acá</h1>
    <p>Developers coding...</p>
  </div> */}
