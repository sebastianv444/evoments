import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Buscador from "@/components/Buscador";
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
            className="absolute text-white top-[33%] left-[50%] w-full"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src="/LogosEvoments/LogoEvoments.png"
              alt="Logo Eventos"
              className="mx-auto w-75"
            />
            <p className="text-[27px] font-semibold mb-14 text-center">
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
              <Buscador className="mb-14" />
              <hr
                className="w-full border-t-[0px] h-[2.5px] bg-gradient-to-r from-indigo-600 
              via-cyan-300 to-emerald-400"
              />
              <br />
              <p className="text-white text-3xl">Saludos!</p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full bg-[#181a28] ">
        <div className="p-8 text-white">
          <h2>Contenido adicional</h2>
          <p>Este contenido tendrá scroll normal</p>
        </div>
      </section>
    </>
  );
}
