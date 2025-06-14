import { Navigate, Outlet } from "react-router-dom";
import { useUserRole } from "../context/UserRol.context";
import { useUser } from "@clerk/clerk-react";

export function CreatorRoute() {
  const { isCreator, isLoading } = useUserRole();
  const { isSignedIn } = useUser();

  if (isLoading) return <p>Cargando permisos…</p>;

  if (!isSignedIn || !isCreator) {
    return setTimeout(()=>{
      return <Navigate to="/" replace />;
    },500)
    
  }

  return <Outlet />;
}
