import ButtonMotion from "@/components/myButtons/ButtonMotion";
import useImageColor from "@/hooks/useImageColor";
import { useState, useEffect } from "react";

function EventCard2({ event }) {
  const [img, setImg] = useState();

  useEffect(() => {
    if (event?.imagen == null) {
      switch (event?.categoria) {
        case "DEPORTE":
          setImg("/img-events/categoria-deporte.jpg");
          break;
        case "CONCIERTO":
          setImg("/img-events/categoria-concierto.jpg");
          break;
        case "SOCIAL":
          setImg("/img-events/categoria-social.jpg");
          break;
        case "CORPORATIVO":
          setImg("/img-events/categoria-corporativa.jpg");
          break;
        case "EDUCATIVO":
          setImg("/img-events/categoria-educativa.jpg");
          break;
        case "OTROS":
          setImg("/img-events/categoria-otros.jpg");
          break;
        default:
          setImg(undefined);
          break;
      }
    } else {
      setImg(undefined);
    }
  }, [event]);

  const dominant = useImageColor(event?.imagen ?? img);

  const formattedDate = event?.fechaEvento
    ? new Date(event.fechaEvento).toLocaleDateString("es-ES")
    : "";

  return (
    <div className="3xl:w-95 4xl:w-115 bg-black/20 rounded-2xl p-4 3xl:p-5">
      <img
        src={event?.imagen ?? img}
        alt=""
        className="w-full 3xl:h-40 4xl:h-61"
      />
      <h1
        className="text-white font-bold mt-4 mb-2 text-[18px]"
        style={
          dominant ? { color: dominant, textShadow: `0 0 9px ${dominant}` } : {}
        }
      >
        {event?.titulo}
      </h1>
      <p className="text-white mb-6">{event?.descripcion}</p>
      <div className="w-full flex justify-between items-center">
        <ButtonMotion
          to={"/entrada-event"}
          color={`${dominant}`}
          event={event}
          img={img}
          className="px-1.5 text-[15px] md:text-[16px] py-1.5 3xl:px-2 3xl:py-2 4xl:px-3 4xl:py-2.5 "
        >
          comprar entradas
        </ButtonMotion>
        <p
          className="text-white font-semibold"
          style={{ textShadow: `0 0 11px white` }}
        >
          {formattedDate}
        </p>
      </div>
    </div>
  );
}

export default EventCard2;
