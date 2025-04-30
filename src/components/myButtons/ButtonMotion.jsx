import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function ButtonMotion({ children, to = false, href = false, className }) {
  const navigate = useNavigate();
  const handleClick = () => {
    setTimeout(() => {
      if (to) navigate(`${to}`);
      else if (href) window.open(href);
    }, 280);
  };
  return (
    <motion.button
      to="/"
      className={twMerge(
        `px-6 py-3 font-semibold  bg-blue-600 text-white rounded-lg 
      hover:bg-blue-700 transition-colors duration-380 ease-in-out 
        cursor-pointer shadow-md hover:shadow-[0_0_26px_#125EFC]`,
        className
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={handleClick}
    >
      {children}
    </motion.button>
  );
}

export default ButtonMotion;
