import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import EvoApi from "@/services/MyAPI/EvoApi";


export function AdminRoute() {
  const { user, isLoaded, isSignedIn } = useUser();

  const [isAdmin, setIsAdmin] = useState(null); 

  useEffect(() => {
    const checkAdmin = async () => {
      if (!user) return;
      const identificaccion = user.id;
      try {
        const email = user.primaryEmailAddress?.emailAddress;
        console.log("Este es el gmail del usuario que esta registrado", email);

        const res = await EvoApi.post(`/api/admin/comprobacionAdmin`, {
          identificaccion,
        });

        setIsAdmin(res.data?.isAdmin); 
      } catch (err) {
        console.error("Error al verificar admin:", err);
        setIsAdmin(false);
      }
    };

    checkAdmin();
  }, []);

  console.log("IsAdmin",isAdmin);

  if (!isLoaded) return <p>Cargando usuario…</p>;

  if (isAdmin === null) return <p>Verificando permisos…</p>;

  if (!isSignedIn || !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}