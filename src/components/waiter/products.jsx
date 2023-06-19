import {Button} from '../gralComponents/gralComponents';
import Cards from './cards';

const Products = () => {
  const token = localStorage.getItem('accessToken');
  console.log(token);
  // const showProducts = (data) => {
    fetch('http://localhost:8080/products', {

    method: 'GET',  
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
    }
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log('Esta es la data:', data);
    })
  // }


  return (
    <>
    <div className='container-menu'>
      <div className='container-btn-menu'>
      <Button className ="btn btn-primary btn-order"  text="Desayuno"/>
      <Button className ="btn btn-primary btn-order"  text="Almuerzo/Cena"/>
      </div>
      <div className='container-products'>
      <Cards/>
      </div>
    </div>
    </>
  )
};
export default Products