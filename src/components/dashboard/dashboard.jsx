import imagenes from "../../../public/img/imagenes";
import Navbar from "../navbar/navbar";
// fijate en main.jsx como hago las rutas
// aca despues de navbar pone la imagen y listo
// en menos de 30 minutos lo debes tener terminado
// si no lo tienen terminado es porque son unos fracasados
import './dashboard.css'

function Dashboard() {
  return (
    <div class="wrapper">
    <div class="sidebar">
        <h2>Bienvenidos</h2>
        <br />
        <br />
        <ul>
        
            <li>
            <img src={imagenes.grupo} alt="" className="seg" />
                <a href=""><i class="fas fa-home">
              </i>Paciente</a>
              </li>
            <li>
              <img src={imagenes.enf} alt="" className="enfer" />
              <a href="#"><i class="fas fa-user"></i>Enfermero</a>
              </li>
            <li>
              <img src={imagenes.are} alt="" className="area" />
              <a href="#"><i class="fas fa-address-card"></i>Areas</a>
              </li>
            <li>
            <img src={imagenes.lla} alt="" className="llamada" />

              <a href="#"><i class="fas fa-project-diagram">
                </i>Llamadas</a></li>
            <li>
            <img src={imagenes.ale} alt="" className="alerta" />

              <a href="#"><i class="fas fa-blog">
                </i>Alerta</a></li>
            <li>
            <img src={imagenes.es} alt="" className="esta" />

              <a href="#"><i class="fas fa-address-book">
                </i>Estadistica</a></li>
            <li>
            <img src={imagenes.grupo} alt="" className="seg" />

              <a href="#"><i class="fas fa-address-book">
                </i>Informacion</a></li>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        
            <li>
              <img src={imagenes.cer} alt="" className="cerra" />
              <a href="#"><i class="fas fa-map-pin">
                </i>Cerrar sesion</a></li>
        </ul> 
    </div>
    </div>  

    
  )  
}
export default Dashboard;

