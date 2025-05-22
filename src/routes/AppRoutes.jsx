import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Index";
import Login from "@/pages/Login/Login";
import Registro from "@/pages/Registrate/Registro";
import ClerkUserSync from "@/components/ClerkUserSync";
import { PrivateRoute } from "@/components/PrivateRoute";
import Events from "@/pages/Events/Index";
import CreadorEvents from "@/pages/Creador/FormularioCreadorEvents";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrate" element={<Registro />} />
      <Route path="/sync" element={<ClerkUserSync />} />
      <Route path="/creadorEvents" element={<CreadorEvents />} />
      <Route path="/contact" /* element={} */ />
      
      <Route element={<PrivateRoute />}>
        <Route path="/events" element={<Events />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
