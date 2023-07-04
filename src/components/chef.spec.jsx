import {render,waitFor, screen} from '@testing-library/react'
import Chef from './chef'
import { vi } from 'vitest'
import OrderTicket from './chef/orderTicket'

//mockear la dependencias, navigate.
vi.mock('react-router-dom', () => {
    return{useNavigate: vi.fn()}
  })


describe('Chef', () => {
    beforeEach(() => {
      render(<Chef/>);
    });
    it('renders Chef', () => {
    //   screen.debug();
      expect(true).toBe(true)
    });
    // it('test_calculates_minutes_difference', () => {
    //     const order = {
    //         id: 1,
    //         client: 'John Doe',
    //         products: [{ name: 'Hamburger', quantity: 1 }],
    //         status: 'pending',
    //         dataEntry: '12:00:00'
    //     };
    //     const expectedMinutes = 10;
    //     const actualMinutes = Chef().changeStatus(order);
    //     expect(actualMinutes).toEqual(expectedMinutes);
    // });
    
});
describe('orderTicket render', () => {
    beforeEach(() => {
      render(
      <Chef>
        <OrderTicket></OrderTicket>
      </Chef>
      );
    });
    it('renders OrderTicket', () => {
    screen.debug();
      expect(true).toBe(true)
    });
    // it('has a Preparado button', ()=>{
        
    //   const { queryAllByRole } = render (
    //   <Chef>
    //     <OrderTicket/>
    //   </Chef>
    //   );
    
    //   const btnOrderReady = queryAllByRole('button')[0]; // Obtener el primer botón con el rol "button"

    //   expect(btnOrderReady).toBeInTheDocument();
    // });
    it('test_render_component', () => {
        const order = {
            client: 'John Doe',
            products: [
                {quantity: 2, name: 'Product 1'},
                {quantity: 1, name: 'Product 2'}
            ],
            status: 'Pending',
            dataEntry: '2022-01-01 12:00:00',
            dataExit: null
        };
        const changeStatus = vi.fn();
        const showButton = true;
        const text = 'Preparado';
        render(<OrderTicket order={order} changeStatus={changeStatus} showButton={showButton} text={text} />);
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('Product 2')).toBeInTheDocument();
        // expect(screen.getByText('Estado: pending')).toBeInTheDocument();
        // expect(screen.getByText('A cocina: 2022-01-01 12:00:00')).toBeInTheDocument();
        // expect(screen.getByText('Preparado')).toBeInTheDocument();
    });
});
