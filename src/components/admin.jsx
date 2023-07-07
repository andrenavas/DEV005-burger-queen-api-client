import Background from './background';
import NavAdmin from './admin/navAdmin';
import Dashboard from './admin/dashboard';
import { useEffect, useState } from 'react';
import './admin.css';
// import { Button } from './gralComponents/gralComponents';
import Form from './gralComponents/form';

const Admin = () => {
  const [workers, setWorkers] = useState([]);
  const [modalIsOpenId, setModalIsOpenId] = useState(false)

  const token = localStorage.getItem('accessToken');
  //variable que se crea al presionar el boton de chef cuando el pedido está listo
  useEffect(() => {
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
    const intervalId = setInterval(getWorkers, 2500)
    //este retorno es opcional del useEffect, evita que se ejecute cuando estoy en otra pantalla o que se pueda duplicar
    return () => {
      clearInterval(intervalId)
    };
  }, [token])
  //funciones que modifican la data de los trabajadores
  //función abre el modal
  const openModal = () => {
    setModalIsOpenId(true)
  }
  //fn que cierra el modal
  const closeModal = () => {
    setModalIsOpenId(false)
  }
  const deleteWorker = (user) => {
    console.log('eliminar')
    console.log('HOLA',user.id)
    fetch(`http://localhost:8080/users/${user.id}`, {

      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      },

    })
    .then((resp) => resp.json())
    .then((user) =>{
      updateWorkersData(user)
    })
    .catch(error => console.log(error))

    console.log('eliminar')
  }
  // Actualizando la lista trabajadores . 
  const updateWorkersData = (user) => {
    setWorkers(prevWorkers => {
      return prevWorkers.map(worker => {
        if (worker.id === user.id) {
          return {worker};
        }
        return worker;
      });
    });
  };

  const editWorker = () => {
    console.log('editar')
  }
  const [newUserData, setNewUserData] = useState({
    email: '',
    password: '',
    role: ''
});
  const addWorker = () => {
    console.log('ADDING WORKER')
    //elemento a enviar, trabajador
    const newWorker = {
      email: newUserData.email,
      password: newUserData.password,
      role: newUserData.role
    };
    fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(newWorker),
    })
    .then(() => {
      setNewUserData.email='',
      setNewUserData.password='',
      setNewUserData.role='',
      newUserData.email='',
      newUserData.password='',
      newUserData.role=null
    })

  }

  return (
    <>
      <Background />
      <NavAdmin />
      <div className='container-dashboard-btnAddWorker'>
        {/* <div className='container-btn-add-worker'>
        <Button  className='btn-add-worker' text='Agregar Trabajador' dataTestid={'Testidbtn'} onClick={() => handleAddWorker()}></Button>
        </div> */}
        <Dashboard workers={workers} openModal={openModal} closeModal={closeModal} modalIsOpen={modalIsOpenId} deleteWorker={deleteWorker} editWorker={editWorker} addWorker={addWorker} />
        <Form addWorker={addWorker} newUserData={newUserData} setNewUserData={setNewUserData}/>
      </div>
      {/* <ModalApp isOpen={modalIsOpenId} onRequestClose={closeModal} handleClickModal={modalData.aceptarFn} 
                                    text={modalData.modalText} textBtn={modalData.modalBtnText}>
                                    </ModalApp> */}
    </>
  )
};
export default Admin
