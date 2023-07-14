import Background from './background';
import NavAdmin from './admin/navAdmin';
import Dashboard from './admin/dashboard';
import { useEffect, useState } from 'react';
import ModalApp from './gralComponents/modal';
import './admin.css';
import Form from './gralComponents/form';
import { useNavigate } from 'react-router-dom';

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
  const [modalData, setModalData] = useState({
    modalText: '',
    modalBtnText: '',
    aceptarFn: () => { }
  });
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
    console.log('HOLA', user.id)
    fetch(`http://localhost:8080/users/${user.id}`, {

      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      },

    })
      .then((resp) => resp.json())
      .then((user) => {
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
          return { worker };
        }
        return worker;
      });
    });
  };
  const [editUserData, setEditUserData] = useState({
    email: '',
    password: '',
    role: ''
  });

  const editWorker = (user) => {
    console.log('editar', user)
    const editWorker = {
      email: user.email,
      password: user.password,
      role: user.role
    };
    fetch(`http://localhost:8080/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(editWorker),
    })
      .then(() => {
        // setEditUserData({
        //   email: '',
        //   password: '',
        //   role: ''
        // });
        // setNewUserData({
        //   email: '',
        //   password: '',
        //   role: ''
        // });
      })

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
          setNewUserData({
            email: '',
            password: '',
            role: ''
          });
      })
  }
  const handleAddWorker = () => {
    console.log('Abrir el modal');
    setNewUserData({
      email: '',
      password: '',
      role: ''
    });
    setModalData({
      modalText: '¿Estás seguro que deseas AGREGAR al trabajador?',
      modalBtnText: 'Agregar'
      // aceptarFn: () => {
      //   addWorker(worker);
      //   closeModal();
      // }
    });
    openModal();
  };
  const handleEditar = (worker) => {
    // setModalText('¿Estás seguro que deseas editar al trabajador?');
    // setModalBtnText('Editar');
    setNewUserData(worker);
    // setEditUserData(worker);
    setModalData({
      modalText: '¿Estás seguro que deseas editar al trabajador?',
      modalBtnText: 'Editar',
      aceptarFn: () => {
        setNewUserData(worker);
        editWorker(worker);
        closeModal();
      }
    });
    openModal();
  };
  const handleBorrar = (worker) => {
    // setModalText('¿Estás seguro que deseas borrar al trabajador?');
    // setModalBtnText('Borrar');
    setModalData({
      modalText: '¿Estás seguro que deseas borrar al trabajador?',
      modalBtnText: 'Borrar',
      aceptarFn: () => {
        deleteWorker(worker)
        closeModal();
      }
    });
    openModal();
  };
  const [showEditForm, setShowEditForm] = useState(true)

  const handleAddEdit = (worker) => {
    if (showEditForm) {
      editWorker(worker);
      closeModal();
      setEditUserData({
        email: '',
        password: '',
        role: ''
      });
    }
    else {
      addWorker();
      closeModal();
      setNewUserData({
        email: '',
        password: '',
        role: ''
      });
    }
  }
  const navigateTo = useNavigate();

  const productsView = () => {
    console.log('click en order')
    navigateTo('/adminProducts');
  };


  return (
    <>
      <Background />
      <NavAdmin />
      <div className='container-dashboard-btnAddWorker'>
        <Dashboard
          setShowEditForm={setShowEditForm}
          workers={workers}
          openModal={openModal}
          closeModal={closeModal}
          modalIsOpen={modalIsOpenId}
          handleAddWorker={handleAddWorker}
          handleBorrar={handleBorrar}
          handleEditar={handleEditar}
          productsView={productsView} />
      </div>
      <ModalApp
        isOpen={modalIsOpenId}
        onRequestClose={closeModal}
        handleClickModal={modalData.aceptarFn}
        text={modalData.modalText}
        textBtn={modalData.modalBtnText} >
        <Form
          handleAddEdit={handleAddEdit}
          newUserData={newUserData}
          setNewUserData={setNewUserData}
          handleClickModal={modalData.aceptarFn}
          closeModal={closeModal}
          isEditForm={showEditForm} />
      </ModalApp>
    </>
  )
};
export default Admin
