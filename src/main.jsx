import "./main.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/login/login.jsx";
import Dashboard from "./components/dashboard/dashboard.jsx";
import Pacientes from "./components/pacientes/pacientes.jsx";
import Llamadas from "./components/llamadas/llamadas";
import Enfermeros from "./components/enfermeros/enfermeros";
import Areas from "./components/areas/areas";
// aca creo una constante  y uso las dos librerias no hacen faltan que la instalen solo ponga npm i y listo
const router = createBrowserRouter([
  {
    path: "",
    element:(
      <>
        <div className="container_completo">
        <div className="container_dash">
          <Dashboard />
        </div>
        <div className="container_page">
        <Login />
        </div>
        </div>
      </>
    ) 

  },
  {
    path: "/pacientes",
    element:(
      <>
        <div className="container_completo">
          <div className="container_dash">
            <Dashboard />
          </div>
          <div className="container_page">
            <Pacientes />
          </div>
        </div>
      </>
    )

  },
  {
    path: "/enfermeros",
    element:(
      <>
        <div className="container_completo">
          <div className="container_dash">
            <Dashboard />
          </div>
          <div className="container_page">
            <Enfermeros />
          </div>
        </div>
      </>
    )
      
  },
  {
    path: "/llamadas",
    element:(
      <>
        <div className="container_completo">
          <div className="container_dash">
            <Dashboard />
          </div>
          <div className="container_page">
            <Llamadas />
          </div>
        </div>
      </>
    )
      
  },
  {
    path: "/areas",
    element:(
      <>
        <div className="container_completo">
          <div className="container_dash">
            <Dashboard />
          </div>
          <div className="container_page">
            <Areas />
          </div>
        </div>
      </>
    )
      
  },

]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
