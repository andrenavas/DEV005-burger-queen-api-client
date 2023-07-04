import {render, screen} from '@testing-library/react'
import Waiter from './waiter'
import { vi } from 'vitest'
import Card from './waiter/card'
// import reduceProduct from './waiter'
// import sendOrder from './waiter'
// import deleteProduct from './waiter'
import handleAddProduct from './waiter'
import Products from './waiter/products'


//mockear la dependencias, navigate.
vi.mock('react-router-dom', () => {
  return{useNavigate: vi.fn()}
})
describe('Waiter', () => {
    beforeEach(() => {
      render(<Waiter/>);
    });
    it('renders Waiter', () => {
    //   screen.debug();
      expect(true).toBe(true)
    });
    it('renders NavWaiter', () => {
      const ordersIcon = screen.getByAltText('orders icon');
      expect(ordersIcon).toBeInTheDocument();

    });
    it('btn add exist', () =>{
      const product = { id: 1, name: 'Agua 500 ml'};
      const { queryAllByRole } = render (
      <Waiter>
        <Products/>
          <Card key={product.id} product={product} handleAddProduct= {handleAddProduct}/>
      </Waiter>
      );
    
      const addButton = queryAllByRole('button')[0]; // Obtener el primer botón con el rol "button"

      expect(addButton).toBeInTheDocument();

    });
    describe('render Card component', () => {
      beforeEach(() => {
        render(<Waiter><Products><Card/></Products></Waiter>)
      });
      it('rendes CardComponent', () => {
        expect(true).toBe(true)
      })
      it('renders a Card with', () => {
          const product = {
            name: 'Test Product',
            image: 'test-image.jpg',
            price: 10
        }
        render(<Card product={product} />)
        const productName = screen.getByText('Test Product')
        // const productImage = screen.getByRole('img')
        expect(productName).toBeInTheDocument()
        // expect(productImage).toBeInTheDocument()

      })
    });

    // it('test_delete_product', () => {
    //     const selectedProducts = useState([]);
    //     const totalPrice = useState(0);
    //     const productToDelete = selectedProducts[0];
    //     const initialLength = selectedProducts.length;
    //     const initialPrice = totalPrice;
    //     deleteProduct(productToDelete);
    //     expect(selectedProducts).toHaveLength(initialLength - 1);
    //     expect(totalPrice).toBe(initialPrice - productToDelete.price);
    // });

    // it('test_add_product_new', () => {
    //     const selectedProduct = {id: 1, name: 'Product 1', price: 10, quantity: 1};
    //     const {getByText} = render(<ShoppingCart selectedProducts={[]} totalPrice={0} handleAddProduct={handleAddProduct} />);
    //     fireEvent.click(getByText('Add to cart'));
    //     expect(getByText('Product 1')).toBeInTheDocument();
    //     expect(getByText('$10.00')).toBeInTheDocument();
    // });

    // it('should handle adding a product to the shopping cart', () => {
    //     // Arrange
    //     const { getByTestId } = render(<Waiter />);
    //     const addButton = getByTestId('btn-add');
    //     const selectedProduct = { id: 1, price: 10 };
    //     fireEvent.click(addButton);
    //     expect(getByText(selectedProduct.name)).toBeInTheDocument();
    // });

    // it('test_reduce_product_quantity_by_1', () => {
    //     const productToDelete = {id: 1, quantity: 2, price: 10};
    //     // const selectedProducts = [
    //     //     {id: 1, quantity: 2, price: 10},
    //     //     {id: 2, quantity: 1, price: 5}
    //     // ];
    //     const setTotalPrice = vi.fn();
    //     const setSelectedProducts = vi.fn();
    //     const deleteProduct = vi.fn();
    //     reduceProduct(productToDelete);
    //     expect(setSelectedProducts).toHaveBeenCalledWith([
    //         {id: 1, quantity: 1, price: 10},
    //         {id: 2, quantity: 1, price: 5}
    //     ]);
    //     expect(setTotalPrice).toHaveBeenCalledWith(10);
    //     expect(deleteProduct).not.toHaveBeenCalled();
    // });

    // it('test_delete_product_null', () => {
    //     const productToDelete = null;
    //     const selectedProducts = [
    //         {id: 1, price: 10},
    //         {id: 2, price: 20}
    //     ];
    //     const setTotalPrice = vi.fn();
    //     const setSelectedProducts = vi.fn();
    //     deleteProduct(productToDelete);
    //     expect(setTotalPrice).not.toHaveBeenCalled();
    //     expect(setSelectedProducts).not.toHaveBeenCalled();
    // });

    // it('add a product', () =>{
    //   const product = { id: 1, name: 'Agua 500 ml'};
    //   render (
    //     <Waiter>
    //       <Products/>
    //       <Card key={product.id} product={product} handleAddProduct= {handleAddProduct}/>
    //     </Waiter>
    //   )
    //   const btnAdd = screen.getByLabelText('add-button');
      
    //   fireEvent.click(btnAdd);
        
    //   expect(getByText(product.name)).toBeInTheDocument();

    // });
    // it('handleAddProduct is called when the add button is clicked', () => {
    //   const product = {
    //     id: 1,
    //     name: 'Product 1',
    //     image: 'product1.jpg',
    //     price: 10,
    //   };
    //   const handleAddProductMock = vi.fn();
      
    //   const { queryAllByRole } = render(<Waiter handleAddProduct={handleAddProductMock} />);

    //   const addButton = queryAllByRole('button')[0]; // Obtener el primer botón con el rol "button"
    
    //   fireEvent.click(addButton);
    
    //   expect(handleAddProductMock).toHaveBeenCalledTimes(1);
    //   expect(handleAddProductMock).toHaveBeenCalledWith(product);
    //   expect(handleAddProductMock(product)).toEqual([
    //     ...selectedProducts,
    //     product,
    //   ]);
    // });

    // it('handleAddProduct is called when the add button is clicked', () => {
    //   const product = {
    //     id: 1,
    //     name: 'Product 1',
    //     image: 'product1.jpg',
    //     price: 10,
    //   };
    
    //   // Definir el arreglo selectedProducts
    //   const selectedProducts = [];
    
    //   // Mockear setSelectedProducts
    //   const setSelectedProductsMock = vi.fn().mockImplementation(products => {
    //     selectedProducts.push(...products);
    //   });
    
    //   const handleAddProductMock = vi.fn().mockImplementation(selectedProduct => {
    //     if (selectedProducts.find(item => item.id === selectedProduct.id)) {
    //       const newProducts = selectedProducts.map(item =>
    //         item.id === selectedProduct.id
    //           ? { ...item, quantity: item.quantity + 1 }
    //           : item
    //       );
    //       setSelectedProductsMock(newProducts);
    //     } else {
    //       setSelectedProductsMock([...selectedProducts, selectedProduct]);
    //     }
    //   });
    
    //   const { queryAllByRole } = render (
    //   <Waiter>
    //     <Products/>
    //       <Card key={product.id} product={product} handleAddProduct= {handleAddProductMock}/>
    //   </Waiter>
    //   );
    
    //   const addButton = queryAllByRole('button')[0]; // Obtener el primer botón con el rol "button"
    //   fireEvent.click(addButton);
    
    //   // expect(handleAddProductMock).toHaveBeenCall
    //   // expect(handleAddProductMock).toHaveBeenCalledTimes(1);edWith(product);
    //   // expect(setSelectedProductsMock).toHaveBeenCalledTimes(1);
    //   // expect(setSelectedProductsMock).toHaveBeenCalledWith([product]);
    //   expect(selectedProducts).toEqual([product]);
    // });

    // it('handleAddProduct should add product to selectedProducts and update totalPrice', async () => {
    //   const { queryAllByRole } = render (
    //       <Waiter setSelectedProducts={setSelectedProductsMock} setTotalPrice={setTotalPriceMock}>
    //         <Products/>
    //           <Card />
    //       </Waiter>
    //       );
        
    //       const addButton = queryAllByRole('button')[0]; // Obtener el primer botón con el rol "button"
  


    //   const productToAdd = { id: '1', price: 100 };
  
     
  
    //   // Hacer clic en el botón
    //   fireEvent.click(addButton)
  
    //   // setSelectedProducts debería haberse llamado con el nuevo producto
    //   expect(setSelectedProductsMock).toHaveBeenCalledWith(expect.arrayContaining([productToAdd]))
  
    //   // setTotalPrice debería haberse llamado con el precio del nuevo producto
    //   expect(setTotalPriceMock).toHaveBeenCalledWith(productToAdd.price)
    // })
});