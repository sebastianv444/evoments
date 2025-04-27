import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Index";
import Login from "@/pages/Login/Login";
import Registro from "@/pages/Registrate/Registro";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>}  />
      <Route path="/registrate" element={<Registro/>}  />
      <Route path="/contact" /* element={} */ />
      <Route path="/events" /* element={} */ />
    </Routes>
  );
}

export default AppRoutes;
