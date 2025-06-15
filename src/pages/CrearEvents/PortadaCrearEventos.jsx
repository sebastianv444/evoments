import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { Typewriter } from "react-simple-typewriter";
import { IoIosArrowDown } from "react-icons/io";

export function PortadaCrearEventos() {
  return (
    <div className="h-140 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className="text-4xl font-bold md:text-[39px] 3xl:text-6xl z-20">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-20% to-cyan-400">
          <Typewriter
            words={["Crea tu evento"]}
            typeSpeed={40}
            cursor={false}
          />
        </span>
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Crea el mejor evento de todos
      </p>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center text-white">
        <IoIosArrowDown className="text-[45px] animate-bounce text-[#008afc]" />
      </div>
    </div>
  );
}
