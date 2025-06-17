import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { IoMdLogIn } from "react-icons/io";
import { navLinks } from "@/data/dataNavLinks";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useSession } from "@clerk/clerk-react";
import { useUserRole } from "@/context/UserRol.context";
import { TbLayoutDashboardFilled } from "react-icons/tb";

function MobileMenu({ icons }) {
  const { isLoaded, isSignedIn } = useSession();
  const { isCreator } = useUserRole();

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu className="w-6 h-6 text-white" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px]">
        <SheetHeader>
          <SheetTitle className="text-left text-lg font-semibold">
            Menú
          </SheetTitle>
          <SheetDescription>evoments</SheetDescription>
        </SheetHeader>
        <ul>
          {navLinks.map(({ link, title, id }, index) => (
            <li
              key={id}
              className="hover:text-zinc-400 transition duration-400 
                ease-in-out text-[1.070rem] mx-7 my-9"
            >
              <NavLink
                to={link}
                className={({ isActive }) => (isActive ? "text-zinc-400" : "")}
              >
                <div className="flex items-center gap-2">
                  {title === "Inicio" && icons.inicio}
                  {title === "Eventos" && icons.eventos}
                  {title === "Contacto" && icons.contacto}
                  {title}
                </div>
              </NavLink>
            </li>
          ))}
          {isSignedIn && isCreator && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "text-zinc-400" : "")}
            >
              <li
                className="hover:text-zinc-400 transition duration-400 
                ease-in-out text-[1.070rem] mx-7 my-9"
              >
                <div className="flex items-center gap-2">
                  <TbLayoutDashboardFilled />
                  Dashboard
                </div>
              </li>
            </NavLink>
          )}
          <li
            className="hover:text-zinc-400 transition duration-400 
                ease-in-out text-[1.070rem] mx-7 my-9"
          >
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive ? "text-zinc-400 flex" : ""
              }
            >
              {isSignedIn && isLoaded ? null : (
                <div className="flex items-center gap-2">
                  <IoMdLogIn />
                  <p>Login</p>
                </div>
              )}
            </NavLink>
          </li>
          <li
            className="hover:text-zinc-400 transition duration-400 
                ease-in-out text-[1.070rem] mx-7 my-9"
          >
            <NavLink
              to={"/registrate"}
              className={({ isActive }) =>
                isActive ? "text-zinc-400 flex" : ""
              }
            >
              {!isSignedIn && isLoaded ? (
                <div className="flex items-center gap-2">
                  <HiOutlinePencilSquare />
                  <p>Registro</p>
                </div>
              ) : null}
            </NavLink>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
