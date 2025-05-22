import { Navigate, Outlet } from "react-router-dom";
import {
  useAuth,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";

export function PrivateRoute() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <div>Cargando...</div>;
  }

  return isSignedIn ? (
    <Outlet /> // Renderiza las rutas hijas
  ) : (
    <Navigate to="/login" replace />
  );
}
