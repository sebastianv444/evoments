import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Buscador from "@/components/Buscador";
import Section2Content from "./Section2Content";
gsap.registerPlugin(ScrollTrigger);

export default function EventSection2() {
  const triggerRef = useRef(null);
  const maskRef = useRef(null);
  const logoRef = useRef(null);
  const [origin, setOrigin] = useState(null);

  // Esto es para medir el centro de la imagen:
  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      const rect = logoRef.current.getBoundingClientRect();
      const xPct = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
      const yPct = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
      setOrigin({ x: xPct + "%", y: yPct + "%" });
    });
  }, []);

  useLayoutEffect(() => {
    if (!origin) return;

    const el = maskRef.current;
    const logo = logoRef.current;

    el.style.transformOrigin = `${origin.x} ${origin.y}`;
    el.style.scale = 1.5;
    el.style.opacity = 0;

    logo.style.transform = "translate(-50%, -50%) scale(2)";
    logo.style.opacity = 0;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: window,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        pinSpacing: true,
        // markers: true,
      },
    });

    // Animación del contenedor: fade-in + contrae (outside→in)
    tl.to(el, { opacity: 1, duration: 0.2, ease: "none" }, 0).to(
      el,
      { scale: 1, ease: "none" },
      0
    );

    tl.to(logo, { opacity: 1, duration: 0.2, ease: "none" }, 0).to(
      logo,
      { scale: 1, duration: 1, ease: "none" },
      0
    );

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, [origin]);

  return (
    <>
      <section
        ref={triggerRef}
        className="relative h-screen w-full overflow-hidden"
      >
        {/* Máscara full‑screen que se contrae desde el logo */}
        <div ref={maskRef} className="fixed inset-0 bg-[#181a28]">
          <div
            ref={logoRef}
            className="absolute text-white top-[40%] 2xl:top-[45%] 3xl:top-[35%] left-[50%] w-full"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src="/LogosEvoments/LogoEvoments.png"
              alt="Logo Eventos"
              className="mx-auto w-35 2xl:w-50 3xl:w-75"
            />
            <p className="text-[20px] 2xl:text-[27px] font-semibold mb-8 3xl:mb-14 text-center">
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 
              via-cyan-300 to-emerald-400 font-bold"
              >
                V
              </span>
              ive eventos{" "}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 
              via-cyan-300 to-emerald-400 font-bold"
              >
                U
              </span>
              nicos con{" "}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 
              via-cyan-300 to-emerald-400 font-bold"
              >
                E
              </span>
              voments
            </p>
            <div className="flex h-full w-full flex-col items-center justify-center">
              <Buscador className="mb-7 2xl:mb-12 3xl:mb-14" />
              <hr
                className="w-full border-t-[0px] h-[2.5px] bg-gradient-to-r from-indigo-600 
              via-cyan-300 to-emerald-400"
              />
              <br />
              <div className="text-white mb-10 self-start px-8">
                <div className="relative w-32 2xl:w-55">
                  <select
                    className="block appearance-none w-full bg-white text-gray-800 
                    border border-gray-300 hover:border-blue-400 px-4 py-1 2xl:py-2 pr-8
                    rounded-lg shadow-md focus:outline-none focus:ring-2 
                    focus:ring-blue-400 transition"
                    aria-placeholder="Categoria"
                  >
                    <option value="" hidden>
                      Categorias
                    </option>
                    <option value="opcion1">Deportes</option>
                    <option value="opcion2">Conciertos</option>
                    <option value="opcion3">Sociales</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <svg className="fill-current h-5 w-5" viewBox="0 0 20 20">
                      <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section2Content />
    </>
  );
}
