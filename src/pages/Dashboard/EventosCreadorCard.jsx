import ButtonMotion from "@/components/myButtons/ButtonMotion";
import useImageColor from "@/hooks/useImageColor";
import axios from "axios";
import { useState, useEffect } from "react";

function EventosCreadorCard({ event, onAction }) {
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

  const formattedDate = event.fechaEvento
    ? new Date(event.fechaEvento).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })
    : "";

    const manejarAccion = async (id, accion) => {
        try {
          await axios.post(`${import.meta.env.VITE_API_URL}/api/eventos-creadores/cambiarEventocreador`, {
            id,
            accion,
          });
          setEventos(prev => prev.filter(evento => evento.id !== id));
        } catch (err) {
          console.error(err);
        }
      };

  return (
    <div className="w-80 3xl:w-95 4xl:w-115 bg-black/20 rounded-2xl p-4 3xl:p-5 overflow-hidden">
      
      <img
        src={event?.imagen ?? img}
        alt=""
        className="w-full h-40 3xl:h-36 4xl:h-44 object-cover rounded-lg"
      />
      
      <h1
        className="text-black font-bold mt-4 mb-2 text-[20px]"
      >
        {event?.titulo}
      </h1>
      
      <p className="text-white mb-4 text-m">{event.descripcion}</p>
      
      <div className="text-white text-m space-y-1 mb-4">
        <p><strong>Localidad:</strong> {event.venue.localidad }</p>
        <p><strong>Zona:</strong> {event.venue.nombre}</p>
        <p><strong>Ubicación:</strong> {event.venue.direccion}</p>
        <p><strong>Estado: </strong><span className="text-yellow-300">{event.estado}</span></p>
      </div>
      
      <div className="w-full flex justify-between items-center">
        <div className="flex space-x-2">
          <button
            color={`${dominant}`}
            onClick={() => onAction(event.id, 'modificar')}
            className="px-2 py-1  bg-green-700 text-white text-sm rounded hover:bg-green-400"
          >
            Modificar
          </button>
          <button
            onClick={() => onAction(event.id, 'eliminar')}
            className="px-2 py-1 text-sm  bg-red-500 text-white rounded  hover:bg-red-900"
          >
            Eliminar
          </button>
        </div>
        <p
          className="text-white font-semibold text-sm"
          style={{ textShadow: `0 0 11px white` }}
        >
          {formattedDate}
        </p>
      </div>
    </div>
  );
}

export default EventosCreadorCard;