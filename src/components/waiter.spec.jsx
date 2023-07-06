import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Waiter from './waiter'
import { vi } from 'vitest'
import Card from './waiter/card'
// import reduceProduct from './waiter'
// import sendOrder from './waiter'
// import deleteProduct from './waiter'
import ShoppingCart from './waiter/shoppingCart'
import handleAddProduct from './waiter'
// import Products from './waiter/products'

const user = userEvent.setup()
global.fetch = () => Promise.resolve ({json:()=>[{
  "id": 1,
  "name": "Jugos de fruta natural",
  "price": 700,
  "image": "https://img.freepik.com/foto-gratis/delicioso-vaso-jugo-naranja_144627-16582.jpg?w=740&t=st=1687371270~exp=1687371870~hmac=2d060f477ac0d1235e3194870d4b838b9eb36e8cb71a3ca5d49ad6f9200e7901",
  "type": "Desayuno",
  "quantity": 1
}, 
{
  "id": 2,
  "name": "Coca Cola",
  "price": 700,
  "image": "https://img.freepik.com/foto-gratis/delicioso-vaso-jugo-naranja_144627-16582.jpg?w=740&t=st=1687371270~exp=1687371870~hmac=2d060f477ac0d1235e3194870d4b838b9eb36e8cb71a3ca5d49ad6f9200e7901",
  "type": "Almuerzo",
  "quantity": 1
}]});
//mockear la dependencias, navigate.
vi.mock('react-router-dom', () => {
  return{useNavigate: vi.fn()}
})
describe('Waiter', () => {
    // beforeEach(() => {
    //   // render(<Waiter/>);
    // });
    it('renders Waiter', () => {
    //   screen.debug();
      render(<Waiter/>)
      expect(true).toBe(true)
    });
    it('renders NavWaiter', () => {
      render(<Waiter/>)
      const ordersIcon = screen.getByAltText('orders icon');
      expect(ordersIcon).toBeInTheDocument();

    });
});
  
describe('render Card component', () => {
  beforeEach(() => {
    //Given
    render(<Waiter/>)
  });
  it('render CardComponent', () => {
    screen.debug();
    expect(true).toBe(true)
  })
  it('renders a Card with', () => {
    const product = {
      "id": 1,
      "name": "Jugos de fruta natural",
      "price": 700,
      "image": "https://img.freepik.com/foto-gratis/delicioso-vaso-jugo-naranja_144627-16582.jpg?w=740&t=st=1687371270~exp=1687371870~hmac=2d060f477ac0d1235e3194870d4b838b9eb36e8cb71a3ca5d49ad6f9200e7901",
      "type": "Desayuno",
      "quantity": 1
  }
    render(<Card product={product} />)
    screen.debug();
    const productName = screen.getByText('Jugos de fruta natural')
    expect(productName).toBeInTheDocument()
  }) 
  it('should add product to order', async () => {
    const user = userEvent.setup()
    //render waiter, click en add, aparece en shoppingCart
    // GIVEN: los productos se hayan renderizado
    await waitFor(() => {
      screen.getByTestId('products_breakfast_container')
    })

    const btnAdd = screen.getByTestId('btn_add')
    user.click(btnAdd)
    screen.debug();
    const product = screen.getByText('Jugos de fruta natural');
    expect(product).toBeInTheDocument();
  })
  it('should show lunch products', async () => {
    //render waiter, click en desayuno, click en add, aparece en shoppingCart
    // GIVEN: los productos se hayan renderizado
    await waitFor(() => {
      screen.getByTestId('products_breakfast_container')
    })
    // WHEN: click en desayunos
    const btnAlmuerzo = screen.getByTestId('btn_lunch')
    await user.click(btnAlmuerzo)
    await waitFor(() => {
      expect(screen.getByTestId('products_lunch_container')).not.toBe(null)
    })
    screen.debug();
  })
  it('test_add_product_new_product', async () => {
    const selectedProduct = [{
        id: 1,
        price: 10,
        name: 'Product 1'
    }];
    await waitFor(() => {
      screen.getByTestId('products_breakfast_container')
    })
    const { getByText } = render(<ShoppingCart selectedProducts={selectedProduct} totalPrice={0} handleAddProduct={() => {handleAddProduct}} />);
    const btnAdd = screen.getByTestId('btn_add')
    user.click(btnAdd)
    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('$10')).toBeInTheDocument();
  });
});