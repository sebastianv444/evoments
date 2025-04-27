import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Index";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" /* element={} */ />
      <Route path="/contact" /* element={} */ />
      <Route path="/events" /* element={} */ />
    </Routes>
  );
}

export default AppRoutes;
