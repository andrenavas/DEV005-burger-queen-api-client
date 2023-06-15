import { render, screen } from '@testing-library/react'
import Login from './login'
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
  // it('should navigate to waiter', () => {
  //   const btnSubmitTest = screen.getByRole('button', { name: 'Iniciar Sesión' });
    

  // })
  
});
