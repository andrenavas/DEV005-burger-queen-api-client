import {Button} from '../gralComponents/gralComponents';
import Cards from './cards';

const Products = () => {
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