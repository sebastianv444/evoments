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
import { UserButton, useSession } from "@clerk/clerk-react";

function MobileMenu({ icons }) {
  const { isLoaded, isSignedIn } = useSession();
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
                  {title === "Home" && icons.home}
                  {title === "Events" && icons.events}
                  {title === "Prices" && icons.prices}
                  {title === "Contact" && icons.contact}
                  {title}
                </div>
              </NavLink>
            </li>
          ))}
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
              {isSignedIn && isLoaded ? (
                <UserButton />
              ) : (
                <div className="flex items-center gap-2">
                  <IoMdLogIn />
                  <p>Sign Up</p>
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
                  <p>Sign In</p>
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
