import { render, screen, fireEvent, waitFor} from '@testing-library/react'
import Login from './login'
// import Waiter from './waiter'
import { vi } from 'vitest'

//mockear la dependencias, navigate.
vi.mock('react-router-dom', () => {
  return{useNavigate: vi.fn()}
})

describe('Login', () => {
  // beforeEach(() => {
  //   render(<Login/>);
  // });
  it('renders Login', () => {
    render(<Login/>)
    screen.debug();
    expect(true).toBe(true)
  });
  it('has a button', ()=>{
    render(<Login/>)
    const btnSubmitTest = screen.getByRole('button', { name:'Iniciar Sesión'});
    expect(btnSubmitTest).toBeInTheDocument();
  });
  it('has in email input', () =>{
    render(<Login/>)
    const inputEmailTest = screen.getByLabelText('Correo electrónico');
    expect(inputEmailTest).toBeInTheDocument();

  });
  it('has in password input', () =>{
    render(<Login/>)
    const inputPasswordTest = screen.getByLabelText('Contraseña');
    expect(inputPasswordTest).toBeInTheDocument();

  });
  it('test_incorrect_email_or_password', async () => {

    //Aquí falta mockear
    const { getByLabelText, getByText } = render(<Login />);
    const emailInput = getByLabelText('Correo electrónico');
    const passwordInput = getByLabelText('Contraseña');
    const submitButton = getByText('Iniciar Sesión');

    fireEvent.change(emailInput, { target: { value: 'waiter2@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    await waitFor(() => expect(screen.getByText('Usuario no existe')).toBeInTheDocument());
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