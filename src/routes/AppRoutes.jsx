import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/events" element={} />
      <Route path="/contact" element={} /> */}
    </Routes>
  );
}

export default AppRoutes;
