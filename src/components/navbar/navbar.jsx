import "./navbar.css";
function Navbar() {
  // les dejo este navbar para que lo terminen asi directamente traer el navbar si lo necesitan
  // React se basa en programacion en componente osea lo podes hacer por capaz
  // para traerlo directamente ponente <Navbar/> osea el nombre de la funcion
  // fijate en Dashboard como traigoa navbar
  // y Dashboard hay tenes que agregar las otras cosas que no sean en navbar
  // mejora el navbar y termina el Dashboard
  return (
    <div className="nav m-5">
      <nav className=" nav  d-flex justify-content-around align-items-center">
        <ul class="navbar-nav">
          <div className="row">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Home
              </a>
            </li>
          </div>
          <div className="row">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Paciente
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Emfermero
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Area
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Llamadas
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Alerta
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Estadistica
              </a>
            </li>
            <div className="row">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Cerra sesion
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Informacion
                </a>
              </li>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
