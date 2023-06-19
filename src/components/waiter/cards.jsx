import {Button} from '../gralComponents/gralComponents';
const Cards = () => {
  return(
    <>
    <div className="card-product">
      <div className="product-name"> Hamburguesa Simple
        {/* <h1 className="product-title">Hamburguesa Simple</h1> */}
      </div>
      <div className="product-image"></div>
      <div className="container-price-btnAdd">
        <div className="product-price">$10</div>
        <div className="container-btn-add">
          {/* Falta agregar el onClick */}
        <Button className ="btn-add" text="Agregar"/>
        </div>
      </div>
    </div>
    </>
  )
};
export default Cards