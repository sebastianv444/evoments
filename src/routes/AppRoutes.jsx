import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Index";
import Login from "@/pages/Login/Login";
import Registro from "@/pages/Registrate/Registro";
import ClerkUserSync from "@/components/ClerkUserSync";
import { PrivateRoute } from "@/routes/PrivateRoute";
import Events from "@/pages/Events/Index";
import IndexCreador from "@/pages/Creador/indexCreador";
import CreadorPage from "@/pages/Creador/Creador";
import { CreatorRoute } from "@/routes/CreatorRoute";
import DashboardLayout from "@/pages/Dashboard/DashboardLayout";
import DashboardStripe from "@/pages/Dashboard/DashboardStripe";
import DashboardHome from "@/pages/Dashboard/DashboardHome";
import DashboardMisEventos from "@/pages/Dashboard/DashboardMisEventos";
import IndexCrearEventos from "@/pages/CrearEvents/IndexCrearEventos";
import Contacto from "@/pages/Contacto/contacto";
import Entradas from "@/pages/Entradas";
import Success from "@/pages/Entradas/Success";
import Admin from "@/pages/Admin/admin";
import { AdminRoute } from "./AdminRoute";



function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrate" element={<Registro />} />
      <Route path="/sync" element={<ClerkUserSync />} />
      <Route path="/contact" element={<Contacto />} /> 

      <Route element={<PrivateRoute />}>
        <Route path="/events" element={<Events />} />
        <Route path="/creadorEvents" element={<IndexCreador />} />
        <Route path="/creador" element={<CreadorPage />} />
        <Route path="/entrada-event" element={<Entradas />} />

        <Route element={<CreatorRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="historial-pagos" element={<DashboardStripe />} />
            <Route path="mis-eventos" element={<DashboardMisEventos />} />
          </Route>
          <Route path="/crear-evento" element={<IndexCrearEventos />} />
        </Route>

        <Route path="/success" element={<Success />} />

        <Route element={<AdminRoute/>}>
          <Route path="/admin" element={<Admin/>}/>
        </Route>
        
      </Route>
    </Routes>
  );
}

export default AppRoutes;
