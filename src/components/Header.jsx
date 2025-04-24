import { navLinks } from "@/data/dataNavLinks";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "./Mode-toggle";
import { IoMdHome } from "react-icons/io";
import { GrMoney } from "react-icons/gr";
import { MdLocalPhone, MdEditCalendar } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import { motion } from "motion/react";

function Header() {
  return (
    /* Si da Errores quitar el "z-10" de la className del header */
    <motion.header
      className="w-full p-10 fixed flex justify-between items-center z-10
    bg-gray-300/30 backdrop-blur-lg border border-b-white/50 shadow-2xl"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Link to={"/"}>
        <img
          src="/LogosEvoments/LogoEvoments-imagotipo.png"
          alt="Logo del Nav"
          className="w-39  transition duration-300 ease-in-out 
          hover:drop-shadow-[0_0_15px_#18FFFF]"
        />
      </Link>
      <nav className="mt-5 text-white font-semibold">
        <div className="hidden md:block">
          <ul className="flex items-center gap-12">
            {navLinks.map(({ link, title, id }) => (
              <NavLink
                to={link}
                className={({ isActive }) =>
                  isActive
                    ? `bg-zinc-400/50 text-white font-bold rounded-md 
                  py-3 px-6 shadow-xl transition duration-480 ease-linear`
                    : ""
                }
                key={id}
              >
                <li
                  className="hover:text-zinc-100 transition duration-400
                ease-in-out text-[1.059rem]"
                >
                  <div className="flex items-center gap-2 relative right-1">
                    {title === "Home" && <IoMdHome />}
                    {title === "Events" && <MdEditCalendar />}
                    {title === "Prices" && <GrMoney />}
                    {title === "Contact" && <MdLocalPhone />}
                    {title}
                  </div>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </nav>
      <div className={"mt-6 cursor-pointer flex gap-4 items-center"}>
        <Button
          className="bg-linear-to-r/hsl from-indigo-500 to-teal-300 px-5 
          text-[0.920rem] shadow-md hover:shadow-[0_0_22px_#0084D1] 
          transition-shadow duration-320"
          asChild
        >
          <motion.button
            whileTap={{ scale: 0.85 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to={"/login"}>Login</Link>
          </motion.button>
        </Button>
        <ModeToggle />
        {/* Menu Para la interfaz del movil */}
        <MobileMenu
          icons={{
            home: <IoMdHome />,
            events: <MdEditCalendar />,
            prices: <GrMoney />,
            contact: <MdLocalPhone />,
          }}
        />
      </div>
    </motion.header>
  );
}

export default Header;
