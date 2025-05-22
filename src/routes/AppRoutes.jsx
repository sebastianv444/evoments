import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Index";
import Login from "@/pages/Login/Login";
import Registro from "@/pages/Registrate/Registro";
import ClerkUserSync from '@/components/ClerkUserSync';
import CreadorEvents from "@/pages/Creador/FormularioCreadorEvents";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>}  />
      <Route path="/registrate" element={<Registro/>}  />
      <Route path="/sync" element={<ClerkUserSync />} />
      <Route path="/creadorEvents" element={<CreadorEvents />} />
      <Route path="/contact" /* element={} */ />
      <Route path="/events" /* element={} */ />
    </Routes>
  );
}

export default AppRoutes;
