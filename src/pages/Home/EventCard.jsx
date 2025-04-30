import React from "react";
import useImageColor from "@/hooks/useImageColor";
import ButtonMotion from "@/components/myButtons/ButtonMotion";

export default function EventCard({ event }) {
  const dominant = useImageColor(event.image);

  return (
    <div
      className="h-172 bg-black/50 backdrop-blur-lg shadow-lg/50 md:shadow-xl/50 
      overflow-hidden flex flex-col"
    >
      <img
        src={event.image}
        alt={event.name}
        className="w-full mask-b-from-70% mask-b-to-100%"
      />
      <div className="mt-8 mx-8 flex-grow flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-[18px] md:text-[22px] transition-colors duration-300">
            {event.name}
          </h2>
          <h4
            className="font-semibold text-[16px] md:text-[17px]"
            style={dominant ? { color: dominant, textShadow: `0 0 9px ${dominant}` } : {}}
          >
            {event.attractions[0]}
          </h4>
          <p className="md:mb-10 mt-2 md:mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            nostrum et quidem esse odio ipsam vel est rem accusantium veritatis
            sequi nobis obcaecati, blanditiis id reiciendis autem officia, eos
            vitae.
          </p>
        </div>
        <div className="flex justify-center flex-col">
          <h4 className="text-gray-300 text-end mb-3">
            {event.venues[0].city} - {event.venues[0].address}
          </h4>
          <ButtonMotion
            className="mb-8 "
            href={event.url}
          >
            Comprar Entradas
          </ButtonMotion>
        </div>
      </div>
    </div>
  );
}
