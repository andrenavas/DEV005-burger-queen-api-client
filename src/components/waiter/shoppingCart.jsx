import Card from './card';
const ShoppingCart = ({clientProducts}) => {
  return(
    <>
    <div className='container-menu'>
      <div className='container-products'>
        {clientProducts.map(product => (<Card key={product.id} product={product} />))}
      </div>
    </div>
  </>
  )

};

// const ShoppingCart = ({selectedProducts, handleAddProduct, products}) => {
//   return(
//     <>
//     <div className='container-order'>
//       <h1>soy el carro</h1>
//       <Card selectedProducts={selectedProducts} handleAddProduct= {handleAddProduct} />

//     </div>
//     </>
//   )

// };
export default ShoppingCart