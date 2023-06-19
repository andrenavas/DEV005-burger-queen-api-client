import {Button} from '../gralComponents/gralComponents';
const Card = (products) => {
  return(
    <>
    <div className="card-product">
      <div className="product-name" >{products.name}
      </div>
      <div className="product-image">
        <img className ="product-img" src = {products.image}/>
      </div>
      <div className="container-price-btnAdd">
        <div className="product-price">{products.price}</div>
        <div className="container-btn-add">
          {/* Falta agregar el onClick */}
        <Button className ="btn-add" text="Agregar"/>
        </div>
      </div>
    </div>
    </>
  )
};
export default Card