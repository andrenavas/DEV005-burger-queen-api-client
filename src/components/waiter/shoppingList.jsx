import PropTypes from 'prop-types';
import { Button } from '../gralComponents/gralComponents';

const ShoppingList = ({selectedProducts, totalPrice, reduceProduct}) => {


  return (
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cant</th>
              <td>Total</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {selectedProducts.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${item.quantity * item.price}</td>
                <td>{<Button onClick={() => reduceProduct(item)} text="x"/>}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
        <tr>
          <td colSpan={3} align="center">Total a pagar</td>
          <td>${totalPrice}</td>
        </tr>
      </tfoot>
        </table>
      );
    };
    ShoppingList.propTypes = {
      selectedProducts: PropTypes.array,
      totalPrice: PropTypes.number,
      reduceProduct: PropTypes.func
    }





// // const ShoppingList = ({ products }) => {
// //   const listProducts = products.map((clientFood)=>
// //   <li>{clientFood.name}</li>);

// //   return(
// //     <>
// //     <ul>{listProducts}</ul>
// //     </>
// //   )
// // };

// const ShoppingList = ({ products }) => {
//   // const [allProducts, setAllProducts] = useState([]);
//   // const [total, setTotal] = useState(0);
//   // const [countProducts, setCountProducts] = useState(second);



//   // const [total, setTotal] = useState(0);

//   // useEffect (() => {
//   //   // crear variable temporal
//   //   // revisar si el item existe

//   // },[products])
//   // hashmap, keys, si la key exite, modificamos el quantuty, sino, se agrega la key nueva.

//   //   products.forEach((product) => {
//   //   const existingItem = shoppingItems.find((item) => item.name === product.name);
//   //   if (existingItem) {
//   //     existingItem.quantity += 1;
//   //   } else {
//   //     shoppingItems.push({
//   //       name: product.name,
//   //       price: product.price,
//   //       quantity: 1,
//   //     });
//   //   }
//   // });

//   // let total = 0;

//   // shoppingItems.forEach((item) => {
//   //   total += item.price * item.quantity;
    
//   // });


//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Producto</th>
//           <th>Precio</th>
//           <th>Cantidad</th>
//           <td>Total</td>
//         </tr>
//       </thead>
//       <tbody>
//         {shoppingItems.map((item, index) => (
//           <tr key={index}>
//             <td>{item.name}</td>
//             <td>{item.price}</td>
//             <td>{item.quantity}</td>
//             <td>{item.quantity * item.price}</td>
//           </tr>
//         ))}
//       </tbody>
//       <tfoot>
//     <tr>
//       <td colSpan={3} align="center">Total a pagar</td>
//       <td>{total}</td>
//     </tr>
//   </tfoot>
//     </table>
//   );
// };


export default ShoppingList