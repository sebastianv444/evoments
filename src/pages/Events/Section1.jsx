import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoIosArrowDown } from "react-icons/io";
import { useSession } from "@clerk/clerk-react";
import { useUserRole } from "@/context/UserRol.context";

gsap.registerPlugin(ScrollTrigger);

export default function EventSection1() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(imageRef.current, {
      scale: 1.2, // zoom-out ligero
      opacity: 0, // fade-out
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="fixed h-screen w-full overflow-hidden bg-cover 
      bg-top-left bg-[url(/img-events/eventsBackgroundSection1.jpg)] flex 
      justify-center md:pt-70 3xl:pt-80"
    >
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <div className="z-10 flex justify-center items-center flex-col">
        <div className="flex justify-center items-center">
          <h1
            className="text-[78px] md:text-6xl 2xl:text-[138px] 3xl:text-[200px] 
            4xl:text-[235px] font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-indigo-600 via-cyan-300 to-emerald-400 relative 
            left-40 2xl:left-53 3xl:left-78 4xl:left-93 2xl:bottom-46 3xl:bottom-46 -rotate-11"
          >
            EVENTOS
          </h1>
          <img
            src="/img-events/personaje-events.png"
            alt="imagen personaje section 1 de events"
            className="z-10 w-80 2xl:w-110 3xl:w-150 4xl:w-185 relative right-39 
            2xl:right-72 3xl:right-103 4xl:right-123 2xl:bottom-45 3xl:bottom-53"
          />
        </div>
        <div
          className="bg-gradient-to-r from-indigo-600 to-emerald-500 py-2 px-3 3xl:px-6 
        transform -skew-x-10 relative top-16 2xl:-top-30 3xl:-top-37 4xl:bottom-34 4xl:-top-36"
        >
          <p className="text-white text-[18px] 3xl:text-[22px] font-semibold transform skew-x-10">
            Disfrutá y Crea
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center text-white">
        <IoIosArrowDown className="text-[45px] animate-bounce text-[#008afc]" />
      </div>
    </section>
  );
}
