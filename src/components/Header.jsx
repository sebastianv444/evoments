import { navLinks } from "@/data/dataNavLinks";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { IoMdHome } from "react-icons/io";
import { GrMoney } from "react-icons/gr";
import { MdLocalPhone, MdEditCalendar } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import { motion } from "motion/react";
import { UserButton, useSession } from "@clerk/clerk-react";
import { useUserRole } from "../context/UserRol.context";
import { TbLayoutDashboardFilled } from "react-icons/tb";


function Header() {
  const { isLoaded, isSignedIn } = useSession();
  const { isCreator } = useUserRole();

  return (
    /* Si da Errores quitar el "z-10" de la className del header */
    <motion.header
      className="w-full p-7 3xl:p-10 fixed flex justify-between items-center z-30
    bg-gray-300/30 backdrop-blur-lg border-b border-b-white/50 shadow-2xl"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Link to={"/"}>
        <img
          src="/LogosEvoments/LogoEvoments-imagotipo.png"
          alt="Logo del Nav"
          className="w-31 mt-3 md:mt-0 2xl:w-34 3xl:w-39 transition duration-300 ease-in-out 
          hover:drop-shadow-[0_0_15px_#18FFFF]"
        />
      </Link>
      <nav className="mt-5 text-white font-semibold">
        <div className="hidden lg:block">
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
                ease-in-out 3xl:text-[1.059rem]"
                >
                  <div className="flex items-center gap-2 relative right-1">
                    {title === "Inicio" && <IoMdHome />}
                    {title === "Eventos" && <MdEditCalendar />}
                    {title === "Contacto" && <MdLocalPhone />}
                    {title}
                  </div>
                </li>
              </NavLink>
            ))}
            {isSignedIn && isCreator && (
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? `bg-zinc-400/50 text-white font-bold rounded-md 
                  py-3 px-6 shadow-xl transition duration-480 ease-linear`
                    : ""
                }
              >
                <li
                  className="hover:text-zinc-100 transition duration-400
                ease-in-out 3xl:text-[1.059rem]"
                >
                  <div className="flex items-center gap-2 relative right-1">
                    <TbLayoutDashboardFilled />
                    Dashboard
                  </div>
                </li>
              </NavLink>
            )}
          </ul>
        </div>
      </nav>
      <div className={"mt-6 cursor-pointer flex gap-4 items-center"}>
        {isSignedIn && isLoaded ? (
          <UserButton />
        ) : (
          <Link to={"/registrate"}>
            <Button
              className="bg-linear-to-r/hsl from-indigo-500 to-teal-300 px-5 
          text-[0.920rem] shadow-md hover:shadow-[0_0_22px_#0084D1] 
          transition-shadow duration-320 hidden md:block"
              asChild
            >
              <motion.button
                whileTap={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Registro
              </motion.button>
            </Button>
          </Link>
        )}
        {!isSignedIn && isLoaded ? (
          <Link to={"/login"}>
            <Button
              className="bg-transparent text-[0.920rem] shadow-md hover:shadow-[0_0_22px_#0084D1] 
         transition-shadow duration-320 hidden md:block border-2 border-cyan-500/80 px-5 hover:bg-transparent"
              asChild
            >
              <motion.button
                whileTap={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="relative bottom-0.5">Login</span>
              </motion.button>
            </Button>
          </Link>
        ) : null}

        {/* Menu Para la interfaz del movil */}
        <MobileMenu
          icons={{
            inicio: <IoMdHome />,
            eventos: <MdEditCalendar />,
            contacto: <MdLocalPhone />,
          }}
        />
      </div>
    </motion.header>
  );
}

export default Header;
