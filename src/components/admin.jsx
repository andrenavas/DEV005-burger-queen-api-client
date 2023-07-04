import Background from './background';
import NavAdmin from './admin/navAdmin';
import Dashboard from './admin/dashboard';
import { useEffect, useState } from 'react';
import './admin.css';

const Admin = () => {
    const [workers, setWorkers] = useState([]);
  //crear const con dataExit en memoria
  // const [dataExit, setDataExit] = useState(null);
  const token = localStorage.getItem('accessToken');
  //variable que se crea al presionar el boton de chef cuando el pedido está listo
  useEffect(() =>{ 
    function getWorkers() {
      fetch('http://localhost:8080/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`,
        }
      })
      .then((resp) => resp.json())
      .then((dataWorkers) => {
        // console.log(dataOrders);
        setWorkers(dataWorkers);
      })
      .catch(error => {
        console.log(error)
      })
    }
    // se ejecuta getOrders una vez para que la primera llamada sea inmediata y no esperar 5 segundos
    getWorkers();
    // crear un intervalo, donde va la función que trae la petición fetch y luego el tiempo en milisegundos(5 segundos)
    const intervalId = setInterval(getWorkers, 10000)
    //este retorno es opcional del useEffect, evita que se ejecute cuando estoy en otra pantalla o que se pueda duplicar
    return () => {
      clearInterval(intervalId)
    };
  }, [token])

    return (
    <>
    <Background/>
    <NavAdmin/>
    <div className='container-dashboard'><Dashboard workers = {workers}/>
    </div>
    </>
    )
};
export default Admin
