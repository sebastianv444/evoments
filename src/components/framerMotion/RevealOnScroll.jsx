import { motion } from "framer-motion";
import { fadeInUp } from "./MotionVariants";

export default function RevealOnScroll({
  children,
  variant = fadeInUp,
  amount = 0.3,
  once = true,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variant}
    >
      {children}
    </motion.div>
  );
}
