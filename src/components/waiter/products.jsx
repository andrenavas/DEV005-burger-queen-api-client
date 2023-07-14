import { Button } from '../gralComponents/gralComponents';
import Card from './card';
import { useState, useCallback } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getProducts } from '../gralComponents/apiRequest';

const Products = ({ handleAddProduct }) => {
  const [products, setProducts] = useState([]);
  //use State para almacenar las opciones del tipo de menu
  const [selectedMenu, setSelectedMenu] = useState('Desayuno')
  const [getProductsRequestStatus, setGetProductsRequestStatus] = useState('loading')
  const typeMenu = (selectedType) => {
    console.log('BUTTON CLICK', selectedType)
    setSelectedMenu(selectedType)
  };
  const getProductsContainerTestId = useCallback(() => {
    if (selectedMenu === 'Desayuno') return 'products_breakfast_container'
    return 'products_lunch_container'
  }, [selectedMenu])

  useEffect(() => {
    getProducts(setGetProductsRequestStatus, setProducts);
  }, []);

  return (
    <>
      <div className='container-menu'>
        <div className='container-btn-menu'>
          <Button dataTestid={'btn_breakfast'} className="btn btn-order all" text="Desayuno" onClick={() => typeMenu("Desayuno")} />
          <Button dataTestid={'btn_lunch'} className="btn btn-order all" text="Almuerzo/Cena" onClick={() => typeMenu("Almuerzo")} />
        </div>
        {getProductsRequestStatus === 'loading' ? <span>Cargando...</span> : null}
        {getProductsRequestStatus === 'success' && products.length ? (
          <div className='container-products' data-testid={getProductsContainerTestId()}>
            {products
              .filter(product => product.type === selectedMenu)
              .map(product => (<Card key={product.id} product={product} handleAddProduct={handleAddProduct} />))
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
