// src/components/ClerkUserSync.jsx
import { useUser } from "@clerk/clerk-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { postUser } from "@/services/MyAPI/users/requestUsers";
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
        const res = await postUser(
          user.id,
          user.emailAddresses[0].emailAddress,
          user.firstName,
          user.lastName,
          user.phoneNumbers?.[0]?.phoneNumber || null,
          user.username
        );
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
      <div className="inline-block">
        <p className="text-center mt-8 font-bold text-3xl text-white">
          Sincronizando cuenta...
        </p>
        <br />
        <br />
        <Progress value={33} className="text-white bg-white" />
      </div>
    </section>
  );
}
