import { useState } from "react";
import EventCard2 from "./EventCard2";
import { useEffect } from "react";
import RevealOnScroll from "@/components/framerMotion/RevealOnScroll";

function Section2Content({ events }) {
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (events?.length === 0) {
      setErr(true);
    } else {
      setErr(false);
    }
  }, [events]);

  return (
    <section
      className="relative -mt-[305px] 2xl:-mt-[250px] 3xl:-mt-[408px] 4xl:-mt-[550px] 
        overflow-hidden z-50 w-full bg-[#181a28] py-5 px-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 4xl:grid-cols-5 4xl:gap-6 4xl:pl-3">
        {events
          ?.filter((e) => e.estado === "ACTIVO")
          .map((e) => (
            <RevealOnScroll once={false} amount={0.2} key={e.id}>
              <EventCard2 event={e} />
            </RevealOnScroll>
          ))}
      </div>
      {err && (
        <h1 className="text-white text-2xl font-semibold text-center pt-20">
          Evento no encontrado :c
        </h1>
      )}
    </section>
  );
}

export default Section2Content;
