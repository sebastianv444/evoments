import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { AiOutlineLoading } from "react-icons/ai";

export default function ButtonBlocker({
  children,
  to = null,
  href = null,
  className,
  onClick = null,
  delay = 280,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const handleAction = () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      if (onClick) {
        onClick();
      } else if (to) {
        navigate(to);
      } else if (href) {
        window.open(href, "_blank");
      }
    }, delay);
  };

  useEffect(() => {
    setLoading(false);
  }, [location.pathname]);

  return (
    <motion.button
      onClick={onClick ?? handleAction}
      disabled={loading}
      whileHover={loading ? {} : { scale: 1.1 }}
      whileTap={loading ? {} : { scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={twMerge(
        `px-5 py-2 3xl:px-6 3xl:py-3 font-semibold rounded-lg transition-colors duration-380 ease-in-out shadow-md`,
        !loading &&
          "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-[0_0_26px_#125EFC] cursor-pointer",
        loading &&
          "bg-gray-400 text-gray-200 cursor-not-allowed flex flex-row gap-2",
        className
      )}
    >
      {loading && <AiOutlineLoading className="animate-spin mr-2 h-5 w-5" />}
      {loading ? "Cargando..." : children}
    </motion.button>
  );
}
