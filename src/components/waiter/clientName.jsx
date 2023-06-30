import {Input } from '../gralComponents/gralComponents';
import PropTypes from 'prop-types';

const ClientName = ({clientValue, setClientValue}) => {
  const inputValue = (event) => {
    setClientValue (event.target.value) 
  };
  // //const clientValue será el nombre del cliente y set ClienteValue es la función
  // const [clientValue, setClientValue] = useState('')
  // const saveClientName = (clientValue) => {
  //   console.log(clientValue)
  // };
  return (
  <>
 <div className='container-waiter'>
    <section className='client-credentials'>
      <div className='container-input-btn'>
      <Input placeholder ="Nombre del Cliente" className="input-name" value = {clientValue} onChange={inputValue}/>
      {/* <Button className ="btn btn-primary btn-order" onClick={() => saveClientName (clientValue)} text="Tomar pedido"/> */}
      </div>
      <p className='clientName'>Cliente: {clientValue}</p>
      </section>
  </div>
  
  </>
  )
  
};
ClientName.propTypes = {
  clientValue: PropTypes.string,
  setClientValue: PropTypes.string
}

export default ClientName