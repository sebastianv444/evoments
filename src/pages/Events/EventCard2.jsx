import ButtonMotion from "@/components/myButtons/ButtonMotion";
import useImageColor from "@/hooks/useImageColor";

function EventCard2({ event }) {
  const dominant = useImageColor(event?.image);

  return (
    <div className="3xl:w-115 bg-black/20 rounded-2xl 4xl:p-5">
      <img src="/img-events/eventsBackgroundSection2.jpg" alt="" />
      <h1
        className="text-white font-bold mt-4 mb-2 text-[20px]"
        style={
          dominant ? { color: dominant, textShadow: `0 0 9px ${dominant}` } : {}
        }
      >
        {event?.title}
      </h1>
      <p className="text-white mb-6">{event?.descripcion}</p>
      <div className="w-full flex justify-between items-center">
        <ButtonMotion className="4xl:px-3 4xl:py-2.5">
          comprar entradas
        </ButtonMotion>
        <p
          className="text-white font-semibold"
          style={{ textShadow: `0 0 11px white` }}
        >
          {event?.fecha}
        </p>
      </div>
    </div>
  );
}

export default EventCard2;
