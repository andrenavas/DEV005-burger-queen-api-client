import './login.css'
import BQLogo from '../assets/img/BQlogo.png'
import FondoBQIpad from '../assets/img/FondoBQIpad.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { register, handleSubmit, reset } = useForm();
  // fn que permite el ruteado dentro de la interfaz
  const navigateTo = useNavigate();
  // información del usuario que ingresa almacena a través localStorage
  const token = localStorage.getItem('accessToken');
  const userId = localStorage.getItem('userId');
  const userEmail = localStorage.getItem('userEmail');
  const userRole = localStorage.getItem('userRole');
  // fn que envía el formulario a la api
  const onSubmit = (data) => {
    // console.log(data)
    // console.log(data.email)
    // console.log(data.password)

    fetch('http://localhost:8080/login', {

      method: 'POST',
      body: JSON.stringify({ email: data.email, password: data.password }), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(await response.json());
      })
      .then((data) => {
        if (data.user.role === 'waiter' || data.user.role === 'admin') {
          navigateTo('/waiter');
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('userEmail', data.user.email);
          localStorage.setItem('userRole', data.user.role);
          localStorage.setItem('userId', data.user.id);

          console.log('EL TOKEN', token);
          console.log('EL MAIL', userEmail);
          console.log('EL ROL', userRole);
          console.log('userId', userId);
        }

        if (data.user.role === 'chef') {
          navigateTo('/chef');
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('userEmail', data.user.email);
          localStorage.setItem('userRole', data.user.role);
          localStorage.setItem('userId', data.user.id);

          //  console.log('EL TOKEN CHEF', token);
          //  console.log('EL MAIL CHEF', userEmail);
          //  console.log('EL ROL CHEF', userRole);
          //  console.log('userId CHEF', userId);
        }
        if (data.user.role === 'admin') {
          navigateTo('/admin');
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('userEmail', data.user.email);
          localStorage.setItem('userRole', data.user.role);
          localStorage.setItem('userId', data.user.id);

          //  console.log('EL TOKEN ADMIN', token);
          //  console.log('EL MAIL ADMIN', userEmail);
          //  console.log('EL ROL ADMIN', userRole);
          //  console.log('userId ADMIN', userId);
        }

      })
      .catch((error) => {
        if (error.message === 'Cannot find user') {
          error.message = 'Usuario no existe';
        } else if (error.message === 'Incorrect password') {
          error.message = 'Contraseña incorrecta';
        } else {
          error.message = 'Credenciales incorrectas, ponte en contacto con el administrador'
        }
        setErrorMessage(error.message);
        reset();
      })
  }
  return (
    <>
      <section style={{ backgroundImage: `url(${FondoBQIpad})`, backgroundRepeat: 'no-repeat', }}
        className='container-xl bq-container-height align-items-center'>
        <div className='container container-email-password-logo align-items-center d-flex justify-content-center'>
          <div className='row align-items-center container-logo-login'>
            <img src={BQLogo} className='login-logo' alt='Burger Queen Logo' />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-3'>
                <label htmlFor='inputEmail' className='form-label'>
                  Correo electrónico
                </label>
                <input {...register('email', { required: 'Este campo es requerido', pattern: { value: /^\S+@\S+$/i, message: 'Correo electrónico inválido' } })}
                  type='email'
                  className='form-control'
                  id='inputEmail'
                  aria-describedby='emailHelp'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='inputPassword' className='form-label'>
                  Contraseña
                </label>
                <input {...register('password', { required: 'Este campo es requerido' })}
                  type='password'
                  className='form-control'
                  id='inputPassword'
                />
                {errorMessage ? (<div className='error-message'>{errorMessage}</div>) : ''}
              </div>
              <div className='container-login-button d-flex justify-content-center'>
                <button type='submit' className='login-button all'>
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login