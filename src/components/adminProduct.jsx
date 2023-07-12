import Background from './background';
import NavAdminProducts from './admin/navAdminProducts';
import DashboardProducts from './admin/dashboardProducts';
import { useEffect, useState } from 'react';
import ModalApp from './gralComponents/modal';
import './admin.css';
import FormProducts from './gralComponents/formProducts';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [modalIsOpenId, setModalIsOpenId] = useState(false)

  const token = localStorage.getItem('accessToken');
  //variable que se crea al presionar el boton de chef cuando el pedido está listo
  useEffect(() => {
    function getProducts() {
      fetch('http://localhost:8080/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`,
        }
      })
        .then((resp) => resp.json())
        .then((dataProducts) => {
          // console.log(dataOrders);
          setProducts(dataProducts);
        })
        .catch(error => {
          console.log(error)
        })
    }
    // se ejecuta getOrders una vez para que la primera llamada sea inmediata y no esperar 5 segundos
    getProducts();
    // crear un intervalo, donde va la función que trae la petición fetch y luego el tiempo en milisegundos(5 segundos)
    const intervalId = setInterval(getProducts, 2500)
    //este retorno es opcional del useEffect, evita que se ejecute cuando estoy en otra pantalla o que se pueda duplicar
    return () => {
      clearInterval(intervalId)
    };
  }, [token])
  // //funciones que modifican la data de los trabajadores
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
  // const deleteWorker = (user) => {
  //   console.log('eliminar')
  //   console.log('HOLA', user.id)
  //   fetch(`http://localhost:8080/users/${user.id}`, {

  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'authorization': `Bearer ${token}`,
  //     },

  //   })
  //     .then((resp) => resp.json())
  //     .then((user) => {
  //       updateProductsData(user)
  //     })
  //     .catch(error => console.log(error))

  //   console.log('eliminar')
  // }
  // // Actualizando la lista trabajadores . 
  // const updateProductsData = (user) => {
  //   setProducts(prevProducts => {
  //     return prevProducts.map(worker => {
  //       if (worker.id === user.id) {
  //         return { worker };
  //       }
  //       return worker;
  //     });
  //   });
  // };
  // const [editUserData, setEditUserData] = useState({
  //   email: '',
  //   password: '',
  //   role: ''
  // });

  // const editWorker = (user) => {
  //   console.log('editar', user)
  //   const editWorker = {
  //     email: user.email,
  //     password: user.password,
  //     role: user.role
  //   };
  //   fetch(`http://localhost:8080/users/${user.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'authorization': `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(editWorker),
  //   })
  //     .then(() => {
  //       setEditUserData.email = '',
  //         setEditUserData.password = '',
  //         setEditUserData.role = '',
  //         editUserData.email = '',
  //         editUserData.password = '',
  //         editUserData.role = ''
  //     })

  // }
  const [newProductData, setNewProductData] = useState({
    name: '',
    type: '',
    image: '',
    price: ''
  });
  const addProduct = () => {
    console.log('ADDING Product')
    //elemento a enviar, trabajador
    const newProduct = {
      name: newProductData.name,
      type: newProductData.type,
      image: newProductData.image,
      price: newProductData.price
    };
    fetch('http://localhost:8080/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(newProduct),
    })
      .then(() => {
        setNewProductData.name = '',
        setNewProductData.type = '',
        setNewProductData.image = '',
        setNewProductData.price = '',
        newProductData.name ='',
        newProductData.type ='',
        newProductData.image ='',
        newProductData.price = ''
      })
  }
  const handleAddProduct = () => {
    console.log('Abrir el modal');
    setModalData({
      modalText: '¿Estás seguro que deseas AGREGAR un producto?',
      modalBtnText: 'Agregar'
      // aceptarFn: () => {
      //   addWorker(worker);
      //   closeModal();
      // }
    });
    openModal();
  };
  // const handleEditar = (worker) => {
  //   // setModalText('¿Estás seguro que deseas editar al trabajador?');
  //   // setModalBtnText('Editar');
  //   setNewUserData(worker);
  //   setModalData({
  //     modalText: '¿Estás seguro que deseas editar al trabajador?',
  //     modalBtnText: 'Editar',
  //     aceptarFn: () => {
  //       setNewUserData(worker);
  //       editWorker(worker);
  //       closeModal();
  //     }
  //   });
  //   openModal();
  // };
  // const handleBorrar = (worker) => {
  //   // setModalText('¿Estás seguro que deseas borrar al trabajador?');
  //   // setModalBtnText('Borrar');
  //   setModalData({
  //     modalText: '¿Estás seguro que deseas borrar al trabajador?',
  //     modalBtnText: 'Borrar',
  //     aceptarFn: () => {
  //       deleteWorker(worker)
  //       closeModal();
  //     }
  //   });
  //   openModal();
  // };
  const [showEditForm, setShowEditForm] = useState(true)

  const handleAddEditProduct = (product) => {
    if (showEditForm) {
      editProduct(product);
      closeModal();

    }
    else {
      addProduct();
      closeModal();
    }
  }

  return (
    <>
      <Background />
      <NavAdminProducts />
      <div className='container-dashboard-btnAddWorker'>
        <DashboardProducts
          setShowEditForm={setShowEditForm}
          products={products}
          openModal={openModal}
          closeModal={closeModal}
          modalIsOpen={modalIsOpenId}
          handleAddProduct={handleAddProduct}
          // handleBorrar={handleBorrar}
          // handleEditar={handleEditar}
           />
      </div>
      <ModalApp
        isOpen={modalIsOpenId}
        onRequestClose={closeModal}
        handleClickModal={modalData.aceptarFn}
        text={modalData.modalText}
        textBtn={modalData.modalBtnText}
         >
        <FormProducts
          handleAddEditProduct={handleAddEditProduct}
          newProductData={newProductData}
          setNewProductData={setNewProductData}
          handleClickModal={modalData.aceptarFn}
          closeModal={closeModal}
          isEditForm={showEditForm}
           />
      </ModalApp>
    </>
  )
};
export default AdminProducts
