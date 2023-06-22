const ShoppingList = ({ products }) => {
  const shoppingItems = [];

  products.forEach((product) => {
    const existingItem = shoppingItems.find((item) => item.name === product.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      shoppingItems.push({
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }
  });

  let total = 0;

  shoppingItems.forEach((item) => {
    total += item.price * item.quantity;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <td>Total</td>
        </tr>
      </thead>
      <tbody>
        {shoppingItems.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.quantity * item.price}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
    <tr>
      <td colSpan={3} align="center">Total a pagar</td>
      <td>{total}</td>
    </tr>
  </tfoot>
    </table>
  );
};


export default ShoppingList