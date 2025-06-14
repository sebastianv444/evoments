import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Index";
import Login from "@/pages/Login/Login";
import Registro from "@/pages/Registrate/Registro";
import ClerkUserSync from "@/components/ClerkUserSync";
import { PrivateRoute } from "@/components/PrivateRoute";
import Events from "@/pages/Events/Index";
import IndexCreador from "@/pages/Creador/indexCreador";
import IndexCrearEventos from "@/pages/CrearEvents/IndexCrearEventos";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrate" element={<Registro />} />
      <Route path="/sync" element={<ClerkUserSync />} />
      
      <Route path="/contact" /* element={} */ />
      
      <Route element={<PrivateRoute />}>
        <Route path="/events" element={<Events />} />
        <Route path="/creadorEvents" element={<IndexCreador />} /> 
        <Route path="/crearEvents" element={<IndexCrearEventos />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
