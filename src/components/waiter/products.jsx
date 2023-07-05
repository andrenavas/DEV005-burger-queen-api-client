import { Button } from '../gralComponents/gralComponents';
import Card from './card';
import { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getProducts } from '../gralComponents/apiRequest';

const Products = ({ handleAddProduct }) => {
  const [products, setProducts] = useState([]);
  //use State para almacenar las opciones del tipo de menu
  const [selectedMenu, setSelectedMenu] = useState('')
  const [getProductsRequestStatus, setGetProductsRequestStatus] = useState('loading')
  const typeMenu = (selectedType) => {
    // console.log(selectedType)
    setSelectedMenu(selectedType)
  };
  //const token = localStorage.getItem('accessToken');
  //console.log(token);
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    getProducts(token, setGetProductsRequestStatus, setProducts);
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lc2Vyb0BidXJnZXJxdWVlbi5jb20iLCJpYXQiOjE2ODg1MTEwNjMsImV4cCI6MTY4ODUxNDY2Mywic3ViIjoiMyJ9.z7yn9iegtMvr6rB7FrWUI5hjRClyaWqhyxkOtZHzgVM'
    // const getProducts = () => {
    //   fetch('http://localhost:8080/products', {

    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'authorization': `Bearer ${token}`,
    //   }
    // })
    //   .then((resp) => resp.json())
    //   .then((productsData) => {
    //     setGetProductsRequestStatus('success')

    //     if (productsData && Array.isArray(productsData)) {
    //       setProducts(productsData)
    //     }
    //   })
    //   .catch(error => {
    //     setGetProductsRequestStatus('error')
    //     console.log(error)
    //   })
    // }

    

  }, []);

  return (
    <>
      <div className='container-menu'>
        <div className='container-btn-menu'>
          <Button dataTestid={'btn_breakfast'} className="btn btn-primary btn-order" text="Desayuno" onClick={() => typeMenu("Desayuno")} />
          <Button className="btn btn-primary btn-order" text="Almuerzo/Cena" onClick={() => typeMenu("Almuerzo")} />
        </div>
        {getProductsRequestStatus === 'loading' ? <span>Cargando...</span> : null }
        {getProductsRequestStatus === 'success' && products.length ? (
          <div className='container-products' data-testid={'container_products'}>
            {products
              .filter(product => product.type === selectedMenu)
              .map(product => (<Card key={product.id} product={product} handleAddProduct={handleAddProduct}/>))
            }
          </div>
        ) : null}
      </div>
    </>
  )

};

Products.propTypes = {
  handleAddProduct: PropTypes.func,
}
export default Products
