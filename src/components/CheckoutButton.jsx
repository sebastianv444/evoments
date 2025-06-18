import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import EvoApi from "@/services/MyAPI/EvoApi";
import { useUser } from "@clerk/clerk-react";

export default function CheckoutButton({
  eventId,
  items,
  className,
  disabled,
}) {
  const { user } = useUser();

  const handleClick = async () => {
    try {
      const { data } = await EvoApi.post(
        "/api/stripe/create-checkout-session",
        { eventId, items },
        { headers: { "x-clerk-user-id": user.id } }
      );
      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      alert("Error al procesar el pago");
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={disabled}
      className={twMerge(
        `px-5 py-2 font-semibold bg-green-500 text-white rounded-lg
         hover:bg-green-600 transition-colors duration-300 ease-in-out
         disabled:opacity-50 disabled:cursor-not-allowed`,
        className
      )}
      whileHover={!disabled ? { scale: 1.1 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{ type: "spring", stiffness: 300 }}
    >
      Pagar
    </motion.button>
  );
}