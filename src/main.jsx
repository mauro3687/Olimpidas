import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/login/login.jsx";
import Dashboard from "./components/dashboard/dashboard.jsx";
// aca creo una constante  y uso las dos librerias no hacen faltan que la instalen solo ponga npm i y listo
const router = createBrowserRouter([
  {
    path: "",
    element: <Login />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
