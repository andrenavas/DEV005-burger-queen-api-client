import { Button } from '../gralComponents/gralComponents';
import Card from './card';
import { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';


const Products = ({handleAddProduct}) => {
  const [products, setProducts] = useState([]);
  //use State para almacenar las opciones del tipo de menu
  const [selectedMenu, setSelectedMenu] = useState('')
  const typeMenu = (selectedType) => {
    console.log(selectedType)
    setSelectedMenu(selectedType)
  };
  //const token = localStorage.getItem('accessToken');
  //console.log(token);
  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    fetch('http://localhost:8080/products', {

      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      }
    })
    .then((resp) => resp.json())
    .then((productsData) => {
      setProducts(productsData)
    })
    .catch(error => console.log(error))
  },[]);

return (
  <>
    <div className='container-menu'>
      <div className='container-btn-menu'>
        <Button className="btn btn-primary btn-order" text="Desayuno" onClick={() => typeMenu("Desayuno")}/>
        <Button className="btn btn-primary btn-order" text="Almuerzo/Cena" onClick={() => typeMenu("Almuerzo")}/>
      </div>
      <div className='container-products'>
        {products
        .filter(product => product.type === selectedMenu)
        .map(product => (<Card key={product.id} product={product} handleAddProduct= {handleAddProduct}/>))}
      </div>
    </div>
  </>
)
};

Products.propTypes = {
  handleAddProduct: PropTypes.func,
}
export default Products
