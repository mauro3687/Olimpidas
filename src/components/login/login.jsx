import imagenes from "../../../public/img/imagenes";
import "./login.css";
import { useTranslation } from "react-i18next";

function Login() {
  return (
    <div className="container fondo">
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

            <form action="">
              <div className="col-lg-12 d-flex justify-content-center ">
                <h1 className="title">Login</h1>
              </div>
              <div className="col-lg-12 d-flex justify-content-center mb-4">
                <Compone placeholder="Username" type="text" />
              </div>
              <div className="col-lg-12 d-flex justify-content-center mb-2">
                <Compone placeholder="Password" type="password" />
              </div>
              <div className="col-lg-12 d-flex justify-content-center mb-2">
                <button className="btn btn-primary boton">Listo</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;

const Compone = (props) => {
  return (
    <div>
      <input
        type={props.type}
        className="campos-login"
        placeholder={props.placeholder}
      />
    </div>
  );
};
