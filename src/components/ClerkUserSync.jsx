// src/components/ClerkUserSync.jsx
import { useUser } from "@clerk/clerk-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Progress } from "@/components/ui/progress";

export default function ClerkUserSync() {
  const { user } = useUser();
  const hasSynced = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || hasSynced.current) return;
    hasSynced.current = true;

    (async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/users/sync`,
          {
            clerkId: user.id,
            email: user.emailAddresses[0].emailAddress,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumbers?.[0]?.phoneNumber || null,
            username: user.username,
          }
        );
        console.log(user.username);
        console.log("Usuario sincronizado con éxito");
        console.log(res.data);
      } catch (err) {
        console.error("Error sincronizando usuario:", err);
      } finally {
        // Tras sincronizar, redirigir a la página principal
        navigate("/", { replace: true });
      }
    })();
  }, [user, navigate]);

  return (
    <section className="w-full h-screen flex items-center justify-center bg-blue-950">
      <p className="text-center mt-8 font-bold text-3xl">
        Sincronizando cuenta...
      </p>
      <Progress value={33} />
    </section>
  );
}
