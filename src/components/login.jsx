import './login.css'
import BQLogo from '../assets/img/BQlogo.png'
import FondoBQIpad from '../assets/img/FondoBQIpad.png'

const Login = () => {
  return (
    <>
      <div style={{backgroundImage: `url(${FondoBQIpad})`,
  backgroundRepeat: 'no-repeat', }}className='container-xl bq-container-height align-items-center'>
        <div className="container container-email-password-logo align-items-center d-flex justify-content-center">
        <div className="row align-items-center container-logo-login">
          <img src={BQLogo} className = "login-logo"/>
          <form>
            <div className="mb-3 ">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                mensaje de error
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
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