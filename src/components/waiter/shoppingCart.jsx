import Card from './card';
import ShoppingList from './shoppingList';

const ShoppingCart = ({clientProducts}) => {
  // console.log(clientProducts[0].name)
  return(
    <>
    <div className='container-order'>  
      <div className='container-shopping-list'>
        <ShoppingList products = {clientProducts}/>
   
    
      </div>
    </div>
  </>
  )

};


export default ShoppingCart