import { render, screen } from '@testing-library/react'
import Login from './login'
// import Waiter from './waiter'
import { vi } from 'vitest'

//mockear la dependencias, navigate.
vi.mock('react-router-dom', () => {
  return{useNavigate: vi.fn()}
})

describe('Login', () => {
  beforeEach(() => {
    render(<Login/>);
  });
  it('renders Login', () => {
    screen.debug();
    expect(true).toBe(true)
  });
  it('has a button', ()=>{
   const btnSubmitTest = screen.getByRole('button', { name:'Iniciar Sesión'});
   expect(btnSubmitTest).toBeInTheDocument();
  });
  it('has in email input', () =>{
    const inputEmailTest = screen.getByLabelText('Correo electrónico');
    expect(inputEmailTest).toBeInTheDocument();

  });
  it('has in password input', () =>{
    const inputPasswordTest = screen.getByLabelText('Contraseña');
    expect(inputPasswordTest).toBeInTheDocument();

  });
  // it('navigates to waiter page if user has "waiter" role', async () => {
  //   vi.spyOn(localStorage, 'getItem').mockImplementation((key) => {
  //     if (key === 'userRole') {
  //       return 'waiter';
  //     }
  //     return null;
  //   });
  //   fireEvent.change(screen.getByLabelText('Correo electrónico'), {
  //     target: { value: 'test@example.com' },
  //   });
  //   fireEvent.change(screen.getByLabelText('Contraseña'), {
  //     target: { value: 'password123' },
  //   });
  //   fireEvent.click(screen.getByText(/iniciar sesión/i));

  //   await waitFor(() => {
  //     expect(screen.getByText('Mesera/Mesero')).toBeInTheDocument();

  // });
});
  
//});