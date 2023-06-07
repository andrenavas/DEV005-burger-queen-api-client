import './login.css'
const Login = () => {
  return (
    <>
    <form>
  <div className="mb-3">
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
  
  <button type="submit" className="btn btn-primary">
    Iniciar Sesión
  </button>
</form>
    </>
  );
};

export default Login