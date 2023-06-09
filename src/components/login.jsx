import './login.css'
import BQLogo from '../assets/img/BQlogo.png'
import FondoBQIpad from '../assets/img/FondoBQIpad.png'
//import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const Login = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    console.log(data.email)
    console.log(data.password)

    fetch('http://localhost:8080/login', {

      method: 'POST', // or 'PUT'
      body: JSON.stringify({ email: data.email, password: data.password }), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error))

  }
  return (
    <>
      <div style={{
        backgroundImage: `url(${FondoBQIpad})`,
        backgroundRepeat: 'no-repeat',
      }} className='container-xl bq-container-height align-items-center'>

        <div className="container container-email-password-logo align-items-center d-flex justify-content-center">
          <div className="row align-items-center container-logo-login">
            <img src={BQLogo} className="login-logo" />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3 ">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Correo electrónico
                </label>
                <input {...register('email', { required: true, pattern: /^\S+@\S+$/i, message: 'correo invalido' })}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  <span className="text-danger text-small d-block mb-2">
                    {errors?.exampleInputEmail1?.message}
                  </span>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Contraseña
                </label>
                <input {...register('password', { required: true, message: 'correo invalido' })}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className='container-login-button d-flex justify-content-center'>
                <button type="submit" className="btn btn-primary login-button">
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  );
};

export default Login