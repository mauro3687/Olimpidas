import imagenes from "../../../public/img/imagenes";
import "./login.css";

function Login() {
  return (
    <div className="container fondo ">
      <div className="row d-flex justify-content-start">
        <div className="col-lg-4 fondo2">
          <div className="col-lg-12">
            <img src={imagenes.logo} alt="" className="logo" />
          </div>
        </div>

        <div className="col-lg-8 ">
          <div className="row ">
            <div className="col-lg-12 d-flex justify-content-center">
              <img src={imagenes.logo} alt="" className="logo-derecho" />
            </div>
            <div className="col-lg-12 d-flex justify-content-center">
              <h1>Login</h1>
            </div>
            <div className="col-lg-12 d-flex justify-content-center">
              <input type="text" />
            </div>
            <div className="col-lg-12 d-flex justify-content-center">
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
