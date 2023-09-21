import imagenes from "../../../public/img/imagenes";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Menú lateral */}
        <div className="col-md-2 col-sm-12 bg-nav text-white">
          <nav className="nav flex-column mt-5">
            <h4 className="mb-4">Menú</h4>
            <div className="col">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-black" href="#">
                    <img
                      src={imagenes.logo}
                      alt="Icono"
                      className="icono-menu"
                    />
                    Bienvenidos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-black" href="/">
                    <img
                      src={imagenes.hom}
                      alt="Icono"
                      className="icono-menu"
                    />
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-black" href="/pacientes">
                    <img
                      src={imagenes.grupo}
                      alt="Icono"
                      className="icono-menu"
                    />
                    Paciente
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-black" href="/enfermeros">
                    <img
                      src={imagenes.enf}
                      alt="Icono"
                      className="icono-menu"
                    />
                    Enfermero
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-black" href="/areas">
                    <img
                      src={imagenes.are}
                      alt="Icono"
                      className="icono-menu"
                    />
                    Área
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-black" href="/llamadas">
                    <img
                      src={imagenes.lla}
                      alt="Icono"
                      className="icono-menu"
                    />
                    Llamadas
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-black" href="#">
                    <img
                      src={imagenes.ale}
                      alt="Icono"
                      className="icono-menu"
                    />
                    Alerta
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-black" href="#">
                    <img
                      src={imagenes.cer}
                      alt="Icono"
                      className="icono-menu"
                    />
                    Cerrar Sesión
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-black" href="#">
                    <img
                      src={imagenes.es}
                      alt="Icono"
                      className="icono-menu"
                    />
                    Estadísticas
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
