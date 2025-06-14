import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { useUserRole } from "@/context/UserRol.context";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export function StripeDashboardButton({ children, className }) {
  const { getToken, isSignedIn } = useAuth();
  const { user } = useUser();
  const { isCreator } = useUserRole();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!isSignedIn || !isCreator || loading) return;
    setLoading(true);
    try {
      const token = await getToken();
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/stripe/login-link`,
        {
          headers: {
            "x-clerk-user-id": user.id,
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location.href = res.data.url;
    } catch (err) {
      console.error("Error obteniendo Stripe Dashboard link:", err);
      alert("No se pudo abrir Stripe. Intenta de nuevo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  // Si no es creador o no está firmado, no renderizamos nada
  if (!isSignedIn || !isCreator) return null;

  return (
    <motion.button
      to="/"
      className={twMerge(
        `px-5 py-2 3xl:px-6 3xl:py-3 font-semibold  bg-blue-600 text-white rounded-lg 
      hover:bg-blue-700 transition-colors duration-380 ease-in-out 
        cursor-pointer shadow-md hover:shadow-[0_0_26px_#125EFC]`,
        className
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? "Cargando…" : children || "Ver Stripe Dashboard"}
    </motion.button>
  );
}
