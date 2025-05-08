// src/components/ClerkUserSync.jsx
import { useUser } from "@clerk/clerk-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ClerkUserSync() {
  const { user } = useUser();
  const hasSynced = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || hasSynced.current) return;
    hasSynced.current = true;

    // Configurar axios para enviar cookies de sesión y usar la URL base
    axios.defaults.withCredentials = true;

    (async () => {
      try {
        await axios.post(`http://localhost:4000/api/users/sync`, {
          clerkId: user.id,
          email: user.emailAddresses[0].emailAddress,
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumbers?.[0]?.phoneNumber || null,
        });
        console.log("Usuario sincronizado con éxito");
      } catch (err) {
        console.error("Error sincronizando usuario:", err);
      } finally {
        // Tras sincronizar, redirigir a la página principal
        navigate("/", { replace: true });
      }
    })();
  }, [user, navigate]);

  return (
    <p className="text-center mt-8 font-semibold text-3xl">
      Sincronizando cuenta...
    </p>
  );
}
