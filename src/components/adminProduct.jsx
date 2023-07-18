import Background from './background';
import NavAdminProducts from './admin/navAdminProducts';
import DashboardProducts from './admin/dashboardProducts';
import { useEffect, useState } from 'react';
import ModalApp from './gralComponents/modal';
import './admin.css';
import FormProducts from './gralComponents/formProducts';
import { useNavigate } from 'react-router-dom';

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
  const deleteProduct = (product) => {
    console.log('eliminar')
    console.log('HOLA', product.id)
    fetch(`http://localhost:8080/products/${product.id}`, {

      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      },

    })
      .then((resp) => resp.json())
      .then((product) => {
        updateProductsData(product)
      })
      .catch(error => console.log(error))

    console.log('eliminar')
  }
  // Actualizando la lista trabajadores . 
  const updateProductsData = (item) => {
    setProducts(prevProducts => {
      return prevProducts.map(product => {
        if (product.id === item.id) {
          return {product};
        }
        return product;
      });
    });
  };
  const [editProductData, setEditProductData] = useState({
    name: '',
    type: '',
    image: '',
    price: '',
  });

  const editProduct = (product) => {
    console.log('editar', product)
    const editProduct = {
      name: product.name,
      type: product.type,
      image:product.image,
      price: product.price,
     
    };
    fetch(`http://localhost:8080/products/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(editProduct),
    })
      .then(() => {
        // setEditProductData.name = '',
        // setEditProductData.type = '',
        // setEditProductData.image = '',
        // setEditProductData.price = '',
        // editProductData.name = '',
        // editProductData.type = '',
        // editProductData.image ='',
        // editProductData.price = ''
      })

  }
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
        setNewProductData({
          name: '',
          type: '',
          image: '',
          price: ''
        });
      })
  }
  const handleAddProduct = () => {
    console.log('Abrir el modal');
    setNewProductData({
      name: '',
      type: '',
      image: '',
      price: ''
    });
    setModalData({
      modalText: '¿Estás seguro que deseas AGREGAR un producto?',
      modalBtnText: 'Agregar'
    });
    openModal();
  };
  const handleEditProduct = (product) => {
    // setModalText('¿Estás seguro que deseas editar al trabajador?');
    // setModalBtnText('Editar');
    setNewProductData(product);
    setModalData({
      modalText: '¿Estás seguro que deseas EDITAR el producto?',
      modalBtnText: 'Editar',
      aceptarFn: () => {
        setNewProductData(product);
        editProduct(product);
        closeModal();
      }
    });
    openModal();
  };
  const handleDeleteProduct = (product) => {
    // setModalText('¿Estás seguro que deseas borrar al trabajador?');
    // setModalBtnText('Borrar');
    setModalData({
      modalText: '¿Estás seguro que deseas BORRAR el producto?',
      modalBtnText: 'Borrar',
      aceptarFn: () => {
        deleteProduct(product)
        closeModal();
      }
    });
    openModal();
  };
  const [showEditForm, setShowEditForm] = useState(true)

  const handleAddEditProduct = (product) => {
    if (showEditForm) {
      editProduct(product);
      closeModal();
      setEditProductData({
        name: '',
        type: '',
        image: '',
        price: ''
      });

    }
    else {
      addProduct();
      closeModal();
      setNewProductData({
        name: '',
        type: '',
        image: '',
        price: ''
      });
    }
  }
  const navigateTo = useNavigate();
  const workersView = () => {
    navigateTo('/admin');
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
          handleDeleteProduct={handleDeleteProduct}
          handleEditProduct={handleEditProduct}
          workersView = {workersView}
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
