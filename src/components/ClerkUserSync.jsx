import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ClerkUserSync() {
  const { getToken } = useAuth();
  const { user } = useUser();
  const hasSynced = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !hasSynced.current) {
      hasSynced.current = true;
      (async () => {
        try {
          const token = await getToken();
          await axios.post(
            `http://localhost:4000/api/users/sync`,
            {
              clerkId: user.id,
              email: user.emailAddresses[0].emailAddress,
              firstName: user.firstName,
              lastName: user.lastName,
              phoneNumber: user.phoneNumbers?.[0]?.phoneNumber || null,
            },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          console.log("Usuario sincronizado con éxito");
        } catch (err) {
          console.error("Error sincronizando usuario:", err);
        } finally {
          navigate("/", { replace: true });
        }
      })();
    }
  }, [user, getToken, navigate]);

  return (
    <p className="text-center mt-8 font-semibold text-3xl">
      Sincronizando cuenta...
    </p>
  );
}
